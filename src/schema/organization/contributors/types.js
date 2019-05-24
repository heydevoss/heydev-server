import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import { GraphQLDate } from 'graphql-iso-date';
import resolvers from './resolvers';

const ContributorType = new GraphQLObjectType({
  name: 'Contributor',
  description:
    'An individual account on GitHub that owns repositories and can make new content.',

  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    bio: { type: GraphQLString },
    email: { type: GraphQLString },
    websiteUrl: { type: GraphQLString },
    avatarUrl: { type: GraphQLString },
    firstContributionDate: { type: GraphQLDate },
    totalCommits: { type: GraphQLInt },
    totalIssuesOpen: {
      type: GraphQLInt,
      resolve: resolvers.Query.openIssues,
    },
    totalIssuesClosed: {
      type: GraphQLInt,
      resolve: resolvers.Query.closedIssues,
    },
    totalPullRequestsOpen: {
      type: GraphQLInt,
      resolve: resolvers.Query.openPullRequests,
    },
    totalPullRequestsClosed: {
      type: GraphQLInt,
      resolve: resolvers.Query.closedPullRequests,
    },
  }),
});

export default ContributorType;
