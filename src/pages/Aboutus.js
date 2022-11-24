import React from "react";
import "../Styles/terms/terms.css";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar";

function Aboutus() {
  return (
    <>
          <Navbar1 />

      <div className="term-header">
        <h3 id="terms-title"> About Us</h3>
      </div>
      <div className="terms-content">
        <h3>Company Profile</h3>

        <p>
          Skill Vista is a Global IT Consulting & Training company that has been
          providing high value-added business solutions to enterprises of all
          sizes.Interface11 has proven competencies in business and technology
          areas. It is a complete end-to-end solutions provider with expertise
          in diverse areas of IT Consulting, Training, Custom Application
          Development & Maintenance Services. The professionals at Interface11
          adopt a customer centric approach which helps to understand the exact
          client requirements and enables them to provide the most effective
          solutions. At Interface11 we believe in one bare fact i.e. we make
          relationships, not clients. Whether it may be a Business Giant or a
          SME, it is dealt with utmost care and ultimate satisfaction which
          exceeds client’s expectation.
        </p>
        <h3>Vision</h3>
        <p>
          To become an active growth enabler for our clients and partners for
          our commitment towards excellence in IT consulting & Training
          Services.{" "}
        </p>
        <h3>Mission</h3>
        <p>
          {" "}
          Our Mission is to provide a committed service that every customer
          expects and to assist the customers in managing time and money with
          our best efforts.
        </p>

        <h3>Relationship Matters</h3>
        <p>At Interface11 we believe in one bare fact i.e. we make relationships, not clients. Whether it may be a big corporate or a small client, it is dealt with utmost care and ultimate satisfaction which exceeds client’s expectation.</p>
        <h3>Innovation Creation</h3>
        <p>Everyone here at Interface11 is fond of working creatively, we believe that innovation is the only key factor which can keep us and our clients leap ahead of time. We are constantly on the lookout of finding innovative solutions which helps our clients to experience certainty.</p>

      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
