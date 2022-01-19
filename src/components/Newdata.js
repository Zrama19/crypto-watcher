import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Newdata = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  console.log(open);

  console.log(props.modalData);
  //   console.log(props.handleNewdata);

  //   props.handleNewdata((data) => {
  //     console.log(data);
  //     setOpen(data);
  //   });
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {props.modalData.id}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {props.modalData.coingecko_rank}
          </Typography>
          <Button onClick={handleClose}>Close modal</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Newdata;
