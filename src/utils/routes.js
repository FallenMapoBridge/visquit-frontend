import React from 'react'
import ReceiptIcon from '@material-ui/icons/Receipt'
import MenuBookIcon from '@material-ui/icons/MenuBook'

// import { makeStyles } from '@material-ui/core/styles'
// const useStyles = makeStyles({
//   iconBig: {
//     fontSizeLarge: 50
//   }
// })
// const BigIcon = (props) => {
//   const Icon = props.originalIcon
//   const classes = useStyles()
//   return (
//     <Icon
//       fontSize="large"
//       className={classes.iconBig}
//     />
//   )
// }

const routes = [
  {
    name: '메뉴 관리',
    uri: '/menu',
    icon: <MenuBookIcon />,
    // iconBig: <BigIcon originalIcon={MenuBookIcon} />,
  },
  {
    name: '주문 확인',
    uri: '/orders',
    icon: <ReceiptIcon />,
    // iconBig: <BigIcon originalIcon={ReceiptIcon} />,
  }
]

export default routes
