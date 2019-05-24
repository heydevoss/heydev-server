import fetchData from '../../../github/dataFetcher';
import githubQueries from '../../../github/queries';

const addMembersToArray = (members, membersArray) => {
  members.forEach(member => {
    membersArray.push({
      id: member.id,
      login: member.login,
    });
  });
};

const addTeamsToArray = (teams, teamsArray, login) => {
  teams.forEach(team => {
    const teamId = team.id;
    const teamName = team.name;
    const teamUrl = team.url;
    const teamSlug = team.slug;
    const teamTotalMembers = team.members.totalCount;

    teamsArray.push({
      id: teamId,
      name: teamName,
      url: teamUrl,
      orgLogin: login,
      slug: teamSlug,
      totalMembers: teamTotalMembers,
    });
  });
};

export default {
  Query: {
    teams: async (parent, args, { token }) => {
      const { login } = parent;
      const pagination = args.maxNumberOfTeams;
      const teamsArray = [];

      const body = githubQueries.organizationTeams(login, pagination);
      const data = await fetchData(body, token);

      const teams = data.data.repositoryOwner.teams.nodes;
      addTeamsToArray(teams, teamsArray, login);

      return teamsArray;
    },

    teamMembers: async (parent, args, { token }) => {
      const login = parent.orgLogin;
      const { slug } = parent;
      const pagination = args.maxNumberOfMembers;
      const teamMembersArray = [];

      const body = githubQueries.organizationTeamMembers(
        login,
        slug,
        pagination
      );
      const data = await fetchData(body, token);

      const members = data.data.repositoryOwner.team.members.nodes;
      addMembersToArray(members, teamMembersArray);

      return teamMembersArray;
    },
  },
};
