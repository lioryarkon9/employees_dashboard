import React from 'react';

const TblActionIcon = props => {
    return (
        <div 
            style={{marginRight: 1 + '%'}} 
            className='tbl-action-icon'
        >
            <img alt='img' src={props.imgSrc} style={{width: 30 + 'px'}}/>
        </div>
    );
}

export default TblActionIcon;