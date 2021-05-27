import './App.css';
import {createStyles, makeStyles} from "@material-ui/core";
import Toolbar from "./components/layout/Toolbar";
import React from "react";
import Main from "./components/layout/Main";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            position: 'absolute',
            margin: 0,
        },
    }),
);


const App = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar/>
            <Main/>
        </div>
    )
}

export default App;