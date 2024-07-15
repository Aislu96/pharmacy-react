import vector from '../../images/articles/vector.svg';
import articles from "../../utils/articles";
import { Link } from "react-router-dom";
import './Articles.scss';


function Articles() {
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
                        <div className="questions__swiper">
                            <div className="swiper__button swiper__button_prev articles__prev"></div>
                            <div className="articles__pagination articles__text-small"></div>
                            <div className="swiper__button swiper__button_next articles__next"></div>
                        </div>
                    </div>
                    <div className="articles__swiper">
                        <div className="articles__blocks swiper-wrapper">
                            {articles.map((article, id) => (
                                <div key={id} className="articles__block swiper-slide">
                                    <span className="articles__text-circle articles__text-small">Статьи о нас</span>
                                    <p className="articles__text-small">{article.description}</p>
                                    <Link to="/article" className="articles__link">Читать</Link>
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
