import gql from 'graphql-tag'

/**
 * Query for test the obtaining of all user atributtes
 *
 * @returns {UserObject} an object containing:
 *                   `id`
 *                   `login`
 *                   `totalRepos`
 *                   of the token passed
**/
const user = gql`
query {
    me {
      id,
      login,
      totalRepos
    }
  }
`;

/**
 * Query for test the obtaining of one user atributter
 *
 * @returns {UserObject} an object containing:
 *                   `login`
 *                   of the token passed
**/
const userLogin = gql`
query {
    me {
        login
    }
}
`

/**
 * Query for test the obtaining of two user atributtes
 *
 * @returns {UserObject} an object containing:
 *                   `login`
 *                   `totalRepos`
 *                   of the token passed
**/
const userLoginTotalRepos = gql`
query {
    me {
        login,
        totalRepos
    }
}
`
export {
    user,
    userLogin,
    userLoginTotalRepos
}
