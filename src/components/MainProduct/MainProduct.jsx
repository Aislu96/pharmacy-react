import React from 'react';
import { Link } from 'react-router-dom';
import roof from "../../images/mainProduct/branch.svg";
import heart from "../../images/header/heart.svg";
import checkMark from "../../images/mainProduct/check-mark.svg";
import num from "../../images/mainProduct/num.svg";
import zero from "../../images/mainProduct/zero.svg";
import sheet from "../../images/mainProduct/sheet.svg";
import picBiovestin from "../../images/mainProduct/pic-biovestin.svg";
import ellipseYellow from "../../images/mainProduct/ellipse-yellow.svg";
import ellipsePink from "../../images/mainProduct/ellipse-pink.svg";
import products from '../../utils/product.js';
import './MainProduct.scss';
import Button from "../Button/Button";

const MainProduct = React.forwardRef((props, ref) => {
    return (
        <section className="main-product" ref={ref}>
            <div className="container main-product__container">
                <div className="main-product__image-one">
                    <img src={roof} alt="branch" />
                </div>
                <div className="main-product__image-two">
                    <img src={roof} alt="branch" />
                </div>
                <div className="inner main-product__inner">
                    <span className="text-small text-circle">Наш главный продукт</span>
                    <div className="main-product__group">
                        <h2>Биовестин и Биовестин-Лакто</h2>
                        <Button to="instructions" className="button button--accent main-product__button">
                            Инструкция приема
                            <div className="button-img">
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.1734 0.956404C10.1492 0.681317 9.90669 0.477875 9.6316 0.502001L5.14881 0.895177C4.87372 0.919304 4.67028 1.16187 4.69441 1.43695C4.71854 1.71204 4.9611 1.91548 5.23618 1.89135L9.22089 1.54186L9.57038 5.52657C9.5945 5.80165 9.83706 6.0051 10.1121 5.98097C10.3872 5.95684 10.5907 5.71428 10.5666 5.4392L10.1734 0.956404ZM1.55834 11.4558L10.0584 1.3214L9.2922 0.678779L0.792153 10.8132L1.55834 11.4558Z" fill="#272625" />
                                </svg>
                            </div>
                        </Button>
                    </div>
                    <div className="main-product__cards">
                        {products.map((card, i) => (
                            <div key={i} className="main-product__card">
                                <Link to="goods" className="main-product__card-img">
                                    <img src={card.src} alt="Biovestin" />
                                </Link>
                                <div className="main-product__block">
                                    <div className="main-product__group-one">
                                        <h3 className="text-large">Биовестин</h3>
                                        <div className="user-actions__img main-product__heart">
                                            <img src={heart} alt="icon heart" />
                                        </div>
                                    </div>
                                    <div className="main-product__bottles">
                                        <p className="text-small">{card.bottles}</p>
                                    </div>
                                    <div className="card__price main-product__price">
                                        <span className="text-large">{card.discountedPrice}</span>
                                        <span className="text-medium">{card.price}</span>
                                    </div>
                                    <Link to="contacts" className="card__reviews main-product__reviews">
                                        <div className="card__img-stars">
                                            <img src={card.stars} alt="stars" />
                                        </div>
                                        <p className="card__reviews-quantity">{card.reviews}</p>
                                    </Link>
                                    <ul className="main-product__list">
                                        <li className="main-product__item">
                                            <p className="text-small">Устойчивость к антибиотикам 1 поколения</p>
                                            <div className="main-product__icons">
                                                {[...Array(3)].map((_, j) => (
                                                    <div key={j} className="main-product__icon">
                                                        <img src={checkMark} alt="check mark" />
                                                    </div>
                                                ))}
                                            </div>
                                        </li>
                                        <li className="main-product__item">
                                            <p className="text-small">Курс</p>
                                            <div className="main-product__item-one">
                                                <div className="main-product__icon">
                                                    <img src={num} alt="num" />
                                                </div>
                                                <span className="text-xs">недели</span>
                                            </div>
                                        </li>
                                        <li className="main-product__item">
                                            <p className="text-small">Возраст</p>
                                            <div className="main-product__item-one">
                                                <div className="main-product__icon">
                                                    <img src={zero} alt="zero" />
                                                </div>
                                                <span className="text-xs">с рождения</span>
                                            </div>
                                        </li>
                                        <li className="main-product__item">
                                            <p className="text-small">Действие</p>
                                            <div className="main-product__item-one">
                                                <div className="main-product__icon">
                                                    <img src={sheet} alt="sheet" />
                                                </div>
                                                <span className="text-xs">восстановление</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <Link to="basket" className="button main-product__btn">В корзину</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="promo__block">
                        <div className="promo__group">
                            <h3 className="text-extra-large">Какой “Биовестин” следует выбрать?</h3>
                            <Button to="contacts" className="button button--highlight promo__button">
                                Получить консультацию
                            </Button>
                        </div>
                        <div className="promo__img">
                            <img src={picBiovestin} alt="Biovestin" />
                        </div>
                        <div className="promo__ellipse-one">
                            <img src={ellipseYellow} alt="Biovestin" />
                        </div>
                        <div className="promo__ellipse-two">
                            <img src={ellipsePink} alt="Biovestin" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default MainProduct;
