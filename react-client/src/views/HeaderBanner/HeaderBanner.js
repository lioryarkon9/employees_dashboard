import React from 'react';
import './HeaderBanner.scss';
import BannerItem from '../../components/BannerItem';
import IDEA_ICON from '../../assets/idea.png';
import DOCUMENT_ICON from '../../assets/document.png';
import CLOCK_ICON from '../../assets/clock.png';
import ENVELOPE_OPEN from '../../assets/envelope_open.png';
import ENVELOPE_CLOSED from '../../assets/envelope_closed.png';

const HeaderBanner = props => {
    return (
        <div id='header-banner' className='d-flex'>
            <div 
                style={{borderRight: 1 + 'px solid #eceff1'}}
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc={IDEA_ICON}
                    figure="1000"
                    headline="Headline1"
                />
            </div>
            <div 
                style={{borderRight: 1 + 'px solid #eceff1'}}
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc={DOCUMENT_ICON}
                    figure="837"
                    headline="Headline2"
                />
            </div>
            <div 
                style={{borderRight: 1 + 'px solid #eceff1'}}
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc={CLOCK_ICON}
                    figure="342"
                    headline="Headline3"
                />
            </div>
            <div 
                style={{borderRight: 1 + 'px solid #eceff1'}}
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc={ENVELOPE_OPEN}
                    figure="473"
                    headline="Headline4"
                />
            </div>
            <div 
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc={ENVELOPE_CLOSED}
                    figure="123"
                    headline="Headline5"
                />
            </div>
        </div>
    );
}

export default HeaderBanner;