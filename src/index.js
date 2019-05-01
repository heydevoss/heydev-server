import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

import { ApolloServer } from 'apollo-server-express';

import authRouter from './auth/route';

import schema from './schema';
import config from './auth/data';

const app = express();
app.use(cors());
app.use(cookieParser());
app.use('/auth', authRouter);

const server = new ApolloServer({
  schema: schema,
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    if (!token) {
      throw new Error("An authentication token is required!");
    }

    return {
      token
    };
  }
});

server.applyMiddleware({ app, path: '/graphql' });

const { port } = config.host;

app.listen({ port }, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
