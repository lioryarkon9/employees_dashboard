import React from 'react';
import './AddEmpBtn.scss';

const AddEmpBtn = props => {
    return (
        <div id='add-emp-btn-container'>
            <div 
                id='add-emp-icon-cropper'
                onClick={e => props.toggleNewEmpModal()}
            >
                <div 
                    id='add-emp-icon' 
                    className='d-flex justify-content-center align-items-center'
                >
                    +
                </div>
            </div>
        </div>
    );
}

export default AddEmpBtn;