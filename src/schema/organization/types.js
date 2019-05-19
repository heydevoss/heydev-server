import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import members from './members/queries';
import repositories from './repositories/queries';
import teams from './teams/queries';

const OrganizationType = new GraphQLObjectType({
  name: 'Organization',
  description:
    'An account on GitHub, with one or more owners, that has repositories, members and teams.',

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    avatarUrl: { type: GraphQLString },
    url: { type: GraphQLString },
    websiteUrl: { type: GraphQLString },
    totalMembers: { type: GraphQLInt },
    totalRepos: { type: GraphQLInt },
    totalTeams: { type: GraphQLInt },
    teams,
    members,
    repositories,
  }),
});

export default OrganizationType;
