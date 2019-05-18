import gql from 'graphql-tag';
// TODO: test for two or more oganizations.

/**
 * Query for test the obtaining of all team atributtes
 *
 * @param {int} maxNumberOfTeams max number of results from this query
 * @returns {TeamObject} an object containing:
 *                   `id`
 *                   `name`
 *                   `slug`
 *                   `url`
 *                   `totalMembers`
 *                   `repoLogin`
 *                   the desired `organization`
 * */
const teams = gql`
teams(maxNumberOfTeams: $maxNumberOfTeams){
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
 *                   the desired `organization`
 * */
const teamsName = gql`
teams(maxNumberOfTeams: $maxNumberOfTeams){
    name
}
`;

/**
 * Query for test the obtaining of two team atributtes
 *
 * @param {int} maxNumberOfTeams max number of results from this query
 * @returns {TeamObject} an object containing:
 *                   `id`
 *                   `url`
 *                   the desired `organization`
 * */
const teamsIdUrl = gql`
teams(maxNumberOfTeams: $maxNumberOfTeams){
    name
}
`;

/**
 * Query for test the obtaining of three team atributtes
 *
 * @param {int} maxNumberOfTeams max number of results from this query
 * @returns {TeamObject} an object containing:
 *                   `slug`
 *                   `totalMembers`
 *                   `repoLogin`
 *                   the desired `organization`
 * */
const teamsSlugTotalMembersRepoLogin = gql`
teams(maxNumberOfTeams: $maxNumberOfTeams){
    name
}
`;

/**
 * Query for test the obtaining of all members atributtes
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {TeamMemberType} an object containing:
 *                   `id`
 *                   `login`
 *                    of the desired `team`
 * */
const teamsMembers = gql`
teamsMembers(maxNumberOfMembers: $maxNumberOfMembers){
    id,
    login
}
`;

/**
 * Query for test the obtaining of one member atributte
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {TeamMemberType} an object containing:
 *                   `login`
 *                    of the desired `team`
 * */
const teamsMembersLogin = gql`
teamsMembers(maxNumberOfMembers: $maxNumberOfMembers){
    login
}
`;

/**
 * Query for test the obtaining of one member atributte
 *
 * @param {int} maxNumberOfMembers max number of results from this query
 * @returns {TeamMemberType} an object containing:
 *                   `id`
 *                    of the desired `team`
 * */
const teamsMembersId = gql`
teamsMembers(maxNumberOfMembers: $maxNumberOfMembers){
    id
}
`;

export {
    teams,
    teamsName,
    teamsIdUrl,
    teamsSlugTotalMembersRepoLogin,
    teamsMembers,
    teamsMembersLogin,
    teamsMembersId,
};