import fetchData from '../../github/dataFetcher';
import githubQueries from '../../github/queries';

export default {
  Query: {
    me: async (_parent, _args, { token }) => {
      const body = githubQueries.me();
      const data = await fetchData(body, token);

      const { viewer } = data.data;

      return {
        id: viewer.id,
        login: viewer.login,
        name: viewer.name,
        location: viewer.location,
        bio: viewer.bio,
        email: viewer.email,
        avatarUrl: viewer.avatarUrl,
        websiteUrl: viewer.websiteUrl,
        totalRepos: viewer.repositories.totalCount,
      };
    },
  },
};
