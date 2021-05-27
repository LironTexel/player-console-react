import React from "react";
import {
    createStyles,
    makeStyles,
} from "@material-ui/core";
// import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import clsx from "clsx";
import {TOOLBAR_HEIGHT} from "../../consts";
import MainLogsContainer from "./MainLogsContainer";
import VideoContainer from "./VideoContainer";
import DashboardContainer from "./DashboardContainer";

const GridLayout = styled.div`
  height: 100%;
  padding: 5px;
  flex-grow : 1;
  background-color: #EEE;
  display: grid;
  grid-template-columns: minmax(50px, 150px) auto;
  grid-template-rows: 75% auto auto;
  row-gap: 5px;
  column-gap: 5px;
  font-family: Roboto, monospace;
  grid-template:
    "StyledMainLogsContainer StyledVideoContainer" 0fr
    "StyledMainLogsContainer StyledDashboardContainer" 3fr
        / min-content 2fr;
`;

const StyledMainLogsContainer = styled.div`
  grid-area: StyledMainLogsContainer;
  width: 300px;
`;

const StyledVideoContainer = styled.div`
  grid-area: StyledVideoContainer;
`;

const StyledDashboardContainer = styled.div`
  grid-area: StyledDashboardContainer;
`;

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: `calc(100% - ${TOOLBAR_HEIGHT}px)`,
            width: '100%',
        },
        gridItem: {
            border: '1px solid #BBB',
            borderRadius: '5px'
        },
        videoContainer: {
            overflow: 'auto',
            resize: 'vertical',
            height: '350px',
        },
    })
);

const Toolbar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridLayout>
                <StyledVideoContainer className={clsx(classes.gridItem, classes.videoContainer)}><VideoContainer/></StyledVideoContainer>
                <StyledMainLogsContainer className={classes.gridItem}><MainLogsContainer/></StyledMainLogsContainer>
                <StyledDashboardContainer className={classes.gridItem}><DashboardContainer/></StyledDashboardContainer>
            </GridLayout>
        </div>
    )
}

export default Toolbar;