import React from "react";
import doctorData from "../../utils/doctors.json";
import "./Doctors.css";

const Doctors = () => {
  return (
    <section className="d-wrapper" id="doctors">
      <div className="paddings innerWidth  d_container">
        <span className="primaryText">Our Doctors</span>
        <div className="mainDoctorsCon innerWidth ">
          {doctorData.map((doctor, i) => (
              <div className="doctorsContainer" key={i}>
                <div className="docImgContainer">
                  <img src={doctor.image} className="docImage " />
                </div>
                <div className="detailsDoc">
                  <span style={{fontWeight:"bold",color:"#3449e3"}}>{doctor.specialist}</span>
                  <span style={{fontWeight:"500"}}>{doctor.name}</span>
                  <span style={{fontWeight:"300"}}>{doctor.detail}</span>
                  <span style={{fontWeight:"bold"}}>{doctor.days}</span>
                  <span style={{fontWeight:"bold"}}>{doctor.time}</span>

                  {/* <span>{doctor.fees}</span> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
