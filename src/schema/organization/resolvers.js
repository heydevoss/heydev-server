import fetchData from '../../github/dataFetcher';
import githubQueries from '../../github/queries';

const sumIssues = (issues) => {
  let sum = 0;

  issues.forEach(issue => {
    sum += issue.issues.totalCount;
  });

  return sum;
}

export default {
  Query: {
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
    organization: async (parent, args, { token }) => {
      const body = githubQueries.organization(args.login);
      const data = await fetchData(body, token);

      const org = data.data.repositoryOwner;

      return (org) ? {
        id: org.id,
        login: org.login,
        name: org.name,
        avatarUrl: org.avatarUrl,
        url: org.url,
        websiteUrl: org.websiteUrl,
        totalMembers: org.membersWithRole.totalCount,
        totalRepos: org.repositories.totalCount,
        totalTeams: org.teams.totalCount,
      } : null;
    }
  }
}