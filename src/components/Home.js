import React, { useState } from 'react'
import img1 from '../assets/home2-banner-main.png'
import img2 from '../assets/approach-img-4.jpg'
import Card from 'react-bootstrap/Card';
import card1 from '../assets/s1.jpg'
import card2 from '../assets/s2.jpg'
import card3 from '../assets/s3.jpg'
import card4 from '../assets/s4.jpg'
import card5 from '../assets/s5.jpg'
import card6 from '../assets/s6.jpg'
import card7 from '../assets/s7.jpg'
import card8 from '../assets/s8.jpg'
import card9 from '../assets/s9.jpg'
import img3 from '../assets/2.png'
import {GrShieldSecurity} from 'react-icons/gr'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import {MdOutlineSecurity} from 'react-icons/md'
import {AiOutlineCloudServer,AiOutlineFileProtect} from 'react-icons/ai'
import {GiCyberEye} from 'react-icons/gi'
import {HiIdentification} from 'react-icons/hi'
import {GrOrganization,GrTechnology} from 'react-icons/gr'
import {MdOutlineWebStories} from 'react-icons/md'
import { NavLink } from 'react-router-dom';


const Home = () => {
  const [counterOn,setCounterOn]=useState(false)
  return (
    <>
    <section className='home-container mx-2'>
    <div className='container'>
     <div className='row pt-4 pb-3'>
       <div className='col-lg-7 col-md-7 col-12 content-part'>
         <h5>Shuk Global Pvt Ltd</h5>
         <h1 className=''>Best In Class Cyber Security Services</h1>
         <p>With our innovative cyber security solutions, your IT/OT network would be protected. In case of any incident, our response would be
          the first and effective to protect your systems.</p>
          <NavLink to='/contact'  className='btn btn-danger'>Contact Us</NavLink>
       </div>
       <div className='col-lg-5 col-md-5 col-12 img-section text-center'>
       <img src={img1}  alt='' />
       </div>
     </div>
    </div>
    </section>
    <section className='about'>
    <div className='container my-5'>
     <div className='row '>
      <div className='col-lg-6 col-md-6 col-12 about-left'>
        <img src={img2} alt='' />
      </div>
      <div className='col-lg-6 col-md-6 col-12 my-3'>
       <h5>About Us</h5>
       <h3>Welcome To Shuk Global Pvt Ltd</h3>
       <p>We are a Cyber Security startup incubated at FIRST, IIT Kanpur under the IHub programme with a focus on Defensive Security. We have expertise in developing solutions like Deception Technology, Custom Honeypot Development, Network Intrusion Detection Systems, Host-Based Intrusion Detection Systems, Insider Threat Detection
        Systems, OT Network Security Systems, and many more.</p>
        <p>We have a team of dedicated, young, and experienced professionals along with top-level technical advisors to create 
        innovative and novel cyber security solutions.</p>
        <p>To improve the cybersecurity infrastructure of the country by helping private and government organizations secure their network infrastructure
         by using solutions backed by solid and strong research.</p>
      </div>
     </div>
     </div>
    </section>
    <section className='four-card'>
    <main className='main'>
    <div className='container chalanges'>
    
      <h3 style={{fontSize:'16px'}}>Our Challenges</h3>
      <h2>You Can Protect Your Organization’s </h2>
       <h2>Cybersecurity By Us</h2>
       <div className='row my-5 '>
           <div className='col-lg-3 col-md-3 col-12 my-2'>
           <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div className='card-icon'>
           <MdOutlineWebStories className='icons'/>
     </div>
     <Card.Body>
        <Card.Title className='card-title'>Identifying Threats </Card.Title>
      </Card.Body>      
    </div>
    <div class="flip-card-back">
     

      <p>Vigilance is the sentinel of security – identifying threats before they cast their shadow</p>
    </div>
  </div>
           </div>
           </div>
        
         
           <div className='col-lg-3 col-md-3 col-12 my-2'>
           <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div className='card-icon'>
           <MdOutlineSecurity className='icons'/>
     </div>
     <Card.Body>
        <Card.Title className='card-title'> Cyber Risk Assessment </Card.Title>
      </Card.Body>      
    </div>
    <div class="flip-card-back">
    
      <p>Cyber risk management: safeguarding today's virtual 
      frontiers to secure tomorrow's digital possibilities</p>
    </div>
  </div>
           </div>
           </div>
           <div className='col-lg-3 col-md-3 col-12 my-2'>
           <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div className='card-icon'>
           <GiCyberEye className='icons'/>
     </div>
     <Card.Body>
        <Card.Title className='card-title'>Cyber Security Consulting </Card.Title>
      </Card.Body>      
    </div>
    <div class="flip-card-back">

      <p>Cybersecurity is not just about controlling data; it's
       about safeguarding the future of digital trust</p>
    </div>
  </div>
           </div>
           </div>
           <div className='col-lg-3 col-md-3 col-12 my-2'>
           <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div className='card-icon'>
           <AiOutlineCloudServer className='icons'/>
     </div>
     <Card.Body>
        <Card.Title className='card-title'>Managing Cloud Security </Card.Title>
      </Card.Body>      
    </div>
    <div class="flip-card-back">

      <p>Securing the cloud: where innovation meets vigilance</p>
    </div>
  </div>
           </div>
           </div>
       </div>
       </div>
       </main>
    </section>
    <section className='services'>
    <div className='container'>
     <h5 className='text-center'>Shuk Global Pvt Ltd Services</h5>
     <h1 className='text-center'>Our Expertise & Services</h1>
     <div className='row py-4'>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card1} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Red teaming</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card2} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Blue teaming</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card3} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Penetration testing</Card.Title> 
      </Card.Body>
    </Card>
      </div>
     </div>
     <div className='row py-4'>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card4} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Vulnerability assesment</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card5} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>White box testing</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card6} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Gray box testing</Card.Title> 
      </Card.Body>
    </Card>
      </div>
     </div>
     <div className='row py-4'>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card7} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Security code review</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card8} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Soc
