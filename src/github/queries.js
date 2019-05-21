const me = () => {
  return JSON.stringify({
    query: `{
      viewer {
        id
        login
        name
        location
        bio
        email
        websiteUrl
        repositories {
          totalCount
        }
      }
    }`,
  });
};

const getContributorsData = (data, info) => {
  const inputs = `
    $orgID: ID!, 
    $login: String!, 
    $firstRepos: Int!, 
    $firstUsers: Int!, 
    $afterRepos: String,
    $afterUsers: String,
  `;

  const { id: orgID, login } = info.organization;
  const { after: afterRepos, first: firstRepos } = info.repoArgs;
  const { after: afterUsers, first: firstUsers } = info.userArgs;

  const variables = {orgID, login, firstRepos, firstUsers, afterRepos, afterUsers};

  const query = `
    query getFirstContributionDate(${inputs}) {
      organization(login: $login) {
        repositories(first: $firstRepos after: $afterRepos) {
          nodes {
            mentionableUsers(first: $firstUsers after: $afterUsers) {
              nodes {
                ${data}
              }
            }
          }
        }
      }
    }
  `;

  return JSON.stringify({query, variables});
}

/**
 * Fetch contributors from the specified organization
 * @param {object} organization
 * @param {object} repositoryArgs object with args (first, after, etc) to filter repositories
 * @param {object} userArgs object with args (first, after, etc) to filter metionableUsers
 */
const contributors = (organization, repoArgs, userArgs) => {
  const data = `
    id
    name
    bio
    location
    email
    login
    websiteUrl
    contributionsCollection(organizationID: $orgID) {
      pullRequestContributions(last: 1) {
        nodes {
          firstContributionDate: occurredAt
        }
      }
      issueContributions(last: 1) {
        nodes {
          firstContributionDate: occurredAt
        }
      }
      pullRequestReviewContributions(last: 1) {
        nodes {
          firstContributionDate: occurredAt
        }
      }
    }
  `;

  const info = {organization, repoArgs, userArgs};
  return getContributorsData(data, info);
}

const getOrganizationData = (inputs, data, variables) => {
  return JSON.stringify({
    query: `query getRepoOwner(${inputs}) {
      repositoryOwner(login: $login) {
        ... on Organization {
          ${data}
        }
      }
    }`,
    variables,
  });
};

const getSearchData = (query, type, data) => {
  return JSON.stringify({
    query: `{
      search(
        query: "${query}"
        type: ${type}
      ) {
        ${data}
      }
    }`
  });
}

const organization = login => {
  const inputs = `$login: String!`;
  const data = `
    id
    name
    login
    avatarUrl
    url
    websiteUrl
    membersWithRole {
      totalCount
    }
    repositories(isFork: false) {
      totalCount
    }
    teams {
      totalCount
    }
  `;
  const variables = { login };

  return getOrganizationData(inputs, data, variables);
};

const organizationTeams = (login, pagination) => {
  const inputs = `$login: String! $pagination: Int!`;
  const data = `
  teams(first: $pagination) {
    nodes {
      id
      name
      url
      slug
      members {
        totalCount
      }
    }
  }`;

  const variables = { login, pagination };

  return getOrganizationData(inputs, data, variables);
};

const organizationTeamMembers = (login, slug, pagination) => {
  const inputs = `$login: String! $slug: String! $pagination: Int!`;
  const data = `team(slug: $slug) {
    members(first: $pagination) {
      nodes {
        id
        login
      }
    }
  }`;

  const variables = { login, slug, pagination };

  return getOrganizationData(inputs, data, variables);
};

const organizationMembers = (login, pagination) => {
  const inputs = `$login: String! $pagination: Int!`;
  const data = `
  membersWithRole(first: $pagination) {
    edges {
      role
      node {
        id
        name
        login
        url
      }
    }
  }`;

  const variables = { login, pagination };

  return getOrganizationData(inputs, data, variables);
};

const organizationRepositories = (login, pagination) => {
  const inputs = `$login: String! $pagination: Int!`;
  const data = `
  repositories(first: $pagination isFork: false) {
    nodes {
      id
      nameWithOwner
      forkCount
      viewerCanAdminister,
      issues(states: OPEN) {
        totalCount
      }
      stargazers {
        totalCount
      }
      object(expression: "master") {
        ... on Commit {
          history {
            totalCount
          }
        }
      }
    }
  }
  `;

  const variables = { login, pagination };
  return getOrganizationData(inputs, data, variables);
};

const organizationTotalPullRequests = (login) => {
  const query = `org:${login} type:pr`;
  const data = "issueCount";

  return getSearchData(query, "ISSUE", data);
}

const organizationTotalIssues = (login) => {
  const query = `org:${login} type:issue`;
  const data = "issueCount";

  return getSearchData(query, "ISSUE", data);
}

export default {
  me,
  organization,
  organizationTeams,
  organizationMembers,
  organizationRepositories,
  organizationTeamMembers,
  contributors,
  organizationTotalPullRequests,
  organizationTotalIssues,
};
