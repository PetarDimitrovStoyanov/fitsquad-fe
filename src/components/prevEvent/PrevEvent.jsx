import "./prevEvent.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Navigation, Autoplay} from "swiper/modules";
import "swiper/css/navigation";

export default function PrevEvent({ props}) {
    return (
        <div className="events">
            <div className="carousel">
                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{delay: props.delay, disableOnInteraction: false}}
                >
                    { props.slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="image-container">
                                <img src={slide.image} alt="image"/>
                            </div>
                        </SwiperSlide>
                    )) }
                </Swiper>
            </div>
            <div className="text-content">
                <h3> {props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
}