import { Dialog } from "@mui/material";
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ExpDialogProps {
    openDialog: boolean,
    setOpenDialog: Function,
    title: string,
    content: string
}

export const ExpDialog = ({ openDialog, setOpenDialog, title, content }: ExpDialogProps) => {

    const handleClose = () => {
        setOpenDialog(false);
    }

    return (
        <Dialog open={openDialog} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
    )
}