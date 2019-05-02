import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import userQueries from './user/queries';
import organizationQueries from './organization/queries';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...organizationQueries,
    ...userQueries,
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
