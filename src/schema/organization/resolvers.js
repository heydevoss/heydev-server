import fetchData from '../../github/dataFetcher';
import githubQueries from '../../github/queries';

const sumPullRequests = (prs) => {
  let sum = 0;
  prs.forEach(element => {
    sum += element.pullRequests.totalCount;
  });

  return sum;
}

export default {
  Query: {
    pullRequests : async (parent, args, { token }) => {
      const pagination = 80;

      let body = githubQueries.totalPROrganization(parent.login, pagination);
      let data = await fetchData(body, token);
      
      let hasNext = true;

      let totalPullRequests = 0;
      
      do {
        let repositories = data.data.repositoryOwner.repositories;

        const prs = repositories.nodes;
        const pageInfo = repositories.pageInfo;
        const cursor = pageInfo.endCursor;

        hasNext = pageInfo.hasNextPage;

        totalPullRequests += sumPullRequests(prs);

        if (hasNext) {
          body = githubQueries.totalPROrganizationAfter(parent.login, pagination, cursor);
          data = await fetchData(body, token);
        }
      } while (hasNext);

      return totalPullRequests;
    },

    organization: async (parent, args, { token }) => {
      const body = githubQueries.organization(args.login);
      const data = await fetchData(body, token);

      const org = data.data.repositoryOwner;

      return (org) ? {
        id: org.id,
        login: org.login,
        name: org.name,
        avatarUrl: org.avatarUrl,
        url: org.url,
        websiteUrl: org.websiteUrl,
        totalMembers: org.membersWithRole.totalCount,
        totalRepos: org.repositories.totalCount,
        totalTeams: org.teams.totalCount,
      } : null;
    }
  }
}