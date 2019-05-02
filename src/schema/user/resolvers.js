import fetchData from '../../model/githubDataFetcher';
import githubQueries from '../../model/githubQueries';

export default {
  Query: {
    me: async (parent, args, { token }) => {
      const body = githubQueries.me();
      const data = await fetchData(body, token);
  
      const viewer = data.data.viewer;
  
      return {
        id: viewer.id,
        login: viewer.login,
        totalRepos: viewer.repositories.totalCount
      }
    }
  }
}