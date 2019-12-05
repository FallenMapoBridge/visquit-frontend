import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import Button from '@material-ui/core/Button'
import Modal from '../../Modal'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    '& button > span': {
      fontWeight: 350
    }
  },
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
  confirm: {
    backgroundColor: '#4051B6',
  }
}))

const OrderItem = (props) => {
  const classes = useStyles()
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(true)
  }
  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <Grid
      item xs={6} sm={4} md={3}
      className={classes.root}
    >
      <Card
        onClick={(props.onClickConfirm) ? handleModalOpen : () => {} }
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
      <Modal
        modalOpen={modalOpen}
        title="조리를 완료하시겠어요?"
      >
        <Button
            variant="outlined"
            className={classes.confirm}
            onClick={props.onClickConfirm}
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
    </Grid>
  )
}

export default OrderItem
