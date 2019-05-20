import * as queries from './api';
import * as expectedResults from './expectedResults';
import testServer from '../../../../testUtils/integration/serverFactory';
import { createTestClient } from 'apollo-server-testing';

describe('Repository type tests', () => {
  const login = 'opendevufcg';
  const maxNumberOfRepositories = 10;
  const { query } = createTestClient(testServer);

  it('repositories { totalCommits }: Repository', async () => {
    const { data } = await query({
      query: queries.repositoriesTotalCommits,
      variables: { login, maxNumberOfRepositories },
    });

    expect(data).toEqual(expectedResults.repositoriesTotalCommits);
  });
});