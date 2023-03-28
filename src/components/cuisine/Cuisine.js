import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconArrowLeft, IconArrowRight, IconArrowRightBar } from '@tabler/icons';
import { Container, Image } from 'react-bootstrap';
import styles from "../../styles/about.module.scss";

export default function Cuisine() {
    const [slides] = useState([{ image: 'images/baja.jpg' }, { image: 'images/lukan.jpg' }, { image: 'images/rd.jpg' }, { image: 'images/summer.jpg' }])
    const [slideNumber, setSlideNumber] = useState(0)
    const settings =
    {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        // autoplay: true,
        // beforeChange: (current) => setSlideNumber(current),
        afterChange: current => setSlideNumber(current)
    };
    let slider
    const next = () => {
        slider.slickNext()
    }
    const prev = () => {
        slider.slickPrev()
    }
    return (
        <section className={`bgGrey py-1`} id="cuisine">
            <div className=' m-0 p-0'>
                <div className="row my-5 mx-0">
                    <div className={`sectionTitleM fw-bold`}>Cuisine</div>
                    <Container className={`col-md-8 p-0 ${styles.aboutContainer}`}>
                        <Slider className={``} ref={sli => (slider = sli)} {...settings}>
                            {
                                slides.map((slide, index) =>
                                (<div key={index} className={`${styles.cardContainer} position-relative`} >
                                    <div className={`${styles.innerContainer}`}>
                                        <div className={`d-flex justify-content-center align-item-start`}>
                                            <Image src={slide.image} alt="slide" className={`img img-fluid ${styles.imgContainer}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.cardContent} px-5 py-2 pb-5`}>
                                        <div className={`${styles.about}`}>
                                            CUISINE
                                        </div>
                                        <div className={`${styles.restro}`}>
                                            <h1>
                                                PRIX-FIXE
                                            </h1>
                                        </div>
                                        <div className={` ${styles.since}`}>
                                            Chef Daniel Boulus namesake restaurant offers a four-course seasonal prix fixe menu where Chef Eddy Leroux presents a menu driven by classicial french technique featuring a wide variety of local seafood, vegetables and meats. With advance notice, we are happy to adjust the menu to accommodate certain dietary restrictions.
                                        </div>
                                        <div className='my-3'>
                                            <button className={`reservationsButton`}>
                                                VIEW MENU
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`childDivOutline`}></div>
                                </div>
                                ))
                            }
                        </Slider>
                    </Container>
                    {/* <div className='col-md-1'></div> */}
                    <div className='col-md-4 m-0 d-flex justify-content-center align-items-end p-0 flex-column '>
                        <div className={`numCardArrowRight `}>
                            <div className={`numberCard numberCardRight fw-bold`}>
                                <div className={`bigNumber`}>
                                    0
                                    2
                                </div>
                                <div className={`sectionTitle`}>
                                    Cuisine
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.slickSection} d-flex justify-content-center mt-3`}>
                            <button type="button" className='slickButton mx-3' onClick={prev}><IconArrowLeft /></button>
                            <span className='slickNumber text-center'><span></span>{slideNumber + 1}<span>/</span>{slides.length}</span>
                            <button type="button" className='slickButton mx-3' onClick={next}><IconArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
