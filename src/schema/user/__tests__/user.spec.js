import { user } from './api';
import expectedResponse from './expectedResults'
import testServer from '../../../testUtils/integration/serverFactory'
import { createTestClient } from 'apollo-server-testing'

describe('User type tests', () => {
  it('me: User', async () => {
    const { query } = createTestClient(testServer);
    const response = await query({ query: user });
    expect(response.data).toEqual(expectedResponse)
  });
});
