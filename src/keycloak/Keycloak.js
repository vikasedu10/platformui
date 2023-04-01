import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080/auth',
    realm: 'keycloak-cac-platform',
    clientId: 'react-auth',
    // onLoad: 'login-required',
});

export default keycloak;