import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { worker } from './mocks/browser';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3020/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(store).use(router).mount('#app');
