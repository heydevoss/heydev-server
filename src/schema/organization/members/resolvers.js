import fetchData from '../../../github/dataFetcher';
import githubQueries from '../../../github/queries';

const addMembersToArray = (members, membersArray) => {
  members.forEach(member => {
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
      url: memberUrl,
    });
  });
};

export default {
  Query: {
    members: async (parent, args, { token }) => {
      const { login } = parent;
      const pagination = args.maxNumberOfMembers;
      const membersArray = [];

      const body = githubQueries.organizationMembers(login, pagination);
      const data = await fetchData(body, token);

      const members = data.data.repositoryOwner.membersWithRole.edges;
      addMembersToArray(members, membersArray);

      return membersArray;
    },
  },
};
