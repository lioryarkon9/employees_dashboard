import React from 'react';
import './SideBar.scss';
import SidebarItem from '../../components/SideBarItem';

const SideBar = props => {
    return (
        <div id='side-bar'>
            <div id='org-brand-container' className='d-flex align-items-center'>
                <div id='brand-icon' className='d-flex justify-content-center'>BRAND</div>
                <div id='menu-icon' className='flex-fill d-flex justify-content-center'>
                    &#9776;
                </div>
            </div>
            <div id='options-container'>
                <SidebarItem
                    title='DASHBOARD'
                />
                <SidebarItem
                    title='CAMPAIGNS'
                />
                <SidebarItem 
                    title='INSIGHTS'
                />
                <SidebarItem
                    title='REPORTS'
                />
                <SidebarItem
                    title='ADVANITIVE'
                />
                <SidebarItem
                    title='TEMPLATES'
                />
            </div>
        </div>
    );
}

export default SideBar;