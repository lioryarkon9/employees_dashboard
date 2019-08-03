import React from 'react';
import './HeaderBanner.scss';
import BannerItem from '../../components/BannerItem';

const HeaderBanner = props => {
    return (
        <div id='header-banner' className='d-flex'>
            <div 
                style={{borderRight: 1 + 'px solid #eceff1'}}
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc=""
                    figure="1000"
                    headline="Headline1"
                />
            </div>
            <div 
                style={{borderRight: 1 + 'px solid #eceff1'}}
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc=""
                    figure="837"
                    headline="Headline2"
                />
            </div>
            <div 
                style={{borderRight: 1 + 'px solid #eceff1'}}
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc=""
                    figure="342"
                    headline="Headline3"
                />
            </div>
            <div 
                style={{borderRight: 1 + 'px solid #eceff1'}}
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc=""
                    figure="473"
                    headline="Headline4"
                />
            </div>
            <div 
                className='flex-fill d-flex justify-content-center'
            >
                <BannerItem
                    imgSrc=""
                    figure="123"
                    headline="Headline5"
                />
            </div>
        </div>
    );
}

export default HeaderBanner;