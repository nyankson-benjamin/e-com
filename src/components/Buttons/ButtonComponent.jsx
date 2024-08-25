import { Button } from '@mui/material'
import PropTypes from 'prop-types';

export default function ButtonComponent({text, disabled, children, handleSubmit, className}) {
  return (
    <Button disabled={disabled} variant='contained' className={`${className}`}  
    sx={{
        bgcolor:"#ffc801",
        "&:hover": {
            bgcolor: "#ffc801",
          },
          "&:disabled":{
            bgcolor:'#ffd231'
          },
          minWidth:"5px"
        }} onClick={handleSubmit}>
        {text}
        {children}
    </Button>
  )
}

ButtonComponent.propTypes={
    text:PropTypes.string,
    disabled:PropTypes.bool,
    children:PropTypes.node,
    handleSubmit: PropTypes.func,
    className:PropTypes.string

}
