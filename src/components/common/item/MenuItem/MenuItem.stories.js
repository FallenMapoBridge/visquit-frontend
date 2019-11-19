import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Grid from '@material-ui/core/Grid'
import MenuItem from './MenuItem'
import PageListWrapper from '../../templates/PageListWrapper'

import menu from '../../../../utils/temp/menu'

export const singleMenu = {
  name: '하얀짬뽕',
  price: 8000,
  isValid: true
}

storiesOf('MenuItem', module)
  .add('default', () => {
    return (
      <Grid container spacing={2}>
        <MenuItem
          item={singleMenu}
          key={singleMenu.name}
        />
      </Grid>
    )
  })
  .add('multiple items', () => {
    return (
      <PageListWrapper items={menu}>
      {
        (item) => (
          <MenuItem
            item={item}
            key={item.name}
          />
        )
      }
      </PageListWrapper>
    )
  })
