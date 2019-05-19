import fetchData from '../../github/dataFetcher';
import githubQueries from '../../github/queries';

const sumPullRequests = prs => {
  let sum = 0;
  prs.forEach(element => {
    sum += element.pullRequests.totalCount;
  });

  return sum;
}

const sumCommits = (commits) => {
  let sum = 0;

  commits.forEach(commit => {
    if (commit.object)
      sum += commit.object.history.totalCount;
  });

  return sum;
}

const sumIssues = (issues) => {
  let sum = 0;

  issues.forEach(issue => {
    sum += issue.issues.totalCount;
  });

  return sum;
}

export default {
  Query: {
    commits: async (parent, args, { token }) => {
      const pagination = 80;

      let body = githubQueries.totalCommitsOrganization(parent.login, pagination);
      let data = await fetchData(body, token);

      let hasNext = true;

      let totalCommits = 0;

      do {
        let repositories = data.data.repositoryOwner.repositories;

        const commits = repositories.nodes;
        const pageInfo = repositories.pageInfo;
        const cursor = pageInfo.endCursor;

        hasNext = pageInfo.hasNextPage;

        totalCommits += sumCommits(commits);

        if (hasNext) {
          body = githubQueries.totalCommitsOrganizationAfter(parent.login, pagination, cursor);
          data = await fetchData(body, token);
        }
      } while(hasNext);

      return totalCommits;
    },
    issues: async (parent, args, { token }) => {
      const pagination = 80;

      let body = githubQueries.totalIssuesOrganization(parent.login, pagination);
      let data = await fetchData(body, token);

      let hasNext = true;

      let totalIssues = 0;

      do {
        let repositories = data.data.repositoryOwner.repositories;

        const issues = repositories.nodes;
        const pageInfo = repositories.pageInfo;
        const cursor = pageInfo.endCursor;

        hasNext = pageInfo.hasNextPage;

        totalIssues += sumIssues(issues);

        if (hasNext) {
          body = githubQueries.totalIssuesOrganizationAfter(parent.login, pagination, cursor);
          data = await fetchData(body, token);
        }
      } while(hasNext);

      return totalIssues;
    },
    pullRequests : async (parent, args, { token }) => {
      const pagination = 80;

      let body = githubQueries.totalPROrganization(parent.login, pagination);
      let data = await fetchData(body, token);

      let hasNext = true;

      let totalPullRequests = 0;

      do {
        let repositories = data.data.repositoryOwner.repositories;

        const prs = repositories.nodes;
        const pageInfo = repositories.pageInfo;
        const cursor = pageInfo.endCursor;

        hasNext = pageInfo.hasNextPage;

        totalPullRequests += sumPullRequests(prs);

        if (hasNext) {
          body = githubQueries.totalPROrganizationAfter(parent.login, pagination, cursor);
          data = await fetchData(body, token);
        }
      } while (hasNext);

      return totalPullRequests;
    },
    organization: async (parent, args, { token }) => {
      const body = githubQueries.organization(args.login);
      const data = await fetchData(body, token);

      const org = data.data.repositoryOwner;

      return org
        ? {
            id: org.id,
            login: org.login,
            name: org.name,
            avatarUrl: org.avatarUrl,
            url: org.url,
            websiteUrl: org.websiteUrl,
            totalMembers: org.membersWithRole.totalCount,
            totalRepos: org.repositories.totalCount,
            totalTeams: org.teams.totalCount,
          }
        : null;
    },
  },
};
