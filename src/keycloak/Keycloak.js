import Keycloak from 'keycloak-js';
const KEYCLOAK_REALM_NAME = process.env.REACT_APP_KEYCLOAK_REALM_NAME
const KEYCLOAK_CLIENT_ID = process.env.REACT_APP_KEYCLOAK_CLIENT_ID
const KEYCLOAK_URL = process.env.REACT_APP_KEYCLOAK_URL
const keycloak = new Keycloak({
    url: `${KEYCLOAK_URL}`,
    realm: `${KEYCLOAK_REALM_NAME}`,
    clientId: `${KEYCLOAK_CLIENT_ID}`,
    
    // url: 'http://localhost:8080/auth',
    // realm: 'keycloak-platform',
    // clientId: 'react-auth',
    // onLoad: 'login-required',
});

export default keycloak;