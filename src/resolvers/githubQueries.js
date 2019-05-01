const me = () => {
  return JSON.stringify({
    query: `{
      viewer {
        id
        login
        repositories {
          totalCount
        }
      }
    }`
  });
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
    variables
  })
}

const organization = (login) => {
  const inputs = `$login: String!`;
  const data = `
    id
    name
    login
    membersWithRole {
      totalCount
    }
    repositories {
      totalCount
    }
    teams {
      totalCount
    }
  `;
  const variables = { login };

  return getOrganizationData(inputs, data, variables);
}

const organizationTeams = (login, pagination) => {
  const inputs = `$login: String! $pagination: Int!`;
  const data = `
  teams(first: $pagination) {
    nodes {
      id
      name
      url
    }
  }`;

  const variables = { login, pagination };

  return getOrganizationData(inputs, data, variables);
}

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
}

const organizationRepositories = (login, pagination) => {
  const inputs = `$login: String! $pagination: Int!`;
  const data = `
  repositories(first: $pagination) {
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
    }
  }
  `;

  const variables = { login, pagination };
  return getOrganizationData(inputs, data, variables);
}

export default {
  me,
  organization,
  organizationTeams,
  organizationMembers,
  organizationRepositories
}