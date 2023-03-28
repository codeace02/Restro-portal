import React, { useEffect, useState } from 'react';
import About from './about/About';
import Footer from './common/Footer';
import Header from './common/Header';
import Home from './common/Home';
import Gallery from './gallery/Gallery';
import Contact from './Contact';
import Cuisine from './cuisine/Cuisine';
import Occasion from './occasion';
import Spaces from './spaces/Spaces';
import Minute from './Minute';
import { Image } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';

export default function Index() {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(!loading);
      }, 2000);
      setShow(!show);
    }, []);
  
    if (loading)
      return (
        <div className={`d-flex justify-content-center align-items-center load`}>
             <Image src='./images/logovid.gif' alt='logoloader' className='img img-fluid w-25 tnh'/>
        </div>
      );
    return (
        <>      
            <Header />
            <Home />
            <About />
            <Cuisine />
            <Spaces />
            <Occasion/>
            <Minute/>
            <Gallery />
            <Contact />            
            <Footer />
        </>
    )
}
