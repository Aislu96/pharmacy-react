import {Link} from "react-router-dom";
import heart from "../../images/header/heart.svg";
import React from "react";
import './Card.scss';

function Card({card}) {
    return (
        <div className="card">
            <Link to="" className="card__link user-actions__link">
                <div className="user-actions__img">
                    <img src={heart} alt='icon heart'/>
                </div>
            </Link>
            <Link to="" className="card__img-drug" href="#">
                <img src={card.src} alt="drug"/>
            </Link>
            <div className="card__price">
                <span className="text-extra-large">{card.discountedPrice}</span>
                <span className="text-large-two">{card.price}</span>
            </div>
            <h3 className="text-large-two">{card.title}</h3>
            <Link to="/contacts" className="card__reviews">
                <div className="card__img-stars">
                    <img src={card.stars} alt="stars"/>
                </div>
                <p className="card__reviews-quantity">{card.reviews}</p>
            </Link>
            <p className="text-medium">{card.text}</p>
            <Link to="/basket" className="button boutique__button">В корзину</Link>
        </div>
    );
}

export default Card;