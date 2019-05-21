import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import * as expectedResults from './expectedResults';
import testServer from '../../../testUtils/integration/serverFactory';

describe('Organization type tests', () => {
  const login = 'panelinhadees';
  const { query } = createTestClient(testServer);

  it('organization: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationData,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationData);
  });

  it('organization: { id }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationId,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationId);
  });

  it('organization: { login }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationLogin,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationLogin);
  });

  it('organization: { name }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationName,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationName);
  });

  it('organization: { websiteUrl }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationWebsiteUrl,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationWebsiteUrl);
  });

  it('organization: { totalMembers }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalMembers,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationTotalMembers);
  });

  it('organization: { totalRepos }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalRepos,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationTotalRepos);
  });

  it('organization: { totalTeams }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalTeams,
      variables: { login },
    }));
    expect(data).toEqual(expectedResults.organizationTotalTeams);
  });

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