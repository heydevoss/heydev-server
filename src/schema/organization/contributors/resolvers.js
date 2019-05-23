import fetchData from '../../../github/dataFetcher';
import githubQueries from '../../../github/queries';
import { getOldestDate } from '../../../utils';

/**
 * @class A variant of Set, which the difference is on the equality condition of objects
 */
export class ContributorSet {
  constructor() {
      this.map = new Map();
      this[Symbol.iterator] = this.values;
  }

  add(item) {
    this.map.set(item.login, item);
  }

  values() {
      return this.map.values();
  }

  delete(item) {
      return this.map.delete(item.login);
  }
}

/**
 * Process the repositories array to leave only the information the schema needs.
 * @param {Array} repositories 
 * @return processed repositories array
 */
const processContributors = (repositories) => {
  const contributors = new ContributorSet();

  repositories.forEach(repository => {
    repository.mentionableUsers.nodes.forEach(user => contributors.add(user));
  });
  
  return Array.from(contributors.values());
};

/**
 * Process the user object and returns the Date of the first contribution or undefined
 * if the user has no contributions.
 * @param {Object} user 
 * @return {Date} first contribution date
 */
const processFirstContributionDate = (user) => {
  if (user) {
    const issuesNodes = user.contributionsCollection.issueContributions.nodes;
    const pullRequestsNodes = user.contributionsCollection.pullRequestContributions.nodes;
    const reviewsNodes = user.contributionsCollection.pullRequestReviewContributions.nodes;
    const contributions = [issuesNodes, pullRequestsNodes, reviewsNodes];

    const dates = [];
    contributions.forEach(contribution => {
      if (contribution && contribution.length > 0) {
        let firstContrib = contribution[0].occurredAt;
        dates.push(new Date(firstContrib)); 
      }
    });

    let result = undefined;
    if (dates.length > 0)
      result = getOldestDate(dates);
    return result;
  }
}

const firstContributionDateResolver = async(parent, args, { token }) => {
  const { login } = args;
  const body = githubQueries.firstContributionDate(login, parent.id);
  const data = await fetchData(body, token);

  const result = processFirstContributionDate(data.data.user);
  return result;
}

const validateLogin = async (login, orgID, token) => {
  const body = githubQueries.isContributor(login, orgID);
  const data = await fetchData(body, token);
  const { user } = data.data;
  const isValid = (user && user.contributionsCollection.hasAnyContributions);
  return isValid;
}

export default {
  Query: {
    contributors: async (parent, args, { token }) => {
      const { first, last, after, before } = args;

      const repoArgs = { first: parent.totalRepos }; 
      const userArgs = { first };

      const body = githubQueries.contributors(parent, repoArgs, userArgs);
      const data = await fetchData(body, token);
      
      const contributorsArray = processContributors(data.data.organization.repositories.nodes);
      contributorsArray.length = first;
      return contributorsArray;
    },
    contributor: async (parent, args, { token }, info) => {
      const { login } = args;
      const isValidLogin = await validateLogin(login, parent.id, token);

      if (isValidLogin) {
        const body = githubQueries.contributor(login);
        const data = await fetchData(body, token);
        const contributor = data.data.user;
  
        const { fieldNodes } = info;
        const rootFields = (fieldNodes.filter(node => node.name.value == 'contributor')).pop();
        const fields = rootFields.selectionSet.selections.map(node => node.name.value);
  
        if (fields.includes('firstContributionDate')) {
          contributor.firstContributionDate = firstContributionDateResolver(parent, args, { token });
        }

        return contributor;
      } else {
        throw new Error(`User '${login}' may not be a GitHub User or a Contributor.`);
      }
    },
  },
};
