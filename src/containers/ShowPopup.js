import React from 'react'
import { NavLink } from 'react-router-dom'

export const ShowPopup = ({ rightButton, title, id, handleRightButtonClick, to, popupButtonType }) => {
    return (
        <>
            {popupButtonType}
            <div class="modal fade p-2" data-bs-keyboard="false" data-bs-backdrop="static" id={id} tabIndex="-1" aria-labelledby={`${id}-label}`} aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            {title}
                        </div>
                        <div class="modal-footer p-2">
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                            <NavLink className="btn btn-danger btn-sm" to={{pathname:`${to}`,}} state={{ key:"value"}} type="button" onClick={handleRightButtonClick}>{rightButton}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}
