import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import * as expectedResult from './expectedResults';
import testServer from '../../../../testUtils/integration/serverFactory';
import { getPropsFromList } from '../../../../testUtils/integration/dataExtractor';

describe('Repository type tests', () => {
  const login = 'panelinhadees'
  const maxNumberOfRepositories = 4;
  const repositoriesPath =  ['organization', 'repositories'];
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

    const expectedResultRepositoriesName = getPropsFromList(
      expectedResult.repositories,
      repositoriesPath,
      ['name']
    );
    expect(data).toEqual(expectedResultRepositoriesName);
  });

  it('repositories: { name, viewerCanAdminister }: Repository', async () => {
    const { data } = await query({
      query: queries.repositoriesNameViewerCanAdminister,
      variables: { login, maxNumberOfRepositories },
    });

    const expectedResultRepositoriesNameViewerCanAdminister = getPropsFromList(
      expectedResult.repositories,
      repositoriesPath,
      ['name', 'viewerCanAdminister']
    );
    expect(data).toEqual(expectedResultRepositoriesNameViewerCanAdminister);
  });

  it('repositories: { totalForks, totalOpenIssues, totalStars }: Repository', async () => {
    const { data } = await query({
      query: queries.repositoriesTotalForksTotalOpenIssuesTotalStars,
      variables: { login, maxNumberOfRepositories },
    });

    const expectedResultRepositoriesTotalForksTotalOpenIssuesTotalStars = getPropsFromList(
      expectedResult.repositories,
      repositoriesPath,
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

    const expectedResultRepositoriesIdTotalForksTotalOpenIssuesTotalStars = getPropsFromList(
      expectedResult.repositories,
      repositoriesPath,
      ['id', 'totalForks', 'totalOpenIssues', 'totalStars']
    );
    expect(data).toEqual(
      expectedResultRepositoriesIdTotalForksTotalOpenIssuesTotalStars
    );
  });
});
