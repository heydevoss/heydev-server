import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import { GraphQLDate } from 'graphql-iso-date';
import resolvers from './resolvers';

const ContributorType = new GraphQLObjectType({
  name: 'Contributor',
  description:
    'An individual account on GitHub that owns repositories and can make new content.',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Contributor ID.',
    },
    login: {
      type: GraphQLString,
      description: 'Contributor login.',
    },
    name: {
      type: GraphQLString,
      description: 'Contributor name.',
    },
    location: {
      type: GraphQLString,
      description: `The contributor's public profile location.`,
    },
    bio: {
      type: GraphQLString,
      description: `The contributor's public profile bio.`,
    },
    email: {
      type: GraphQLString,
      description: `The contributor's publicly visible profile email.`,
    },
    websiteUrl: {
      type: GraphQLString,
      description: `A URL pointing to the contributor's public website.`,
    },
    avatarUrl: {
      type: GraphQLString,
      description: `A URL pointing to the contributor's public profile picture (avatar).`,
    },
    firstContributionDate: {
      type: GraphQLDate,
      description:
        'Date of the first time the contributor has contributed to the organization.',
    },
    totalCommits: {
      type: GraphQLInt,
      description:
        'How many commits were made by the contributor in the organization.',
    },
    totalIssues: {
      type: GraphQLInt,
      description:
        'How many issues were opened by the contributor in the organization.',
    },
    totalPullRequests: {
      type: GraphQLInt,
      description:
        'How many pull requests were opened by the contributor in the organization.',
    },
    totalIssuesOpen: {
      type: GraphQLInt,
      resolve: resolvers.Query.openIssues,
      description:
        'How many issues were opened by the contributor in the organization and are still open.',
    },
    totalIssuesClosed: {
      type: GraphQLInt,
      resolve: resolvers.Query.closedIssues,
      description:
        'How many issues were opened by the contributor in the organization and were closed.',
    },
    totalPullRequestsOpen: {
      type: GraphQLInt,
      resolve: resolvers.Query.openPullRequests,
      description:
        'How many pull requests were opened by the contributor in the organization and are still open.',
    },
    totalPullRequestsClosed: {
      type: GraphQLInt,
      resolve: resolvers.Query.closedPullRequests,
      description:
        'How many pull requests were opened by the contributor in the organization and were closed.',
    },
  }),
});

export default ContributorType;
