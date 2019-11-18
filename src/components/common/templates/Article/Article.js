import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    '& p': {
      color: 'green',
      fontWeight: 'lighter'
    },
    '& h3': {
      fontWeight: 'lighter'
    }
  }
})

const Article = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}

export default Article
