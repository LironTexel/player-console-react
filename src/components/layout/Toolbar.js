import React, {useState} from "react";
import {
    Button,
    createStyles,
    Dialog,
    DialogContent,
    DialogTitle,
    makeStyles,
    Typography,
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import { setInputDisplay } from '../../store/inputsSlice'
import ToggleInput from "../inputs/ToggleInput";
import { INPUTS } from "../../consts";
import TuneIcon from '@material-ui/icons/Tune';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%',
            height: '40px',
            background: 'gray',
            justifyContent: 'flex-end',
        },
        dialogTitle: {
        },
        dialogContent: {
            width: '600px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            '& > .inputTag': {
                width: `calc(33% - ${theme.spacing(1.5)}px)`,
                // width: '150px',
                marginBottom: theme.spacing(1.5)
            }
        },
    }),
);

const Toolbar = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const inputsDisplay = useSelector((state) => state.inputs.display);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <div className={classes.root}>
            <Button onClick={handleOpen} className={classes.settingsButton}><TuneIcon/></Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className={classes.dialog}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    <div className={classes.dialogTitle}>
                        <Typography>Set visible inputs</Typography>
                    </div>
                </DialogTitle>
                <DialogContent dividers className={classes.dialogContent}>
                    {
                        Object.values(INPUTS).map(input => {
                            const isDisplayedInput = inputsDisplay[input.name];
                            return <ToggleInput key={input.name}
                                         className={'inputTag'}
                                         toggleIcon={ input.icon }
                                         selected={ isDisplayedInput }
                                         caption={input.caption}
                                         onChange={() => { dispatch(setInputDisplay({ inputName: input.name, value: !isDisplayedInput}))}}>
                            </ToggleInput>
                        })
                    }
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Toolbar;