import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa6'
import {AiOutlineMail,AiTwotonePhone} from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleMapReact from 'google-map-react';
import Map from './Map'


const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const notify = () => toast.success("form submitted successfully !");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xvsz2wf', 'template_m2ez4h9', form.current, 't3YaPgakXEoSbOyuw')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <>
   <section className='contact-us text-center text-white'>
    <h1>Contact Us</h1>
    <p>
     <NavLink to='/' className='about-home '><AiFillHome className='mb-1'/>  Home  / </NavLink> <span className='about-text'>Contact Us</span>
     </p>
   </section>
   <section className='container form-section'>
    <div className='row p-4' style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <div className='col-lg-7 col-md-7 col-12 p-4' >
      <h2 className='mb-2'>Write Us</h2>
      <form ref={form} onSubmit={sendEmail} >
  <div className="row mb-4">
    <div className="col-lg-6 col-md-6 col-12 ">
      <input type="text"  className="form-control" placeholder=" Name" name="user_name"/>
    </div>
    <div className="col-lg-6 col-md-6 col-12">
      <input type="email" className="form-control mt-2 mt-md-0" placeholder="Email" name="user_email"/>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col-lg-6 col-md-6 col-12 ">
      <input type="number" className="form-control" placeholder="Number" name='user_number' />
    </div>
    <div className="col-lg-6 col-md-6 col-12">
      <input type="text" className="form-control mt-2 mt-md-0" placeholder="Services" name='user_services'/>
    </div>
  </div>
  <div className="form-group mb-4">
    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Message' name="message" rows="5"></textarea>
  </div>
  <button type='submit' value='send' className='btn btn-danger' onClick={notify}>Submit</button>
</form>
      </div>
      <div className='col-lg-5 col-md-5 col-12 ' >
       <h3 className='mb-3'>Our Contact Details</h3>
       <div className=''>
      <FaLocationDot className='contact-address-icon'/>
      <div className='contact-address'>
      <h5>Address : </h5>
      <p>206 , Tower B, ITHUM TOWER, GALAXY BUSINESS PARK, Block A, 
      Industrial Area, Sector 62, Noida, Uttar Pradesh</p>
      </div>
      
      <p></p>
       </div>
       <div className=''>
      <AiOutlineMail className='contact-address-icon'/>
      <div className='contact-address'>
      <h5>Email : </h5>
      <p>info@shukglobal.com</p>
      </div>
      
      <p></p>
       </div>
       <div className=''>
      <AiTwotonePhone className='contact-address-icon'/>
      <div className='contact-address'>
      <h5>Phone : </h5>
      <p>+91 9659653900</p>
      </div>
      
      <p></p>
       </div>
      </div>
    </div>
   </section>
   <section>
   
   </section>
   <ToastContainer />
   <div style={{ height: '450px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Map
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  </>
  )
}

export default Contact