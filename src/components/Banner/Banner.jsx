import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.scss';

// Импортируем изображения
import branch from '../../images/banner/branch.svg';
import branch2 from '../../images/banner/branch2.svg';
import whatsapp from '../../images/banner/whatsapp.png';
import telegram from '../../images/banner/telegram.svg';
import woman from '../../images/banner/woman.svg';
import image from '../../images/banner/image.svg';
import connection from '../../images/banner/connection.svg';
import arrowUp from '../../images/banner/arrowUp.svg';
import chat from '../../images/banner/chat.svg';
import Button from "../Button/Button";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container banner__container">
                <div className="banner__branch">
                    <img src={branch} alt="branch" />
                </div>
                <div className="banner__branch-two">
                    <img src={branch2} alt="branch2" />
                </div>
                <div className="inner banner__inner">
                    <div className="banner__block">
                        <h1>Жидкие пробиотики</h1>
                        <h1 className="banner__title">для здоровья кишечника</h1>
                        <div className="banner__btn">
                            <Button to="/main-product" className="button--accent banner__button">
                                Смотреть продукцию
                                <div className="button-img">
                                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.1734 0.956404C10.1492 0.681317 9.90669 0.477875 9.6316 0.502001L5.14881 0.895177C4.87372 0.919304 4.67028 1.16187 4.69441 1.43695C4.71854 1.71204 4.9611 1.91548 5.23618 1.89135L9.22089 1.54186L9.57038 5.52657C9.5945 5.80165 9.83706 6.0051 10.1121 5.98097C10.3872 5.95684 10.5907 5.71428 10.5666 5.4392L10.1734 0.956404ZM1.55834 11.4558L10.0584 1.3214L9.2922 0.678779L0.792153 10.8132L1.55834 11.4558Z" fill="#272625" />
                                    </svg>
                                </div>
                            </Button>
                        </div>
                        <div className="banner__item">
                            <div className="banner__info">
                                <div className="banner__info-blocks">
                                    <Link to="/whatsapp" className="banner__info-block icon">
                                        <img src={whatsapp} alt="whatsapp" />
                                    </Link>
                                    <Link to="/telegram" className="banner__info-block icon">
                                        <img src={telegram} alt="telegram" />
                                    </Link>
                                </div>
                                <div className="banner__info-img">
                                    <img src={woman} alt="woman" />
                                </div>
                                <div className="banner__info-group">
                                    <h3 className="text-large">Ильмира</h3>
                                    <p>Ваш дистрибьютер по Республике Татарстан</p>
                                    <Button to="/contacts" className="button--highlight banner__info-btn">Получить консультацию</Button>
                                </div>
                            </div>
                            <div className="banner__group banner__group_one">
                                <h2 className="text-large">Выберите пребиотик подходящий именно вам</h2>
                                <Button to="/biovestine">Купить Биовестин
                                    <div className="button-img">
                                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1734 0.956404C10.1492 0.681317 9.90669 0.477875 9.6316 0.502001L5.14881 0.895177C4.87372 0.919304 4.67028 1.16187 4.69441 1.43695C4.71854 1.71204 4.9611 1.91548 5.23618 1.89135L9.22089 1.54186L9.57038 5.52657C9.5945 5.80165 9.83706 6.0051 10.1121 5.98097C10.3872 5.95684 10.5907 5.71428 10.5666 5.4392L10.1734 0.956404ZM1.55834 11.4558L10.0584 1.3214L9.2922 0.678779L0.792153 10.8132L1.55834 11.4558Z" fill="#272625" />
                                        </svg>
                                    </div>
                                </Button>
                            </div>
                            <div className="banner__img">
                                <img src={image} alt="biovestine" />
                            </div>
                        </div>
                    </div>
                    <div className="banner__group banner__group_two">
                        <div className="banner__group-img">
                            <img src={connection} alt="connection" />
                        </div>
                        <h3 className="text-small">Круглосуточно на связи</h3>
                        <Button to="/contacts">Связаться с нами</Button>
                    </div>
                    <div className="group">
                        <Link to="" className="group__icon">
                            <img src={arrowUp} alt="arrow" />
                        </Link>
                        <Link to="" className="group__icon">
                            <img src={chat} alt="chat" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
