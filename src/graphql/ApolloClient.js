import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "http://localhost:9091/goengine",
    cache: new InMemoryCache(),
});
