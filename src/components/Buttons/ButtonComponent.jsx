import { Button } from '@mui/material'
import PropTypes from 'prop-types';

export default function ButtonComponent({text, disabled, children}) {
  return (
    <Button disabled={disabled} variant='contained' className='primary-bg' 
    sx={{
        bgcolor:"#ffc801",
        "&:hover": {
            bgcolor: "#ffc801",
          },
        }} >
        {text}
        {children}
    </Button>
  )
}

ButtonComponent.propTypes={
    text:PropTypes.string,
    disabled:PropTypes.bool,
    children:PropTypes.node
}
