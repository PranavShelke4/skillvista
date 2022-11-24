import React from 'react';
import "../../Styles/Home/Services.css";

import Group1 from "../../assets/img/Group1.png";
import Group2 from "../../assets/img/Group2.png";
import Group3 from "../../assets/img/Group3.png";
import Group4 from "../../assets/img/Group4.png";
import Group5 from "../../assets/img/Group5.png";
import Group6 from "../../assets/img/Group9.png";

import Intersect from "../../assets/img/Intersect.png";

function Services() {
  return (
    <div className="container-intersect">
          <img alt="mage8" className="Intersect" src={Intersect} />
        <div className="our-work">
          <div className="work-sections">
            <img alt="magea" className="Group1" src={Group1} />
            <span className="Group-spans">
              Data Analysis for Dissertation / Thesis of Ph.D
            </span>
          </div>

          <div className="work-sections">
            <span className="Group-spans" id='span1'>
              Assignments/Projects for CS-IT B.Sc/M.Sc, MCA, B.E/M.E students
            </span>
            <img alt="maged" className="Group1" src={Group2} />
          </div>

          <div className="work-sections">
            <img alt="magef" className="Group1" src={Group3} />
            <span className="Group-spans">
              Technical Writing Service - Manual / User Guide preparation{" "}
            </span>
          </div>

          <div className="work-sections">
            <span className="Group-spans" id='span1'>Video Creation</span>
            <img alt="mageg" className="Group1" src={Group4} />
          </div>

          <div className="work-sections">
            <img alt="mageh" className="Group1" src={Group5} />
            <span className="Group-spans">
              Academics Service - Book chapters writing / QB development{" "}
            </span>
          </div>

          <div className="work-sections">
            <span className="Group-spans" id='span1'>Trainings C, C++, Core Java, Adv Java, SQL</span>
            <img alt="mageg" className="Group1" src={Group6} />
          </div>

          
        </div>
      </div>
  )
}

export default Services