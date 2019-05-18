import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import * as expectedResult from './expectedResults';
import testServer from '../../../../testUtils/integration/serverFactory';

describe('Team type tests', () => {
  const login = 'opendevufcg';
  const maxNumberOfTeams = 10;
  const maxNumberOfMembers = 10;
  const { query } = createTestClient(testServer);

  it('teams: Team', async () => {
    const { data } = await query({
      query: queries.teams,
      variables: { login, maxNumberOfTeams },
    });
    expect(data).toEqual(expectedResult.teams);
  });

  it('teams { name }: Team', async () => {
    const { data } = await query({
      query: queries.teamsName,
      variables: { login, maxNumberOfTeams },
    });
    expect(data).toEqual(expectedResult.teamsName);
  });

  it('teams { id, url }: Team', async () => {
    const { data } = await query({
      query: queries.teamsIdUrl,
      variables: { login, maxNumberOfTeams },
    });
    expect(data).toEqual(expectedResult.teamsIdUrl);
  });

  it('teams { slug, totalMembers, repoLogin }: Team', async () => {
    const { data } = await query({
      query: queries.teamsSlugTotalMembersRepoLogin,
      variables: { login, maxNumberOfTeams },
    });
    expect(data).toEqual(expectedResult.teamsSlugTotalMembersRepoLogin);
  });

  it('teams { name, slug, totalMembers, repoLogin }: Team', async () => {
    const { data } = await query({
      query: queries.teamsNameSlugTotalMembersRepoLogin,
      variables: { login, maxNumberOfTeams },
    });
    expect(data).toEqual(expectedResult.teamsNameSlugTotalMembersRepoLogin);
  });

  it('teams { name, url, slug, totalMembers, repoLogin }: Team', async () => {
    const { data } = await query({
      query: queries.teamsNameUrlSlugTotalMembersRepoLogin,
      variables: { login, maxNumberOfTeams },
    });
    expect(data).toEqual(expectedResult.teamsNameUrlSlugTotalMembersRepoLogin);
  });

  it('teams { name, members { id, login } }: Team', async () => {
    const { data } = await query({
      query: queries.teamsMembers,
      variables: { login, maxNumberOfTeams, maxNumberOfMembers },
    });
    expect(data).toEqual(expectedResult.teamsMembers);
  });

  it('teams { name, members { login } }: Team', async () => {
    const { data } = await query({
      query: queries.teamsMembersLogin,
      variables: { login, maxNumberOfTeams, maxNumberOfMembers },
    });
    expect(data).toEqual(expectedResult.teamsMembersLogin);
  });

  it('teams { name, members { id } }: Team', async () => {
    const { data } = await query({
      query: queries.teamsMembersId,
      variables: { login, maxNumberOfTeams, maxNumberOfMembers },
    });
    expect(data).toEqual(expectedResult.teamsMembersId);
  });
});
