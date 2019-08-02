import React from 'react';
import './AppHeader.scss';
import SETTINGS_ICON from '../../assets/settings.png';

const AppHeader = props => {
    return (
        <div id='app-header' className='d-flex justify-content-between align-items-center'>
            <div>
                <div id='main-title'>
                    EMPLOYEE
                </div>
                <div id='sub-title'>
                    Dcoya /Employee
                </div>
            </div>
            <div className='d-flex justify-content-around align-items-center action-icons'>
                <div>
                    <input id='app-search-input' className='form-control'/>
                </div>
                <div>
                    bell
                </div>
                <div>
                    <img alt='set' src={SETTINGS_ICON}/>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;