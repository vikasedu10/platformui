import { ApolloClient, InMemoryCache } from "@apollo/client";

const DNS_URL = process.env.REACT_APP_NODE_ENV !== "production" ? "http://localhost:9091/goengine" : process.env.REACT_APP_PLATFORM_DNS_URL
console.log("DNSURL", DNS_URL)
export const client = new ApolloClient({
    uri: `${DNS_URL}`,
    cache: new InMemoryCache(),
});
