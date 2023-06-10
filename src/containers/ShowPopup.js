import React from 'react'
import { NavLink } from 'react-router-dom'

export const ShowPopup = ({ rightButton, title, id, handleRightButtonClick, to, popupButtonType }) => {
    return (
        <>
            {popupButtonType}
            <div className="modal fade p-2" data-bs-keyboard="false" data-bs-backdrop="static" id={id} tabIndex="-1" aria-labelledby={`${id}-label}`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            {title}
                        </div>
                        <div className="modal-footer p-2">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                            <NavLink className="btn btn-danger btn-sm" to={{pathname:`${to}`,}} state={{ key:"value"}} type="button" onClick={handleRightButtonClick}>{rightButton}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}
