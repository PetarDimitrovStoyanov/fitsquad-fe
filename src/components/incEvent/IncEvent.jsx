import "./incEvent.scss"
import "swiper/css";
import "swiper/css/navigation";
import PaymentButton from "../paymentButton/PaymentButton.jsx"
import NoSpace from "../noFreeSpace/NoSpace.jsx";
import {useEffect, useRef, useState} from "react";

export default function IncEvent({props}) {
    const videoRef = useRef(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.muted = true; // Ensure the video is muted
            videoElement.play();
        }
    }, []);

    const handleVideoEnded = () => {
        setRetryCount(retryCount + 1)
    };


    const openModal = () => {
        //document.getElementById('modal').classList.toggle('active');
        window.location.href = "https://buy.stripe.com/test_9AQdSF16k2kg6AM288";
    }

    return (
        // <div className="inc-events">
        //     <div className="text-content">
        //         <h3> {props.title} </h3>
        //         <p> {props.content} </p>
        //     </div>
        //     <div className="carousel">
        //         <Swiper
        //             spaceBetween={1}
        //             slidesPerView={1}
        //             navigation={true}
        //             modules={[Navigation, Autoplay]}
        //             autoplay={{delay: props.delay, disableOnInteraction: false}}
        //         >
        //             {props.slides.map((slide, index) => (
        //                 <SwiperSlide key={index}>
        //                     <div className="image-container">
        //                         <video ref={videoRef} width="360" height="640" controls autoPlay>
        //                             <source src={slide.image} type="video/mp4"/>
        //                         </video>
        //                         {/*<img src={slide.image} alt="image"/>*/}
        //                     </div>
        //                 </SwiperSlide>
        //             ))}
        //         </Swiper>
        //     </div>
        //     <div className="text-content">
        //         {props.program.map((day, index) =>
        //             <div dangerouslySetInnerHTML={{__html: day.text}}></div>
        //         )}
        //     </div>
        //     {/*<div>*/}
        //     {/*    {props.comment.map((day, index) =>*/}
        //     {/*        <div dangerouslySetInnerHTML={{__html: day.text}}></div>*/}
        //     {/*    )}*/}
        //     {/*</div>*/}
        //     {
        //         props.amount && props.amount !== 0 ? <PaymentButton amount={props.amount} title={props.title}/> :
        //             <NoSpace/>
        //     }
        //
        // </div>
        <div className="inc-events">
            <div className="text-content">
                <h3> {props.title} </h3>
            </div>
            <div className="carousel  align-row">
                {props.slides.map((slide, index) =>
                    <video key={index + retryCount} ref={videoRef} width="300" height="400" controls muted autoPlay onEnded={handleVideoEnded}>
                        <source src={slide.image} type="video/mp4"/>
                    </video>
                ) }
                {/*<Swiper*/}
                {/*    spaceBetween={1}*/}
                {/*    slidesPerView={1}*/}
                {/*    navigation={true}*/}
                {/*    modules={[Navigation, Autoplay]}*/}
                {/*    autoplay={{delay: props.delay, disableOnInteraction: false}}*/}
                {/*>*/}
                {/*    {props.slides.map((slide, index) => (*/}
                {/*        <SwiperSlide key={index}>*/}
                {/*            <div className="image-container">*/}
                {/*                <img src={slide.image} alt="image"/>*/}
                {/*            </div>*/}
                {/*        </SwiperSlide>*/}
                {/*    ))}*/}
                {/*</Swiper>*/}
                <div className="content-holder"> {props.content}
                <span>
                    <p>За повече информация, моля свържете се с нас.</p>
                </span>
                        <span className="square">&#x25A0; </span> Цена: <b> {(props.amount / 100).toFixed(2)} лева</b>
                        {/*<p><span style="font-size: 25px; color: lightgray">&#x25A0;</span> Цена: <b> 380.00 лева</b></p>*/}
                        {/*<p><span style="font-size: 25px; color: lightgray">&#x25A0;</span> Цена: <b> ${Number('380').toFixed(2)} лева</b></p>*/}
                </div>


                {/*<div className="text-content comment">*/}
                {/*    {props.program.map((day, index) =>*/}
                {/*        <div dangerouslySetInnerHTML={{__html: day.text}}></div>*/}
                {/*    )}*/}
                {/*</div>*/}

            </div>
            {/*<div className="text-content comment">*/}
            {/*    {props.program.map((day, index) =>*/}
            {/*        <div dangerouslySetInnerHTML={{__html: day.text}}></div>*/}
            {/*    )}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {props.comment.map((day, index) =>*/}
            {/*        <div dangerouslySetInnerHTML={{__html: day.text}}></div>*/}
            {/*    )}*/}
            {/*</div>*/}
            {
                props.amount && props.amount !== 0
                    ? <PaymentButton amount={props.amount} title={props.title}/>
                    : <NoSpace/>
            }

        </div>
    )
}