import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    totalRepos: { type: GraphQLInt }
  })
});