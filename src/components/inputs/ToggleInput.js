import React from "react";
import {Typography} from "@material-ui/core";
import {ToggleButton} from "@material-ui/lab";

const ToggleInput = ({ selected, onChange, caption, toggleIcon, className }) => {

    return (
        <ToggleButton
            className={ className }
            value="check"
            selected={ selected }
            onChange={ onChange }
        >
            { toggleIcon }
            <Typography variant={'caption'}>{ caption }</Typography>
        </ToggleButton>
    )
}

export default ToggleInput;