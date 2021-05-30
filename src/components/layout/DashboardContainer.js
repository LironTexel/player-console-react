import React, { forwardRef, useEffect, useState } from "react";
import {
    Button,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import {useSelector} from "react-redux";
import {INPUTS} from "../../consts";
import ToggleInput from "../inputs/ToggleInput";

const useStyles = makeStyles(() =>
    createStyles({
        inputsContainer: {
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        root: {
            // margin: '10px'
        }
    }),
);

const DashboardContainer = forwardRef((props, ref) => {
    const classes = useStyles();
    const inputsDisplay = useSelector((state) => state.inputs.display);
    const [refObj, setRefObj] = useState(null)

    useEffect(() => {
        console.log({ref});
        console.log(ref?.current?.currentSrc);
        setRefObj(ref);
    }, [ref])

    return (
        <div className={classes.root}>
            <div className={classes.inputsContainer}>
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
            <Button onClick={() => ref.current.play()}>play</Button>

            {ref?.current?.currentSrc}

        </div>
    )
})

export default DashboardContainer;