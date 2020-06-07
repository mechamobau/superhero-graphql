import { ApolloServer, gql } from "apollo-server-express";

import express from "express";

const typeDefs = gql`
	type HeroAppearance {
		gender: String
		race: String
		height: [String]
		weight: [String]
		eyeColor: String
		hairColor: String
	}

	type HeroStats {
		intelligence: String
		strength: String
		speed: String
		durability: String
		power: String
		combat: String
	}

	type HeroBiography {
		fullName: String
		alterEgos: String
		aliases: [String]
		placeOfBirth: String
		firstAppearance: String
		publisher: String
		alignment: String
	}

	type HeroWork {
		occupation: String
		base: String
	}

	type HeroConnections {
		groupAffiliation: String
		relatives: String
	}

	type HeroImage {
		url: String
	}

	type Hero {
		id: ID
		name: String
		powerstats: HeroStats
		biography: HeroBiography
		appearance: HeroAppearance
		work: HeroWork
		connections: HeroConnections
		image: HeroImage
	}

	input HeroInput {
		id: Number!
	}

	type Query {
		hero(input: HeroInput): Hero
		# heroImage(input: HeroInput): HeroImage
		# heroWork(input: HeroInput): HeroWork
		# heroConnections(input: HeroInput): HeroConnections
		# heroAppearance(input: HeroInput): HeroAppearance
		# heroStats(input: HeroInput): HeroStats
		# heroBiography(input: HeroInput): HeroBiography
	}
`;

const resolvers = {
	Query: {
		hero: () => null,
	},
};

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
