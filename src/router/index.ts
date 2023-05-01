import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import UserDetailsView from '@/views/UserDetailsView.vue';
import LoginView from '@/views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/user-details',
    name: 'user-details',
    component: UserDetailsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isLoggedIn = !!(sessionStorage.getItem('userId') && JSON.parse(sessionStorage.getItem('jwt') as string).token);

  if (to.name !== 'login' && !isLoggedIn) next({ name: 'login' });
  else next();
});

export default router;
