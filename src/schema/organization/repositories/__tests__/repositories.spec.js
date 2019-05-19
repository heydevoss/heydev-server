import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import * as expectedResult from './expectedResults';
import testServer from '../../../../testUtils/integration/serverFactory';
import { getPropFromList } from '../../../../testUtils/integration/dataExtractor';

describe('Repository type tests', () => {
  const login = 'panelinhadees'
  const maxNumberOfRepositories = 4;
  const { query } = createTestClient(testServer);

  it('repositories: Repository', async () => {
    const { data } = await query({
      query: queries.repositories,
      variables: { login, maxNumberOfRepositories },
    });
    expect(data).toEqual(expectedResult.repositories);
  });

  it('repositories: { name }: Repository', async () => {
    const { data } = await query({
      query: queries.repositoriesName,
      variables: { login, maxNumberOfRepositories },
    });
    const expectedResultRepositoriesName = getPropFromList(
      expectedResult.repositories,
      ['organization', 'repositories'],
      ['name']
    );
    expect(data).toEqual(expectedResultRepositoriesName);
  });

  it('repositories: { name, viewerCanAdminister }: Repository', async () => {
    const { data } = await query({
      query: queries.repositoriesNameViewerCanAdminister,
      variables: { login, maxNumberOfRepositories },
    });
    const expectedResultRepositoriesNameViewerCanAdminister = getPropFromList(
      expectedResult.repositories,
      ['organization', 'repositories'],
      ['name', 'viewerCanAdminister']
    );
    expect(data).toEqual(expectedResultRepositoriesNameViewerCanAdminister);
  });

  it('repositories: { totalForks, totalOpenIssues, totalStars }: Repository', async () => {
    const { data } = await query({
      query: queries.repositoriesTotalForksTotalOpenIssuesTotalStars,
      variables: { login, maxNumberOfRepositories },
    });
    const expectedResultRepositoriesTotalForksTotalOpenIssuesTotalStars = getPropFromList(
      expectedResult.repositories,
      ['organization', 'repositories'],
      ['totalForks', 'totalOpenIssues', 'totalStars']
    );
    expect(data).toEqual(
      expectedResultRepositoriesTotalForksTotalOpenIssuesTotalStars
    );
  });

  it('repositories: { id, totalForks, totalOpenIssues, totalStars }: Repository', async () => {
    const { data } = await query({
      query: queries.repositoriesIdTotalForksTotalOpenIssuesTotalStars,
      variables: { login, maxNumberOfRepositories },
    });
    const expectedResultRepositoriesIdTotalForksTotalOpenIssuesTotalStars = getPropFromList(
      expectedResult.repositories,
      ['organization', 'repositories'],
      ['id', 'totalForks', 'totalOpenIssues', 'totalStars']
    );
    expect(data).toEqual(
      expectedResultRepositoriesIdTotalForksTotalOpenIssuesTotalStars
    );
  });
});
