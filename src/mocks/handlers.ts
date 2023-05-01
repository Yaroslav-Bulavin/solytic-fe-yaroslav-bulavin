import { graphql } from 'msw';
import { db } from '@/mocks/db';

const apiToken = process.env.VUE_APP_TOKEN;
const apiTokenType = process.env.VUE_APP_TOKEN_TYPE;

export const handlers = [
  // Handles a "Login" mutation
  graphql.mutation('LoginUser', (req, res, ctx) => {
    const { email, password } = req.variables;
    const matchedUser = db.users.find((x) => x.email === email && x.password === password);

    const accessToken = {
      token: apiToken,
      tokenType: apiTokenType,
    };

    if (matchedUser) {
      sessionStorage.setItem('userId', matchedUser.id);
      sessionStorage.setItem('jwt', JSON.stringify(accessToken));
    }

    return res(
      ctx.data({
        user: {
          id: matchedUser?.id,
        },
        accessToken,
      }),
    );
  }),
];
