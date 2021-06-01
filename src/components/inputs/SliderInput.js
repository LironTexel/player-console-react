import React from "react";
import {createStyles, Grid, makeStyles, Slider, Typography} from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: '150px',
            textAlign: 'center',
            padding: '5px'
        },
    }),
);

const SliderInput = ({ value, onChange, caption, leftIcon, rightIcon, minValue, maxValue, step, disabled, className }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className)}>
            <Typography gutterBottom>
                {caption}
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    {leftIcon}
                </Grid>
                <Grid item xs>
                    <Slider value={value}
                            min={minValue}
                            max={maxValue}
                            step={step}
                            color="secondary"
                            valueLabelDisplay="auto"
                            disabled={disabled}
                            onChange={onChange} />
                </Grid>
                <Grid item>
                    {rightIcon}
                </Grid>
            </Grid>
        </div>
    )
}

export default SliderInput;