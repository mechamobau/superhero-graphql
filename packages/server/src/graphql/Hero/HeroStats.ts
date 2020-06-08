import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type HeroStats {
		intelligence: String
		strength: String
		speed: String
		durability: String
		power: String
		combat: String
	}
`;

export const resolvers = {
	// @ts-ignore
	powerstats: async (parent) => {
		if (!parent.powerstats) {
			return await fetch(
				`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${parent.id}/powerstats`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.response === "success") return res;

					throw new Error("Error occured during the request with SuperHeroAPI");
				});
		} else {
			return parent.powerstats;
		}
	},
};
