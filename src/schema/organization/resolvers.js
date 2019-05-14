import fetchData from '../../github/dataFetcher';
import githubQueries from '../../github/queries';

export default {
  Query: {
    pullRequests : async (parent, args, { token }) => {
      console.log(token);
      const body = githubQueries.totalPROrganization(parent.login, 3);
      const data = await fetchData(body, token);

      const repositories = data.data.repositoryOwner.repositories;
      
      let hasNext = repositories.pageInfo.hasNextPage;
      
      // do {

      // } while (hasNext);

      return 0;
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