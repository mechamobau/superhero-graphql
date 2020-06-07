import { resolvers as heroResolvers } from "./Hero/Hero";

const resolvers = {
	...heroResolvers,

	Query: {
		...heroResolvers.Query,
	},
};

export default resolvers;
