import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import Skeleton from "react-loading-skeleton";
import {SliderLoading} from "../Loading/Loading";
import {getDataHome} from "../../api/Home";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "react-loading-skeleton/dist/skeleton.css";
import "./slider.scss";
import {Link} from "react-router-dom";

function Slider() {
    const [dataSlider, setDataSlider] = useState(null);
    let itemsLoading = [1, 2, 3];
    useEffect(() => {
        const data = async () => {
            setDataSlider(await getDataHome("banner"));
        };
        data();
    }, []);

    return (
        <main className="slider__container">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="slider__homepage">
                {dataSlider &&
                    dataSlider.items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider__wrapper">
                                <Link to={item.encodeId}>
                                    <div className="slider__image">
                                        <figure>
                                            <img
                                                src={item.banner}
                                                alt={item.link}
                                            />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                {!dataSlider &&
                    itemsLoading.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider__wrapper">
                                <SliderLoading
                                    count={1}
                                    height={250}
                                    enableAnimation={true}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </main>
    );
}

export default Slider;
