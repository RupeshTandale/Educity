import React, { useRef } from "react";
import "./Testimonial.css";
import next_btn from "../../assets/next.png";
import back_btn from "../../assets/back.png";
import user_1 from "../../assets/profile-1.jpeg";
import user_2 from "../../assets/profile-2.jpg";
import user_3 from "../../assets/profile3.jpg";
import user_4 from "../../assets/profile4.jpg";

const Testimonial = () => {

  const slider = useRef();
  const blockNext = useRef();
  const blockBack = useRef();

  let tx = 0; 

  const slideForward = () =>{
      if(tx > -50){
        tx -= 25;
      }
      console.log(tx)
      slider.current.style.transform = `translateX(${tx}%)`
      if(tx === -50){
        blockNext.current.style.display = "none";
      }
  }

  const slideBackward = () =>{
    if(tx < 0){
      tx += 25;
    }
    console.log(tx)
    slider.current.style.transform = `translateX(${tx}%)`
    if(tx > -50){
      blockNext.current.style.display = "initial";
    }
  }


  return (
    <div className="testimonial">
      <img src={next_btn} ref={blockNext} className="next-btn" onClick={slideForward}/>
      <img src={back_btn} ref={blockBack} className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} />
                <div className="div">
                  <h3>Elian Hunt</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} />
                <div className="div">
                  <h3>Ben Duncan</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} />
                <div className="div">
                  <h3>Gloria Martin</h3>
                  <span>Educity, USA</span>
                </div>
              </div>

              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} />
                <div className="div">
                  <h3>Enzo Evans</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
