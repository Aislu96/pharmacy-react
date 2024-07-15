import React from 'react';
import logo from '../../images/logo.svg';
import burgerIcon from '../../images/header/burger.svg';
import heartIcon from '../../images/header/heart.svg';
import basketIcon from '../../images/header/basket.svg';
import userIcon from '../../images/header/user.svg';
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import './Header.scss';
import SearchInput from "../SearchInput/SearchInput";

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="inner header__inner">
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <Link to="/" className="header__link">
                                    <p className="text-smallest">г. Казань</p>
                                    <div className="header__item-circle"></div>
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/contacts" className="header__link">
                                    <p className="text-smallest">контакты</p>
                                    <div className="header__item-circle"></div>
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/about-manufacturer" className="header__link">
                                    <p className="text-smallest">о производителе</p>
                                    <div className="header__item-circle"></div>
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/doctors" className="header__link">
                                    <p className="text-smallest">врачам</p>
                                    <div className="header__item-circle"></div>
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/blog" className="header__link">
                                    <p className="text-smallest">блог</p>
                                    <div className="header__item-circle"></div>
                                </Link>
                            </li>
                            <li className="header__item">
                                горячая линия:
                                <span>8 (800) 500-33-43</span>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <div className="logo">
                            <img src={logo} alt="logo Biovestine" />
                        </div>
                        <form className="search-form">
                            <Button to="/catalog" icon={burgerIcon}>
                                Каталог
                            </Button>
                            <div className="search-form__container">
                                <SearchInput />
                                <Button type="submit">
                                    Поиск
                                </Button>
                            </div>
                        </form>
                        <ul className="user-actions">
                            <li className="user-actions__item">
                                <Link to="/selected" className="user-actions__link">
                                    <div className="icon">
                                        <img src={heartIcon} alt="icon" />
                                    </div>
                                    <p className="text-smallest">Избранное</p>
                                    <div className="user-actions__stick">
                                        <span className="text-xsmall">1</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="user-actions__item">
                                <Link to="/basket" className="user-actions__link">
                                    <div className="icon">
                                        <img src={basketIcon} alt="icon" />
                                    </div>
                                    <p className="text-smallest">Корзина</p>
                                </Link>
                            </li>
                            <li className="user-actions__item">
                                <Link to="/auth" className="user-actions__link">
                                    <div className="icon">
                                        <img src={userIcon} alt="icon heart" />
                                    </div>
                                    <p className="text-smallest">Войти</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
