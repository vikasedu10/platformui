import React from 'react'

export const SidenavParent = () => {
    return (
        <div className="offcanvas offcanvas-start" style={{ maxWidth: "250px" }} tabIndex="-1" id="side-nav" aria-labelledby="sidenav">
            <div className="offcanvas-header">
                <div className='d-flex justify-content-between'>
                    <span className="navbar-toggler-icon text-white" aria-hidden="true"></span>
                    <h5 className="offcanvas-title" id="sidenav">Offcanvas</h5>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div className="dropdown mt-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        <li><span className="dropdown-item">Action</span></li>
                        <li><span className="dropdown-item">Another action</span></li>
                        <li><span className="dropdown-item">Something else here</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
