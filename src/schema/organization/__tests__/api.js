import gql from 'graphql-tag';

/**
 * Query for testing the obtaining of all organization data.
 * 
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
  query {
    organization {
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
 * @returns {OrganizationObject} an object containing the:
 *                          `id`
 *                          of the desired organization
 */
const organizationId = gql`
  query {
    organization {
      id
    }
  }
`;

/**
 * Query for testing the obtaining of the organization name.
 * 
 * @returns {OrganizationObject} an object containing the:
 *                          `name`
 *                          of the desired organization
 */
const organizationName = gql`
  query {
    organization {
      name
    }
  }
`;

/**
 * Query for testing the obtaining of the organization login.
 * 
 * @returns {OrganizationObject} an object containing the:
 *                          `login`
 *                          of the desired organization
 */
const organizationLogin = gql`
  query {
    organization {
      login
    }
  }
`;

/**
 * Query for testing the obtaining of the organization website url.
 * 
 * @returns {OrganizationObject} an object containing the:
 *                          `websiteUrl`
 *                          of the desired organization
 */
const organizationWebsiteUrl = gql`
  query {
    organization {
      websiteUrl
    }
  }
`;

/**
 * Query for testing the obtaining of the number of repositories in an
 * organization.
 * 
 * @returns {OrganizationObject} an object containing the:
 *                          `totalRepos`
 *                          of the desired organization
 */
const organizationTotalRepos = gql`
  query {
    organization {
      totalRepos
    }
  }
`;

/**
 * Query for testing the obtaining of the number of teams in an
 * organization.
 * 
 * @returns {OrganizationObject} an object containing the:
 *                          `totalTeams`
 *                          of the desired organization
 */
const organizationTotalTeams = gql`
  query {
    organization {
      totalTeams
    }
  }
`;

/**
 * Query for testing the obtaining of the number of members in an
 * organization.
 * 
 * @returns {OrganizationObject} an object containing the:
 *                          `totalMembers`
 *                          of the desired organization
 */
const organizationTotalMembers = gql`
  query {
    organization {
      totalMembers
    }
  }
`;
/**
 * Query for testing the obtaining of the number of Pull Requests opened,
 * merged or closed in all repositories of one organization.
 * 
 * @returns {OrganizationObject} an object containing the:
 *                          `totalPullRequests`
 *                          of the desired organization
 */
const organizationTotalPullRequests = gql`
  query {
    organization {
      totalPullRequests
    }
  }
`;

/**
 * Query for testing the obtaining of the number of issues opened or closes
 * in all repositories of one organization.
 * 
 * @returns {OrganizationObject} an object containing the:
 *                          `totalIssues`
 *                          of the desired organization
 */
const organizationTotalIssues = gql`
  query {
    organization {
      totalIssues
    }
  }
`;

/**
 * Query for testing the obtaining of the number of commits to all repositories
 * of one organization.
 * 
 * @returns {OrganizationObject} an object containing the:
 *                          `totalCommits`
 *                          of the desired organization
 */
const organizationTotalCommits = gql`
  query {
    organization {
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