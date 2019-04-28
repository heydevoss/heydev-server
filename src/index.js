import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import models from './models';

const app = express();
app.use(cors());

const server = new ApolloServer({
  schema: schema,
  context: {
    models,
    me: models.users[1]
  }
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 5000 }, () => {
  console.log('Apollo Server listening on http://localhost:5000/graphql');
});
