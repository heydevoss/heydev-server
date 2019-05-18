import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const UserType =  new GraphQLObjectType({
  name: 'User',
  description: 'An individual account on GitHub that owns repositories and can make new content.',

  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    bio: { type: GraphQLString },
    email: { type: GraphQLString },
    totalRepos: { type: GraphQLInt }
  })
});

export default UserType;