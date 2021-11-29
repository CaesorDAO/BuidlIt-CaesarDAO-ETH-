import React, { useState } from "react";
import { Button, ScrollText } from "./Styles";
import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      style={{ display: visible ? "inline" : "none", color: "white" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <FaChevronUp
        onClick={scrollToTop}
        // style={{ display: visible ? "inline" : "none", color: "white" }}
      />
      <ScrollText>{hover ? "Scroll up" : null}</ScrollText>
    </Button>
  );
};

export default ScrollButton;
