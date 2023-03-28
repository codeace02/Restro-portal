import React from "react";
import { Container, Image } from "react-bootstrap";
import styles from '../styles/minute.module.scss';

function Minute() {
  return (
    <div id="alaminuite">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 p-0  d-flex flex-column justify-content-center align-item-center position-relative">
            <div className={`numCardArrowWrapper py-5`}>
              <div className={`numberCard fw-bold`}>
                <div className={`bigNumber`}>0 5</div>
                <div className={`sectionTitle`}>À LA MINUTE</div>
              </div>
            </div>
          </div>
          <div className={`sectionTitleM mt-5 fw-bold`}>À LA MINUTE</div>
          <Container className={`col-md-8 ${styles.minuteContainer}`}>
            <div className={`row justify-content-center align-item-center my-4`}>
              <div className={`col-md-6 ${styles.imgParent} ${styles.borderNone}`}>
                <Image src="./images/space3.jpg" className={`w-100 ${styles.imgHover}`} />
                <div className={` ${styles.outlineDiv} ms-3`}></div>
              </div>
              <div className={`col-md-6 ${styles.imgParent}`}>
                <Image src="./images/chef.jpg" className={`w-100 ${styles.imgHover}`} alt="" />
                <div className={` ${styles.outlineDiv}`}></div>
              </div>
            </div>
            <div className="row  justify-content-center align-item-center mb-4">
              <div className={`col-md-4 ${styles.imgParent} ${styles.borderNone}`}>
                <Image src="./images/scottish.jpg" className={`w-100 ${styles.imgHover}`} />
                <div className={` ${styles.outlineDiv} ms-3`}></div>
              </div>
              <div className={`col-md-4 ${styles.imgParent}`}>
                <Image src="./images/Shaun.jpg" className={`w-100 ${styles.imgHover}`} alt="" />
                <div className={` ${styles.outlineDiv} ms-0`}></div>
              </div>
              <div className={`col-md-4 ${styles.arr}`}>
                <div className="d-flex pt-5 ">
                  <div className="mt-3"><Image src="./images/daniel-arrow.png" className="w-50 " alt="" /></div>
                  <div className="fs-4">More À la Minute</div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Minute;
