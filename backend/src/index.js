
import { GraphQLServer, PubSub } from 'graphql-yoga';
import mongo from './mongo.js';
import db from './db.js';
import Query from './resolvers/Query.js';
import Mutation  from './resolvers/Mutation.js';
// import Subscription from './resolvers/Subscription.js';
import User from './resolvers/User.js';
import Post from './resolvers/Post.js';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    // Subscription,
    User,
    Post
  },
  context: {db, pubsub}
})

mongo.connect();
server.start({ port: process.env.PORT | 8000 }, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT | 8000}!`);
});


