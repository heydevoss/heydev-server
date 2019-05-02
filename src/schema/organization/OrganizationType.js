import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import members from './members';
import repositories from './repositories';
import teams from './teams'

export default new GraphQLObjectType({
  name: 'Organization',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    totalMembers: { type: GraphQLInt },
    totalRepos: { type: GraphQLInt },
    totalTeams: { type: GraphQLInt },
    teams,
    members,
    repositories,
  })
});