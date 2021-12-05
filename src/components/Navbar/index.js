import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import Image from "../../images/image.png";
import "./style.css";

const Navbars = ({ account, onConnectWallet, onDisconnect, level }) => {
  const address = account
    ? account.slice(0, 8) + "...." + account.slice(-8)
    : null;

  return (
    <Navbar className="app">
      <Container className="test">
        <Navbar.Brand>
          <Link to="/">
            <img alt="" src={Image} className="logo" />{" "}
          </Link>
        </Navbar.Brand>

        <div
          className="gallery-nav"
          style={{
            display: "grid",
            gap: "20px",
            border: "1px solid white",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <div className="gallery-nav">
            <Link
              // to="/"
              to="/gallery"
            >
              Marketplace
            </Link>
            {/* <div className="hide">Coming soon</div> */}
          </div>

          <div className="gallery-nav">
            <Link
              // to="/"
              to="/mint"
            >
              Mint
            </Link>
            {/* <div className="hide">Coming soon</div> */}
          </div>

          <div className="gallery-nav">
            <Link to="/Staking">Staking</Link>
            {/* <div className="hide">Coming soon</div> */}
          </div>
        </div>

        <div
          className="gallery-nav"
          style={{
            display: "grid",
            gap: "20px",
            border: "1px solid white",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Link to="/Gold" style={{ color: level.gold ? "white" : "grey" }}>
            Gold
          </Link>
          <Link to="/Silver" style={{ color: level.silver ? "white" : "grey" }}>
            Silver
          </Link>
          <Link to="/Bronze" style={{ color: level.bronze ? "white" : "grey" }}>
            Bronze
          </Link>
          {/* {level.gold ? (
            <Link to="/Gold" style={{ color: level.gold ? "white" : "grey" }}>
              Gold
            </Link>
          ) : null}
          {level.silver ? (
            <Link to="/Silver" style={{ color: level.gold ? "white" : "grey" }}>
              Silver
            </Link>
          ) : null}
          {level.bronze ? (
            <Link to="/Bronze" style={{ color: level.gold ? "white" : "grey" }}>
              Bronze
            </Link>
          ) : null} */}
        </div>

        {account ? (
          <Button className="test2" onClick={onDisconnect}>
            {address}
          </Button>
        ) : (
          <Button className="test2" onClick={onConnectWallet}>
            {" "}
            Connect Wallet{" "}
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Navbars;
