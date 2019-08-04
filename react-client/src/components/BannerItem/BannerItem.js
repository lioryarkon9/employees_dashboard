import React from 'react';
import './BannerItem.scss';

const BannerItem = props => {
    return (
        <div className='banner-item d-flex align-items-center'>
            <div className='header-banner-icon'>
                <div className='banner-img-container d-flex align-items-center'>
                    <span>todo:img</span>
                </div>
            </div>
            <div className='header-banner-content flex-fill'>
                <div className='banner-figure'>
                    {props.figure}
                </div>
                <div className='banner-txt'>
                    {props.headline}
                </div>
            </div>
        </div>
    );
}

export default BannerItem;