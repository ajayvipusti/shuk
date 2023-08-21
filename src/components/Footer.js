import React from 'react'
import {BiLogoFacebook,BiLogoLinkedin ,BiLogoInstagram,BiRightArrowAlt} from 'react-icons/bi'
import {AiOutlineTwitter,AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <>
   
<footer className="text-center footer text-lg-start  text-white">
 
  <section className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  
    <div className='social-media'>
      <a href="" className="me-4 text-reset">
        <BiLogoFacebook className='facbook'/>
      </a>
      <a href="" className="me-4 text-reset">
        <AiOutlineTwitter />
      </a>
    
      <a href="" className="me-4 text-reset">
        <BiLogoInstagram />
      </a>
      <a href="" className="me-4 text-reset">
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
          loss of intellectual property, etc.​ Government organizations can face loss of critical data which can result in a national security threat.​Deception is a layer of security that helps the organization to protect itself from imminent threats. Our first priority is protecting our client’s
           assets for which they put their trust in us. <span className='read-more'><NavLink to='/about'>Read More...</NavLink></span>
          </p>
        </div>
    
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-section">
        
          <h6 className="text-uppercase fw-bold mb-3">
          Our Menu
          </h6>
          <hr />
          <p>
            <NavLink to="/" className="text-reset"><BiRightArrowAlt /> Home</NavLink>
          </p>
          <p>
            <NavLink to="/about" className="text-reset"><BiRightArrowAlt /> About Us</NavLink>
          </p>
          <p>
            <NavLink to="services" className="text-reset"><BiRightArrowAlt /> Our Services</NavLink>
          </p>
          <p>
            <NavLink to="contact" className="text-reset"><BiRightArrowAlt /> Contact Us</NavLink>
          </p>
        </div>
      
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 footer-section" >
         
          <h6 className="text-uppercase fw-bold mb-3">
          Our Services
          </h6>
          <hr />
          <p>
            <a href="#!" className="text-reset"><BiRightArrowAlt /> Red teaming</a>
          </p>
          <p>
            <a href="#!" className="text-reset"><BiRightArrowAlt /> Blue teaming</a>
          </p>
          <p>
            <a href="#!" className="text-reset"><BiRightArrowAlt /> Penetration testing
</a>
          </p>
          <p>
            <a href="#!" className="text-reset"><BiRightArrowAlt /> Vulnerability assesment</a>
          </p>
          <p>
            <a href="#!" className="text-reset"><BiRightArrowAlt /> White box testing</a>
          </p>
          <p>
            <a href="#!" className="text-reset"><BiRightArrowAlt /> Gray box testing</a>
          </p>
          <p>
            <a href="#!" className="text-reset"><BiRightArrowAlt /> Security code review</a>
          </p>
          <p>
            <a href="#!" className="text-reset"><BiRightArrowAlt /> Soc</a>
          </p>
          <p>
            <a href="#!" className="text-reset"><BiRightArrowAlt /> Noc</a>
          </p>
        </div>
      
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footer-section">
       
          <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
          <hr />
         
          <p className=''><ImLocation /> <span> 206 , Tower B, ITHUM TOWER, GALAXY BUSINESS PARK, Block A,
           Industrial Area, Sector 62, Noida, Uttar Pradesh</span></p>
       
          <p>
           <a href = "mailto: info@shukglobal.com" className='text-white'><AiOutlineMail /> info@shukglobal.com</a> 
          </p>
        
          <p><AiOutlinePhone />  + 01 234 567 88</p>
          <p><AiOutlinePhone /> + 01 234 567 89</p>
        </div>
   
      </div>
   
    </div>
  </section>

  <div className="text-center p-4" 
  style={{backgroundColor:'#061430'}}
  >
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
 
</footer>

     </>
  )
}

export default Footer