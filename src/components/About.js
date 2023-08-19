import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

const About = () => {
  return (
    <>
    <section className='about-page text-center  text-white'>
     <h1>About Us</h1>
     <p>
     <NavLink to='/' className='about-home '><AiFillHome className='mb-1'/>  Home  / </NavLink> <span className='about-text'>About Us</span>
     </p>
    </section>
    <section className='about container'>
    <h3>About Shuk Global Pvt Ltd</h3>
    <p className='my-4'>We are a Cyber Security startup incubated at FIRST, IIT Kanpur under the IHub programme with a focus on Defensive Security. We have expertise in developing solutions like Deception Technology, Custom Honeypot Development, Network Intrusion Detection Systems, Host-Based Intrusion Detection Systems, Insider Threat 
    Detection Systems, OT Network Security Systems, and many more.</p>
    <p className='my-4'>We have a team of dedicated, young, and experienced professionals along with top-level technical advisors to create innovative and novel cyber security solutions.
</p>
<p className='my-4'>To improve the cybersecurity infrastructure of the country by helping private
 and government organizations secure their network infrastructure by using solutions backed by solid and strong research.
</p>
<p className='my-4'>With this rapid growth in the digital era, cyber security is one
 of the most important topics on which organizations must focus to protect their systems from attackers. Cyber Security is a very important problem in this continuously evolving digital world. As people are connecting their devices to the internet, organizations are connecting their networks for internet access, they are risking themselves getting attacked by malicious actors who can harm their networks and do damage to the same. Any organization that has an IT/OT Network is susceptible to facing threats from attackers, be it, insider or an outsider.​
</p>
<p className='my-4'>Organizations face damage to brand reputation, revenue loss, loss of intellectual property, etc.​ Government organizations can face loss of critical data which can result in a national security threat.​Deception is a layer of security that helps the organization to protect itself from imminent threats. Our first priority is protecting our client’s assets for which they put their trust in us. Using a combination of human intelligence and machine intelligence, our novel and innovative systems make the job easier for us.

</p>
    </section>
    </>
  )
}

export default About