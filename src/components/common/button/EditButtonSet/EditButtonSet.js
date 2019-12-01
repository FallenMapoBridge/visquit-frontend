import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

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

  }
}))

const EditButtonSet = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        className={classes.update}
        onClick={props.onClickUpdate}
      >
        수정
      </Button>
      <Button
        variant="outlined"
        className={classes.delete}
        onClick={props.onClickDelete}
      >
        삭제
      </Button>
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
