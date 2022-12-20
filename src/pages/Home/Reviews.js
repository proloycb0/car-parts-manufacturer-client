import React from 'react';
import { RiSliceFill } from 'react-icons/ri';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://car-parts-manufacturer-server.onrender.com/review', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => res.json())
    );

    if(isLoading){
        return <Loading/>
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "#7bdcb5", }}
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "#7bdcb5", marginRight: "25px" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="max-w-7xl mx-auto mt-3 mb-8">
            <h4 className='text-3xl text-center font-bold mt-5 mb-5'>Reviews</h4>
            <h4 className='text-xl text-primary text-center font-bold'>What our Customers say</h4>
            <div className='grid grid-cols-1 gap-5' >
                <Slider {...settings}>
                    {
                        reviews?.slice(0, 6).map(review => <Review
                            key={review._id}
                            review={review}
                        />)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;