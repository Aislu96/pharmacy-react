import React, { useEffect } from 'react';
import './Questions.scss';
import vector from '../../images/questions/vector.svg';
import Button from "../Button/Button";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import questions from "../../utils/questions";
import SwiperControls from "../SwiperControls/SwiperControls";

function Questions() {
    useEffect(() => {
        const checkboxes = document.querySelectorAll('.questions__checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    checkboxes.forEach(otherCheckbox => {
                        if (otherCheckbox !== this) {
                            otherCheckbox.checked = false;
                        }
                    });
                }
            });
        });

        new Swiper('.swiper', {
            modules: [Pagination, Navigation],
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: ".pagination__questions",
                bulletActiveClass: "pagination__action",
                bulletClass: "pagination__bullet",
                clickable: true,
                renderBullet: function (index, className) {
                    if (index < 3) {
                        return "<span class=\"" + className + "\">" + (index + 1) + "</span>";
                    } else if (index === 3) {
                        // eslint-disable-next-line no-useless-concat
                        return "<span class=\"" + className + "\">" + "..." + "</span>";
                    } else {
                        return "";
                    }
                },
            },
            navigation: {
                nextEl: ".next-one",
                prevEl: ".prev-one",
            },
        });

    }, []);

    const renderQuestionBlocks = (start, end) => (
        questions.slice(start, end).map((question, id) => (
            <div key={id + start} className="questions__block">
                <input className="questions__checkbox" type="checkbox" name="accordion"
                       id={`q${id + start + 1}`} />
                <label className="questions__group" htmlFor={`q${id + start + 1}`}>
                    <p>{question.title}</p>
                    <div className="questions__arrow"></div>
                </label>
                <div className="questions__body">
                    <p>{question.text}</p>
                </div>
            </div>
        ))
    );

    return (
        <section className="questions">
            <div className="container questions__container">
                <div className="inner questions__inner">
                    <span className="text-small text-circle questions__text-small">FAQ</span>
                    <h2>Остались вопросы?</h2>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="questions__blocks swiper-slide">
                                {renderQuestionBlocks(0, 6)}
                            </div>
                            <div className="questions__blocks swiper-slide">
                                {renderQuestionBlocks(6, 12)}
                            </div>
                            <div className="questions__blocks swiper-slide">
                                {renderQuestionBlocks(12, 18)}
                            </div>
                            <div className="questions__blocks swiper-slide">
                                {renderQuestionBlocks(18, 24)}
                            </div>
                            <div className="questions__blocks swiper-slide">
                                {renderQuestionBlocks(24, questions.length)}
                            </div>
                        </div>
                        <SwiperControls
                            prevClass="prev-one"
                            nextClass="next-one"
                            paginationClass="pagination__questions"
                            btnClass="swiper__btn_questions"
                        />
                    </div>
                    <div className="questions__item">
                        <p className="text-large">Не нашли ответ на свой вопрос? Свяжитесь с нашим специалистом.</p>
                        <Button to="/contacts" className="button--highlight">Получить консультацию</Button>
                    </div>
                </div>
                <div className="questions__img questions__img_one">
                    <img src={vector} alt="line" />
                </div>
                <div className="questions__img questions__img_two">
                    <img src={vector} alt="line" />
                </div>
            </div>
        </section>
    );
}

export default Questions;
