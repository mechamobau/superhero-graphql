import { gql } from "apollo-server-express";

import fetch from "node-fetch";

export const typeDefs = gql`
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
		id: Int!
	}

	extend type Query {
		hero(input: HeroInput): Hero
		# heroImage(input: HeroInput): HeroImage
		# heroWork(input: HeroInput): HeroWork
		# heroConnections(input: HeroInput): HeroConnections
		# heroAppearance(input: HeroInput): HeroAppearance
		# heroStats(input: HeroInput): HeroStats
		# heroBiography(input: HeroInput): HeroBiography
	}
`;

export const resolvers = {
	Query: {
		// @ts-ignore
		hero: async (_, { input }) => {
			return await fetch(
				`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${input.id}`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.response === "success") return res;

					throw new Error("Error occured during the request with SuperHeroAPI");
				});
		},
	},
};
