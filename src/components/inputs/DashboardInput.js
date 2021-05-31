import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import clsx from "clsx";
import {Colors} from "../../styles/colors";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignSelf: 'stretch',
            background: theme.palette.background.paper,
            border: `1px solid ${Colors.MID_GREY}`,
            borderRadius: '5px',
            '&:hover': {
                boxShadow: '0 0 5px 1px #ccc',
                transition: 'box-shadow 0.3s ease-in-out'
            }
        },
        iconContainer: {
            height: '100%',
            background: theme.palette.divider,
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            borderRadius: '5px 0 0 5px'
        },
        childrenContainer: {
            alignSelf: 'center',
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            height: '100%'

        }
    }),
);

const DashboardInput = ({icon, children, className}) => {
    const classes = useStyles();

    return (
        <div className={ clsx(classes.root, className)}>
            <div className={classes.iconContainer}>
                {icon}
            </div>
            <div className={classes.childrenContainer}>
                { children }
            </div>
        </div>
    )
}

export default DashboardInput;