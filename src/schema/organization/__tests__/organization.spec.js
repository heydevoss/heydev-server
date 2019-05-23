import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import * as expectedResults from './expectedResults';
import testServer from '../../../testUtils/integration/serverFactory';
import { getPropsFromList } from '../../../testUtils/integration/dataExtractor';

describe('Organization type tests', () => {
  const { query } = createTestClient(testServer);
  const organizationPath = [];

  it('organization: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationData,
    }));
    expect(data).toEqual(expectedResults.organizationData);
  });

  it('organization: { id }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationId,
    }));

    const organizationIdExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['id'],
    );

    expect(data).toEqual(organizationIdExpectedResult);
  });

  it('organization: { login }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationLogin,
    }));

    const organizationLoginExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['login'],
    );
    
    expect(data).toEqual(organizationLoginExpectedResult);
  });

  it('organization: { name }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationName,
    }));
    
    const organizationNameExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['name'],
    );
    
    expect(data).toEqual(organizationNameExpectedResult);
  });

  it('organization: { websiteUrl }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationWebsiteUrl,
    }));
    
    const organizationWebsiteUrlExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['websiteUrl'],
    );
    
    expect(data).toEqual(organizationWebsiteUrlExpectedResult);
  });

  it('organization: { totalMembers }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalMembers,
    }));
    
    const organizationTotalMembersExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['totalMembers'],
    );
    
    expect(data).toEqual(organizationTotalMembersExpectedResult);
  });

  it('organization: { totalRepos }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalRepos,
    }));
    
    const organizationTotalReposExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['totalRepos'],
    );
    
    expect(data).toEqual(organizationTotalReposExpectedResult);
  });

  it('organization: { totalTeams }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalTeams,
    }));
    
    const organizationTotalTeamsExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['totalTeams'],
    );
    
    expect(data).toEqual(organizationTotalTeamsExpectedResult);
  });

  it('organization: { totalPullRequests }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalPullRequests,
    }));
    
    const organizationTotalPullRequestsExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['totalPullRequests'],
    );
    
    expect(data).toEqual(organizationTotalPullRequestsExpectedResult);
  });

  it('organization: { totalIssues }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalIssues,
    }));
    
    const organizationTotalIssuesExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['totalIssues'],
    );
    
    expect(data).toEqual(organizationTotalIssuesExpectedResult);
  });

  it('organization: { totalCommits }: Organization', async () => {
    const { data } = await(query({
      query: queries.organizationTotalCommits,
    }));
    
    const organizationTotalCommitsExpectedResult = getPropsFromList(
      expectedResults.organizationData,
      organizationPath,
      ['totalCommits'],
    );
    
    expect(data).toEqual(organizationTotalCommitsExpectedResult);
  });
})