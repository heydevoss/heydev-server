import gql from 'graphql-tag';

/**
 * Query for testing the obtaining of the number of Pull Requests opened,
 * merged or closed in all repositories of one organization.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `totalPullRequests`
 *                          of the desired organization
 */
const organizationTotalPullRequests = gql`
  query orgPRs($login: String!) {
    organization(login: $login) {
      totalPullRequests
    }
  }
`;

/**
 * Query for testing the obtaining of the number of issues opened or closes
 * in all repositories of one organization.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `totalIssues`
 *                          of the desired organization
 */
const organizationTotalIssues = gql`
  query orgPRs($login: String!) {
    organization(login: $login) {
      totalIssues
    }
  }
`;

/**
 * Query for testing the obtaining of the number of commits to all repositories
 * of one organization.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `totalCommits`
 *                          of the desired organization
 */
const organizationTotalCommits = gql`
  query orgPRs($login: String!) {
    organization(login: $login) {
      totalCommits
    }
  }
`;

export {
  organizationTotalPullRequests,
  organizationTotalIssues,
  organizationTotalCommits,
}