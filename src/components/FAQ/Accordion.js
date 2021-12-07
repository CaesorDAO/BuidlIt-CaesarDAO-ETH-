import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
// import { IconContext } from 'react-icons';
import { FiPlus} from "@react-icons/all-files/fi/FiPlus";
import { FiMinus} from "@react-icons/all-files/fi/FiMinus";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background:#000302;
  padding: 0 0 40px 0 ;
`;

const Container = styled.div`
  position: relative;
  top: 25%;
  width:65%;
  outline-style: solid;


  
`;

const Wrap = styled.div`
  background: black;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-style: solid;
  border-width: thin!important;
  &:hover{
    transform: scale(1.02);
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    
    background: white;
    color: #000;
 
}

  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: black;
  color: white;
  width: 100%;
  height: 69px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  p {
    font-size: 1.5rem;
  }
  &:hover{
    transform: scale(1.02);
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    color:white;
 
}
`;

const Accordions = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  color:white;
  letter-spacing: 3px;
`;

  return (
    // <IconContext.Provider value={{ color: '#00FFB9', size: '40px' }}>
      <AccordionSection>
        <HeroH1> FAQ's </HeroH1>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    // {/* </IconContext.Provider> */}
  );
};

export default Accordions;