import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'OrganizationMember',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    role: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});