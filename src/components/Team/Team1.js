import React, { Component } from 'react';
import Team from './index';
import Ape1 from '../../images/sanchit.png';
import Ape2 from '../../images/disha.png';
import Ape3 from '../../images/caesor.png';
import Ape4 from '../../images/483.png';
import Ape5 from '../../images/463.png';
import Ape6 from '../../images/464.png';
import styled from 'styled-components';
import './card-style.css';
const HeroH1 = styled.h1`
font-size: clamp(2rem, 10vw, 5rem);
color:white;
letter-spacing: 3px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

class Team1 extends Component {
    render() {
        return (
            <div className="container-fluid">
               <HeroH1>Meet the Team</HeroH1>
                <div className="row">
                    <Team imgsrc={Ape1} title="Sanchit" content="Tezos Fellow/Dev" />

                    <Team imgsrc={Ape2} title="Disha" content="Tezos Fellow/Web3 Dev" />

                    <Team imgsrc={Ape3} title="Prabhakar" content="Artist" />

                    <Team imgsrc={Ape4} title="Dhiraj" content="Tezos Fellow/Web3 Dev" />

                    <Team imgsrc={Ape5} title="Windsy" content="Comms strategist" />

                    <Team imgsrc={Ape6} title="Angel" content="Degen/Trader" />
                </div>
            </div>
        );
    }
}

export default Team1;
