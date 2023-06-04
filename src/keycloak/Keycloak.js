import Keycloak from 'keycloak-js';
const KEYCLOAK_REALM_NAME = process.env.KEYCLOAK_REALM_NAME
const KEYCLOAK_CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID
const KEYCLOAK_URL = process.env.KEYCLOAK_URL
const keycloak = new Keycloak({
    url: `${KEYCLOAK_URL}`,
    realm: `${KEYCLOAK_REALM_NAME}`,
    clientId: `${KEYCLOAK_CLIENT_ID}`,
    
    // url: 'http://localhost:8080/auth',
    // realm: 'keycloak-cac-platform',
    // clientId: 'react-auth',
    // onLoad: 'login-required',
});

export default keycloak;