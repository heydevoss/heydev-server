import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';

export default new GraphQLObjectType({
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