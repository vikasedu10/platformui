import React from "react";
import { RoutingModule } from "./containers/RoutingModule";

function App() {
    console.log("################################")
    console.log("REACT_APP_PLATFORM_DNS_URL: ", process.env.REACT_APP_PLATFORM_DNS_URL)
    console.log("REACT_APP_DNS_URL: ", process.env.REACT_APP_DNS_URL)
    console.log("REACT_APP_KEYCLOAK_URL: ", process.env.REACT_APP_KEYCLOAK_URL)
    console.log("REACT_APP_KEYCLOAK_REALM_NAME: ", process.env.REACT_APP_KEYCLOAK_REALM_NAME)
    console.log("REACT_APP_KEYCLOAK_CLIENT_ID: ", process.env.REACT_APP_KEYCLOAK_CLIENT_ID)
    console.log("REACT_APP_NODE_ENV: ", process.env.REACT_APP_NODE_ENV)
    console.log("################################")
    return (
        <RoutingModule />
    );
}
export default App; 