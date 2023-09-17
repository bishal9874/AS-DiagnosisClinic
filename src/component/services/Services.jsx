import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Services.css";
import data from "../../utils/slider_1.json";
import { sliderSettings } from "../../utils/common";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import RBSlider from "./slider2/RBSlider";
const Services = () => {
  const dataSize = data.length;
  return (
    <section className="s-wrapper" id="services">
      <div className="paddings innerWidth s-container">
        <div className="s-head flexColStart">
          <span className="orangeText">Our Services</span>
          <span className="primaryText">We are Providing</span>
        </div>
        <Swiper 
        effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
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
          autoplay={{ delay: 3000 ,disableOnInteraction: false}}
        {...sliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <Card sx={{ maxWidth: 300, backgroundColor: "#f5f5f5", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",borderRadius:"10px"  }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={card.image}
                    style={{ width: "450px", height: "150px" }}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.name}
                    </Typography>
                    <Typography style={{fontSize:"15px",textAlign:"justify"}}>
                      {card.detail}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div style={{ position: "absolute", top: "0px", backgroundColor:"#4b65fa",width:"100px",height:"30px",textAlign:"center",borderRadius:"10px 0 10px 0"}} >
                <Typography variant="h5" component="div" style={{color:"white"}} >
                ₹ {card.price}
                </Typography>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <RBSlider/>
    </section>
  );
};

export default Services;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter s-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
