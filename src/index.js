import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { client } from "./graphql/ApolloClient";
import { ApolloProvider } from "@apollo/client";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak/Keycloak";
const root = createRoot(document.getElementById("root"));

root.render(
    <ReactKeycloakProvider authClient={keycloak}>
        <React.StrictMode>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </React.StrictMode>
    </ReactKeycloakProvider>

)
if (module.hot && process.env.REACT_APP_NODE_ENV !== "production") {
    module.hot.accept();
}