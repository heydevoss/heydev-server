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
    id: {
      type: GraphQLID,
      description: 'Logged user ID.',
    },
    login: {
      type: GraphQLString,
      description: 'Logged user username used to login.',
    },
    name: {
      type: GraphQLString,
      description: 'Logged user name.',
    },
    location: {
      type: GraphQLString,
      description: `The logged user's public profile location.`,
    },
    bio: {
      type: GraphQLString,
      description: `The logged user's public profile bio.`,
    },
    email: {
      type: GraphQLString,
      description: `The logged user's publicly visible profile email.`,
    },
    websiteUrl: {
      type: GraphQLString,
      description: `A URL pointing to the logged user's public website.`,
    },
    avatarUrl: {
      type: GraphQLString,
      description: `The logged user's profile picture (avatar) URL.`,
    },
    totalRepos: {
      type: GraphQLInt,
      description: `The logged user's total number of repositories.`,
    },
  }),
});

export default UserType;
