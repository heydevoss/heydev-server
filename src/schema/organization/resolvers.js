import fetchData from '../../model/githubDataFetcher';
import githubQueries from '../../model/githubQueries';

export default {
  Query: {
    organization: async (parent, args, { token }) => {
      const body = githubQueries.organization(args.login);
      const data = await fetchData(body, token);

      const org = data.data.repositoryOwner;

      return (org) ? {
        id: org.id,
        login: org.login,
        name: org.name,
        totalMembers: org.membersWithRole.totalCount,
        totalRepos: org.repositories.totalCount,
        totalTeams: org.teams.totalCount,
      } : null;
    }
  }
}