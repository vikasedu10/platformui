import React from 'react'

export const Filter = () => {
    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="filterData" aria-labelledby="filterDataLabel">
                <div className="offcanvas-header">
                    <h6 className="offcanvas-title" id="filterDataLabel">Filter</h6>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body my-2 mx-2">
                    Filter
                </div>
            </div>
        </>
    )
}
