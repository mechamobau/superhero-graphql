import { gql } from "apollo-server-express";

import { typeDefs as heroTypeDefs } from "./Hero/Hero";

const typeDefs = gql`
	type Query {
		__root: string
	}

	${heroTypeDefs}
`;

export default typeDefs;
