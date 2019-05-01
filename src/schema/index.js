import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
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

const TeamMemberType = new GraphQLObjectType({
  name: 'TeamMember',
  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString }
  })
});

const TeamType = new GraphQLObjectType({
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

const OrganizationMemberType = new GraphQLObjectType({
  name: 'OrganizationMember',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    role: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});

const RepositoryType = new GraphQLObjectType({
  name: 'Repository',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    viewerCanAdminister: { type: GraphQLBoolean },
    totalForks: { type: GraphQLInt },
    totalOpenIssues: { type: GraphQLInt },
    totalStars: { type: GraphQLInt },
  })
});

const OrganizationType = new GraphQLObjectType({
  name: 'Organization',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    totalMembers: { type: GraphQLInt },
    totalRepos: { type: GraphQLInt },
    totalTeams: { type: GraphQLInt },
    teams: {
      type: new GraphQLList(TeamType),
      args: {
        maxNumberOfTeams: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Max number of results from this query'
        },
      },
      resolve: resolvers.Query.teams
    },
    members: {
      type: new GraphQLList(OrganizationMemberType),
      args: {
        maxNumberOfMembers: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Max number of results from this query'
        },
      },
      resolve: resolvers.Query.members
    },
    repositories: {
      type: new GraphQLList(RepositoryType),
      args: {
        maxNumberOfRepositories: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Max number of results from this query'
        },
      },
      resolve: resolvers.Query.repositories
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
