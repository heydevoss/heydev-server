import { createTestClient } from 'apollo-server-testing';
import { teams } from './api'
import { expectedResultTeams } from './expectedResults';
import testServer from '../../../../testUtils/integration/serverFactory'

const login = 'opendevufcg'
const maxNumberOfTeams = 10

describe('Team type tests', () => {
  it('teams: Team', async () => {
    const { query } = createTestClient(testServer);''
    const response = await query({ query: teams, variables: { login, maxNumberOfTeams }});
    expect(response.data).toEqual(expectedResultTeams);
  });
});