import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Modal from '../../Modal'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
    '& button > span': {
      fontWeight: 350
    }
  },
  update: {
    backgroundColor: '#4051B6',

  },
  delete: {
    backgroundColor: '#FF3F79',

  },
  cancel: {

  },
}))

const EditButtonSet = (props) => {
  const classes = useStyles()
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)

  const handleUpdateModalOpen = () => {
    setUpdateModalOpen(true)
  }
  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true)
  }
  const handleModalClose = () => {
    setUpdateModalOpen(false)
    setDeleteModalOpen(false)
  }

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        className={classes.update}
        onClick={handleUpdateModalOpen}
      >
        수정
      </Button>
      <Modal
        modalOpen={updateModalOpen}
        title="이대로 수정하시겠어요?"
      >
        <Button
            variant="outlined"
            className={classes.update}
            onClick={props.onClickUpdate}
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
        className={classes.delete}
        onClick={handleDeleteModalOpen}
      >
        삭제
      </Button>
      <Modal
        modalOpen={deleteModalOpen}
        title="정말로 삭제하시겠어요?"
      >
        <Button
            variant="outlined"
            className={classes.delete}
            onClick={props.onClickDelete}
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

export default EditButtonSet
