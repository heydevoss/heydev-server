import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql';

import resolvers from '../resolvers';

console.log(resolvers.Query.users);

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString }
  })
});

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