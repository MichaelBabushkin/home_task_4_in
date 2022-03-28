import React, {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IAlertProps {
    isShown: boolean;
    data?: string,
    updateAlertChoice: (arg: string) => void
}


const AlertDialog: React.FC<IAlertProps> = ({data, updateAlertChoice, isShown}) =>{

    const [ AlertOpen, setAlertOpen ] = useState<boolean>(false);

    useEffect(() => {
        setAlertOpen(isShown)  
    }, [isShown]);
    

    const handleClose = (event:Event, reason:string) => {
        if (reason && reason == "backdropClick") 
            return;
        setAlertOpen(false);
    }
    const startNewGame = () => {
        setAlertOpen(false);
        updateAlertChoice("new_game")        
    };
    const goToLeaderboard = () => {
        setAlertOpen(false);
        updateAlertChoice("leaderboard")
    };

        return (

            <Dialog
                open={AlertOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                disableEscapeKeyDown
                hideBackdrop={false}
                
            >
                <DialogTitle id="alert-dialog-title">{data}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    What you would like to do next?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={startNewGame} color="primary">Start a new game</Button>
                    <Button onClick={goToLeaderboard} color="primary" autoFocus={true}> Go to the score board</Button>
                </DialogActions>
            </Dialog>
        );
    }

    export default AlertDialog;