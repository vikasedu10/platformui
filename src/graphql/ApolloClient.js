import { ApolloClient, InMemoryCache } from "@apollo/client";

const DNS_URL = process.env.REACT_APP_PLATFORM_DNS_URL
export const client = new ApolloClient({
    uri: `${DNS_URL}`,
    cache: new InMemoryCache(),
});
