import { GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import ContributorType from './types';
import resolvers from './resolvers';

const contributors = {
  type: new GraphQLList(ContributorType),
  args: {
    first: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Returns the first n elements from the list.'
    },
    last: {
      type: GraphQLInt,
      description: 'Returns the last n elements from the list.'
    },
    after: {
      type: GraphQLString,
      description: 'Returns the elements in the list that come after the specified cursor.'
    },
    before: {
      type: GraphQLString,
      description: 'Returns the elements in the list that come after the specified cursor.'
    }
  },
  resolve: resolvers.Query.contributors
};

export default contributors;