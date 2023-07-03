import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Patient } from '@/app/interfaces';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

interface Props {
    open: boolean,
    handleClose: ()=>void,
    handleConfirm: ()=>void,
    patient: Patient | undefined
  }

export default function ConfirmModal(props: Props) {
  return (
    <div>
      <Modal
        keepMounted
        open={props?.open}
        onClose={props?.handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <Typography style={{
            fontWeight:"bolder"
        }}>Delete User?</Typography>
        <hr style={{
            marginTop:3,
            marginBottom:10
        }}/>
        <Typography variant="subtitle1">
            {`Are you sure you want to delete this user, ${props?.patient?.first_name} ${props?.patient?.last_name}?`}
        </Typography>
        <Stack justifyContent="space-between" direction="row" mt={5}>
        <Button variant="contained" style={{
            backgroundColor: "teal"
        }}
        onClick={props?.handleConfirm}>
        Yes
        </Button>
        <Button variant="contained" style={{
            backgroundColor: "#D32F2F"
        }} 
        onClick={props?.handleClose}>
        No
        </Button>
        </Stack>
        </Box>
      </Modal>
    </div>
  );
}