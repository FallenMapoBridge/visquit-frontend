import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

const MenuDetailWrapper = (props) => {
  return (
    <Container
      maxWidth={'sm'}
    >
      {props.children}
    </Container>
  )
}

export default MenuDetailWrapper
