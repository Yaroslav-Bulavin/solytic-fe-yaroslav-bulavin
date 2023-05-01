import { graphql } from 'msw';
import { db } from '@/mocks/db';

const apiToken = '51195a5f-6fb7-415b';
const apiTokenType = 'Bearer';

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
          id: matchedUser.id,
        },
        accessToken,
      }),
    );
  }),
];
