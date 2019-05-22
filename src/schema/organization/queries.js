import OrganizationType from './types';
import resolvers from './resolvers';

const organization = {
  type: OrganizationType,
  resolve: resolvers.Query.organization,
};

export default {
  organization,
};
