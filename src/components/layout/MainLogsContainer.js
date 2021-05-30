import React, {useEffect, useState, createRef} from "react";
import {
    Button,
    createStyles,
    makeStyles, Typography,
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {clearLogs, setBindActive, toggleAllBinds} from '../../store/eventsSlice'
import { EVENTS_BINDING, LOGS_TITLE_HEIGHT } from "../../consts";
import CheckboxInput from "../inputs/CheckboxInput";
import DeleteIcon from '@material-ui/icons/Delete';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import FilterNoneOutlinedIcon from '@material-ui/icons/FilterNoneOutlined';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        bindsContainer: {
            height: '55%',
            position: 'relative',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column'
        },
        binds: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            overflow: 'auto',
            height: `100%`,
            borderRadius: '5px',
            border: '1px solid #ccc',
            paddingBottom: '10px'

        },
        bindsTitle: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        eventCheckbox: {
            width: '50%',
            margin: 0,
            display: 'block',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            height: '30px',

        },
        logsContainer: {
            height: '45%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            padding: '10px'
        },
        logsTitle: {
            height: `${LOGS_TITLE_HEIGHT}px`,
            display: 'flex',
            margin: '0 10px',
            alignItems: 'center'
        },
        logs: {
            overflow: 'auto',
            borderRadius: '5px',
            border: '1px solid #ccc',
            height: '100%',
        },
        log: {
            padding: '5px 10px',
        },
        clearButton: {
            position: 'absolute',
            right: '10px',
            top: '35px',
        },
        selectButton: {

        }
    }),
);

const Toolbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const eventsDisplay = useSelector((state) => state.events.binds);
    const logs = useSelector((state) => state.events.logs);
    const logsEndRef = createRef();
    const [isSelectAll, setIsSelectAll] = useState(false);

    useEffect(() => {
        // scroll to bottom
        logsEndRef.current.scrollIntoView({ behavior: 'smooth' })
    },[logs, logsEndRef]);

    const handleSelectAll = () => {
        dispatch(toggleAllBinds(isSelectAll))
        setIsSelectAll(!isSelectAll);
    }

    return (
        <div className={classes.root}>
            <div className={classes.bindsContainer}>
                <div className={classes.bindsTitle}>
                    <Typography>Binds:</Typography>
                    <Button className={classes.selectButton} onClick={handleSelectAll}>
                        { isSelectAll ? <LibraryAddCheckIcon/> : <FilterNoneOutlinedIcon/>}
                    </Button>
                </div>
                <div className={classes.binds}>
                    {
                        Object.values(EVENTS_BINDING).map(event => {
                            const isBindActive = eventsDisplay[event.name];
                            return <CheckboxInput key={event.name}
                                                className={classes.eventCheckbox}
                                                checked={ isBindActive }
                                                caption={ event.name }
                                                color={ event.color }
                                                onChange={() => { dispatch(setBindActive({ eventName: event.name, value: !isBindActive}))}}>
                            </CheckboxInput>
                        })
                    }
                </div>
            </div>
            <div className={classes.logsContainer}>
                <Typography className={classes.logsTitle}>Logs:</Typography>
                <Button className={classes.clearButton} onClick={() => dispatch(clearLogs())}><DeleteIcon/></Button>
                <div className={classes.logs}>
                    <div>
                        {
                            logs.map((log, index) => {
                                return <div key={index}
                                            className={classes.log}
                                            style={{color: log.color}}>
                                    {log.name} {log.data}
                                </div>
                            })
                        }
                        <div ref={logsEndRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toolbar;