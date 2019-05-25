import { GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import ContributorType from './types';
import resolvers from './resolvers';

export const contributors = {
  type: new GraphQLList(ContributorType),
  args: {
    first: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Returns the first n elements from the list.'
    },
    last: {
      type: GraphQLInt,
      description: '[NOT IMPLEMENTED YET] Returns the last n elements from the list.'
    },
    after: {
      type: GraphQLString,
      description: '[NOT IMPLEMENTED YET] Returns the elements in the list that come after the specified cursor.'
    },
    before: {
      type: GraphQLString,
      description: '[NOT IMPLEMENTED YET] Returns the elements in the list that come after the specified cursor.'
    }
  },
  resolve: resolvers.Query.contributors,
  description: 'A list of contributors in this organization.',
};

export const contributor = {
  type: ContributorType,
  args: {
    login: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Login of the contributor. It will be null if the user is not a Contributor or GitHub User',
    },
  },
  resolve: resolvers.Query.contributor,
  description: `Find an organization's contributor by its login.`,
}