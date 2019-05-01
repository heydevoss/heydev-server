import fetchData from './githubDataFetcher';
import githubQueries from './githubQueries';

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
    },

    teams: async (parent, args, { token }) => {
      const login = parent.login;
      const teamsArray = [];

      let pagination = 3;
      let body = githubQueries.organizationTeams(login, pagination);
      let data = await fetchData(body, token);

      let nextPage = data.data.repositoryOwner.teams.pageInfo.hasNextPage;
      let lastEndCursor = data.data.repositoryOwner.teams.pageInfo.endCursor;

      // After, we need to define pagination, this can get very inefficient
      do {
        const teams = data.data.repositoryOwner.teams.edges;
        
        teams.forEach(team => {
          const teamId = team.node.id;
          const teamName = team.node.name;
          const teamUrl = team.node.url;

          teamsArray.push({
            id: teamId,
            name: teamName,
            url: teamUrl
          });
        });

        nextPage = data.data.repositoryOwner.teams.pageInfo.hasNextPage;

        if (nextPage) {
          pagination *= 2;

          body = githubQueries.organizationTeamsHasNextPage(login, pagination, lastEndCursor);
          data = await fetchData(body, token);

          lastEndCursor = data.data.repositoryOwner.teams.pageInfo.endCursor;
        }
        
      } while(nextPage);

      return teamsArray;
    },

    // Organization resolver (fetch data from github)
    organization: async (parent, args, { token }) => {
      const body = githubQueries.organization(args.login);
      const data = await fetchData(body, token);

      const org = data.data.repositoryOwner;

      return (org) ? {
        id: org.id,
        login: org.login,
        name: org.name
      } : null;
    }
  },
};
