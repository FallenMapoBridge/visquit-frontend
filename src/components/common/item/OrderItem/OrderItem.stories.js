import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Grid from '@material-ui/core/Grid'
import OrderItem from './OrderItem'
import PageListWrapper from '../../templates/PageListWrapper'

import orders from '../../../../utils/temp/orders'

export const singleOrder = {
  order_date: '2019-12-06',
  order_time: '13:12:45',
  order_num: 1,
  order_price: 10000,
  serve_fl: false,
  order_items: [
    {
      menu_name: '불고기버거',
      item_quantity: 2,
      item_price: 3000
    },
    {
      menu_name: '감자튀김',
      item_quantity: 1,
      item_price: 2000
    },
    {
      menu_name: '콜라',
      item_quantity: 1,
      item_price: 2000
    },
  ]
}

storiesOf('OrderItem', module)
  .add('default', () => {
    return (
      <Grid container spacing={2}>
        <OrderItem
          item={singleOrder}
          key={singleOrder.order_num}
        />
      </Grid>
    )
  })
  .add('multiple items', () => {
    return (
      <PageListWrapper items={orders}>
      {
        (item) => (
          <OrderItem
            item={item}
            key={item.name}
          />
        )
      }
      </PageListWrapper>
    )
  })
