import React, {Fragment} from 'react';
import {Container, Row } from 'react-bootstrap';
import Slider from "react-slick";

const imageUrls = [
    'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/water-sports-02-nzqdbq89mnrcrxoha2b4f2c1bmhs7kmtoxdlymd254.jpg',
    'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/water-sports-04-nzqdb6hnn50c04h5hbrygpbcuj72pxggm7oevt6brs.jpg',
    'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/water-sports-01-nzqdc0khpu5ibn9glos0ohq3uv2tk8rvecjy8nxq8o.jpg',
    'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/water-sports-02-nzqdbq89mnrcrxoha2b4f2c1bmhs7kmtoxdlymd254.jpg',
];

function WaterImg() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        <Fragment>
            <Container fluid className="carousel">
                <Row>
                    <Slider {...settings}>
                        <div>
                            <img src={imageUrls[0]} alt=""/>
                        </div>
                        <div>
                            <img src={imageUrls[1]} alt=""/>
                        </div>
                        <div>
                            <img src={imageUrls[2]} alt=""/>
                        </div>
                        <div>
                            <img src={imageUrls[3]} alt=""/>
                        </div>
                        <div>
                            <img src={imageUrls[0]} alt=""/>
                        </div>
                        <div>
                            <img src={imageUrls[1]} alt=""/>
                        </div>
                        <div>
                            <img src={imageUrls[2]} alt=""/>
                        </div>
                        <div>
                            <img src={imageUrls[3]} alt=""/>
                        </div>
                    </Slider>
                </Row>
            </Container>
        </Fragment>
    );
}

export default WaterImg;
