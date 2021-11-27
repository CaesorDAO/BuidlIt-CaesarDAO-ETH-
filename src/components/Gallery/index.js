import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Ape1 from "../../images/ape.png";
// import Ape2 from "../../images/ape1.png";
// import Ape3 from "../../images/ape3.png";
// import Ape4 from "../../images/ape4.png";
// import Ape5 from "../../images/ape.png";
import Ape1 from "../../images/1.png";
import Ape2 from "../../images/2.png";
import Ape3 from "../../images/3.png";
import Ape4 from "../../images/4.png";
import Ape5 from "../../images/5.png";
import Ape6 from "../../images/6.png";
import Ape7 from "../../images/7.png";
import Ape8 from "../../images/8.png";
import Ape9 from "../../images/9.png";
import Ape10 from "../../images/10.png";
import Ape11 from "../../images/11.png";
import "./style.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            speed: 1500,
            autoplaySpeed: 1500,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 747,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            speed: 2300,
            autoplaySpeed: 2300,
          },
        },
      ],
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="image-box">
            <img className="image-box" src={Ape1} alt="ape1"></img>
          </div>
          <div>
            <img className="image-box" src={Ape2} alt="ape2"></img>
          </div>
          <div>
            <img className="image-box" src={Ape3} alt="ape3"></img>
          </div>
          <div>
            <img className="image-box" src={Ape4} alt="ape4"></img>
          </div>
          <div>
            <img className="image-box" src={Ape5} alt="ape5"></img>
          </div>
          <div>
            <img className="image-box" src={Ape6} alt="ape6"></img>
          </div>
          <div>
            <img className="image-box" src={Ape7} alt="ape7"></img>
          </div>
          <div>
            <img className="image-box" src={Ape8} alt="ape8"></img>
          </div>
          <div>
            <img className="image-box" src={Ape9} alt="ape9"></img>
          </div>
          <div>
            <img className="image-box" src={Ape10} alt="ape10"></img>
          </div>
          <div>
            <img className="image-box" src={Ape11} alt="ape11"></img>
          </div>
        </Slider>
      </div>
    );
  }
}
