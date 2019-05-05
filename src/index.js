import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import authRouter from './auth/route';

import schema from './schema';
import config from './config';

function validateToken(token) {
  return token && token.split(' ')[0].toLowerCase() === 'bearer';
}

const app = express();
app.use(cors());
app.use(cookieParser());
app.use('/auth', authRouter);

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    if (!validateToken(token)) {
      throw new AuthenticationError(
        'This endpoint requires you to be authenticated.'
      );
    }

    return { token };
  },
});

server.applyMiddleware({ app, path: '/graphql' });

const { port } = config.host;

app.listen({ port }, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
