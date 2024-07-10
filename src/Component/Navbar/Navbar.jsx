import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {

  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  } ,[]);


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}
export default Navbar
