import { ApolloServer, gql } from "apollo-server-express";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

import express from "express";

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.applyMiddleware({
	app,
	cors: {
		origin: "http://localhost:3000",
	},
	bodyParserConfig: true,
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

app.listen({ port: PORT, hostName: HOSTNAME }, () => {
	console.log(`🚀  Server ready`);
});
