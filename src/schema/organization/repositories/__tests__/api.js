import gql from 'graphql-tag';

// TODO: test for two or more oganizations.

/**
 * Query for test the obtaining of all repositories atributtes
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `id`
 *                   `name`
 *                   `viewerCanAdminister`
 *                   `totalForks`
 *                   `totalOpenIssues`
 *                   `totalOpenPullRequests`
 *                   `totalStars`
 *                   of the desired `organization`
 * */
const repositories = gql`
  query repositories($maxNumberOfRepositories: Int!) {
    organization {
      repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
        id
        name
        viewerCanAdminister
        totalForks
        totalOpenIssues
        totalOpenPullRequests
        totalStars
      }
    }
  }
`;

/**
 * Query for test the obtaining of one repository atributte
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `name`
 *                   of the desired `organization`
 * */
const repositoriesName = gql`
  query repositoriesName($maxNumberOfRepositories: Int!) {
    organization {
      repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
        name
      }
    }
  }
`;

/**
 * Query for test the obtaining of two repositories atributtes
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `name`
 *                   `viewerCanAdminister`
 *                   of the desired `organization`
 * */
const repositoriesNameViewerCanAdminister = gql`
  query repositoriesNameViewerCanAdminister($maxNumberOfRepositories: Int!) {
    organization {
      repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
        name
        viewerCanAdminister
      }
    }
  }
`;

/**
 * Query for test the obtaining of three repositories atributtes
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `totalForks`
 *                   `totalOpenIssues`
 *                   `totalStars`
 *                   of the desired `organization`
 * */
const repositoriesTotalForksTotalOpenIssuesTotalStars = gql`
  query repositoriesTotalForksTotalOpenIssuesTotalStars($maxNumberOfRepositories: Int!) {
    organization {
      repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
        totalForks
        totalOpenIssues
        totalStars
      }
    }
  }
`;

/**
 * Query for test the obtaining of four repositories atributtes
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `id`
 *                   `totalForks`
 *                   `totalOpenIssues`
 *                   `totalStars`
 *                   of the desired `organization`
 * */
const repositoriesIdTotalForksTotalOpenIssuesTotalStars = gql`
  query repositoriesIdTotalForksTotalOpenIssuesTotalStars($maxNumberOfRepositories: Int!) {
    organization {
      repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
        id
        totalForks
        totalOpenIssues
        totalStars
      }
    }
  }
`;

/**
 * Query for testing the obtaining of the total number of commits of one
 * organazation's repositories.
 * 
 * @returns {RepositoryObject} an object containing:
 *                      `totalCommits`
 *                      of the desired repository inside an organization.
 */
const repositoriesTotalCommits = gql`
  query repositoriesTotalCommits($maxNumberOfRepositories: Int!) {
    organization {
      repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
        totalCommits
      }
    }
  }
`;

export {
  repositories,
  repositoriesName,
  repositoriesNameViewerCanAdminister,
  repositoriesTotalForksTotalOpenIssuesTotalStars,
  repositoriesIdTotalForksTotalOpenIssuesTotalStars,
  repositoriesTotalCommits,
};
