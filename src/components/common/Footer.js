import React from 'react';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconCircleDotted } from '@tabler/icons';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import styles from "../../styles/footer.module.scss";

const Footer = () => {
    return (
        <>
            <div className='bg-black'>
                <Container className='py-3 text-white'>
                    <Row>
                        <div className='text-center'>
                            <Image src='./images/whitepret.png' className={`img img-fluid ${styles.footimg}`} alt="" />
                        </div>
                    </Row>
                    <Row className={`${styles.firstDiv} my-3 d-flex justify-content-around align-items-center`}>
                        <Col md={12} xs={12} lg={6} xl={5} className='my-2'>
                            <a
                                target="_blank"
                                href='https://www.google.com/maps/place/Daniel/@40.7755831,-74.0096135,12.35z/data=!4m5!3m4!1s0x0:0x947c96d0b0de75c!8m2!3d40.7668083!4d-73.9675769'
                                className={`${styles.link} fs-3 text-white`}
                                role="button"
                            >
                                60 E 65th Street New York,NY 10065
                            </a>
                        </Col>
                        <Col md={6} xs={12} lg={3} xl={3} className={`${styles.secondDiv} my-2 border-2`}>
                            <a
                                target="_blank"
                                href='tel: +91 212-288-0033'
                                className={`${styles.link} fs-3 text-white my-2`}
                                role="button"
                            >
                                (212) 288-0033
                            </a>
                        </Col>
                        <Col md={6} xs={12} lg={3} xl={2} className={`${styles.thirdDiv} my-2 border-2`}>
                            <a
                                target="_blank"
                                href="mailto: hr@techsuperiors.com"
                                className={`${styles.link} fs-3 text-white`}
                                role="button"
                            >
                                Contact Us
                            </a>
                        </Col>
                        <Col xs={12} lg={5} xl={2} sm={6} md={5} className=' my-2 d-flex justify-content-between align-items-center flex-wrap'>
                            <span className={`${styles.iconColor} rounded-5 px-2`}>
                                <IconBrandFacebook className='my-2' size={30} color='black' />
                            </span>
                            <span className={`${styles.iconColor} rounded-5 px-2`}>
                                <IconBrandTwitter className='my-2' size={30} color='black' />
                            </span>
                            <span className={`${styles.iconColor} rounded-5 px-2`}>
                                <IconBrandInstagram className='my-2' size={30} color='black' />
                            </span>
                        </Col>
                    </Row>
                    <Row className='text-center mt-2 mb-5'>
                        <Col>
                            <Button className={`${styles.button} px-4 mt-3`}>
                                Make a Reservation
                            </Button>
                        </Col>
                    </Row>
                    <Row className='my-3'>
                        <Col md={2}></Col>
                        <Col className={`d-flex flex-row justify-content-between align-items-center flex-wrap ${styles.accessibility}`}>
                            <div className={`${styles.link}`}>ACCESSIBILITY</div>
                            <div className={`${styles.link}`}>CAREERS</div>
                            <div className={`${styles.link}`}>STORE</div>
                            <div className={`${styles.link}`}>GIFT CARDS</div>
                            <div className={`${styles.link}`}>DANIELBOULUD.COM</div>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col className='d-flex justify-content-center align-items-center flex-wrap'>
                            <div className={`${styles.footerImageC} m-1 p-2`}>
                                <Image src="/images/f1.png" alt='companies' className={`img-fluid`} />
                            </div>
                            <div className={`${styles.footerImageC} m-1 p-2`}>
                                <Image src="/images/bould.png" alt='companies' className={`img-fluid`} />
                            </div>
                            <div className={`${styles.footerImageC} m-2 p-2`}>
                                <Image src="/images/bar.png" alt='companies' className={`img-fluid`} />
                            </div>
                            <div className={`${styles.footerImageC} m-2 p-2`}>
                                <Image src="/images/boulud-sud.png" alt='companies' className={`img-fluid`} />
                            </div>
                            <div className={`${styles.footerImageC} m-2 p-2`}>
                                <Image src="/images/db-bistro.png" alt='companies' className={`img-fluid`} />
                            </div>
                            <div className={`${styles.footerImageC} m-2 p-2`}>
                                <Image src="/images/f1.png" alt='companies' className={`img-fluid`} />
                            </div>
                            <div className={`${styles.footerImageC} m-2 p-2`}>
                                <Image src="/images/f1.png" alt='companies' className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-4 d-flex justify-content-around'>
                        <Col md={1}></Col>
                        <Col md={5} className='mt-5 text-center'>
                            <small className={`${styles.din}`}>
                                © <b>2021 Dinex Group / Daniel Boulud. All Rights Reserved.</b>
                            </small>
                        </Col>
                        <Col className='mt-5 text-center'>
                            <div className={`${styles.link}`}>Terms & Privacy Policy</div>
                        </Col>
                        <Col className={`${styles.main} mt-5 text-center`}>
                            <div className={`text-muted ${styles.Credit}`}>Credits</div>
                            <div className={`${styles.hovered}`}>Managed by TSC</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer;