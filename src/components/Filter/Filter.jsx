import React from 'react';
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

const Filter = ({handleChange,filter}) => {
    return (
        <RadioGroup row={true} onChange={(event)=>handleChange(event.target.value)} value={filter}>
            <FormControlLabel value={'all'} control={<Radio/>} label='all'/>
            <FormControlLabel value={'movie'} control={<Radio/>} label='movie'/>
            <FormControlLabel value={'series'} control={<Radio/>} label='series'/>
            <FormControlLabel value={'episode'} control={<Radio/>} label='episode'/>
            <FormControlLabel value={'game'} control={<Radio/>} label='game'/>
        </RadioGroup>
    );
};

export {Filter};