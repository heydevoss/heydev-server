import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import resolvers from './resolvers';

const TeamMemberType = new GraphQLObjectType({
  name: 'TeamMember',
  description: 'A user who is a member of a team.',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Team member ID.',
    },
    login: {
      type: GraphQLString,
      description: 'Team member login.',
    },
  }),
});

const TeamType = new GraphQLObjectType({
  name: 'Team',
  description: 'A team of users in an organization.',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Team ID.',
    },
    name: {
      type: GraphQLString,
      description: 'Team name.',
    },
    slug: {
      type: GraphQLString,
      description: 'The slug corresponding to the team.',
    },
    url: {
      type: GraphQLString,
      description: 'The HTTP URL for this team.',
    },
    totalMembers: {
      type: GraphQLInt,
      description: `The team's total number of members.`,
    },
    orgLogin: {
      type: GraphQLString,
      description: 'The login of the organization which this team belongs.',
    },
    members: {
      type: new GraphQLList(TeamMemberType),
      args: {
        maxNumberOfMembers: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Max number of results from this query',
        },
      },
      resolve: resolvers.Query.teamMembers,
      description: 'A list of members in this team.',
    },
  }),
});

export default TeamType;
