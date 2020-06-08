import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type HeroConnections {
		groupAffiliation: String
		relatives: String
	}
`;

export const resolvers = {
	// @ts-ignore
	connections: async (parent) => {
		if (parent.connections) {
			return {
				...parent.connections,
				groupAffiliation: parent.connections["group-affiliation"],
			};
		} else {
			return await fetch(
				`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${parent.id}/connections`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.response === "success")
						return {
							...res,
							groupAffiliation: res["group-affiliation"],
						};

					throw new Error("Error occured during the request with SuperHeroAPI");
				});
		}
	},
};
