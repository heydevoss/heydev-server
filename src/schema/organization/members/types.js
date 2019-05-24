import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const OrganizationMemberType = new GraphQLObjectType({
  name: 'OrganizationMember',
  description: 'A user within an organization.',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Member ID.',
    },
    name: {
      type: GraphQLString,
      description: 'Member name.',
    },
    login: {
      type: GraphQLString,
      description: 'Member login.',
    },
    role: {
      type: GraphQLString,
      description: 'The role this member has in the organization.',
    },
    url: {
      type: GraphQLString,
      description: 'The HTTP URL for this member.',
    },
  }),
});

export default OrganizationMemberType;
