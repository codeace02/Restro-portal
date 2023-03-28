import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconArrowLeft, IconArrowRight, IconChevronRight, IconFileSpreadsheet } from '@tabler/icons';
import { Button, Image } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import style from '../../styles/spaces.module.scss';
import styles from "../../styles/about.module.scss";

export default function Spaces() {
    const [slides] = useState([
        { image: 'images/space1.jpg', heading: 'THE SKYBOX', description: "Featuring a bird's eye view of the DANIEL kitchen, this private dining space is one of the most unique tables in all of New York City." },
        { image: 'images/space2.jpg', heading: 'THE BELLECOUR ROOM', description: 'Up to 90 guests can be seated in our private dining space for customized dinners, lunches, ceremonies and celebrations.' },
        { image: 'images/space3.jpg', heading: 'MAIN DINING ROOM', description: 'From the soaring coffered ceiling to the refined Neo-Classic architecture, our dining room offers an elegant, yet modernized, refuge from the pace of city life.' },
        { image: 'images/space4.jpg', heading: 'BAR', description: 'Modern designs and innovated creations result in a refined Art Deco inspired bar at DANIEL.' },
        { image: 'images/space5.jpg', heading: 'LOUNGE', description: 'With dark mahogany panels and lush banquets, the Lounge at DANIEL is an intimate setting for upto 27  guests.' }
    ])
    const [slideNumber, setSlideNumber] = useState(0);
    const [hover, setHover] = useState(true)
    const [Ind, setInd] = useState();
    const [matches, setMatches] = useState(window.matchMedia("(max-width: 868px)").matches)

    const [slide, setSlide] = useState(2.2)
    useEffect(() => {
        window.matchMedia("(max-width: 868px)").addEventListener('change', e => setMatches(e.matches));
    }, []);
    useEffect(() => {
        if (matches) {
            setSlide(1);
        }
        else {
            setSlide(2.2);
        }
    })

    const settings =
    {
        centerMode: !matches,
        infinite: true,
        speed: 500,
        slidesToShow: slide,
        slidesToScroll: 1,
        arrow: true,
        afterChange: current => setSlideNumber(current)
    };
    let slider;
    const next = () => {
        slider.slickNext()
    }
    const prev = () => {
        slider.slickPrev()
    }
    function MouseEnter(slide, index) {
        setHover(false)
        setInd(index)
    }
    function MouseOut(event) {
        setInd()
        setHover(true)
    }

    return (
        <>
            <div className='bg-white' id="spaces">
                <div className={`sectionTitleM mt-5 fw-bold`}>Spaces</div>
                <Container fluid className=''>
                    <Row className=''>
                        <Col md={4} className='numCardArrow position-relative p-0 d-flex justify-content-center align-items-left flex-column'>
                            {/* <div className={`numCardArrowWrapper `}> */}
                            <div className={`numberCard fw-bold`}>
                                <div className={`bigNumber`}>
                                    0
                                    3
                                </div>
                                <div className={`sectionTitle`}>
                                    SPACES
                                </div>
                            </div>
                            <div className={`${styles.slickSection} d-flex justify-content-center mt-4 align-items-center`}>
                                <IconArrowLeft size={40} role="button" onClick={prev} />
                                <span className='mx-4 text-center'><span></span>{slideNumber + 1}<span>/</span>{slides.length}</span>
                                <IconArrowRight size={40} role="button" onClick={next} />
                            </div>
                            {/* </div> */}
                        </Col>
                        <Col md={12} lg={12} xl={8} className="px-0 position-relative">
                            <Container className={`${styles.aboutContainer}`}>
                                <Slider className={``} ref={sli => (slider = sli)} {...settings}>
                                    {
                                        slides.map((slide, index) =>
                                        (
                                            <>
                                                <div
                                                    onMouseEnter={() => MouseEnter(slide, index)} onMouseLeave={MouseOut}
                                                    key={index}
                                                    className={`${index !== Ind ? "align-items-end" : " align-items-center text-center px-3"}  d-flex justify-content-center img img-fluid ${style.imgStyle}`}
                                                    style={{ backgroundImage: `url(${slide.image})` }}>
                                                    {(index !== Ind) && <div>
                                                        <h4
                                                            className={`text-white mb-5 fw-bold ${style.head}`}
                                                        >
                                                            {slide.heading}
                                                        </h4>
                                                    </div>}
                                                    {(index == Ind) && < div hidden={hover} className={`text-white ${style.hovertext}`}>
                                                        <p className=' fs-1 lh-sm'>{slide.heading}</p>
                                                        <p className='fst-italic fs-5'>{slide.description}</p>
                                                        <Button variant='outline-light ' className='border border-2 rounded-0 fs-5 ps-3'>READ MORE</Button>
                                                    </div>}
                                                </div>
                                            </>
                                        ))
                                    }
                                </Slider>
                                <div className={`${styles.arrowSection} d-flex justify-content-center mt-4 align-items-center`}>
                                    <IconArrowLeft size={40} role="button" onClick={prev} />
                                    <span className='mx-4 text-center'><span></span>{slideNumber + 1}<span>/</span>{slides.length}</span>
                                    <IconArrowRight size={40} role="button" onClick={next} />
                                </div>
                            </Container>
                            <div className={`${style.arrow}`}>
                                <IconChevronRight
                                    size={60}
                                    onClick={next}
                                    className={`${style.icon}`}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
