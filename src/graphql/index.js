import { ApolloServer, PubSub } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
import typeDefs from "./schema";
import resolvers from "./resolvers/";

const pubsub = new PubSub();
const prisma = new PrismaClient();

export default new ApolloServer({
    typeDefs,
    resolvers,
    context: (req) => {
        return {
            ...req,
            prisma,
            pubsub,
        };
    },
    playground: true,
    introspection: true,
});
