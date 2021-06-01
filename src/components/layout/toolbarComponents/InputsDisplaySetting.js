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
import {setBulkInputDisplay, setInputDisplay} from '../../../store/inputsSlice'
import DisplayInput from "../../inputs/DisplayInput";
import { INPUTS } from "../../../consts";
import TuneIcon from '@material-ui/icons/Tune';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
        },
        dialogTitle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
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

const InputsDisplaySetting = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const inputsDisplay = useSelector((state) => state.inputs.display);
    const [selectAll, setSelectAll] = useState(false);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleSelectAll = (isSelectAll) => {
        dispatch(setBulkInputDisplay(isSelectAll));
        setSelectAll(!selectAll);
    }

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
                        <Button onClick={() => handleSelectAll(selectAll)}>
                            {selectAll ? 'Select All' : 'Deselect All'}
                        </Button>
                    </div>
                </DialogTitle>
                <DialogContent dividers className={classes.dialogContent}>
                    {
                        Object.values(INPUTS).map(input => {
                            const isDisplayedInput = inputsDisplay[input.name];
                            return <DisplayInput key={input.name}
                                                 className={'inputTag'}
                                                 toggleIcon={ input.icon }
                                                 selected={ isDisplayedInput }
                                                 caption={input.caption}
                                                 onChange={() => { dispatch(setInputDisplay({ inputName: input.name, value: !isDisplayedInput}))}}>
                            </DisplayInput>
                        })
                    }
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default InputsDisplaySetting;