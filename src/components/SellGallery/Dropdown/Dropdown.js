import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";

const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxHeight: "200px",
      // width: 250,
    },
  },
};

const AttrNameMapping = {
  bg: "Background",
  cloth: "Clothes",
  eyewear: "Eyewear",
  gender: "Gender",
  hair: "Hair",
  skin: "Skin",
};

export default function SelectVariants({
  attribute,
  traitTypes,
  properties,
  setProperties,
  reset,
  setReset,
}) {
  const [property, setProperty] = useState("");

  const handleChange = (e) => {
    setProperty(e.target.value);
    if (attribute === "bg") {
      setProperties({
        ...properties,
        bg: e.target.value,
      });
    } else if (attribute === "cloth") {
      setProperties({
        ...properties,
        cloth: e.target.value,
      });
    } else if (attribute === "eyewear") {
      setProperties({
        ...properties,
        eyewear: e.target.value,
      });
    } else if (attribute === "gender") {
      setProperties({
        ...properties,
        gender: e.target.value,
      });
    } else if (attribute === "hair") {
      setProperties({
        ...properties,
        hair: e.target.value,
      });
    } else if (attribute === "skin") {
      setProperties({
        ...properties,
        skin: e.target.value,
      });
    } else {
      // setProperties({
      //   ...properties,
      // });
      console.log("Please choose a valid attribute!!");
    }

    setReset(false);
  };

  useEffect(() => {
    if (reset) {
      setProperty("");
    }
  }, [reset]);

  return (
    <>
      <div>
        <FormControl
          className="form"
          variant="standard"
          sx={{ m: 1, minWidth: 180 }}
        >
          <InputLabel className="input" id="demo-simple-select-standard-label">
            {AttrNameMapping[attribute]}
          </InputLabel>
          <Select
            className="select"
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={property}
            onChange={handleChange}
            label={AttrNameMapping[attribute]}
            // className="select-dropdown"
            MenuProps={MenuProps}
          >
            <MenuItem value="" className="menu">
              <em>None</em>
            </MenuItem>
            {traitTypes.map((ele) => {
              return (
                <MenuItem key={ele} value={ele}>
                  {ele}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
