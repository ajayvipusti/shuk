import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa6'
import {AiOutlineMail,AiTwotonePhone} from 'react-icons/ai'

const Contact = () => {
  const [value,setValue] =useState({
    userName:'',
    email:'',
    number:'',
    service:'',
    message:''
  })
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
      <form>
  <div className="row mb-4">
    <div className="col">
      <input type="text"  className="form-control" placeholder=" Name" />
    </div>
    <div className="col">
      <input type="email" className="form-control" placeholder="Email" />
    </div>
  </div>
  <div className="row mb-4">
    <div className="col">
      <input type="number" className="form-control" placeholder="Number" />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Services" />
    </div>
  </div>
  <div class="form-group mb-4">
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Message' rows="5"></textarea>
  </div>
  <button className='btn btn-danger'>Submit</button>
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
  </>
  )
}

export default Contact