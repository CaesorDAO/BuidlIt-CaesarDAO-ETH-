import React from 'react';
import "./style.css";
import styled from 'styled-components';

const HeroH1 = styled.h1`
font-size: clamp(2rem, 10vw, 5rem);
color:white;
letter-spacing: 3px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px 0  50px 0 ;
`;

const Demo = () => {
    return (

        <div class="container">
            <HeroH1> TIF x Kraznik Underverse Demo</HeroH1>
<div class="container">
    <div class="row">
        <div class="col-sm-12">
        <div class="desktop-wrapper">
            <iframe width="auto"  src="https://www.youtube.com/embed/LUmQ1rXns6Y?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
    </div>
</div>
</div>
    )
}

export default Demo
