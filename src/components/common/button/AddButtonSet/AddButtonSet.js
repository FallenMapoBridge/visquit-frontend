import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Modal from '../../Modal'

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

  }
}))

const AddButtonSet = (props) => {
  const classes = useStyles()
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
        modalOpen={modalOpen}
        title="이대로 추가하시겠어요?"
      >
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
