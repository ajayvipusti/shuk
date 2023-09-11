import React from "react";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiRightArrowAlt,
} from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { NavLink } from "react-router-dom";
// import GoogleMapReact from 'google-map-react';
// import Map from './Map'
import whatsapp from "../assets/whatsapp-img.png";
import gmap from "../assets/map.png";

const Footer = () => {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

  return (
    <>
      <footer className="text-center footer text-lg-start  text-white">
        <section className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="social-media ">
            <a rel="noopener noreferrer" className="me-4 text-reset fb">
              <BiLogoFacebook className="facbook_icon" />
            </a>
            <a href="" className="me-4 text-reset twitter">
              <AiOutlineTwitter />
            </a>

            <a href="" className="me-4 text-reset instagram">
              <BiLogoInstagram />
            </a>
            <a
              href="https://in.linkedin.com/company/shukglobal"
              target="_blank"
              className="me-4 text-reset linkdin"
            >
              <BiLogoLinkedin />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container  text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-3">
                  <i className="fas fa-gem "></i>About Us
                </h6>
                <hr />
                <p>
                  Organizations face damage to brand reputation, revenue loss,
                  loss of intellectual property, etc.​ Government organizations
                  can face loss of critical data which can result in a national
                  security threat.​Deception is a layer of security that helps
                  the organization to protect itself from imminent threats. Our
                  first priority is protecting our client’s assets for which
                  they put their trust in us.{" "}
                  <span className="read-more">
                    <NavLink to="/about">Read More...</NavLink>
                  </span>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-section">
                <h6 className="text-uppercase fw-bold mb-3">Our Menu</h6>
                <hr />
                <p>
                  <NavLink to="/" className="text-reset">
                    <BiRightArrowAlt /> Home
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/about" className="text-reset">
                    <BiRightArrowAlt /> About Us
                  </NavLink>
                </p>
                <p>
                  <NavLink to="services" className="text-reset">
                    <BiRightArrowAlt /> Our Services
                  </NavLink>
                </p>
                <p>
                  <NavLink to="contact" className="text-reset">
                    <BiRightArrowAlt /> Contact Us
                  </NavLink>
                </p>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 footer-section">
                <h6 className="text-uppercase fw-bold mb-3">Our Services</h6>
                <hr />
                <p>
                  <NavLink to="/services" className="text-reset">
                    <BiRightArrowAlt /> Red teaming
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/services" className="text-reset">
                    <BiRightArrowAlt /> Blue teaming
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/services" className="text-reset">
                    <BiRightArrowAlt /> Penetration testing
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/services" className="text-reset">
                    <BiRightArrowAlt /> Vulnerability assesment
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/services" className="text-reset">
                    <BiRightArrowAlt /> White box testing
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/services" className="text-reset">
                    <BiRightArrowAlt /> Gray box testing
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/services" className="text-reset">
                    <BiRightArrowAlt /> Security code review
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/services" className="text-reset">
                    <BiRightArrowAlt /> Soc
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/services" className="text-reset">
                    <BiRightArrowAlt /> Noc
                  </NavLink>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footer-section">
                <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                <hr />
                {/* <Locationmap >
          
       </Locationmap> */}
                <p className="cursor-pointer">
                  <ImLocation />{" "}
                  <span>
                    {" "}
                    206 , Tower B, ITHUM TOWER, GALAXY BUSINESS PARK, Block A,
                    Industrial Area, Sector 62, Noida, Uttar Pradesh
                  </span>
                </p>
                <p>
                  <a
                    href="https://www.google.com/maps/place/Shuk+Global+Pvt.+Ltd./@28.6260356,77.3666236,17z/data=!3m2!4b1!5s0x390cefbc66672b6f:0x7665e035622c9937!4m6!3m5!1s0x390ce515909e7bdb:0xd9733dc893d482f8!8m2!3d28.6260309!4d77.3691985!16s%2Fg%2F11pv2bb67d?entry=ttu"
                    target="_blank"
                  >
                    <img
                      src={gmap}
                      alt="map"
                      className="img-map"
                      width={465}
                      height={120}
                      style={{ marginBottom: "20px" }}
                    />
                  </a>

                  <a href="mailto: info@shukglobal.com" className="text-white">
                    <AiOutlineMail /> info@shukglobal.com
                  </a>
                </p>

                <p>
                  {" "}
                  <AiOutlinePhone />
                  +91 9659653900
                </p>
                {/* <p><AiOutlinePhone /> + 01 234 567 89</p> */}
              </div>
            </div>
          </div>
        </section>
        <div
          style={{
            height: "60px",
            width: "60px",
            position: "fixed",
            right: "10px",
            bottom: "20px",
          }}
        >
          <a href="https://wa.me/919659653900">
            {" "}
            <img
              src={whatsapp}
              alt=""
              style={{ height: "60px", width: "50px" }}
              className="img-fluid"
            />
          </a>
        </div>

        <div className="p-4 px-5" style={{ backgroundColor: "#061430" }}>
          Copyright 2022 - Shuk Global Private Limited - India” Website Designed
          by :
          <a className="text-reset fw-bold" href="https://www.shukglobal.com/">
            Shuk Global
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
