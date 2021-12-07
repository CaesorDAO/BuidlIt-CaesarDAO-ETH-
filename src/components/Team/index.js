import React from 'react';
import './card-style.css';
import 'bootstrap/dist/css/bootstrap.css';

const Team = (props) => {
    return (
        <>
            <div className="card text-center">
                <div className="overflow">
                    <img src={props.imgsrc} alt="" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title"> {props.title} </h4>
                    <p className="card-text text-secondary">{props.content}</p>
                    {/* <a href="#" className="btn btn-outline-success">
                Twitter
            </a> */}
                </div>
            </div>
        </>
    );
};

export default Team;
