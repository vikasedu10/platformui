import React from 'react'

export const Filter = () => {
    return (
        <>
            <div class="offcanvas offcanvas-end" tabIndex="-1" id="filterData" aria-labelledby="filterDataLabel">
                <div class="offcanvas-header">
                    <h6 class="offcanvas-title" id="filterDataLabel">Filter</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body my-2 mx-2">
                    Filter
                </div>
            </div>
        </>
    )
}
