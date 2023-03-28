import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import styles from "../styles/contact.module.scss";

export default function MapComponent() {
    return (
        <>
            <div id="contact">
                <Container className=''>
                    <Row className=' flex-wrap mx-0'>
                        <div className={`sectionTitleM fw-bold mt-5`}>Contact</div>
                        <Col className={`${styles.firstDiv} d-flex align-items-center`}>
                            <div className={`numCardArrow`}>
                                <div className={`numberCard fw-bold`}>
                                    <div className={`bigNumber`}>
                                        0
                                        7
                                    </div>
                                    <div className={`sectionTitle`}>
                                        Contact
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={`${styles.secondDiv} d-flex align-items-center`}>
                            <span className='d-flex align-items-center border border-secondary border-0 '>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12087.13626839053!2d-73.9676022!3d40.7667738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x947c96d0b0de75c!2sDaniel!5e0!3m2!1sen!2sin!4v1677752044213!5m2!1sen!2sin" width="350" height="380" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </span>
                        </Col>
                        <Col md={3} className='d-flex align-items-center flex-wrap'>
                            <Row className='flex-wrap flex-column text-muted'>
                                <Col>
                                    <div className=''>
                                        <Image src="/images/logo.png" className='img img-fluid w-75' alt='logo' />
                                    </div>
                                    <div className='my-4'>
                                        <a
                                            target="_blank"
                                            href='https://www.google.com/maps/place/Daniel/@40.7755831,-74.0096135,12.35z/data=!4m5!3m4!1s0x0:0x947c96d0b0de75c!8m2!3d40.7668083!4d-73.9675769'
                                            className={`${styles.underlineHover} ${styles.street} text-muted text-decoration-none fs-4`}
                                        >
                                            60 E 65th Street, New York, NY 10065
                                        </a>
                                    </div>
                                    <div className='my-4'>
                                        <a
                                            href='tel: +91 212-288-0033'
                                            className={`${styles.underlineHover} ${styles.street} text-muted text-decoration-none fs-4`}
                                        >
                                            (212) 288-0033
                                        </a>
                                    </div>
                                    <div className='my-4'>
                                        <a
                                            target="_blank"
                                            href="mailto: hr@techsuperiors.com"
                                            className={`${styles.underlineHover} text-muted text-decoration-none fs-4`}
                                        >
                                            EMAIL US
                                        </a>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='mb-4 border border-3 rounded '></div>
                                    <div className={`my-3${styles.street}`}>
                                        <div className={`${styles.street}`}>DINNER</div>
                                        <p className={`${styles.streets}`}>Tuesday-Sunday, 5pm-10pm</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
