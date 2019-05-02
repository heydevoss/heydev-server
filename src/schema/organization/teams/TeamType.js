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
  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString }
  })
});

export default new GraphQLObjectType({
  name: 'Team',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
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