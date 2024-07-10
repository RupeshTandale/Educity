import React from 'react'
import './Campus.css'
import campus_img1 from '../../assets/campus1.jpg'
import campus_img2 from '../../assets/campus2.jpg'
import campus_img3 from '../../assets/campus3.jpg'
import campus_img4 from '../../assets/campus4.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={campus_img2} />
        <img src={campus_img3} />
        <img src={campus_img1} />
        <img src={campus_img4} />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow}/></button>
    </div>
  )
}

export default Campus
