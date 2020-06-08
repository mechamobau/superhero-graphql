import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type HeroAppearance {
		gender: String
		race: String
		height: [String]
		weight: [String]
		eyeColor: String
		hairColor: String
	}
`;

export const resolvers = {
	// @ts-ignore
	appearance: async (parent) => {
		if (parent.appearance) {
			return {
				...parent.appearance,
				eyeColor: parent.appearance["eye-color"],
				hairColor: parent.appearance["hair-color"],
			};
		} else {
			return await fetch(
				`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${parent.id}/appearance`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.response === "success")
						return {
							...res,
							eyeColor: res["eye-color"],
							hairColor: res["hair-color"],
						};

					throw new Error("Error occured during the request with SuperHeroAPI");
				});
		}
	},
};
