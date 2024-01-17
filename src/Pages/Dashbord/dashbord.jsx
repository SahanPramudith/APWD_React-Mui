import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box, FormControl, InputLabel, MenuItem, Rating, Select} from "@mui/material";
import React, {useState} from "react";
export  default  function Dashbord() {

    const [value, setValue] =useState(2);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <div>
            <h1> S a h a n  </h1>
            <br/><br/>

            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <br/><br/>

            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <br/><br/>

            <Box sx={{ minWidth: 10 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </div>
    )
}