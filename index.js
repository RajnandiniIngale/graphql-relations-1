const { createYoga } = require('graphql-yoga');
const { createServer } = require('http');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { PrismaClient } = require('@prisma/client');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const prisma = new PrismaClient();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
  context: {
    prisma,
  },
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log('GraphQL server is running on http://localhost:4000');
});