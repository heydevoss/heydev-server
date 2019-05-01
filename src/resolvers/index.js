import fetchData from './githubDataFetcher';
import githubQueries from './githubQueries';

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

const addMembersToArray = (members, membersArray) => {
  members.forEach((member) => {
    const memberRole = member.role;
    const memberId = member.node.id;
    const memberName = member.node.name;
    const memberLogin = member.node.login;
    const memberUrl = member.node.url;

    membersArray.push({
      id: memberId,
      role: memberRole,
      name: memberName,
      login: memberLogin,
      url: memberUrl
    });
  });
}

const addReposToArray = (repos, reposArray) => {
  repos.forEach((repo) => {
    const repoName = repo.nameWithOwner;
    const repoId = repo.id;
    const repoForks = repo.forkCount;
    const repoViewerAdmin = repo.viewerCanAdminister;
    const repoIssues = repo.issues.totalCount;
    const repoStars = repo.stargazers.totalCount;

    reposArray.push({
      id: repoId,
      name: repoName,
      viewerCanAdminister: repoViewerAdmin,
      totalForks: repoForks,
      totalOpenIssues: repoIssues,
      totalStars: repoStars
    });
  });
}

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
      const pagination = args.maxNumberOfTeams;
      const teamsArray = [];

      const body = githubQueries.organizationTeams(login, pagination);
      const data = await fetchData(body, token);

      const teams = data.data.repositoryOwner.teams.nodes;
      addTeamsToArray(teams, teamsArray);

      return teamsArray;
    },

    members: async (parent, args, { token }) => {
      const login = parent.login;
      const pagination = args.maxNumberOfMembers;
      const membersArray = [];

      const body = githubQueries.organizationMembers(login, pagination);
      const data = await fetchData(body, token);

      const members = data.data.repositoryOwner.membersWithRole.edges;
      addMembersToArray(members, membersArray);

      return membersArray;
    },

    repositories: async (parent, args, { token }) => {
      const login = parent.login;
      const pagination = args.maxNumberOfRepositories;
      const reposArray = [];

      const body = githubQueries.organizationRepositories(login, pagination);
      const data = await fetchData(body, token);

      const repos = data.data.repositoryOwner.repositories.nodes;
      addReposToArray(repos, reposArray);

      return reposArray;
    },

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
  },
};
