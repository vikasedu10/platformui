import React from "react";
import { RoutingModule } from "./containers/RoutingModule";

function App() {
    console.log("################################")
    console.log("DNS_URL: ", process.env.DNS_URL)
    console.log("KEYCLOAK_URL: ", process.env.KEYCLOAK_URL)
    console.log("KEYCLOAK_REALM_NAME: ", process.env.KEYCLOAK_REALM_NAME)
    console.log("KEYCLOAK_CLIENT_ID: ", process.env.KEYCLOAK_CLIENT_ID)
    console.log("################################")
    return (
        <RoutingModule />
    );
}
export default App; 