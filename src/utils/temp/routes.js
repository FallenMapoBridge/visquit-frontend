import React from 'react'
import ReceiptIcon from '@material-ui/icons/Receipt'
import MenuBookIcon from '@material-ui/icons/MenuBook'

const routes = [
  {
    name: '메뉴 관리',
    uri: '/menu',
    icon: <MenuBookIcon />,
  },
  {
    name: '주문 확인',
    uri: '/orders/pending',
    icon: <ReceiptIcon />,
  }
]

export default routes
