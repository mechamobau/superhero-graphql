import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type HeroWork {
		occupation: String
		base: String
	}
`;

export const resolvers = {
	// @ts-ignore
	work: async (parent) => {
		if (!parent.work) {
			return await fetch(
				`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${parent.id}/work`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.response === "success") return res;

					throw new Error("Error occured during the request with SuperHeroAPI");
				});
		} else {
			return parent.work;
		}
	},
};
