import gql from 'graphql-tag';
// TODO: test for two or more oganizations.

/**
 * Query for test the obtaining of all repositories atributtes
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `id`
 *                   `name`
 *                   `viewerCanAdminister`
 *                   `totalOpenIssues`
 *                   `totalStars`
 *                   of the desired `organization`
 * */
const repositories = gql`
repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
    id,
    name,
    viewerCanAdminister,
    totalForks,
    totalOpenIssues,
    totalStars
}
`;

/**
 * Query for test the obtaining of one repositories atributte
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `name`
 *                   of the desired `organization`
 * */
const repositoriesName = gql`
repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
    name
}
`;

/**
 * Query for test the obtaining of two repositories atributtes
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `name`
 *                   `viewerCanAdminister`
 *                   of the desired `organization`
 * */
const repositoriesNameViewerCanAdminister = gql`
repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
    name,
    viewerCanAdminister,
}
`;

/**
 * Query for test the obtaining of three repositories atributtes
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `id`
 *                   `totalOpenIssues`
 *                   `totalStars`
 *                   of the desired `organization`
 * */
const repositoriesIdTotalOpenIssuesTotalStars = gql`
repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
    id,
    totalOpenIssues,
    totalStars
}
`;

/**
 * Query for test the obtaining of four repositories atributtes
 *
 * @param {int} maxNumberOfRepositories max number of results from this query
 * @returns {RepositoryObject} an object containing:
 *                   `id`
 *                   `name`
 *                   `totalOpenIssues`
 *                   `totalStars`
 *                   of the desired `organization`
 * */
const repositoriesIdNameTotalOpenIssuesTotalStars = gql`
repositories(maxNumberOfRepositories: $maxNumberOfRepositories) {
    id,
    name,
    totalOpenIssues,
    totalStars
}
`;

export {
    repositories,
    repositoriesName,
    repositoriesNameViewerCanAdminister,
    repositoriesIdTotalOpenIssuesTotalStars,
    repositoriesIdNameTotalOpenIssuesTotalStars
};