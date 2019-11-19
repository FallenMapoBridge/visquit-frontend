import React from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  contents: {
    height: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: '#e7e7e7',
      cursor: 'pointer'
    }
  },
  typo: {
    fontWeight: 'lighter',
    color: '#7a7a7a'
  },
  buttonContainer: {
    alignItems: 'center',
  },
  bigIcon: {
    transform: 'scale(3.5)',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}))

const MainButton = (props) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card
        onClick={() => props.history.push(props.item.uri)}
      >
        <CardContent className={classes.contents}>
          <Grid
            container
            className={classes.buttonContainer}
            direction="column"
            spacing={3}
          >
            <Grid item>
              <IconButton className={classes.bigIcon} aria-label={`${props.item.name}`}>
                {props.item.icon}
              </IconButton>
            </Grid>
            <Grid item>
              <Typography className={classes.typo} variant="h4">{props.item.name}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default withRouter(MainButton)
