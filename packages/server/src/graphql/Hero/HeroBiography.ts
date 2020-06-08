import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type HeroBiography {
		fullName: String
		alterEgos: String
		aliases: [String]
		placeOfBirth: String
		firstAppearance: String
		publisher: String
		alignment: String
	}
`;

export const resolvers = {
	// @ts-ignore
	biography: async (parent) => {
		if (parent.biography) {
			return {
				...parent.biography,
				fullName: parent.biography["full-name"],
				alterEgos: parent.biography["alter-egos"],
				placeOfBirth: parent.biography["place-of-birth"],
				publisher: parent.biography["first-appearance"],
				firstAppearance: parent.biography["first-appearance"],
			};
		} else {
			return await fetch(
				`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${parent.id}/biography`
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.response === "success")
						return {
							...res,
							fullName: res["full-name"],
							alterEgos: res["alter-egos"],
							placeOfBirth: res["place-of-birth"],
							publisher: res["first-appearance"],
							firstAppearance: res["first-appearance"],
						};

					throw new Error("Error occured during the request with SuperHeroAPI");
				});
		}
	},
};
