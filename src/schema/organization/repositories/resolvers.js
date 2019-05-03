import fetchData from '../../../model/githubDataFetcher';
import githubQueries from '../../../model/githubQueries';

const addReposToArray = (repos, reposArray) => {
  repos.forEach((repo) => {
    const repoName = repo.nameWithOwner;
    const repoId = repo.id;
    const repoForks = repo.forkCount;
    const repoViewerAdmin = repo.viewerCanAdminister;
    const repoIssues = repo.issues.totalCount;
    const repoStars = repo.stargazers.totalCount;

    reposArray.push({
      id: repoId,
      name: repoName,
      viewerCanAdminister: repoViewerAdmin,
      totalForks: repoForks,
      totalOpenIssues: repoIssues,
      totalStars: repoStars
    });
  });
}

export default {
  Query: {
    repositories: async (parent, args, { token }) => {
      const login = parent.login;
      const pagination = args.maxNumberOfRepositories;
      const reposArray = [];

      const body = githubQueries.organizationRepositories(login, pagination);
      const data = await fetchData(body, token);

      const repos = data.data.repositoryOwner.repositories.nodes;
      addReposToArray(repos, reposArray);

      return reposArray;
    },
  }
}