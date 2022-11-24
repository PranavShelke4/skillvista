import React from "react";
import "../../Styles/Home/Project.css";
import MobDev from "../../assets/img/Group7.png";
import WebDev from "../../assets/img/gif-p1.gif";
import SoftDev from "../../assets/img/gif-p2.gif";

function Projects() {
  return (
    <div className="our-projects-div">
      <div id="how-can-text">
        <h4>Our Projects</h4>
        <hr id="help-hr"></hr>
      </div>
      <div className="our-projects">
        <div className="MobDev" id="dev-div">
          <img alt="MobDev" className="Projectimg" src={WebDev} />
          <div className="projects-text" id="projects-para">
            <h4>swadeskart.in</h4>
            <p className="projects-para"> India’s first online Managed Marketplace that connects buyers and sellers online and offers a trusted and safe online shopping environment.
            #swadeskart is #India's first online Managed #Marketplace that connects #buyers and #sellers #online and #offers a #trusted and safe online #shopping.

            </p>
          </div>
        </div>

        <div className="WebDev" id="dev-div">
          <img alt="MobDev" className="Projectimg" src={SoftDev} />
          <div className="projects-text2" id="projects-para">
            <h5>Movie Master App</h5>
            <p className="projects-para">

              People are
              increasingly dependent on smart phones for on-the-spot information
              and Movie Master App provides all the movie related information at
              one place.
            </p>
          </div>
        </div>

        <div className="SoftDev" id="dev-div">
          <img alt="MobDev" className="Projectimg" src={MobDev} />
          <div className="projects-text3" id="projects-para">
            <h4> Mobile App Development</h4>
            <p className="projects-para"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
