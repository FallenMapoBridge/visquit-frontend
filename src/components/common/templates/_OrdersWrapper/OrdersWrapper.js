import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

const OrdersWrapper = (props) => {
  return (
    <Container
      maxWidth={'sm'}
    >
      {props.children}
    </Container>
  )
}

export default OrdersWrapper
