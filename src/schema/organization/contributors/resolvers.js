import fetchData from '../../../github/dataFetcher';
import githubQueries from '../../../github/queries';
import { GeneralSet, getOldestDate } from '../../../utils'

/**
 * Process the repositories array to leave only the information the schema needs.
 * @param {Array} repositories 
 * @return processed repositories array
 */
const process = (repositories) => {
  const contributors = new GeneralSet();

  repositories.forEach(repository => {
    repository.mentionableUsers.nodes.forEach(user => {
      const firstPullRequest = user.contributionsCollection.pullRequestContributions.nodes[0];
      const firstIssue = user.contributionsCollection.issueContributions.nodes[0];
      const firstReview = user.contributionsCollection.pullRequestReviewContributions.nodes[0];

      let currentDate = undefined;

      if (firstPullRequest || firstIssue || firstReview) {
        const firstContributions = [firstPullRequest, firstIssue, firstReview];
        const dates = [];
        
        firstContributions.forEach(contribution => {
          if (contribution) dates.push(contribution.firstContributionDate);
        });

        currentDate = getOldestDate(dates);
      }

      user.contributionsCollection = undefined;
      user.firstContributionDate = currentDate;
      contributors.add(user);
    });
  });
  
  return Array.from(contributors.values());
};

export default {
  Query: {
    contributors: async (parent, args, { token }) => {
      const { first, last, after, before } = args;
      const { id: orgID } = parent;
      
      // TODO: Fazer outra consulta se totalRepos > 100
      const repoArgs = { first: parent.totalRepos }; 
      const userArgs = { first };

      // TODO: Otimizar verificando o número de contribuidores obtidos por iteração em repositorio
      // caso a quantidade já passe de `first`, paramos de iterar.
      const body = githubQueries.contributors(parent, repoArgs, userArgs);
      const data = await fetchData(body, token);

      let contributorsArray = process(data.data.organization.repositories.nodes);
      contributorsArray.length = first;
      return contributorsArray;
    },
  },
};