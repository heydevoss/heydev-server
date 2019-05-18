import gql from 'graphql-tag';
// TODO: test for two or more oganizations.

/**
 * Query for test the obtaining of all members atributtes
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {OrganizationMemberObject} an object containing:
 *                   `id`
 *                   `name`
 *                   `login`
 *                   `role`
 *                   `url`
 *                   of the desired `organization`
 * */
const members = gql`
  query members($login: String!, $maxNumberOfMembers: Int!) {
    organization(login: $login) {
      members(maxNumberOfMembers: $maxNumberOfMembers) {
        id
        name
        login
        role
        url
      }
    }
  }
`;

/**
 * Query for test the obtaining of one member atributte
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {OrganizationMemberObject} an object containing:
 *                   `name`
 *                   of the desired `organization`
 * */
const membersName = gql`
  query membersName($login: String!, $maxNumberOfMembers: Int!) {
    organization(login: $login) {
      members(maxNumberOfMembers: $maxNumberOfMembers) {
        name
      }
    }
  }
`;

/**
 * Query for test the obtaining of two members atributtes
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {OrganizationMemberObject} an object containing:
 *                   `id`
 *                   `login`
 *                   of the desired `organization`
 * */
const membersIdLogin = gql`
  query membersIdLogin($login: String!, $maxNumberOfMembers: Int!) {
    organization(login: $login) {
      members(maxNumberOfMembers: $maxNumberOfMembers) {
        id
        login
      }
    }
  }
`;

/**
 * Query for test the obtaining of three members atributtes
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {OrganizationMemberObject} an object containing:
 *                   `login`
 *                   `role`
 *                   `url`
 *                   of the desired `organization`
 * */
const membersLoginRoleUrl = gql`
  query membersLoginRoleUrl($login: String!, $maxNumberOfMembers: Int!) {
    organization(login: $login) {
      members(maxNumberOfMembers: $maxNumberOfMembers) {
        role
        login
        url
      }
    }
  }
`;

/**
 * Query for test the obtaining of four members atributtes
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {OrganizationMemberObject} an object containing:
 *                   `name`
 *                   `login`
 *                   `role`
 *                   `url`
 *                   of the desired `organization`
 * */
const membersNameLoginRoleUrl = gql`
  query membersNameLoginRoleUrl($login: String!, $maxNumberOfMembers: Int!) {
    organization(login: $login) {
      members(maxNumberOfMembers: $maxNumberOfMembers) {
        name
        login
        role
        url
      }
    }
  }
`;

export {
  members,
  membersName,
  membersIdLogin,
  membersLoginRoleUrl,
  membersNameLoginRoleUrl,
};
