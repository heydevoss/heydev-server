import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

const RepositoryType = new GraphQLObjectType({
  name: 'Repository',
  description: 'A repository contains the content for a project.',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Repository ID.',
    },
    name: {
      type: GraphQLString,
      description: 'Repository name.',
    },
    viewerCanAdminister: {
      type: GraphQLBoolean,
      description:
        'Indicates whether the viewer has admin permissions on the repository.',
    },
    totalForks: {
      type: GraphQLInt,
      description: `The repository's total number of forks.`,
    },
    totalOpenIssues: {
      type: GraphQLInt,
      description: `The repository's total number of open issues.`,
    },
    totalOpenPullRequests: {
      type: GraphQLInt,
      description: `The repository's total number of open pull requests.`,
    },
    totalStars: {
      type: GraphQLInt,
      description: `The repository's total number of stars.`,
    },
    totalCommits: {
      type: GraphQLInt,
      description: `The repository's total number of commits.`,
    },
  }),
});

export default RepositoryType;
