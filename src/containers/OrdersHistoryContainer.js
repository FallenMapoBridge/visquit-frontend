import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import PageWrapper from '../components/base/PageWrapper'
import PageListWrapper from '../components/common/templates/PageListWrapper'

import OrderItem from '../components/common/item/OrderItem'
import PageTitle from '../components/common/typography/PageTitle'
import history from '../utils/temp/history'

const OrdersHistoryContainer = (props) => {
  return (
    <>
      <PageWrapper>
        <PageTitle>처리 완료 주문</PageTitle>
        <PageListWrapper items={history}>
        {
          (item) => (
            <OrderItem
              item={item}
              key={item.order_num}
            />
          )
        }
        </PageListWrapper>
      </PageWrapper>
    </>
  )
}

export default OrdersHistoryContainer
