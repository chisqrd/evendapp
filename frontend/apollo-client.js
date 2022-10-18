import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/chisqrd/events-at-thirty-day",
  cache: new InMemoryCache(),
});

export default client;