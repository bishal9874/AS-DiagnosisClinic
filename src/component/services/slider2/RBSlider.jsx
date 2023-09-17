import React from 'react';
import "./RBSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../utils/slider_1.json";
import 'swiper/swiper.min.css';

import Typography from "@mui/material/Typography";
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Container } from '@mui/material';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const RBSlider = () => {
  const dataSize = data.length;

  return (
    <div className="paddings innerWidth rb-container">
      <span className="RBtext"><img src="src/assets/images/fixed-navbar-logo.png" alt="" className='RBimg'/> RB Diagnostics Referred</span>
      <div className="swiper-container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={dataSize <= 6 ? true : false}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
  
          autoplay={{ delay: 3000 ,disableOnInteraction: false}} // Adjust the delay (in milliseconds) between slides
          className="swiper_wrapper"
        >
          {data.map((card, i) => (
            <SwiperSlide key={i} className="rbSliders">
              <div className="slidercontent">
                <img className="sliderimg" src={card.image} alt="" />
                <Typography variant="h5" component="div" style={{color:"white"}}>
                  {card.name}
                </Typography>
                <Typography variant="h7" component="div" style={{color:"white",textAlign:"justify"}} >
                  {card.detail}
                </Typography>
                <div style={{ position: "absolute", top: "50px", right: "10px" ,backgroundColor:"orange",width:"100px",height:"30px",textAlign:"center",borderRadius:"10px 0 10px 0"}} >
                <Typography variant="h5" component="div"  >
                ₹ {card.price}
                </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  );
}

export default RBSlider;
