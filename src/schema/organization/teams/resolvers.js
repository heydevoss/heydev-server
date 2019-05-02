import fetchData from '../../../model/githubDataFetcher';
import githubQueries from '../../../model/githubQueries';

const addTeamsToArray = (teams, teamsArray) => {
  teams.forEach((team) => {
    const teamId = team.id;
    const teamName = team.name;
    const teamUrl = team.url;

    teamsArray.push({
      id: teamId,
      name: teamName,
      url: teamUrl
    });
  });
}

export default {
  Query: {
    teams: async (parent, args, { token }) => {
      const login = parent.login;
      const pagination = args.maxNumberOfTeams;
      const teamsArray = [];

      const body = githubQueries.organizationTeams(login, pagination);
      const data = await fetchData(body, token);

      const teams = data.data.repositoryOwner.teams.nodes;
      addTeamsToArray(teams, teamsArray);

      return teamsArray;
    },

    teamMembers: async (parent, args, { token }) => {
      return null;
    }
  }
}