import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#e7e7e7',
      cursor: 'pointer',
    },
  },
  buttonContainer: {
    alignItems: 'left',
  },
}))

const OrderItem = (props) => {
  const classes = useStyles()
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card
      >
        <CardContent
          className={classes.content}
        >
          <Grid
            container
            className={classes.buttonContainer}
            direction="column"
            spacing={0}
          >
            <Grid item>
              <Typography
                variant="subtitle1"
              >
                {props.item.order_date} {props.item.order_time}
              </Typography>
            </Grid>
            {props.item.order_items.map((order_item, index) => (
              <Grid
                key={index}
                item
              >
                <Typography
                  variant="subtitle1"
                >
                  {order_item.menu_name} {order_item.item_quantity}
                </Typography>
              </Grid>
            ))}
            <Grid item>
                <Typography
                  variant="h5"
                >
                  {props.item.order_price}원
                </Typography>
              </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default OrderItem
