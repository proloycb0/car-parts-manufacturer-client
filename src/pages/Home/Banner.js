import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none"}}
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none",}}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Slider {...settings}>
            <div class="hero min-h-screen bg-[url('https://i.ibb.co/RQ3BhNx/slider-1.webp')]" >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="py-52 lg:ml-16 ml-8 text-white">
                    <div class="max-w-lg">
                        <h3 class="lg:mb-5 mb-3 md:text-3xl text-lg uppercase font-bold">New Technology & Build</h3>
                        <h1 class="lg:mb-5 mb-3 md:text-6xl text-2xl uppercase font-bold">Wheels & Tires Collections</h1>
                        <button class="btn btn-primary text-white">Shop Now</button>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-[url('https://i.ibb.co/PcdFJVJ/slider-2.webp')]" >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="py-52 lg:ml-16 ml-8 text-white">
                    <div class="max-w-lg">
                        <h3 class="lg:mb-5 mb-3 md:text-3xl text-lg uppercase font-bold">New Technology & Build</h3>
                        <h1 class="lg:mb-5 mb-3 md:text-6xl text-2xl uppercase font-bold">Wheels & Tires Collections</h1>
                        <button class="btn btn-primary text-white">Shop Now</button>
                    </div>
                </div>
            </div>
            
        </Slider>
    );
};

export default Banner;