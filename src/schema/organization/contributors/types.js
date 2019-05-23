import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';

const ContributorType = new GraphQLObjectType({
  name: 'Contributor',
  description:
    'An individual account on GitHub that owns repositories and can make new content.',

  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    bio: { type: GraphQLString },
    email: { type: GraphQLString },
    websiteUrl: { type: GraphQLString },
  })
});

export default ContributorType;
