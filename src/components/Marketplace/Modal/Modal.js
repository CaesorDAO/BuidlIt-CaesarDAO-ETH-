import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "red",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen, ape }) {
  return (
    // <div>
    /* <Button onClick={() => setOpen(true)}>Open modal</Button> */
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {ape.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Kraznik Apes all over Tezos.
        </Typography>
        <div>name: {ape.name}</div>
        <div>headwear: {ape.headwear}</div>
        <div>clothes: {ape.clothes}</div>
        <div>eye: {ape.eye}</div>
        <div>eyewear: {ape.eyewear}</div>
        <div>mouthCosmetics: {ape.mouthCosmetics}</div>
        <div>neckwear: {ape.neckwear}</div>
        <div>skin: {ape.skin}</div>
      </Box> */}
    </Modal>
    // </div>
  );
}
