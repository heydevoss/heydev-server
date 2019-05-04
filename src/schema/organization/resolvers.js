import fetchData from '../../github/dataFetcher';
import githubQueries from '../../github/queries';

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