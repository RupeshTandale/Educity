import React from "react";
import "./Programs.css";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.png";
import program3 from "../../assets/program3.png";
import program_icon1 from "../../assets/card1.png"
import program_icon2 from "../../assets/card2.png"
import program_icon3 from "../../assets/card3.png"

const Programs = () => {
  return (
    <div>
      <div className="programs" id="programs">
        <div className="program">
          <img src={program1} />
          <div className="caption">
            <img src={program_icon1}/>
            <p>Graduation</p>
          </div>
        </div>
        <div className="program">
          <img src={program2} />
          <div className="caption">
            <img src={program_icon3}/>
            <p>Post Graduation</p>
          </div>
        </div>
        <div className="program">
          <img src={program3} />
          <div className="caption">
            <img src={program_icon2}/>
            <p>Master's Degree</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
