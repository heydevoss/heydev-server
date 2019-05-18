import { createTestClient } from 'apollo-server-testing';
import me from './api';
import expectedResponse from './expectedResults';
import testServer from '../../../testUtils/integration/serverFactory';

describe('User type tests', () => {
  it('me: User', async () => {
    const { query } = createTestClient(testServer);
    const response = await query({ query: me });
    expect(response.data).toEqual(expectedResponse);
  });
});