</Card.Title> 
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-4 col-12'>
      <Card className='card-top'>
      <Card.Img variant="top" src={card9} alt='' />
      <Card.Body>
        <Card.Title className='service-card'>Noc</Card.Title> 
      </Card.Body>
    </Card>
      </div>
     </div>
     </div>
    </section>
    <section className='why-chooseus'>
    <div className='container'>
      <div className='row py-5 text-center text-white'>
      <h5 className='text-center'>Why Choose Us</h5>
      <h1 className='text-white py-3 fs-3'>We Have a Lot of Skills in Blockchain Consulting</h1>
      <div className="container">
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div className="row counter-row">

	<div className=" col-lg-3 col-12 col-md-3">
		<div className="counter-box ">
     <GrShieldSecurity className='counter-icon'/>
			{/* <span className="counter">2147</span> */}
      {counterOn && <CountUp start={0} end={365} delay={0.9} className='counter'/> }
      
			<p style={{fontSize:'20px'}}>Happy Customers</p>
		</div>
	</div>
	<div className=" col-lg-3 col-md-3 col-12">
		<div className="counter-box">
    <GrOrganization className='counter-icon'/>
    {counterOn && <CountUp start={0} end={1000} delay={0.9} className='counter'/> }
			<p style={{fontSize:'20px'}}>Trusted Organizations</p>
		</div>
	</div>
	<div className=" col-lg-3 col-md-3 col-12">
		<div className="counter-box">
    <AiOutlineFileProtect className='counter-icon'/>
    {counterOn && <CountUp start={0} end={567} delay={0.9} className='counter'/> }
			<p style={{fontSize:'20px'}}>Website Protection</p>
		</div>
	</div>
	<div className=" col-lg-3  col-md-3 col-12">
		<div className="counter-box">
    <GrTechnology className='counter-icon'/>
    {counterOn && <CountUp start={0} end={100} delay={0.9} className='counter'/> }
			<p style={{fontSize:'20px'}}>Innovative Technology</p>
		</div>
	</div>
  </div>	
  </ScrollTrigger>
</div>
      </div>
      </div>
    </section>
    <section>
      <div className='container mb-5'>
       <div className='row'>
        <div className='col-lg-6 col-md-6 col-12'>
          
        </div>
        <div className='col-lg-6 col-md-6 col-12'>
          
        </div>
       </div>
      </div>
    </section>

    <section>
    <div className='container my-5'>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
    <h5>All-in Solution</h5>
    <h3 className='my-4 fs-4'>Our experts are providing and planning 24/7 technical
     support services with product and security consultation.</h3>
     <div className="card w-100 card-solution">
  <div className="card-body card-solution-body">
    <h5 className="card-title-solution">High-Quality Service</h5>
    <p className="card-text">Top-className service quality for our clients is the most important quality we focus on.</p>
  </div>
</div>
 <div className="card w-100 my-4 card-solution">
  <div className="card-body card-solution-body">
    <h5 className="card-title-solution">Security Consultation</h5>
    <p className="card-text">With our innovative cyber security solutions, your IT/OT network would be protected. In case of any incident, our response would be the first and effective
     to protect your systems.</p>
  </div>
</div>
 <div className="card w-100 card-solution">
  <div className="card-body card-solution-body">
    <h5 className="card-title-solution">24/7 Technical Support</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
    magna aliquyam erat.</p>
  </div>
</div>
    </div>
    <div className='col-lg-6 col-md-6 col-12 solution-img'>
     {/* <img src={img3} alt='' className='img-fluid'/> */}
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Home