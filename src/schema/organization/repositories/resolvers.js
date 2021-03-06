import fetchData from '../../../github/dataFetcher';
import githubQueries from '../../../github/queries';

const addReposToArray = (repos, reposArray) => {
  repos.forEach(repo => {
    const repoName = repo.nameWithOwner;
    const repoId = repo.id;
    const repoForks = repo.forkCount;
    const repoViewerAdmin = repo.viewerCanAdminister;
    const repoIssues = repo.issues.totalCount;
    const repoPullRequests = repo.pullRequests.totalCount;
    const repoStars = repo.stargazers.totalCount;

    const numberofCommits = repo.object.history.totalCount;

    reposArray.push({
      id: repoId,
      name: repoName,
      viewerCanAdminister: repoViewerAdmin,
      totalForks: repoForks,
      totalOpenIssues: repoIssues,
      totalOpenPullRequests: repoPullRequests,
      totalStars: repoStars,
      totalCommits: numberofCommits,
    });
  });
};

export default {
  Query: {
    repositories: async (parent, args, { token }) => {
      const { login } = parent;
      const pagination = args.maxNumberOfRepositories;
      const reposArray = [];

      const body = githubQueries.organizationRepositories(login, pagination);
      const data = await fetchData(body, token);

      const repos = data.data.repositoryOwner.repositories.nodes;
      addReposToArray(repos, reposArray);

      return reposArray;
    },
  },
};
