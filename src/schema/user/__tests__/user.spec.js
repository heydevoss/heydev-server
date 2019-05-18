import * as queries from './api';
import * as expectedResponse from './expectedResults'
import testServer from '../../../testUtils/integration/serverFactory'
import { createTestClient } from 'apollo-server-testing'

describe('User type tests', () => {
  const { query } = createTestClient(testServer);
  
  it('me: User', async () => {
    const response = await query({ query: queries.user });
    expect(response.data).toEqual(expectedResponse.user);
  });
  
  it('me { name } : User', async () => {
    const response = await query({ query: queries.userName });
    expect(response.data).toEqual(expectedResponse.userName);
  });

  it('me { location } : User', async () => {
    const response = await query({ query: queries.userLocation });
    expect(response.data).toEqual(expectedResponse.userLocation);
  });

  it('me { bio } : User', async () => {
    const response = await query({ query: queries.userBio });
    expect(response.data).toEqual(expectedResponse.userBio);
  });
});







