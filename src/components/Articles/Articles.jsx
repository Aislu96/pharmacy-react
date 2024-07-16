import vector from '../../images/articles/vector.svg';
import articles from "../../utils/articles";
import { Link } from "react-router-dom";
import './Articles.scss';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import {useEffect} from "react";
import {Navigation, Pagination} from "swiper/modules";
import SwiperControls from "../SwiperControls/SwiperControls";


function Articles() {

    useEffect(() => {
        new Swiper('.articles__swiper', {
            modules: [Pagination, Navigation],
            loop: true,
            slidesPerView: 3.1,
            spaceBetween: 0,
            pagination: {
                el: ".pagination__articles",
                bulletActiveClass: "pagination__action",
                bulletClass: "pagination__bullet",
                clickable: true,
                renderBullet: function (index, className) {
                    // return '<span class="' + className + '">' + (index + 1) + '</span>';
                    if(index < 3) {
                        return "<span class=\"" + className + "\">" + (index + 1) + "</span>";
                    } else if (index === 3){
                        // eslint-disable-next-line no-useless-concat
                        return "<span class=\"" + className + "\">" + "..." + "</span>";
                    } else {
                        return "";
                    }
                },
            },
            navigation: {
                nextEl: ".articles__next",
                prevEl: ".articles__prev",
            },
        });
    }, [])

    return (
        <section className="articles">
            <div className="container articles__container">
                <div className="articles__img">
                    <img src={vector} alt="vector"/>
                </div>
                <div className="inner articles__inner">
                    <span className="text-circle text-small">Научная база</span>
                    <div className="articles__group">
                        <h2>Статьи и диссертации</h2>
                        <SwiperControls
                            prevClass="articles__prev"
                            nextClass="articles__next"
                            paginationClass="pagination__articles"
                        />
                    </div>
                    <div className="articles__swiper">
                        <div className="articles__blocks swiper-wrapper">
                            {articles.map((article, id) => (
                                <div key={id} className="articles__block swiper-slide">
                                    <span className="text-circle articles__text-circle text-small">Статьи о нас</span>
                                    <p className="text-large">{article.title}</p>
                                    <Link to="/article" className="link articles__link">Читать</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Articles;
