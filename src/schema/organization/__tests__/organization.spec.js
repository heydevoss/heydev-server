import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import * as expectedResults from './expectedResults';
import testServer from '../../../testUtils/integration/serverFactory';

describe('Organization type tests', () => {
  const login = 'panelinhadees';
  const { query } = createTestClient(testServer);

  it('organization: { totalPullRequests }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalPullRequests,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationTotalPullRequests);
  });

  it('organization: { totalIssues }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalIssues,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationTotalIssues);
  });

  it('organization: { totalCommits }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalCommits,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationTotalCommits);
  });
})