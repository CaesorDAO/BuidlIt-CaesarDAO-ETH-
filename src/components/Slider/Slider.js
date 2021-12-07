import Slider from "react-slick";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, Component } from "react";
import { Dropdown } from "semantic-ui-react";
import "./style.css";
import placeholder from "../../images/image.png";
// import * as JSONdata from "./traits.json";
import * as JSONdata from "./traits_new.json";
import styled from "styled-components";

const HeroH1 = styled.h1`
  font-size: clamp(2rem, 10vw, 5rem);
  color: white;
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 0 0 0;
`;

const all = JSONdata.default;
// console.log(all);

const optionsOne = Object.keys(all).map((key) => ({
  key,
  text: key,
  value: key,
}));

const optionsTwo = [
  { key: "all", text: "all", value: "all" },
  ...Object.keys(all[optionsOne[0]["key"]]).map((key) => ({
    key,
    text: key,
    value: key,
  })),
];

const SliderFunction = () => {
  const [one, setOne] = useState("clothes");
  const [two, setTwo] = useState("all");
  const [slides, setSlides] = useState([]);

  const getAllFromType = (type) => {
    let allVals = [];
    // console.log(type);
    Object.keys(all[type]).forEach((key) => {
      allVals = [...allVals, ...all[type][key]];
    });
    return allVals;
  };

  useEffect(() => {
    setSlides(getAllFromType(one));
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // const baseDir = "./assets/";
  const baseDir = "./traits";

  return (
    <>
      {/* <h1 className="traits"> Traits</h1> */}
      <div className="containers">
        <HeroH1>Traits</HeroH1>
        <div className="dropdowns-section">
          <Dropdown
            className="dropdown"
            placeholder="Select 1"
            selection
            value={one}
            onChange={(e, data) => {
              setOne(data.value);
              setSlides(
                two === "all"
                  ? getAllFromType(data.value)
                  : all[data.value][two]
              );
            }}
            options={optionsOne}
          />
          <Dropdown
            className="dropdown"
            placeholder="Select 2"
            selection
            value={two}
            onChange={(e, data) => {
              setTwo(data.value);
              setSlides(
                data.value === "all"
                  ? getAllFromType(one)
                  : all[one][data.value]
              );
            }}
            options={optionsTwo}
          />
        </div>

        <div
          className="traits-carousel"
          style={{
            maxWidth: "800px",
          }}
        >
          <Slider {...settings} className="slider">
            {slides.length > 0 ? (
              slides.map((ele, ind) => (
                <div
                  key={ind}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "right",
                  }}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + baseDir + one + ele
                        ? process.env.PUBLIC_URL +
                          baseDir +
                          "/" +
                          one +
                          "/" +
                          ele
                        : placeholder
                    }
                    // width="500px"
                    // style={{ margin: "0 auto" }}
                    className="image"
                  />
                </div>
              ))
            ) : (
              <div className="error">None</div>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderFunction;
