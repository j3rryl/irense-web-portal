import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    Button,
  } from "@mui/material";
  export const ConfirmModal = () => {
    return (
      <Dialog open={true}>
        <DialogTitle>
          {" "}
          <Typography>Delete User?</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this user?
          </Typography>
          <Typography variant="subtitle2">
            You can't undo this operation
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained">Yes</Button>
          <Button variant="contained" color="error">
            No
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
