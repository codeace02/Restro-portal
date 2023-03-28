// import React, { useState } from 'react'
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { IconArrowLeft, IconArrowRight, IconArrowRightBar } from '@tabler/icons';
// import { Image } from 'react-bootstrap';


// export default function About() {
//     const [slides] = useState([{ image: 'images/first.jpg' }])
//     const [slideNumber, setSlideNumber] = useState(0)
//     const settings =
//     {
//         // dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         // arrow: true,
//         // autoplay: true,
//         // beforeChange: (current) => setSlideNumber(current),
//         afterChange: current => setSlideNumber(current)
//     };
//     let slider
//     const next = () => {
//         slider.slickNext()
//     }
//     const prev = () => {
//         slider.slickPrev()
//     }
//     return (
//         <section className={``}>
//             <div className='container'
//                 data-aos="fade-down"
//                 data-aos-easing="linear"
//                 data-aos-duration="1500"
//             >
//                 <div className="row my-5">
//                     <div className="col-md-6">
//                         <div className="item-text">
//                             <span className="section-on-headline">Our clients</span>
//                             <h2 className={``}>Trusted by</h2>
//                             <p className={``}>We are proud to contribute to the success of our clients and create really long-term trustful relations with them. Our first three enterprise clients are still with us. 60% of our customers have worked with us for more than 5 years. </p>
//                         </div>
//                     </div>
//                     <div className={`col-md-6 `}>
//                         <Slider className={``} ref={sli => (slider = sli)} {...settings}>
//                             {
//                                 slides.map((slide, index) =>
//                                 (<div key={index} className={`d-flex justify-content-center align-item-center `}>
//                                     <Image src={slide.image} alt="slide" className={`img img-fluid `} />
//                                 </div>))
//                             }
//                         </Slider>
//                         <div className='d-flex justify-content-center mt-5'>
//                             <button type="button" className='slickButton mx-3' onClick={prev}><IconArrowLeft /></button>
//                             <span className='slickNumber text-center'><span></span>{slideNumber + 1}<span>/</span>{slides.length}</span>
//                             <button type="button" className='slickButton mx-3' onClick={next}><IconArrowRight /></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


//=======================================================================================================


import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconArrowLeft, IconArrowRight, IconArrowRightBar } from '@tabler/icons';
import { Button, Container, Image } from 'react-bootstrap';
import styles from "../../styles/about.module.scss";

export default function About() {
    const [slides] = useState([{ image: 'images/about-one.jpg' }, { image: 'images/about-two.jpg' }])
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
        <section className={`bgGrey py-1`} id="about" >
            <div className=' m-0 p-0'>
                <div className="row my-5 mx-0">
                    <div className={`sectionTitleM fw-bold`}>About Daniel</div>
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
                                    <div className={`${styles.cardContent} ps-5 pe-4 py-2 pb-5`}>
                                        <div className={`${styles.about}`}>
                                            ABOUT DANIEL
                                        </div>
                                        <div className="bigHeader text-black-50 my-2">
                                            <h1 className={`${styles.restro}`}>
                                                RESTAURANT DANIEL
                                            </h1>
                                        </div>
                                        <p className={` ${styles.since}`}>
                                            Since opening in 1993, DANIEL has earned its place among the pillars of New York City’s bustling dining scene, receiving numerous accolades for its refined European cuisine, world-class cellar and gracious hospitality.
                                        </p>
                                        <div className='my-3'>
                                            <button className={`reservationsButton fs-6`} role="button">
                                                READ MORE
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`childDivOutline`}></div>
                                </div>
                                ))
                            }
                        </Slider>
                    </Container>
                    <div className='col-md-4 m-0 d-flex justify-content-center align-items-end flex-column p-0'>
                        <div className={`numCardArrowRight `}>
                            <div className={`numberCard numberCardRight fw-bold`}>
                                <div className={`bigNumber`}>
                                    0
                                    1
                                </div>
                                <div className={`sectionTitle`}>
                                    About
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
