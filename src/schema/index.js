import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql';

// Getting resolvers for queries and mutations
import resolvers from '../resolvers';

// Creating a type User for the Schema
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString }
  })
});

// Creating a root Query with its resolvers.
const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: resolvers.Query.users
    },

    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: resolvers.Query.user
    },

    me: {
      type: UserType,
      resolve: resolvers.Query.me
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});