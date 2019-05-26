import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import members from './members/queries';
import repositories from './repositories/queries';
import teams from './teams/queries';
import { contributors, contributor } from './contributors/queries';
import resolvers from './resolvers';

const OrganizationType = new GraphQLObjectType({
  name: 'Organization',
  description:
    'An account on GitHub, with one or more owners, that has repositories, members and teams.',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Organization ID.',
    },
    name: {
      type: GraphQLString,
      description: 'Organization name.',
    },
    login: {
      type: GraphQLString,
      description: 'Organization login.',
    },
    avatarUrl: {
      type: GraphQLString,
      description: 'Organization profile picture (avatar) URL.',
    },
    url: {
      type: GraphQLString,
      description: 'The HTTP URL for this organization.',
    },
    websiteUrl: {
      type: GraphQLString,
      description: `The organization's public profile URL.`,
    },
    totalMembers: {
      type: GraphQLInt,
      description: `The organization's total number of members.`,
    },
    totalRepos: {
      type: GraphQLInt,
      description: `The organization's total number of repositories.`,
    },
    totalTeams: {
      type: GraphQLInt,
      description: `The organization's total number of teams.`,
    },
    teams,
    members,
    repositories,
    contributors,
    contributor,
    totalPullRequests: {
      type: GraphQLInt,
      resolve: resolvers.Query.pullRequests,
      description: `The organization's total number of pull requests.`,
    },
    totalCommits: {
      type: GraphQLInt,
      resolve: resolvers.Query.commits,
      description: `The organization's total number of commits.`,
    },
    totalIssues: {
      type: GraphQLInt,
      resolve: resolvers.Query.issues,
      description: `The organization's total number of issues.`,
    },
  }),
});

export default OrganizationType;
