import me from './api';
import { me as expectedResponse} from './expectedResults'
import schema from '../../index';
import { createTestClient } from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server-express';

const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const token =  'Bearer ${token}';
      return { token };
    }
});

describe('User type tests', () => {
  it('me: User', async () => {
    const { query } = createTestClient(server);
    const response = query({ query: me });
    expect(response).toEqual(response)
  });
});







