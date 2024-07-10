import React from 'react'
import './Testimonial.css'
import next_btn from '../../assets/next.png'
import back_btn from '../../assets/back.png'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <img src={next_btn} className="next-btn" />
      <img src={back_btn} className="back-btn" />
    </div>
  )
}

export default Testimonial
