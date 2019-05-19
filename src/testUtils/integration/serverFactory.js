import 'dotenv/config';

import { ApolloServer } from 'apollo-server-express';
import schema from '../../schema'
import config from '../../config'

const testServer = new ApolloServer({
    schema,
    context: ({ req }) => {
        const token = `Bearer ${ config.test.token }`
        return { token }
    }
});

export default testServer;