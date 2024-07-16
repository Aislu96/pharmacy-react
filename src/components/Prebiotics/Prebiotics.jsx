import React, {useEffect} from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Prebiotics.scss';
import {Navigation, Pagination} from "swiper/modules";
import branchThree from '../../images/branchThree.svg';
import branchFour from '../../images/branchFour.svg';
import Button from "../Button/Button";
import prebiotics from "../../utils/prebiotics";
import SwiperControls from "../SwiperControls/SwiperControls";


function Prebiotics() {
    useEffect(() => {
        new Swiper(".swiper-prebiotics", {
            modules: [Pagination, Navigation],
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 20,
            navigation: {
                nextEl: ".prebiotics__next",
                prevEl: ".prebiotics__prev",
            }
        });
    }, [])

    return (
        <section className="prebiotics">
            <div className="container prebiotics__container">
                <div className="prebiotics__image">
                    <img src={branchThree} alt="branchThree"/>
                </div>
                <div className="inner prebiotics__inner">
                    <div className="prebiotics__block">
                        <span className="text-small text-circle">Ваш выбор</span>
                        <h2>Зачем пребиотики нужны вашему организму?</h2>
                        <Button href="/manual" className="button--accent">
                            Узнать больше о пребиотиках
                            <div className="button-img">
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.1734 0.956404C10.1492 0.681317 9.90669 0.477875 9.6316 0.502001L5.14881 0.895177C4.87372 0.919304 4.67028 1.16187 4.69441 1.43695C4.71854 1.71204 4.9611 1.91548 5.23618 1.89135L9.22089 1.54186L9.57038 5.52657C9.5945 5.80165 9.83706 6.0051 10.1121 5.98097C10.3872 5.95684 10.5907 5.71428 10.5666 5.4392L10.1734 0.956404ZM1.55834 11.4558L10.0584 1.3214L9.2922 0.678779L0.792153 10.8132L1.55834 11.4558Z"
                                        fill="#272625"/>
                                </svg>
                            </div>
                        </Button>
                    </div>
                    <div className="prebiotics__blocks">
                        <div className="swiper-prebiotics">
                            <div className="swiper-wrapper">
                                {prebiotics.map((prebiotic, id) => (
                                    <div key={id} className="prebiotics__slide swiper-slide">
                                        <h3 className="text-large">{prebiotic.title}</h3>
                                        <p className="text-medium">{prebiotic.text}</p>
                                        <div className="prebiotics__slide-img">
                                            <img src={branchFour} alt="branchFour"/>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                        <SwiperControls
                            prevClass="prebiotics__prev"
                            nextClass="prebiotics__next"
                            btnClass="swiper__btn_prebiotics"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prebiotics;
