import gql from 'graphql-tag';

/**
 * Query for test the obtaining of all teams atributtes
 *
 * @param {int} maxNumberOfTeams max number of results from this query
 * @returns {TeamObject} an object containing:
 *                   `id`
 *                   `name`
 *                   `slug`
 *                   `url`
 *                   `totalMembers`
 *                   `repoLogin`
 *                   of the desired `organization`
 * */
const teams = gql`
  query teams($maxNumberOfTeams: Int!) {
    organization {
      teams(maxNumberOfTeams: $maxNumberOfTeams) {
        id
        name
        slug
        url
        totalMembers
        repoLogin
      }
    }
  }
`;

/**
 * Query for test the obtaining of one team atributte,
 * in this case, the name.
 *
 * @param {int} maxNumberOfTeams max number of results from this query
 * @returns {TeamObject} an object containing:
 *                   `name`
 *                   of the desired `organization`
 * */
const teamsName = gql`
  query teamsName($maxNumberOfTeams: Int!) {
    organization {
      teams(maxNumberOfTeams: $maxNumberOfTeams) {
        name
      }
    }
  }
`;

/**
 * Query for test the obtaining of two teams atributtes
 *
 * @param {int} maxNumberOfTeams max number of results from this query
 * @returns {TeamObject} an object containing:
 *                   `id`
 *                   `url`
 *                   of the desired `organization`
 * */
const teamsIdUrl = gql`
  query teamsIdUrl($maxNumberOfTeams: Int!) {
    organization {
      teams(maxNumberOfTeams: $maxNumberOfTeams) {
        id
        url
      }
    }
  }
`;

/**
 * Query for test the obtaining of three teams atributtes
 *
 * @param {int} maxNumberOfTeams max number of results from this query
 * @returns {TeamObject} an object containing:
 *                   `slug`
 *                   `totalMembers`
 *                   `repoLogin`
 *                   of the desired `organization`
 * */
const teamsSlugTotalMembersRepoLogin = gql`
  query teamsSlugTotalMembersRepoLogin($maxNumberOfTeams: Int!) {
    organization {
      teams(maxNumberOfTeams: $maxNumberOfTeams) {
        slug
        totalMembers
        repoLogin
      }
    }
  }
`;

/**
 * Query for test the obtaining of four team atributtes
 *
 * @param {int} maxNumberOfTeams max number of results from this query
 * @returns {TeamObject} an object containing:
 *                   `name`
 *                   `slug`
 *                   `totalMembers`
 *                   `repoLogin`
 *                   of the desired `organization`
 * */
const teamsNameSlugTotalMembersRepoLogin = gql`
  query teamsNameSlugTotalMembersRepoLogin($maxNumberOfTeams: Int!) {
    organization {
      teams(maxNumberOfTeams: $maxNumberOfTeams) {
        name
        slug
        totalMembers
        repoLogin
      }
    }
  }
`;

/**
 * Query for test the obtaining of five team atributtes
 *
 * @param {int} maxNumberOfTeams max number of results from this query
 * @returns {TeamObject} an object containing:
 *                   `name`
 *                   `url`
 *                   `slug`
 *                   `totalMembers`
 *                   `repoLogin`
 *                   of the desired `organization`
 * */
const teamsNameUrlSlugTotalMembersRepoLogin = gql`
  query teamsNameUrlSlugTotalMembersRepoLogin($maxNumberOfTeams: Int!) {
    organization {
      teams(maxNumberOfTeams: $maxNumberOfTeams) {
        name
        url
        slug
        totalMembers
        repoLogin
      }
    }
  }
`;

/**
 * Query for test the obtaining of all teams members atributtes
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {TeamMemberObject} an object containing:
 *                   `id`
 *                   `login`
 *                    of the desired `team`
 * */
const teamsMembers = gql`
  query teamsMembers($maxNumberOfTeams: Int!, $maxNumberOfMembers: Int!) {
    organization {
      teams(maxNumberOfTeams: $maxNumberOfTeams) {
        name
        members(maxNumberOfMembers: $maxNumberOfMembers) {
          id
          login
        }
      }
    }
  }
`;

/**
 * Query for test the obtaining of one team member atributte
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {TeamMemberObject} an object containing:
 *                   `login`
 *                    of the desired `team`
 * */
const teamsMembersLogin = gql`
  query teamsMembersLogin($maxNumberOfTeams: Int!, $maxNumberOfMembers: Int!) {
    organization {
      teams(maxNumberOfTeams: $maxNumberOfTeams) {
        name
        members(maxNumberOfMembers: $maxNumberOfMembers) {
          login
        }
      }
    }
  }
`;

/**
 * Query for test the obtaining of one team member atributte
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {TeamMemberObject} an object containing:
 *                   `id`
 *                    of the desired `team`
 * */
const teamsMembersId = gql`
  query teamsMembersId($maxNumberOfTeams: Int!, $maxNumberOfMembers: Int!) {
    organization {
      teams(maxNumberOfTeams: $maxNumberOfTeams) {
        name
        members(maxNumberOfMembers: $maxNumberOfMembers) {
          id
        }
      }
    }
  }
`;

export {
  teams,
  teamsName,
  teamsIdUrl,
  teamsSlugTotalMembersRepoLogin,
  teamsNameSlugTotalMembersRepoLogin,
  teamsNameUrlSlugTotalMembersRepoLogin,
  teamsMembers,
  teamsMembersLogin,
  teamsMembersId,
};
