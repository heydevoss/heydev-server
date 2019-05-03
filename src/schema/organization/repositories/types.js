import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

const RepositoryType =  new GraphQLObjectType({
  name: 'Repository',
  description: '',

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    viewerCanAdminister: { type: GraphQLBoolean },
    totalForks: { type: GraphQLInt },
    totalOpenIssues: { type: GraphQLInt },
    totalStars: { type: GraphQLInt },
  })
});

export default RepositoryType;