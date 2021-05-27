import React from "react";
import {Checkbox, FormControlLabel} from "@material-ui/core";

const CheckInput = ({ checked , onChange, color, caption, className }) => {

    return (
        <FormControlLabel className={className}
            control={
                <Checkbox
                    onChange={ onChange }
                    checked={ checked }
                />
            }
            label={ <span style={{color: color || 'black', fontWeight: checked ? 'bold' : 'normal'}}>{caption}</span> }/>
    )
};

export default CheckInput;