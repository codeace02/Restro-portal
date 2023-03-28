import React, { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import styles from "../../styles/home.module.scss";

export default function Home() {
    const [first, setfirst] = useState(false)
    return (
        <>
            <Carousel fade indicators={false} className="home">
                <Carousel.Item className='screensize'>
                    <video
                        src={`/images/vid1.mp4`}
                        controls={false}
                        autoPlay
                        autoplay="autoplay"
                        muted
                        loop
                        className={`${styles.main}`}
                    />
                </Carousel.Item>
                <Carousel.Item className='screensize'>
                    <Image src="/images/first.jpg" alt="" className='img img-fluid' />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
