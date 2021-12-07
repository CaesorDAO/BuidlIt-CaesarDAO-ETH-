import React, { Component } from 'react';
import Team from './index';
import Ape2 from '../../images/483.png';
import Ape4 from '../../images/463.png';
import Ape5 from '../../images/464.png';
import './card-style.css';

class Team2 extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Team
                            imgsrc={Ape2}
                            height="100px"
                            width="100px"
                            title="Sanchit"
                            content="Degen"
                        />
                    </div>
                    <div className="col-md-4">
                        <Team imgsrc={Ape4} title="Windsy" content="Comms" />
                    </div>
                    <div className="col-md-4">
                        <Team imgsrc={Ape5} title="Angel" content="Degen/Trader" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Team2;
