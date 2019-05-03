import { GraphQLString, GraphQLNonNull } from 'graphql';

import OrganizationType from './OrganizationType';
import resolvers from './resolvers';

const organization = {
  type: OrganizationType,
  args: { login: { 
    type: new GraphQLNonNull(GraphQLString),
    description: 'Organization login on Github'
  }},
  resolve: resolvers.Query.organization
}

export default {
  organization,
}