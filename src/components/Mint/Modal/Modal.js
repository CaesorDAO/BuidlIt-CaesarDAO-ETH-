import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./style.css";

import ConGIF from "../../../images/Congrats.gif";

import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";

import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Container = styled(Box)`
  height: fit-content;
  min-width: fit-content;
  background-color: black !important;
  color: blanchedalmond;
  border: 2px solid blanchedalmond;
  border-radius: 10px;
  display: inline-block;
  padding: 10px;
  justify-content: center;
  align-content: center !important;
`;

const Content = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 20px;
`;

const Img = styled.img`
  width: 480px;
  height: 270px;
  background-color: grey;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: white;
  padding: 40px 10px 20px 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
`;

export default function BasicModal({ open, setOpen, txnHash }) {
  return (
    // <div>
    /* <Button onClick={() => setOpen(true)}>Open modal</Button> */
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container sx={style}>
        {/* <div className="number">1</div> */}
        <Content>
          <Img src={ConGIF} />

          <ExternalLink
            href={`https://rinkeby.etherscan.io/tx/${txnHash}`}
            target="_blank"
          >
            You can view your transaction here <FaExternalLinkAlt />
          </ExternalLink>
        </Content>
      </Container>
    </Modal>
    // </div>
  );
}
