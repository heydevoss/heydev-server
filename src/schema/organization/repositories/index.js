import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import RepositoryType from './RepositoryType';
import resolvers from './resolvers';

export default {
  type: new GraphQLList(RepositoryType),
  args: {
    maxNumberOfRepositories: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Max number of results from this query'
    },
  },
  resolve: resolvers.Query.repositories
}