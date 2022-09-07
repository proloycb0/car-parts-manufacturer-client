import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const { data: products, isLoading } = useQuery("parts", () => fetch('http://localhost:5000/parts')
        .then(res => res.json())
    );

    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#7bdcb5", }}
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#7bdcb5", marginRight: "25px" }}
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
            <h4 className='text-3xl text-center font-bold mb-8 mt-16'>Available Products</h4>
            <div className='grid grid-cols-1 gap-5' >
                <Slider {...settings}>
                    {
                        products?.slice(0, 6).map(product => <Part
                            key={product._id}
                            product={product}
                        />)
                    }
                </Slider>
            </div>
            <p className='text-end mt-8'><button onClick={() => navigate('/allProduct')} className="btn btn-primary text-white">Show All</button></p>
        </div>
    );
};

export default Parts;