import gql from 'graphql-tag';

// const UserLoginInput = gql`
//   input UserLoginInput {
//     emailAddress: String!
//     password: String!
//   }
// `;
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
      }
      accessToken {
        token
        tokenType
      }
    }
  }
`;
