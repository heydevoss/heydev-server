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

const organization = (login) => {
  return JSON.stringify({
    query: `query getRepoOwner($login: String!) {
      repositoryOwner(login: $login) {
        ... on Organization {
          id
          login
          name
        }
      }
    }`,
    variables: {
      login
    }
  })
}

const organizationTeams = (login, pagination) => {
  return JSON.stringify({
    query: `query getRepoOwner($login: String! $pagination: Int!) {
      repositoryOwner(login: $login) {
        ... on Organization {
          teams(first: $pagination) {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                id
                name
                url
              }
            }
          }
        }
      }
    }`,
    variables: {
      login,
      pagination
    }
  });
}

const organizationTeamsHasNextPage = (login, pagination, cursor) => {
  return JSON.stringify({
    query: `query getRepoOwner($login: String!, $pagination: Int!, $cursor: String!) {
      repositoryOwner(login: $login) {
        ... on Organization {
          teams(first: $pagination, after: $cursor) {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                id
                name
                url
              }
            }
          }
        }
      }
    }`,
    variables: {
      login,
      pagination,
      cursor
    }
  });
}

export default {
  me,
  organization,
  organizationTeams,
  organizationTeamsHasNextPage
}