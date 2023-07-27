import React, {Fragment} from 'react';
import {Container, Row } from 'react-bootstrap';
import Slider from "react-slick";

const imageUrls = [
    'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/winter-sports-02-nzqdabgzdltvczq7igd9of558tfynx1bhy5e1ogbh4.jpg',
    'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/winter-sports-03-nzqd8khsnpfnr49oq759jd19g02dc73axafuw51p20.jpg',
    'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/winter-sports-01-nzqdakvd9y6ql3cjzkfjdcrr6o5msw2mv8o8ug2dqw.jpg',
    'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/winter-sports-01-nzqdakvd9y6ql3cjzkfjdcrr6o5msw2mv8o8ug2dqw.jpg'
];

function WinterImg() {

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
            <Container fluid className="winterImg">
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

export default WinterImg;
