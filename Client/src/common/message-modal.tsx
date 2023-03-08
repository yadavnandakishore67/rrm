import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import { MessageModalDialogParams } from "../utils/types";

export default function MessageModal(
    props: MessageModalDialogParams
) {
    const { open, title, description, onSubmit, saveLabel } = props;
    const handleSubmit = (value: boolean) => {
        onSubmit(value);
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={() => handleSubmit(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleSubmit(false)}>
                        Disagree
                    </Button>
                    <Button onClick={() => handleSubmit(true)} autoFocus>
                        {saveLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}