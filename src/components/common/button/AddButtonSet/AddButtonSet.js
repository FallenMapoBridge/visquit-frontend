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
  create: {
    backgroundColor: '#4051B6',

  },
  cancel: {

  }
}))

const AddButtonSet = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        className={classes.create}
        onClick={props.onClickCreate}
      >
        추가
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

export default AddButtonSet
