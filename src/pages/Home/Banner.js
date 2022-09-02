import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", width: "100px", marginRight: "25px" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Slider {...settings}>
            <div class="hero min-h-screen bg-[url('https://i.ibb.co/RQ3BhNx/slider-1.webp')]" >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="py-52 ml-16 text-white">
                    <div class="max-w-lg">
                        <h3 class="mb-5 text-3xl uppercase font-bold">New Technology & Build</h3>
                        <h1 class="mb-5 text-6xl uppercase font-bold">Wheels & Tires Collections</h1>
                        <button class="btn btn-neutral">Shop Now</button>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-[url('https://i.ibb.co/PcdFJVJ/slider-2.webp')]" >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="py-52 ml-16 text-white">
                    <div class="max-w-lg">
                        <h3 class="mb-5 text-3xl uppercase font-bold">New Technology & Build</h3>
                        <h1 class="mb-5 text-6xl uppercase font-bold">Wheels & Tires Collections</h1>
                        <button class="btn btn-neutral">Shop Now</button>
                    </div>
                </div>
            </div>
            
        </Slider>
    );
};

export default Banner;