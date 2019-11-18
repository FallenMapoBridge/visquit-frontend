import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const ContentWrapper = (props) => {
  return (
    <Container maxWidth={'sm'}>
      <Grid container spacing={2}>
        {
          props.items.map((item) => props.children(item))
        }
      </Grid>
    </Container>
  )
}

export default ContentWrapper
