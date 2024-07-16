import React from 'react';

const SwiperControls = ({ prevClass, nextClass, paginationClass,btnClass }) => {
    return (
        <div className={`swiper__btn ${btnClass ? `${btnClass}` : ''}`}>
            <div className={`swiper__button swiper__button_prev ${prevClass}`}></div>
            {paginationClass && <div className={`pagination ${paginationClass} text-small`}></div>}
            <div className={`swiper__button swiper__button_next ${nextClass}`}></div>
        </div>
    );
};

export default SwiperControls;
