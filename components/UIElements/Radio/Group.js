import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Group() {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: '10px'
          }}
        >
          Radio Group
        </Typography>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          {/* <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          > */}
            <FormControlLabel value="female"  id="name" control={<Radio  id="name"/>} label="Female" />
            <FormControlLabel value="male" id="name"  control={<Radio id="name" />} label="Male" />
            <FormControlLabel value="other"  id="name" control={<Radio id="name" />} label="Other" />
          {/* </RadioGroup> */}
        </FormControl>
      </Card>
    </>
  );
}
