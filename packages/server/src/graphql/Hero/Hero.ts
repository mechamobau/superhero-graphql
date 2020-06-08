import { gql } from "apollo-server-express";

import fetch from "node-fetch";

import {
	typeDefs as heroAppearanceTypeDefs,
	resolvers as heroAppearanceResolvers,
} from "./HeroAppearance";
import {
	typeDefs as heroBiographyTypeDefs,
	resolvers as heroBiographyResolvers,
} from "./HeroBiography";
import {
	typeDefs as heroConnectionsTypeDefs,
	resolvers as heroConnectionsResolvers,
} from "./HeroConnections";
import {
	typeDefs as heroWorkTypeDefs,
	resolvers as heroWorkTypeResolvers,
} from "./HeroWork";
import {
	typeDefs as heroImageTypeDefs,
	resolvers as heroImageResolvers,
} from "./HeroImage";
import {
	typeDefs as heroStatsTypeDefs,
	resolvers as heroStatsResolvers,
} from "./HeroStats";

export const typeDefs = gql`
	${heroAppearanceTypeDefs}

	${heroStatsTypeDefs}

	${heroBiographyTypeDefs}

	${heroWorkTypeDefs}

	${heroConnectionsTypeDefs}

	${heroImageTypeDefs}

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

	type SearchHero {
		results: [Hero]!
		error: String
	}

	input HeroInput {
		id: Int!
	}

	extend type Query {
		hero(input: HeroInput!): Hero
		searchHero(name: String!): SearchHero!
	}
`;

export const resolvers = {
	Hero: {
		...heroAppearanceResolvers,
		...heroBiographyResolvers,
		...heroConnectionsResolvers,
		...heroWorkTypeResolvers,
		...heroImageResolvers,
		...heroStatsResolvers,
	},
	Query: {
		// @ts-ignore
		hero: async (_, { input }) => {
			return await fetch(
				`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${input.id}/image`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.response === "success")
						return {
							id: res.id,
							name: res.name,
						};
					throw new Error("Error occured during the request with SuperHeroAPI");
				});
		},
		// @ts-ignore
		searchHero: async (_, { name }) => {
			return await fetch(
				`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/search/${name}`
			)
				.then((res) => res.json())
				// @ts-ignore
				.then((res) => {
					if (res.response === "success") {
						return {
							results: res.results,
						};
					} else if (res.response === "error") {
						return {
							results: [],
							error: res.error,
						};
					}
				});
		},
	},
};
