import React from 'react';
import './ColumnTitle.scss';

const ColumnTitle = props => {
    const OnChangeFunc = props.filterEmployeesByParam.filterEmployeesByParam
    const Key = props.filterEmployeesByParam.key;
    return (
        <div 
            className='column-title d-flex flex-column justify-content-center' 
            style={{width: props.widthPercent + '%'}}
        >
            <div style={{cursor: 'pointer'}} onClick={e => props.sortEmployeesByParam()}>{props.title}</div>
            <div>
                <input
                    className='form-control column-search'
                    onChange={e => OnChangeFunc(Key, e.currentTarget.value)}
                />
            </div>
        </div>
    );
}

export default ColumnTitle;