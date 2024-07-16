import React, {useEffect, useState} from 'react';
import triangle from '../../images/video/triangle.svg';
import {Link} from "react-router-dom";
import './VideoSection.scss';
import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import videos from "../../utils/videos";

const VideoSection = () => {
    const [activeVideo, setActiveVideo] = useState(videos[0]);
    console.log(activeVideo.video);
    const [videoPlay, setVideoPlay] = useState(false);

    useEffect(() => {
        new Swiper('.swiper-video', {
            modules: [Navigation],
            loop: false,
            slidesPerView: 3,
            spaceBetween: 22,
            navigation: {
                nextEl: ".video__swiper_next",
                prevEl: ".video__swiper_prev",
            }
        });
    }, []);
    const handleVideoBannerClick = () => {
        setActiveVideo(activeVideo);
        setVideoPlay(true);
    }
    const handleVideoClick = (video) => {
        setActiveVideo(video);
        setVideoPlay(true);
    };
    const getVideoUrlWithAutoplay = (url) => {
        return `${url}?autoplay=1&loop=1&rel=0`;
    };

    return (
        <section className="video">
            <div className="container video__container">
                <div className="inner video__inner">
                    <div className="video__block">
                        <span
                            className="text-small text-circle prebiotics__text-circle">Ответы наших специалистов</span>
                        <h2>Как работает Биовестин?</h2>
                        <div className="video__banner" onClick={handleVideoBannerClick}>
                            <div
                                className={`video__container-triangle ${videoPlay ? "video__container-triangle_non-active" : ''}`}>
                                <div className="video__container-img">
                                    <img src={triangle} alt="Triangle"/>
                                </div>
                            </div>
                            <iframe
                                className={`video__play ${videoPlay ? "video__play_active" : ''}`}
                                allow="autoplay"
                                width="1240px"
                                height="500px"
                                src={getVideoUrlWithAutoplay(activeVideo.video)}
                                title={activeVideo.title}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="video__groups">
                        <div className="video__groups-one">
                            <div className="video__blocks">
                                <div className="video__swiper video__swiper_prev"></div>
                                <div className="swiper-video">
                                    <div className="video__banners swiper-wrapper">
                                        {videos.map((video, index) => (
                                            <div
                                                className="video__banner-group swiper-slide"
                                                key={index}
                                                onClick={() => handleVideoClick(video)}
                                            >
                                                <div className="video__banner video__banner_one">
                                                    <div className="video__container-img video__container-img_one">
                                                        <img src={video.src} alt="Triangle"/>
                                                    </div>
                                                    <iframe
                                                        className="video__play-one"
                                                        width="207px"
                                                        height="148px"
                                                        src={video.video}
                                                        allowFullScreen
                                                        title={activeVideo.title}
                                                    ></iframe>
                                                </div>
                                                <p className="text-small">Важно знать</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="video__swiper video__swiper_next"></div>
                            </div>
                            <div className="video__group">
                                <h3 className="text-large">Больше видео на нашем ютуб канале</h3>
                                <Link to="" className="button video__button">
                                    Перейти на YouTube канал
                                    <div className="button-img">
                                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.1734 0.956404C10.1492 0.681317 9.90669 0.477875 9.6316 0.502001L5.14881 0.895177C4.87372 0.919304 4.67028 1.16187 4.69441 1.43695C4.71854 1.71204 4.9611 1.91548 5.23618 1.89135L9.22089 1.54186L9.57038 5.52657C9.5945 5.80165 9.83706 6.0051 10.1121 5.98097C10.3872 5.95684 10.5907 5.71428 10.5666 5.4392L10.1734 0.956404ZM1.55834 11.4558L10.0584 1.3214L9.2922 0.678779L0.792153 10.8132L1.55834 11.4558Z"
                                                fill="#272625"/>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="video__groups-two">
                            <div className="video__group-two">
                                <span className="text-small text-circle video__text-circle">Мгновенное действие</span>
                                <p className="text-small">В отличие от сухих в капсулах и порошках, начинают действовать
                                    мгновенно. Быстро снимают острые расстройства ЖКТ, нормализуют пищеварение,
                                    благотворно влияют на иммунитет и общее самочувствие.</p>
                            </div>
                            <div className="video__group-two">
                                <span
                                    className="text-small text-circle prebiotics__text-circle">Здоровье микрофлоры</span>
                                <p className="text-small">Регулярный приём «Биовестина» курсами 4-6 недель раз в квартал
                                    помогает поддерживать здоровье микрофлоры и организма в целом.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;
