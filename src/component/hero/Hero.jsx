import React from "react";
import "./Hero.css";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import { Container } from "@mui/material";
export const Hero = () => {
  return (
    <section className="hero-wrapper" id="home">
      <div className=" paddings flexCenter innerWidth hero-container ">
        <div className="hero-left">
         <Container>
         <div className="flexColStart ">
            <div className="hero-title">
              <div className="purple-circle" />
              <h1 className="h_title">Welcome to A.S Clinic & Diagnostic!</h1>
              <span className="descripText">
                Welcome to A.S Clinic & Diagnostics, where your health is our
                priority. Our dedicated team of healthcare professionals
                provides personalized care in a modern and compassionate
                environment. With advanced diagnostics and state-of-the-art
                facilities, we offer accurate assessments and tailored treatment
                plans.
              </span>
            </div>
          </div>
         </Container>
          <Container>
          <div className="bookButton ">
            <button className="button">Book Appointment</button>
            <a href="" style={{ marginLeft: "10px" }}>
              See more <KeyboardArrowRightSharpIcon />
            </a>
          </div>
          </Container>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img
              src="src/assets/images/loginimg.png"
              alt="doctors"
              width={540}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
