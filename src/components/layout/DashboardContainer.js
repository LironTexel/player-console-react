import React from "react";
import {
    createStyles,
    makeStyles,
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {INPUTS} from "../../consts";
import ToggleInput from "../inputs/ToggleInput";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
    }),
);

const DashboardContainer = (props) => {
    const classes = useStyles();
    // const dispatch = useDispatch();
    const inputsDisplay = useSelector((state) => state.inputs.display);


    return (
        <div className={classes.root}>
            {
                Object.values(INPUTS).map(input => {
                    const isDisplayedInput = inputsDisplay[input.name];
                    return isDisplayedInput && <ToggleInput key={input.name}
                                        className={'inputTag'}
                                        toggleIcon={ input.icon }
                                        selected={ isDisplayedInput }
                                        caption={input.caption}
                                        onChange={() => {}}
                    />
                })
            }
        </div>
    )
}

export default DashboardContainer;