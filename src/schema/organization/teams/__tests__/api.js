import gql from 'graphql-tag';
// TODO: test for two or more oganizations.

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
teams(maxNumberOfTeams: $maxNumberOfTeams) {
    id,
    name,
    slug,
    url,
    totalMembers,
    repoLogin
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
teams(maxNumberOfTeams: $maxNumberOfTeams) {
    name
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
teams(maxNumberOfTeams: $maxNumberOfTeams) {
    id,
    url
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
teams(maxNumberOfTeams: $maxNumberOfTeams) {
    slug,
    totalMembers,
    repoLogin
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
teams(maxNumberOfTeams: $maxNumberOfTeams){
    name,
    slug,
    totalMembers,
    repoLogin
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
teams(maxNumberOfTeams: $maxNumberOfTeams) {
    name,
    url,
    slug,
    totalMembers,
    repoLogin
}
`;

/**
 * Query for test the obtaining of all teams members atributtes
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {TeamMemberType} an object containing:
 *                   `id`
 *                   `login`
 *                    of the desired `team`
 * */
const teamsMembers = gql`
teamsMembers(maxNumberOfMembers: $maxNumberOfMembers) {
    id,
    login
}
`;

/**
 * Query for test the obtaining of one team member atributte
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {TeamMemberType} an object containing:
 *                   `login`
 *                    of the desired `team`
 * */
const teamsMembersLogin = gql`
teamsMembers(maxNumberOfMembers: $maxNumberOfMembers) {
    login
}
`;

/**
 * Query for test the obtaining of one team member atributte
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {TeamMemberType} an object containing:
 *                   `id`
 *                    of the desired `team`
 * */
const teamsMembersId = gql`
teamsMembers(maxNumberOfMembers: $maxNumberOfMembers) {
    id
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