import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import expectedResultOrganizationData from './expectedResults';
import testServer from '../../../e2eHelpers/serverFactory';
import getPropsFromList from '../../../e2eHelpers/dataExtractor';

describe('Organization type tests', () => {
  const { query } = createTestClient(testServer);
  const organizationPath = [];

  it('organization: Organization', async () => {
    const { data } = await query({
      query: queries.organizationData,
    });
    expect(data).toEqual(expectedResultOrganizationData);
  });

  it('organization: { id }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationId,
    });

    const organizationIdExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['id']
    );

    expect(data).toEqual(organizationIdExpectedResult);
  });

  it('organization: { login }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationLogin,
    });

    const organizationLoginExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['login']
    );

    expect(data).toEqual(organizationLoginExpectedResult);
  });

  it('organization: { name }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationName,
    });

    const organizationNameExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['name']
    );

    expect(data).toEqual(organizationNameExpectedResult);
  });

  it('organization: { websiteUrl }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationWebsiteUrl,
    });

    const organizationWebsiteUrlExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['websiteUrl']
    );

    expect(data).toEqual(organizationWebsiteUrlExpectedResult);
  });

  it('organization: { totalMembers }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationTotalMembers,
    });

    const organizationTotalMembersExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['totalMembers']
    );

    expect(data).toEqual(organizationTotalMembersExpectedResult);
  });

  it('organization: { totalRepos }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationTotalRepos,
    });

    const organizationTotalReposExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['totalRepos']
    );

    expect(data).toEqual(organizationTotalReposExpectedResult);
  });

  it('organization: { totalTeams }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationTotalTeams,
    });

    const organizationTotalTeamsExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['totalTeams']
    );

    expect(data).toEqual(organizationTotalTeamsExpectedResult);
  });

  it('organization: { totalPullRequests }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationTotalPullRequests,
    });

    const organizationTotalPullRequestsExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['totalPullRequests']
    );

    expect(data).toEqual(organizationTotalPullRequestsExpectedResult);
  });

  it('organization: { totalIssues }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationTotalIssues,
    });

    const organizationTotalIssuesExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['totalIssues']
    );

    expect(data).toEqual(organizationTotalIssuesExpectedResult);
  });

  it('organization: { totalCommits }: Organization', async () => {
    const { data } = await query({
      query: queries.organizationTotalCommits,
    });

    const organizationTotalCommitsExpectedResult = getPropsFromList(
      expectedResultOrganizationData,
      organizationPath,
      ['totalCommits']
    );

    expect(data).toEqual(organizationTotalCommitsExpectedResult);
  });
});
