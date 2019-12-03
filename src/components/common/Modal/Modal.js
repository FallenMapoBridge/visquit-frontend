import React, { useState } from 'react'

import MaterialUIModal from '@material-ui/core/Modal'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  modalPaper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
    outline: 0,

    '& h2': {
      fontWeight: 300,
    },

    '& button': {
      marginRight: '3px',
      marginLeft: '3px',
    }
  },
}))

const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Modal = (props) => {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)

  return (
    <MaterialUIModal
      aria-labelledby="simple-modal-title"
      open={props.modalOpen}
    >
      <div
        style={modalStyle}
        className={classes.modalPaper}
      >
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </MaterialUIModal>
  )
}

export default Modal
