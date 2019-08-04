import React from 'react';
import './SideBarItem.scss';

const SideBarItem = props => {
    return (
        <div className='d-flex align-items-center sidebar-item'>
            <div className='d-flex justify-content-center icon-container'>
                ICON
            </div>
            <div className='sidebar-item-title flex-fill'>
                {props.title}
            </div>
        </div>
    );
}

export default SideBarItem