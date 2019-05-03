import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import OrganizationMemberType from './OrganizationMemberType';
import resolvers from './resolvers';

export default {
  type: new GraphQLList(OrganizationMemberType),
  args: {
    maxNumberOfMembers: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Max number of results from this query'
    },
  },
  resolve: resolvers.Query.members
};