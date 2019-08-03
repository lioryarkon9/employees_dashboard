import React from 'react';
import './ColumnTitle.scss';

const ColumnTitle = props => {
    return (
        <div 
            className='column-title d-flex flex-column justify-content-center' 
            style={{width: props.widthPercent + '%'}}
        >
            <div>{props.title}</div>
            <div>
                <input
                    className='form-control column-search'
                />
            </div>
        </div>
    );
}

export default ColumnTitle;