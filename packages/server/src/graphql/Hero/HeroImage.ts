import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type HeroImage {
		url: String
	}
`;

export const resolvers = {
	// @ts-ignore
	image: async (parent) => {
		if (parent.image) {
			return parent.image;
		} else {
			return await fetch(
				`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${parent.id}/image`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.response === "success")
						return {
							...res,
						};

					throw new Error("Error occured during the request with SuperHeroAPI");
				});
		}
	},
};
