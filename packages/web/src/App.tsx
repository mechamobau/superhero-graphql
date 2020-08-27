import React from "react";

import { ApolloProvider as GraphQLProvider } from "@apollo/client";
import client from "./plugins/apollo/client";
import Home from "./pages/Home/Home";

function App() {
	return (
		<GraphQLProvider client={client}>
			<Home />
		</GraphQLProvider>
	);
}

export default App;
