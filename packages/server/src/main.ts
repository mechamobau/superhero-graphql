import { ApolloServer } from "apollo-server-express";

import { DocumentNode } from "graphql";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

import express from "express";

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const app = express();

const server = new ApolloServer({
	// @ts-ignore
	typeDefs: typeDefs as DocumentNode,
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
