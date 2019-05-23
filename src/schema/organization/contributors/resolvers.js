import fetchData from '../../../github/dataFetcher';
import githubQueries from '../../../github/queries';

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
const process = (repositories) => {
  const contributors = new ContributorSet();

  repositories.forEach(repository => {
    repository.mentionableUsers.nodes.forEach(user => {
      contributors.add(user);
    });
  });
  
  return Array.from(contributors.values());
};

export default {
  Query: {
    contributors: async (parent, args, { token }) => {
      const start = Date.now();
      const { first, last, after, before } = args;
      const { id: orgID } = parent;

      const repoArgs = { first: parent.totalRepos }; 
      const userArgs = { first };

      const body = githubQueries.contributors(parent, repoArgs, userArgs);
      const data = await fetchData(body, token);
      console.log(data);
      var contributorsArray = process(data.data.organization.repositories.nodes);
      contributorsArray.length = first;
      const end = Date.now();
      console.log((end - start) / 1000.0);
      return contributorsArray;
    },
  },
};