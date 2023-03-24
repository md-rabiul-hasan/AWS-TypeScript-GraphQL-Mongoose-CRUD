import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import connectDB from './database/connection.js';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';
import serverless from 'serverless-http';

const app = express();

app.use(cors());


connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

export const handler = serverless(app);
