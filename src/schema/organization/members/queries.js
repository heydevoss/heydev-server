import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql';

import OrganizationMemberType from './types';
import resolvers from './resolvers';

const members = {
  type: new GraphQLList(OrganizationMemberType),
  args: {
    maxNumberOfMembers: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Max number of results from this query',
    },
  },
  resolve: resolvers.Query.members,
  description: 'A list of members in this organization.',
};

export default members;
