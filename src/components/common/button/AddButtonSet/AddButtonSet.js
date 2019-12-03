import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
    '& button > span': {
      fontWeight: 350
    }
  },
  create: {
    backgroundColor: '#4051B6',

  },
  cancel: {

  },
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

const AddButtonSet = (props) => {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(true)
  }
  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        className={classes.create}
        onClick={handleModalOpen}
      >
        추가
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        open={modalOpen}
      >
        <div style={modalStyle} className={classes.modalPaper}>
          <h2>이대로 추가하시겠어요?</h2>
          <Button
            variant="outlined"
            className={classes.create}
            onClick={props.onClickCreate}
          >
            예
          </Button>
          <Button
            variant="outlined"
            className={classes.cancel}
            onClick={handleModalClose}
          >
            아니오
          </Button>
        </div>
      </Modal>
      <Button
        variant="outlined"
        className={classes.cancel}
        onClick={props.onClickCancel}
      >
        취소
      </Button>
    </div>
  )
}

export default AddButtonSet
