import { ApolloClient, InMemoryCache } from "@apollo/client";

const a = 12;
export const client = new ApolloClient({
    uri: "http://cacplatformapi-service.default.svc.cluster.local:9091/goengine",
    cache: new InMemoryCache(),
});
