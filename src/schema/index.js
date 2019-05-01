import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
} from 'graphql';

import resolvers from '../resolvers';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    totalRepos: { type: GraphQLInt }
  })
});

const TeamType = new GraphQLObjectType({
  name: 'Team',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});

const OrganizationMemberType = new GraphQLObjectType({
  name: 'OrganizationMember',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});

const OrganizationType = new GraphQLObjectType({
  name: 'Organization',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    teams: {
      type: new GraphQLList(TeamType),
      resolve: resolvers.Query.teams
    },
    members: {
      type: new GraphQLList(OrganizationMemberType),
      resolve: resolvers.Query.members
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    me: {
      type: UserType,
      resolve: resolvers.Query.me
    },
    organization: {
      type: OrganizationType,
      args: { login: { type: new GraphQLNonNull(GraphQLString) } },
      resolve: resolvers.Query.organization
    }
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
