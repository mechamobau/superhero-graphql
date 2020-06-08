import { gql } from "apollo-server-express";

import { typeDefs as heroTypeDefs } from "./Hero/Hero";

const typeDefs = gql`
	type Query {
		_root: String
	}

	${heroTypeDefs}
`;

export default typeDefs;
