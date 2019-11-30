import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  title: {
    fontWeight: 200
  },
  textField: {
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    display: 'block'
  },
}))

const MenuDetailContent = (props) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography
        variant="h3"
        className={classes.title}
      >
        새로운 메뉴 등록
      </Typography>
      <TextField
        id={props.menuId}
        label="메뉴 이름"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        // value={}
        // onChange={}
      />
      <TextField
        id={props.menuId}
        label="가격"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        // value={}
        // onChange={}
      />
    </Paper>
  )
}

export default MenuDetailContent
