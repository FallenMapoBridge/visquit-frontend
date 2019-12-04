import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import PageWrapper from '../components/base/PageWrapper'
import PageListWrapper from '../components/common/templates/PageListWrapper'
import PageTitle from '../components/common/typography/PageTitle'
import OrderItem from '../components/common/item/OrderItem'

import orders from '../utils/temp/orders'

const OrdersPendingContainer = (props) => {
  return (
    <>
      <PageWrapper>
        <PageTitle>현재 주문 목록</PageTitle>
        <PageListWrapper items={orders}>
        {
          (item) => (
            <OrderItem
              item={item}
              key={item.order_num}
              onClickConfirm={() => alert('cooking done!')}
            />
          )
        }
        </PageListWrapper>
      </PageWrapper>
    </>
  )
}

export default OrdersPendingContainer
