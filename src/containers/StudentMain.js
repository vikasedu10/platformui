import React from 'react'

export const StudentMain = () => {
    console.log("################################")
    console.log("REACT_APP_PLATFORM_DNS_URL: ", process.env.REACT_APP_PLATFORM_DNS_URL)
    console.log("REACT_APP_DNS_URL: ", process.env.REACT_APP_DNS_URL)
    console.log("REACT_APP_KEYCLOAK_URL: ", process.env.REACT_APP_KEYCLOAK_URL)
    console.log("REACT_APP_KEYCLOAK_REALM_NAME: ", process.env.REACT_APP_KEYCLOAK_REALM_NAME)
    console.log("REACT_APP_KEYCLOAK_CLIENT_ID: ", process.env.REACT_APP_KEYCLOAK_CLIENT_ID)
    console.log("REACT_APP_NODE_ENV: ", process.env.REACT_APP_NODE_ENV)
    console.log("################################")
    return (
        <div className='inner-body'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-1'>
                    </div>
                    <div className='col-md-7'>
                        <h5 className='pt-4'>School students just sameple page</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}
