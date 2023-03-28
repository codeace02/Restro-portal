import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import styles from "../../styles/header.module.scss";
import {
  IconArrowBack,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconX,
} from "@tabler/icons";
import { useRouter } from "next/router";
import ProgressBar from "../common/ProgressBar";
import API from "@/helpers/api";
import { toast, Toaster } from "react-hot-toast";

const initial = {
  guest: "",
  reservation_date: "",
  reservation_time: "",
  phone_no: "",
  last_name: "",
  first_name: "",
  email: "",
}


export default function Header() {
  const [data, setData] = useState(initial);
  const [showNav, setShowNav] = useState(false);
  const [offset, setOffset] = useState(0);
  const [lgShow, setLgShow] = useState(false);
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [navHeight, setNavHeight] = useState("200px");
  const handleScroll = () => {
    setTimeout(() => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setNavHeight("60px");
        setOffset(scrollTop);
      } else if (scrollTop == 0) {
        setNavHeight("200px");
        setOffset(0);
      }
    }, 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarHandle = (e) => { setShowNav(!showNav); };
  const [halftime, setTime] = useState(["5.00", "5.30", "6.00", "6.30", "7.00", "7.30", "8.00", "8.30", "9.00", "9.30", "10.00", "Notify"])
  const router = useRouter();


  const {
    guest,
    reservation_date,
    reservation_time,
    first_name,
    last_name,
    phone_no,
    email,
  } = data

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value, }));
  }
  const handleNext = (item) => {
    data.reservation_time = item;
    setData(data);
    setShow(!show)
  }
  const handleClick = (e) => {
    e.preventDefault();
    API.apiPost("reserveTable", data)
      .then((response) => {
        if (response.data && response.data.success === true) {
          toast.success(response.data.message, {
            position: "top-right",
            style: {
              padding: "16px",
              color: "#3c5f4b",
              marginRight: "25px",
            },
          });
          setData(intialData);
          
        }
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-right",
          style: {
            padding: "16px",
            color: "#3c5f4b",
            marginRight: "25px",
          },
        });
      });
    setLgShow(!lgShow)
  
  }

  return (
    <>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        style={{ zIndex: "1000000" }}
      >
        {!show && (
          <>
            <Modal.Header closeButton>
              <Row>
                <h2 className="pt-2 ms-3 fw-bold">Automative Restaurant</h2>
              </Row>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <div>
                    <h4 className="fw-bold">Need to know</h4>
                    <p>
                      The Main Dining Room at DANIEL offers a 4-course seasonal
                      prix fixe menu, and a 7-course seasonal tasting menu.
                    </p>

                    <p>
                      The Lounge at DANIEL offers an a la carte menu, a 4-course
                      seasonal prix fixe menu, and a 7-course seasonal tasting
                      menu.
                    </p>
                  </div>
                  <Row className="border rounded rounded-5 py-3 ms-1">
                    <Col>
                      <Form.Select
                        aria-label="Default select example"
                        className="border-0 rounded rounded-5"
                        onChange={handleChange}
                        name="guest"
                      >
                        <option hidden> Choose your preferences</option>
                        {Array(20)
                          .fill("")
                          .map((item, index) => (
                            <option key={index} className="fw-bold" value={index + 1}>
                              {index < 19 ? index + 1 : "20+"} Guests
                            </option>
                          ))}
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Group
                        className="col-md-12"
                        controlId="formGridFirstName"
                      >
                        <Form.Control
                          className="border-0 rounded rounded-5"
                          name="reservation_date"
                          type="date"
                          placeholder="Organization name"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <h5>Dinner</h5>
                  </Row>
                  <Row className="my-1 justify-content-center">
                    {halftime.map((item, index) => (
                      <div key={index} className="col-md-2 my-2">
                        <Button type="button" className="btn btn-primary px-4 rounded rounded-4" onClick={() => { handleNext(item) }}>
                          {item}
                        </Button>
                      </div>
                    )
                    )}
                  </Row>

                  <div className="my-2">
                    <h5 className="fw-bold">About Restaurant Automative</h5>
                    <p>
                      Since opening in 1993, DANIEL has earned its place among
                      the pillars of New York Citys bustling dining scene,
                      receiving numerous accolades for its refined European
                      cuisine, world-class cellar and gracious hospitality.
                    </p>
                    <p>
                      Located in the former Mayfair Hotel on Park Avenue the
                      original site of Le Cirque DANIEL is steeped in French
                      culinary history. Building on time-honored techniques,
                      Executive Chef Eddy Leroux, Chef de Cuisine Joshua Capone
                      and Executive Pastry Shaun Velez present a modern,
                      seasonal menu inspired by the finest meats, wild game,
                      seafood, fruits, vegetables and foraged flavors from
                      around the world. Wines from the Rhône and Burgundy, as
                      well as a robust Champagne program, rank among the
                      noteworthy highlights of the restaurants award-winning
                      cellar. Presented with a flourish of fine hospitality, the
                      restaurant’s effect is transportive, a seamless service
                      overseen by General Manager Karim Guedouar and
                      orchestrated by more than 150 staff members
                      behind-the-scenes.
                    </p>
                  </div>
                </Row>
              </Container>
            </Modal.Body>
          </>
        )}
        {show && (
          <>
            <Modal.Header closeButton>
              <Row>
                <h2 className="pt-2 ms-3 fw-bold">Complete Your Reservation</h2>
              </Row>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <span onClick={() => { setShow(!show); }}>
                  <IconArrowBack size={25} color="brown" /> Back to
                </span>
                <div className="row">
                  <h5 className="">Restaurant Automative</h5>
                  <div>{reservation_date} , {reservation_time}</div>
                  <div>{guest} Guests,Dinning Room </div>
                </div>
                <Row>
                  <Form className="row">
                    <Form.Group className="mb-2 col-md-6" controlId="firstname">
                      <Form.Label>
                        <b>First Name </b><span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={first_name}
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        {!first_name ? "Please Enter First Name" : ""}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-2 col-md-6" controlId="lastname">
                      <Form.Label>
                        <b>Last Name</b><span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={last_name}
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        {!last_name ? "Please Enter Last Name" : ""}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-2 col-md-6" controlId="phone no">
                      <Form.Label>
                        <b>Contact</b><span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="tel "
                        placeholder="Contact Number"
                        value={phone_no}
                        name="phone_no"
                        maxLength="13"
                        onChange={handleChange}
                      // isInvalid={showErrors && !Validation.numericPhone(work_phone)} 
                      />
                    </Form.Group>
                    <Form.Group className="mb-2 col-md-6" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Business Email  <small className="text-danger fs-6">*</small></Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Form>
                  <div classNam="d-flex justify-content-center align-item-center">
                    <button className="btn btn-success  px-3 fw-bold" onClick={handleClick}>
                      Reserve Now
                    </button>
                  </div>
                </Row>
              </Container>
            </Modal.Body>
          </>
        )}
      </Modal>

      <div
        style={{ height: navHeight, transition: "height 0.2s ease-in-out" }}
        className={`${offset > 0 && !showNav && styles.smallheader
          } container-fluid mb-2 stickynav ${styles.header}`}
      >
        <div className="row">
          <div className={`col-3 col-sm-3 col-md-2`}>
            <div
              hidden={showNav}
              className={`${styles.textlogo} text-center p-2`}
              onClick={() => router.reload(window.location.pathname)}
            >
              <Image
                src="/images/newlogo.png"
                alt="logo"
                className={`img img-fluid ${styles.newlogoImage}`}
              />
              <p className={`m-0 p-0 fs-5 fw-bold mt-3 ${styles.logoname}`}>
                AUTOMATIVE
              </p>
              <span className="">RESTAURANT</span>
            </div>
          </div>
          <div className={`col-3 col-sm-3 col-md-5`}></div>
          <div
            className={`col-6 col-sm-3 col-md-5 mt-4  p-2 d-flex justify-content-end`}
          >
            <div hidden={showNav} className="">
              <button
                className={`${styles.reservationsButton}`}
                onClick={() => setLgShow(!lgShow)}
              >
                RESERVATIONS
              </button>
            </div>
            <div className="d-flex mt-3 mx-4">
              {
                <div className={`${styles.menuToggle}`}>
                  <input
                    type="checkbox"
                    checked={check}
                    onClick={(e) => navbarHandle(e)}
                  />
                  {!showNav && (
                    <>
                      <span></span>
                      <span></span>
                      <span></span>
                    </>
                  )}
                  <div></div>
                </div>
              }
            </div>
          </div>
        </div>
        <nav
          sticky="top"
          className={`${styles.menu} ${showNav ? "d-block" : "d-none"}`}
        >
          <div style={{ height: "20vh" }} className="row">
            <div className="col-5 col-md-7 p-3 ">
              <Image
                src="/images/whitepret.png"
                alt="logo"
                className={`img img-fluid logoImage p-2 ms-5 ${styles.navimg}`}
              />
            </div>
            <div
              className={`col-7 col-md-5 mt-4 p-2 d-flex justify-content-end`}
            >
              <div className="mx-4">
                <button className={`${styles.reservationsButtonWhite}`}>
                  RESERVATIONS
                </button>
              </div>
              <IconX color="white" size={50} className="mx-2" />
            </div>
          </div>
          <div className="row">
            <div className={`col-md-7 ${styles.left} text-white`}>
              <Row className="flex-wrap flex-column mt-5 ms-5">
                <Col md={5}>
                  <div className="my-4">
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Daniel/@40.7755831,-74.0096135,12.35z/data=!4m5!3m4!1s0x0:0x947c96d0b0de75c!8m2!3d40.7668083!4d-73.9675769"
                      className={` ${styles.underlineHover} text-white text-decoration-none fs-5`}
                    >
                      60 E 65th Street, <br /> New York, NY 10065
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="tel: +91 212-288-0033"
                      className={`${styles.underlineHover} text-white text-decoration-none fs-5`}
                    >
                      (212) 288-0033
                    </a>
                  </div>
                  <div className="my-3">
                    <div className="fs-5 fw-bold">DINNER</div>
                    <p className="fs-5 word-break text-break">
                      Tuesday-Sunday, 5pm-10pm
                    </p>
                  </div>
                  <div className="my-3">
                    <a
                      href="#"
                      className={`${styles.underlineHover} text-white text-decoration-none fs-5`}
                    >
                      Automativerestro.com
                    </a>
                  </div>
                  <Row className="pt-5">
                    <Col
                      xs={12}
                      lg={5}
                      xl={2}
                      sm={6}
                      md={5}
                      className=" my-2 d-flex justify-content-between align-items-center"
                    >
                      <span
                        className={`${styles.iconColor} rounded-5 px-2 me-2`}
                      >
                        <IconBrandFacebook
                          className="my-2"
                          size={30}
                          color="black"
                        />
                      </span>
                      <span
                        className={`${styles.iconColor} rounded-5 px-2 mx-2`}
                      >
                        <IconBrandTwitter
                          className="my-2"
                          size={30}
                          color="black"
                        />
                      </span>
                      <span
                        className={`${styles.iconColor} rounded-5 px-2 mx-2`}
                      >
                        <IconBrandInstagram
                          className="my-2"
                          size={30}
                          color="black"
                        />
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className={`col-12 col-md-5 ${styles.parentDiv}`}>
              <Row className={`${styles.right} d-flex justify-content-end`}>
                <div className={`text-white py-2 ${styles.linkHover}`}>
                  <a
                    href="#about"
                    className={` border-bottom border-2 pb-2`}
                    onClick={(e) => navbarHandle(e)}
                  >
                    01 &nbsp;&nbsp; ABOUT
                  </a>
                </div>
                <div className={`text-white py-2 ${styles.linkHover}`}>
                  <a
                    href="#cuisine"
                    className={`border-bottom border-2 pb-2`}
                    onClick={(e) => navbarHandle(e)}
                  >
                    02 &nbsp;&nbsp; CUISINE
                  </a>
                </div>
                <div className={`text-white py-2 ${styles.linkHover}`}>
                  <a
                    href="#spaces"
                    className={`border-bottom border-2 pb-2`}
                    onClick={(e) => navbarHandle(e)}
                  >
                    03 &nbsp;&nbsp; SPACES
                  </a>
                </div>
                <div className={`text-white py-2 ${styles.linkHover}`}>
                  <a
                    href="#occassion"
                    className={`border-bottom border-2 pb-2`}
                    onClick={(e) => navbarHandle(e)}
                  >
                    04 &nbsp;&nbsp; OCCASSIONS
                  </a>
                </div>
                <div className={`text-white py-2 ${styles.linkHover}`}>
                  <a
                    href="#alaminuite"
                    className={`border-bottom border-2 pb-2`}
                    onClick={(e) => navbarHandle(e)}
                  >
                    05 &nbsp;&nbsp; À LA MINUTE
                  </a>
                </div>
                <div className={`text-white py-2 ${styles.linkHover}`}>
                  <a
                    href="#gallery"
                    className="border-bottom border-2 pb-2"
                    onClick={(e) => navbarHandle(e)}
                  >
                    06 &nbsp;&nbsp; GALLERY
                  </a>
                </div>
                <div className={`text-white py-2 ${styles.linkHover}`}>
                  <a
                    href="#contact"
                    className={`border-bottom border-2 pb-2`}
                    onClick={(e) => navbarHandle(e)}
                  >
                    07 &nbsp;&nbsp; CONTACT
                  </a>
                </div>
              </Row>
            </div>
          </div>
        </nav>
      </div>
      {offset > 0 && <ProgressBar />}
    </>
  );
}
