import { Dialog } from "@mui/material";
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { TimelineItemProps } from "./TimelineItemProps";

interface ExpDialogProps {
    openDialog: boolean,
    setOpenDialog: (open: boolean) => void,
    data: TimelineItemProps,
}

export const ExpDialog = ({ openDialog, setOpenDialog, data }: ExpDialogProps) => {

    const handleClose = () => {
        setOpenDialog(false);
    }

    return (
        <Dialog open={openDialog} onClose={handleClose}>
            <DialogTitle>
                {data.title}
                <DialogContentText>
                    {data.company} {data.skill ? '| ' + data.skill : ''} 
                    <br />
                    {data.date}
                </DialogContentText>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {data.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
    )
}