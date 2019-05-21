import fetchData from '../../github/dataFetcher';
import fetchRestData from '../../github/restDataFetcher';
import githubQueries from '../../github/queries';

export default {
  Query: {
    commits: async (parent, args, { token }) => {
      const login = parent.login;
      const url = `https://api.github.com/search/commits?q=is:public+org:${login}`;
      const data = await fetchRestData(url);

      return data.total_count;
    },
    issues: async (parent, args, { token }) => {
      let body = githubQueries.organizationTotalIssues(parent.login);
      let data = await fetchData(body, token);

      return data.data.search.issueCount;
    },
    pullRequests : async (parent, args, { token }) => {
      let body = githubQueries.organizationTotalPullRequests(parent.login);
      let data = await fetchData(body, token);

      return data.data.search.issueCount;
    },
    organization: async (parent, args, { token }) => {
      const body = githubQueries.organization(args.login);
      const data = await fetchData(body, token);

      const org = data.data.repositoryOwner;

      return org
        ? {
            id: org.id,
            login: org.login,
            name: org.name,
            avatarUrl: org.avatarUrl,
            url: org.url,
            websiteUrl: org.websiteUrl,
            totalMembers: org.membersWithRole.totalCount,
            totalRepos: org.repositories.totalCount,
            totalTeams: org.teams.totalCount,
          }
        : null;
    },
  },
};
