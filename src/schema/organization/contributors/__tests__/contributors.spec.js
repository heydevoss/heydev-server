import * as queries from './api';
import * as expectedResult from './expectedResults'
import testServer from '../../../../testUtils/integration/serverFactory'
import { createTestClient } from 'apollo-server-testing'
import { getPropsFromList } from '../../../../testUtils/integration/dataExtractor';

describe('Contributor type tests', () => {
  const login = 'panelinhadees';
  const contributorsPath = ['organization', 'contributors'];
  const { query } = createTestClient(testServer);
  
  it('contributors(first: 1) : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOne,
      variables: { login },
    });

    const expected = expectedResult.contributors;
    expected.organization.contributors.length = 1;
    expect(data).toEqual(expected);
  });

  it('contributors(first: 1) { id } : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOneID,
      variables: { login },
    });

    const queryExpected = expectedResult.contributors;
    queryExpected.organization.contributors.length = 1;
    
    const expected = getPropsFromList(queryExpected, contributorsPath, ['id']);
    expect(data).toEqual(expected);
  });

  it('contributors(first: 1) { name } : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOneName,
      variables: { login },
    });

    const queryExpected = expectedResult.contributors;
    queryExpected.organization.contributors.length = 1;
    
    const expected = getPropsFromList(queryExpected, contributorsPath, ['name']);
    expect(data).toEqual(expected);
  });

  it('contributors(first: 1) { login } : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOneLogin,
      variables: { login },
    });

    const queryExpected = expectedResult.contributors;
    queryExpected.organization.contributors.length = 1;
    
    const expected = getPropsFromList(queryExpected, contributorsPath, ['login']);
    expect(data).toEqual(expected);
  });

  it('contributors(first: 1) { email } : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOneEmail,
      variables: { login },
    });

    const queryExpected = expectedResult.contributors;
    queryExpected.organization.contributors.length = 1;
    
    const expected = getPropsFromList(queryExpected, contributorsPath, ['email']);
    expect(data).toEqual(expected);
  });

  it('contributors(first: 1) { websiteUrl } : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOneWebsiteUrl,
      variables: { login },
    });

    const queryExpected = expectedResult.contributors;
    queryExpected.organization.contributors.length = 1;
    
    const expected = getPropsFromList(queryExpected, contributorsPath, ['websiteUrl']);
    expect(data).toEqual(expected);
  });

  it('contributors(first: 1) { location } : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOneLocation,
      variables: { login },
    });

    const queryExpected = expectedResult.contributors;
    queryExpected.organization.contributors.length = 1;
    
    const expected = getPropsFromList(queryExpected, contributorsPath, ['location']);
    expect(data).toEqual(expected);
  });

  it('contributors(first: 1) { bio } : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOneBio,
      variables: { login },
    });

    const queryExpected = expectedResult.contributors;
    queryExpected.organization.contributors.length = 1;
    
    const expected = getPropsFromList(queryExpected, contributorsPath, ['bio']);
    expect(data).toEqual(expected);
  });

  it('contributors(first: 1) { firstContributionDate } : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOneFirstContributionDate,
      variables: { login },
    });

    const queryExpected = expectedResult.contributors;
    queryExpected.organization.contributors.length = 1;
    
    const expected = getPropsFromList(queryExpected, contributorsPath, ['firstContributionDate']);
    expect(data).toEqual(expected);
  });

  it('contributors(first: 4) : Contributor', async () => {
    const { data } = await query({
      query: queries.contributorsFirstOne,
      variables: { login },
    });

    const expected = expectedResult.contributors;
    expect(data).toEqual(expected);
  });
});
