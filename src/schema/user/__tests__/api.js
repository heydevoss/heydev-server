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
        id
        login
        name
        location
        bio
        email
        websiteUrl
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
 * Query for test the obtaining the `name` from User
 *
 * @returns {UserObject} an object containing:
 *                   `name`
 *                   of the token passed
**/
const userName = gql`
query {
    me {
        name
    }
}
`

/**
 * Query for test the obtaining `location` from User
 *
 * @returns {UserObject} an object containing:
 *                   `location`
 *                   of the token passed
**/
const userLocation = gql`
query {
    me {
        location
    }
}
`

/**
 * Query for test the obtaining `bio` from User
 *
 * @returns {UserObject} an object containing:
 *                   `bio`
 *                   of the token passed
**/
const userBio = gql`
query {
    me {
        bio
    }
}
`

/**
 * Query for test the obtaining `email` from User
 *
 * @returns {UserObject} an object containing:
 *                   `email`
 *                   of the token passed
**/
const userEmail = gql`
query {
    me {
        email
    }
}
`

/**
 * Query for test the obtaining `websiteUrl` from User
 *
 * @returns {UserObject} an object containing:
 *                   `websiteUrl`
 *                   of the token passed
**/
const userWebsiteUrl = gql`
query {
    me {
        websiteUrl
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
    userName,
    userLocation,
    userBio,
    userEmail,
    userWebsiteUrl,
    userLoginTotalRepos
}
