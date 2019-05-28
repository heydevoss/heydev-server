import OrganizationType from './types';
import resolvers from './resolvers';

const organization = {
  type: OrganizationType,
  resolve: resolvers.Query.organization,
  description:
    'Lookup an organization by login defined on server configuration.',
};

export default {
  organization,
};
