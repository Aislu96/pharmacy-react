import React from 'react';
import './DeliveryTerms.scss';
import carImg from '../../images/deliveryTerms/car.svg';
import fridgeImg from '../../images/deliveryTerms/fridge.svg';
import snowflakeImg from '../../images/deliveryTerms/snowflake.svg';
import calendarImg from '../../images/deliveryTerms/calendar.svg';
import watchImg from '../../images/deliveryTerms/watch.svg';

function DeliveryTerms() {
    return (
        <section className="delivery-terms">
            <div className="container delivery-terms__container">
                <div className="inner delivery-terms__inner">
                    <div className="delivery-terms__group">
                        <div className="delivery-terms__group-img">
                            <img src={carImg} alt="car" />
                        </div>
                        <p className="delivery-terms__text">Доставка</p>
                        <div className="delivery-terms__price">
                            <p>от 450 ₽</p>
                        </div>
                    </div>
                    <div className="delivery-terms__blocks">
                        <div className="delivery-terms__block">
                            <div className="delivery-terms__img">
                                <img src={fridgeImg} alt="fridge" />
                            </div>
                            <p className="text-small">До двери «Биовестин»<br/> и «Биовестин-Лакто»</p>
                        </div>
                        <div className="delivery-terms__block">
                            <div className="delivery-terms__img">
                                <img src={snowflakeImg} alt="snowflake" />
                            </div>
                            <p className="text-small">В рефрижераторе <br />(+2+6 С)</p>
                        </div>
                        <div className="delivery-terms__block">
                            <div className="delivery-terms__img">
                                <img src={calendarImg} alt="calendar" />
                            </div>
                            <p className="text-small">В день заказа или на <br/> следующий день</p>
                        </div>
                        <div className="delivery-terms__block">
                            <div className="delivery-terms__img">
                                <img src={watchImg} alt="watch" />
                            </div>
                            <p className="text-small">В день заказа или на <br/> следующий день</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DeliveryTerms;
