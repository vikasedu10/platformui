import React from 'react'

export const Popup = ({data_bs_target, title, leftButton, onClick, onCancel}) => {
    return (
        <div>
            
            <div class="modal fade" id="cluster_update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {title}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">{leftButton}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
