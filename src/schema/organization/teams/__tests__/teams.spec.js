import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import * as expectedResult from './expectedResults';
import testServer from '../../../../testUtils/integration/serverFactory';
import getPropsFromList from '../../../../testUtils/integration/dataExtractor';

describe('Team type tests', () => {
  const maxNumberOfTeams = 10;
  const maxNumberOfMembers = 10;
  const teamsPath = ['organization', 'teams'];
  const { query } = createTestClient(testServer);

  it('teams: Team', async () => {
    const { data } = await query({
      query: queries.teams,
      variables: { maxNumberOfTeams },
    });
    expect(data).toEqual(expectedResult.teams);
  });

  it('teams { name }: Team', async () => {
    const { data } = await query({
      query: queries.teamsName,
      variables: { maxNumberOfTeams },
    });

    const expectedResultTeamsName = getPropsFromList(
      expectedResult.teams,
      teamsPath,
      ['name']
    );
    expect(data).toEqual(expectedResultTeamsName);
  });

  it('teams { id, url }: Team', async () => {
    const { data } = await query({
      query: queries.teamsIdUrl,
      variables: { maxNumberOfTeams },
    });

    const expectedResultTeamsIdUrl = getPropsFromList(
      expectedResult.teams,
      teamsPath,
      ['id', 'url']
    );
    expect(data).toEqual(expectedResultTeamsIdUrl);
  });

  it('teams { slug, totalMembers, repoLogin }: Team', async () => {
    const { data } = await query({
      query: queries.teamsSlugTotalMembersRepoLogin,
      variables: { maxNumberOfTeams },
    });

    const expectedResultTeamsSlugTotalMembersRepoLogin = getPropsFromList(
      expectedResult.teams,
      teamsPath,
      ['slug', 'totalMembers', 'repoLogin']
    );
    expect(data).toEqual(expectedResultTeamsSlugTotalMembersRepoLogin);
  });

  it('teams { name, slug, totalMembers, repoLogin }: Team', async () => {
    const { data } = await query({
      query: queries.teamsNameSlugTotalMembersRepoLogin,
      variables: { maxNumberOfTeams },
    });

    const expectedResultTeamsNameSlugTotalMembersRepoLogin = getPropsFromList(
      expectedResult.teams,
      teamsPath,
      ['name', 'slug', 'totalMembers', 'repoLogin']
    );
    expect(data).toEqual(expectedResultTeamsNameSlugTotalMembersRepoLogin);
  });

  it('teams { name, url, slug, totalMembers, repoLogin }: Team', async () => {
    const { data } = await query({
      query: queries.teamsNameUrlSlugTotalMembersRepoLogin,
      variables: { maxNumberOfTeams },
    });

    const expectedResultTeamsNameUrlSlugTotalMembersRepoLogin = getPropsFromList(
      expectedResult.teams,
      teamsPath,
      ['name', 'url', 'slug', 'totalMembers', 'repoLogin']
    );
    expect(data).toEqual(expectedResultTeamsNameUrlSlugTotalMembersRepoLogin);
  });

  it('teams { name, members { id, login } }: Team', async () => {
    const { data } = await query({
      query: queries.teamsMembers,
      variables: { maxNumberOfTeams, maxNumberOfMembers },
    });

    expect(data).toEqual(expectedResult.teamsMembers);
  });

  it('teams { name, members { login } }: Team', async () => {
    const { data } = await query({
      query: queries.teamsMembersLogin,
      variables: { maxNumberOfTeams, maxNumberOfMembers },
    });

    expect(data).toEqual(expectedResult.teamsMembersLogin);
  });

  it('teams { name, members { id } }: Team', async () => {
    const { data } = await query({
      query: queries.teamsMembersId,
      variables: { maxNumberOfTeams, maxNumberOfMembers },
    });

    expect(data).toEqual(expectedResult.teamsMembersId);
  });
});
