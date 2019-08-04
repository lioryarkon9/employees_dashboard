import React from 'react';
import './SideBar.scss';
import SidebarItem from '../../components/SideBarItem';
import HOUSE_ICON from '../../assets/house.png';
import WEIRD1_ICON from '../../assets/weird1.png';
import SHARE_ICON from '../../assets/share.png';
import WEIRD2_ICON from '../../assets/weird2.png';
import SETTINGS_ICON from '../../assets/settings.png';
import SIDEBAR_DOC from '../../assets/sidebar_doc.png';


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
                    imgSrc={HOUSE_ICON}
                    title='DASHBOARD'
                />
                <SidebarItem
                    imgSrc={WEIRD1_ICON}
                    title='CAMPAIGNS'
                />
                <SidebarItem 
                    imgSrc={SHARE_ICON}
                    title='INSIGHTS'
                />
                <SidebarItem
                    imgSrc={WEIRD2_ICON}
                    title='REPORTS'
                />
                <SidebarItem
                    imgSrc={SETTINGS_ICON}
                    title='ADVANITIVE'
                />
                <SidebarItem
                    imgSrc={SIDEBAR_DOC}
                    title='TEMPLATES'
                />
            </div>
        </div>
    );
}

export default SideBar;