import gql from 'graphql-tag';

/**
 * Query for testing the obtaining of all organization data.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `id`
 *                          `name`
 *                          `login`
 *                          `avatarUrl`
 *                          `url`
 *                          `websiteUrl`
 *                          `totalMembers`
 *                          `totalRepos`
 *                          `totalTeams`
 *                          `totalPullRequests`
 *                          `totalCommits`
 *                          `totalIssues`
 *                          of the desired organization
 */
const organizationData = gql`
  query organizationData($login: String!) {
    organization(login: $login) {
      id
      name
      login
      avatarUrl
      url
      websiteUrl
      totalMembers
      totalRepos
      totalTeams
      totalPullRequests
      totalCommits
      totalIssues
    }
  }
`;

/**
 * Query for testing the obtaining of the organization id.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `id`
 *                          of the desired organization
 */
const organizationId = gql`
  query organizationData($login: String!) {
    organization(login: $login) {
      id
    }
  }
`;

/**
 * Query for testing the obtaining of the organization name.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `name`
 *                          of the desired organization
 */
const organizationName = gql`
  query organizationData($login: String!) {
    organization(login: $login) {
      name
    }
  }
`;

/**
 * Query for testing the obtaining of the organization login.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `login`
 *                          of the desired organization
 */
const organizationLogin = gql`
  query organizationData($login: String!) {
    organization(login: $login) {
      login
    }
  }
`;

/**
 * Query for testing the obtaining of the organization website url.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `websiteUrl`
 *                          of the desired organization
 */
const organizationWebsiteUrl = gql`
  query organizationData($login: String!) {
    organization(login: $login) {
      websiteUrl
    }
  }
`;

/**
 * Query for testing the obtaining of the number of repositories in an
 * organization.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `totalRepos`
 *                          of the desired organization
 */
const organizationTotalRepos = gql`
  query organizationData($login: String!) {
    organization(login: $login) {
      totalRepos
    }
  }
`;

/**
 * Query for testing the obtaining of the number of teams in an
 * organization.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `totalTeams`
 *                          of the desired organization
 */
const organizationTotalTeams = gql`
  query organizationData($login: String!) {
    organization(login: $login) {
      totalTeams
    }
  }
`;

/**
 * Query for testing the obtaining of the number of members in an
 * organization.
 * 
 * @param {String} login organization login
 * @returns {OrganizationObject} an object containing the:
 *                          `totalMembers`
 *                          of the desired organization
 */
const organizationTotalMembers = gql`
  query organizationData($login: String!) {
    organization(login: $login) {
      totalMembers
    }
  }
`;
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
  organizationData,
  organizationId,
  organizationLogin,
  organizationName,
  organizationWebsiteUrl,
  organizationTotalRepos,
  organizationTotalMembers,
  organizationTotalTeams,
  organizationTotalPullRequests,
  organizationTotalIssues,
  organizationTotalCommits,
}