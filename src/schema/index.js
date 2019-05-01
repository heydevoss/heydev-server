import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} from 'graphql';

// Getting resolvers for queries and mutations
import resolvers from '../resolvers';

// Creating a type User for the Schema
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    totalRepos: { type: GraphQLInt }
  })
});

// Creating a root Query with its resolvers.
const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    me: {
      type: UserType,
      resolve: resolvers.Query.me,
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
