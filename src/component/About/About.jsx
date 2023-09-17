import React from "react";
import "./About.css";
import { Container } from "@mui/material";
const About = () => {
  return (
    <section className="A_wrapper" id="about">
      <div className="paddings flexCenter hero-container ">
        <div className="hero-left">
          <div className="image-container">
            <img src="src/assets/images/about.png" alt="doctors" width={540} />
          </div>
        </div>
        <div className="flexCenter hero-right">
          <Container maxWidth="sm">
          <h1 className="primaryText" style={{marginTop:"5px "}}>Why Us?</h1>
            <p className="aboutdes" style={{marginTop:"10px "}}>
              A.S Clinic & Diagnostic is a leading healthcare provider dedicated
              to delivering exceptional medical care and diagnostic services.
              With a strong commitment to patient well-being, we strive to
              provide comprehensive and personalized healthcare solutions to
              individuals and families. What sets A.S Clinic & Diagnostic apart
              is our team of highly skilled and compassionate healthcare
              professionals. Our doctors, specialists, and support staff are
              experts in their respective fields, continually staying updated
              with the latest advancements in medical science to ensure the
              highest level of care. At A.S Clinic & Diagnostic, we prioritize
              patient comfort and convenience. Our state-of-the-art facilities
              are equipped with modern technologies and advanced diagnostic
              equipment, enabling accurate and timely diagnosis.
            </p>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default About;
