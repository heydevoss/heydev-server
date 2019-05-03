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
    id: { type: GraphQLID },
    login: { type: GraphQLString }
  })
});

const TeamType = new GraphQLObjectType({
  name: 'Team',
  description: 'A team of users in an organization.',

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    url: { type: GraphQLString },
    totalMembers: { type: GraphQLInt },
    repoLogin: { type: GraphQLString },
    members: {
      type: new GraphQLList(TeamMemberType),
      args: {
        maxNumberOfMembers: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Max number of results from this query'
        },
      },
      resolve: resolvers.Query.teamMembers
    }
  })
});

export default TeamType;