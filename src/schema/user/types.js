import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  description:
    'An individual account on GitHub that owns repositories and can make new content.',

  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    totalRepos: { type: GraphQLInt },
  }),
});

export default UserType;
