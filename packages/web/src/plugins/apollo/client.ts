import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * The Apollo client instance
 */
const client = new ApolloClient({
	uri: "https://localhost:8000",
	cache: new InMemoryCache(),
});

export default client;
