import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';

const OrganizationMemberType = new GraphQLObjectType({
  name: 'OrganizationMember',
  description: 'A user within an organization.',

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    role: { type: GraphQLString },
    url: { type: GraphQLString }
  })
});

export default OrganizationMemberType;

