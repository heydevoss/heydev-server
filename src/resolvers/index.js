import fetchData from './fetchGithubData';
import githubQueries from './gitHubQueries';

export default {
  Query: {
    me: async (parent, args, { token }) => {
      const body = githubQueries.meQuery;

      const data = await fetchData(body, token);

      return {
        id: data.data.viewer.id,
        login: data.data.viewer.login,
        totalRepos: data.data.viewer.repositories.totalCount
      }
    }
  },
};