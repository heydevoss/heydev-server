import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import * as expectedResult from './expectedResults';
import testServer from '../../../../e2eHelpers/serverFactory';
import getPropsFromList from '../../../../e2eHelpers/dataExtractor';

describe('Repository type tests', () => {
  const maxNumberOfRepositories = 5;
  const repositoriesPath = ['organization', 'repositories'];
  const { query } = createTestClient(testServer);

  it('repositories: Repository', async () => {
    const { data } = await query({
      query: queries.repositories,
      variables: { maxNumberOfRepositories },
    });
    expect(data).toEqual(expectedResult.repositories);
  });

  it('repositories: { name }: Repository', async () => {
    const { data } = await query({
      query: queries.repositoriesName,
      variables: { maxNumberOfRepositories },
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
      variables: { maxNumberOfRepositories },
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
      variables: { maxNumberOfRepositories },
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
      variables: { maxNumberOfRepositories },
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

  it('repositories { totalCommits }: Repository', async () => {
    const { data } = await query({
      query: queries.repositoriesTotalCommits,
      variables: { maxNumberOfRepositories },
    });

    expect(data).toEqual(expectedResult.repositoriesTotalCommits);
  });
});
