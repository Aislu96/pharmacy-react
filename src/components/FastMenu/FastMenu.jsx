import React, {useEffect} from 'react';
import biovestine from '../../images/fastMenu/medicine.png';
import healthBoutique from '../../images/fastMenu/roof.svg';
import prebiotic from '../../images/fastMenu/jackdaw.svg';
import videoBlog from '../../images/fastMenu/triangle.svg';
import {Link} from "react-router-dom";
import './FastMenu.scss';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const FastMenu = () => {

    useEffect(() => {
        new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 5,
        });
    }, [])

    return (
        <section className="fast-menu">
            <div className="container swiper-container">
                <div className="inner fast-menu__inner swiper-wrapper">
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img">
                            <img src={biovestine} alt="biovestine"/>
                        </div>
                        <p className="text-medium">Биовестин</p>
                    </Link>
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img">
                            <img src={biovestine} alt="biovestine"/>
                        </div>
                        <p className="text-medium">Биовестин-Лакто</p>
                    </Link>
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img">
                            <img src={healthBoutique} alt="health boutique"/>
                        </div>
                        <div className="fast-menu__block">
                            <p className="text-medium">Бутик здоровья</p>
                            <p className="text-xs fast-menu__text-xs">Витамины</p>
                            <p className="text-xs fast-menu__text-xs">БАДы</p>
                        </div>
                    </Link>
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img">
                            <img src={prebiotic} alt="Selection of prebiotic"/>
                        </div>
                        <p className="text-medium">Подбор пребиотика</p>
                    </Link>
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img fast-menu__img_two">
                            <img src={videoBlog} alt="Our video blog"/>
                        </div>
                        <p className="text-medium">Наш видеоблог</p>
                    </Link>
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img">
                            <img src={biovestine} alt="biovestine"/>
                        </div>
                        <p className="text-medium">Биовестин</p>
                    </Link>
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img">
                            <img src={biovestine} alt="biovestine"/>
                        </div>
                        <p className="text-medium">Биовестин-Лакто</p>
                    </Link>
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img">
                            <img src={healthBoutique} alt="health boutique"/>
                        </div>
                        <div className="fast-menu__block">
                            <p className="text-medium">Бутик здоровья</p>
                            <p className="text-xs fast-menu__text-xs">Витамины</p>
                            <p className="text-xs fast-menu__text-xs">БАДы</p>
                        </div>
                    </Link>
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img">
                            <img src={prebiotic} alt="Selection of prebiotic"/>
                        </div>
                        <p className="text-medium">Подбор пребиотика</p>
                    </Link>
                    <Link to="" className="fast-menu__group swiper-slide">
                        <div className="fast-menu__img fast-menu__img_two">
                            <img src={videoBlog} alt="Our video blog"/>
                        </div>
                        <p className="text-medium">Наш видеоблог</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FastMenu;