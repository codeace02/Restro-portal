import React from 'react'
import { Container } from 'react-bootstrap';
import style from '../styles/subscribe.module.scss'

function Subscribe() {
  return (
    <div className='bg-light'>
      <Container>
        <div className=' d-flex justify-content-center  pt-5'>
          <p className={`${style.sub}`}>Subscribe to keep notified of specials, packages, and news </p>
        </div>
        <div className='d-flex justify-content-center pb-5 '>
          <button className={`${style.btn} py-2 px-3 fs-5 `}>SUBSCRIBE</button>
        </div>
      </Container>
    </div>
  )
}

export default Subscribe;