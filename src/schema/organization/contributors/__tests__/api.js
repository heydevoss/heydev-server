import gql from 'graphql-tag'

/**
 * Query for test the obtaining the first contributor from organization specified
 * with all fields inside contributors
 *
 * @returns {OrganizationObject} an object containing:
 *                   `contributors`
 *                   of the token passed
**/
const contributorsFirstOne = gql`
    query getContributors {
        organization {
            contributors(first: 1) {
                id
                login
                name
                email
                websiteUrl
                location
                bio
            }
        }
    }
`;

/**
 * Query for test the obtaining the first contributor from organization specified
 * with only the `id` field inside contributors
 *
 * @returns {OrganizationObject} an object containing:
 *                   `contributors`
 *                   of the token passed
**/
const contributorsFirstOneID = gql`
    query getContributors {
        organization {
            contributors(first: 1) {
                id
            }
        }
    }
`;

/**
 * Query for test the obtaining the first contributor from organization specified
 * with only the `login` field inside contributors
 *
 * @returns {OrganizationObject} an object containing:
 *                   `contributors`
 *                   of the token passed
**/
const contributorsFirstOneLogin = gql`
    query getContributors {
        organization {
            contributors(first: 1) {
                login
            }
        }
    }
`;

/**
 * Query for test the obtaining the first contributor from organization specified
 * with only the `name` field inside contributors
 *
 * @returns {OrganizationObject} an object containing:
 *                   `contributors`
 *                   of the token passed
**/
const contributorsFirstOneName = gql`
    query getContributors {
        organization {
            contributors(first: 1) {
                name
            }
        }
    }
`;

/**
 * Query for test the obtaining the first contributor from organization specified
 * with only the `websiteUrl` field inside contributors
 *
 * @returns {OrganizationObject} an object containing:
 *                   `contributors`
 *                   of the token passed
**/
const contributorsFirstOneWebsiteUrl = gql`
    query getContributors {
        organization {
            contributors(first: 1) {
                websiteUrl
            }
        }
    }
`;

/**
 * Query for test the obtaining the first contributor from organization specified
 * with only the `location` field inside contributors
 *
 * @returns {OrganizationObject} an object containing:
 *                   `contributors`
 *                   of the token passed
**/
const contributorsFirstOneLocation = gql`
    query getContributors {
        organization {
            contributors(first: 1) {
                location
            }
        }
    }
`;

/**
 * Query for test the obtaining the first contributor from organization specified
 * with only the `bio` field inside contributors
 *
 * @returns {OrganizationObject} an object containing:
 *                   `contributors`
 *                   of the token passed
**/
const contributorsFirstOneBio = gql`
    query getContributors {
        organization {
            contributors(first: 1) {
                bio
            }
        }
    }
`;

/**
 * Query for test the obtaining the first contributor from organization specified
 * with only the `email` field inside contributors
 *
 * @returns {OrganizationObject} an object containing:
 *                   `contributors`
 *                   of the token passed
**/
const contributorsFirstOneEmail = gql`
    query getContributors {
        organization {
            contributors(first: 1) {
                email
            }
        }
    }
`;

/**
 * Query for test the obtaining the first four contributors from organization specified
 *
 * @returns {OrganizationObject} an object containing:
 *                   `contributors`
 *                   of the token passed
**/
const contributorsFirstFour = gql`
    query getContributors {
        organization {
            contributors(first: 4) {
                id
                login
                name
                email
                websiteUrl
                location
                bio
            }
        }
    }
`;

export {
    contributorsFirstOne,
    contributorsFirstOneID,
    contributorsFirstOneName,
    contributorsFirstOneEmail,
    contributorsFirstOneLogin,
    contributorsFirstOneWebsiteUrl,
    contributorsFirstOneLocation,
    contributorsFirstOneBio,
    contributorsFirstFour,
}
