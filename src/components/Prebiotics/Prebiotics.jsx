import React, {useEffect} from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Prebiotics.scss';
import {Navigation, Pagination} from "swiper/modules";


import branchThree from '../../images/branchThree.svg';
import branchFour from '../../images/branchFour.svg';
import Button from "../Button/Button";


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
                        <span className="text-small text-circle prebiotics__text-circle">Ваш выбор</span>
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
                                <div className="prebiotics__slide swiper-slide">
                                    <h3 className="p24">Повышение иммунитета</h3>
                                    <p className="p16">Более 70% иммунных клеток организма сосредоточено в кишечнике.
                                        Пребиотики поддерживают защитные функции, снижая риск инфекций.</p>
                                    <div className="prebiotics__slide-img">
                                        <img src={branchFour} alt="branchFour"/>
                                    </div>
                                </div>
                                <div className="prebiotics__slide swiper-slide">
                                    <h3 className="p24">Улучшение пищеварения</h3>
                                    <p className="p16">Пребиотики стимулируют выработку пищеварительных ферментов,
                                        облегчая
                                        процессы переваривания и усвоения питательных веществ.</p>
                                    <div className="prebiotics__slide-img">
                                        <img src={branchFour} alt="branchFour"/>
                                    </div>
                                </div>
                                <div className="prebiotics__slide swiper-slide">
                                    <h3 className="p24">Нормализуют вес</h3>
                                    <p className="p16">За счёт изменения состава микрофлоры восстанавливают правильный
                                        обмен
                                        веществ, что помогает быстрее достичь оптимального веса согласно конституции
                                        человека.</p>
                                    <div className="prebiotics__slide-img">
                                        <img src={branchFour} alt="branchFour"/>
                                    </div>
                                </div>
                                <div className="prebiotics__slide swiper-slide">
                                    <h3 className="p24">От аллергии</h3>
                                    <p className="p16">Снижают проницаемость кишечной стенки, препятствуют проникновению
                                        в
                                        кровь аллергенов, токсинов и патогенных бактерий. Снижают риск развития
                                        аутоиммунных
                                        заболеваний.</p>
                                    <div className="prebiotics__slide-img">
                                        <img src={branchFour} alt="branchFour"/>
                                    </div>
                                </div>
                                <div className="prebiotics__slide swiper-slide">
                                    <h3 className="p24">Выводят токсины</h3>
                                    <p className="p16">Разрушают токсины, снижая их концентрацию в крови, тем самым
                                        облегчают работу печени, снижают ощущение усталости и тяжести в правом
                                        подреберье.</p>
                                    <div className="prebiotics__slide-img">
                                        <img src={branchFour} alt="branchFour"/>
                                    </div>
                                </div>
                                <div className="prebiotics__slide swiper-slide">
                                    <h3 className="p24">Поднимают настроение</h3>
                                    <p className="p16">Комплексно воздействуют на организм. Улучшают общее самочувствие.
                                        Повышают работоспособность, применяются в реабилитации после стресса и
                                        депрессии.</p>
                                    <div className="prebiotics__slide-img">
                                        <img src={branchFour} alt="branchFour"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="prebiotics__swiper">
                            <div className="swiper__button swiper__button_prev prebiotics__prev"></div>
                            <div className="swiper__button swiper__button_next prebiotics__next"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prebiotics;
