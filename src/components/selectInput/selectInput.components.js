import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import './selectInput.styles.css';

const SelectInput = props => (
    <div className="selectInput">
        <form className="formControl">
            <InputLabel className="inputLabel" id="demo-simple-select-label">Base Currency</InputLabel>
            <Select onChange={props.onChange}>
                <MenuItem value={"JPY"}>JPY</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
        </form>
    </div>
);

export default SelectInput;