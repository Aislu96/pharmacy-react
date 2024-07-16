import React, { useState } from 'react';
import medications from "../../utils/medications";
import roof from "../../images/boutique/roof.png";
import arrow from "../../images/boutique/arrow.svg";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";
import magnesium from "../../utils/magnesium";
import collagen from "../../utils/collagen";
import elixirs from "../../utils/elixirs";
import melatonin from "../../utils/melatonin";
import './Boutique.scss';

const blocks = {
    medications: medications,
    elixirs: elixirs,
    magnesium: magnesium,
    collagen: collagen,
    melatonin: melatonin
};

const Boutique = () => {
    const [activeBlock, setActiveBlock] = useState('medications');

    const handleBlockClick = (block) => {
        setActiveBlock(block);
    };

    return (
        <section className="boutique">
            <div className="container boutique__container">
                <div className="inner boutique__inner">
                    <div className="boutique__blocks">
                        <div className="boutique__img">
                            <img src={roof} alt="boutique roof" />
                        </div>
                        <div className="boutique__block">
                            <h2>Бутик здоровья</h2>
                            <p className="text-large">
                                В нашем магазине вы можете подобрать с консультантом и купить бады
                                которые хорошо сочетаются с приемеом Биовестина и Биовестина-Лакто
                            </p>
                            <Button to="contacts" className="button button--accent">
                                Подобрать бады для меня
                                <div className="button-img">
                                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.1734 0.956404C10.1492 0.681317 9.90669 0.477875 9.6316 0.502001L5.14881 0.895177C4.87372 0.919304 4.67028 1.16187 4.69441 1.43695C4.71854 1.71204 4.9611 1.91548 5.23618 1.89135L9.22089 1.54186L9.57038 5.52657C9.5945 5.80165 9.83706 6.0051 10.1121 5.98097C10.3872 5.95684 10.5907 5.71428 10.5666 5.4392L10.1734 0.956404ZM1.55834 11.4558L10.0584 1.3214L9.2922 0.678779L0.792153 10.8132L1.55834 11.4558Z"
                                            fill="#272625"
                                        />
                                    </svg>
                                </div>
                            </Button>
                        </div>
                        <ul className="boutique__list">
                            {Object.keys(blocks).map((block, index) => (
                                <li
                                    key={index}
                                    className={`boutique__item ${activeBlock === block ? "boutique__item_hover" : ""}`}
                                    onClick={() => handleBlockClick(block)}
                                >
                                    {block === 'medications' && 'Все товары'}
                                    {block === 'elixirs' && 'Эликсиры'}
                                    {block === 'magnesium' && 'Магний'}
                                    {block === 'collagen' && 'Коллаген'}
                                    {block === 'melatonin' && 'Мелатонин'}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="cards">
                        {blocks[activeBlock].map((card, i) => (
                            <Card key={i} card={card} />
                        ))}
                    </div>
                    <Link to="/catalog" className="boutique__catalog">
                        <p className="link">Смотреть больше товаров</p>
                        <div className="boutique__arrow">
                            <img src={arrow} alt="arrow" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Boutique;
