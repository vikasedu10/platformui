import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { SearchModal } from './SearchModal';

export const TopNavbar = () => {
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [searchText, setSearchText] = useState("");
    const handleSearchChange = (e) => {
        const text = e.target.value;
        if (text.length > 0) {
            setShowSearchModal(true);
        } else {
            setShowSearchModal(false);
        }
        setSearchText(text);
    };
    const [showLoader, setShowLoader] = useState(false);
    const { keycloak, initialized } = useKeycloak();
    console.log(initialized,showLoader);
    useEffect(() => {
        setShowLoader(true);
    }, [keycloak]);

    const SearchForm = <input value={searchText} className="search-form-input form-control me-2 mr-sm-2 my-1" onChange={handleSearchChange} id="search-input" type="search" placeholder="Search: Alt+/" aria-label="Search across siksha" />
    // if (showLoader) return <span>Loading...</span>
    return (
        <><nav className="navbar sticky-top navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">

                <ul className="navbar-nav ml-auto me-auto" data-bs-toggle="offcanvas" href="#side-nav" role="button" aria-controls="offcanvasExample">
                    <li className="nav-item">
                        <span className="nav-link active" aria-current="page">
                            <span className="navbar-toggler-icon" aria-hidden="true"></span>
                        </span>
                    </li>
                </ul>
                <NavLink to={{ pathname: "/platform" }} className="navbar-brand" href="#">
                    <strong className='px-2'>Siksha</strong>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto me-auto">
                        <ul className="ms-auto navbar-nav ml-auto me-auto">
                            <li className="nav-item">
                                <NavLink to={{ pathname: "/school" }} className="nav-link" href="#">School</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={{ pathname: "/secured" }} className="nav-link" href="#">Contact</NavLink>
                            </li>
                        </ul>
                    </ul>
                    <form className={`d-flex col-${showSearchModal !== true ? "3" : "5"}`} role="search">
                        {SearchForm}
                    </form>
                    <div className="spinner-border text-light spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <ul className="ms-auto navbar-nav me-auto ml-auto">
                        <li className="nav-item">
                            <NavLink to={{ pathname: "/school" }} className="nav-link">School</NavLink>
                        </li>
                        <li className="nav-item dropdown dropstart">
                            <span className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user nav-fa-user"></i>

                            </span>
                            <ul className="dropdown-menu my-4">
                                <li><h6 className="dropdown-header">Account Information</h6></li>
                                {!!keycloak.authenticated && (
                                    <><li className="d-flex px-2">
                                        <div className="ms-auto">
                                            <i style={{ fontSize: "28px" }} className="icon-navbar fa-solid fa-circle-user"></i>
                                        </div>
                                        <div className="container-fluid">
                                            <strong>({keycloak.tokenParsed.preferred_username})</strong>
                                        </div>
                                    </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button onClick={() => keycloak.logout()} className="dropdown-item" href="#">Logout ({keycloak.tokenParsed.preferred_username})</button></li></>
                                )}
                                {!keycloak.authenticated && (
                                    <li><button onClick={() => keycloak.login()} className="dropdown-item" href="#">Login</button></li>

                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <SearchModal />
        </nav></>
    )
}
