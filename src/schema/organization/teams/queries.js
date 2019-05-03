import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import TeamType from './types';
import resolvers  from './resolvers';

export default {
  type: new GraphQLList(TeamType),
  args: {
    maxNumberOfTeams: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Max number of results from this query'
    },
  },
  resolve: resolvers.Query.teams,
}