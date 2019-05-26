import fetchData from '../../github/dataFetcher';
import fetchRestData from '../../github/restDataFetcher';
import githubQueries from '../../github/queries';

import 'dotenv/config';
import config from '../../config';

export default {
  Query: {
    commits: async (parent, args, { token }) => {
      const { login } = parent;
      const url = `https://api.github.com/search/commits?q=is:public+org:${login}`;
      const data = await fetchRestData(url);

      return data.total_count;
    },
    issues: async (parent, args, { token }) => {
      const body = githubQueries.organizationTotalIssues(parent.login);
      const data = await fetchData(body, token);

      return data.data.search.issueCount;
    },
    pullRequests: async (parent, args, { token }) => {
      const body = githubQueries.organizationTotalPullRequests(parent.login);
      const data = await fetchData(body, token);

      return data.data.search.issueCount;
    },
    organization: async (parent, args, { token }) => {
      const login = config.github.organization;
      const body = githubQueries.organization(login);
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
