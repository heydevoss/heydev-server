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
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    viewerCanAdminister: { type: GraphQLBoolean },
    totalForks: { type: GraphQLInt },
    totalOpenIssues: { type: GraphQLInt },
    totalOpenPullRequests: { type: GraphQLInt },
    totalStars: { type: GraphQLInt },
    totalCommits: { type: GraphQLInt },
  }),
});

export default RepositoryType;
