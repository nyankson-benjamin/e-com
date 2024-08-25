import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  p: 2,
};

export default function ModalComponent({title, children, open, handleClose}) {


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        
      >
        <Fade in={open}>
          <Box sx={style} className ="rounded-lg">
           <div className='flex justify-between items-center'>
           <Typography id="transition-modal-title" variant="h6" component="h2" className='font-bold'>
              {title}
            </Typography>
            <IconButton onClick={()=>handleClose()}>
              <CloseIcon/>
            </IconButton>
           </div>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

ModalComponent.propTypes={
    title:PropTypes.string,
    children:PropTypes.node,
    open:PropTypes.bool,
    handleClose:PropTypes.func
}
