import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql';

import RepositoryType from './types';
import resolvers from './resolvers';

const repositories = {
  type: new GraphQLList(RepositoryType),
  args: {
    maxNumberOfRepositories: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Max number of results from this query',
    },
  },
  resolve: resolvers.Query.repositories,
};

export default repositories;
