import gql from 'graphql-tag';

/**
 * Query for test the obtaining of the total number of commits of one
 * organazation's repositories.
 * 
 * @returns {RepositoryObject} an object containing:
 *                      `totalCommits`
 *                      of the desired repository inside an organization.
 */
const repositoriesTotalCommits = gql`
query repositoriesTotalCommits(
  $login: String!
  $maxNumberOfRepositories: Int!
) {
  organization(login: $login) {
    repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
      totalCommits
    }
  }
}
`;

export {
  repositoriesTotalCommits
}