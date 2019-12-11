import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../redux/modules/app'

import PageWrapper from '../components/base/PageWrapper'
import PageListWrapper from '../components/common/templates/PageListWrapper'

import OrderItem from '../components/common/item/OrderItem'
import PageTitle from '../components/common/typography/PageTitle'

import history from '../utils/temp/history'

const OrdersHistoryContainer = (props) => {
  // 현재 가게에서 기존에 처리 완료한 주문 목록 가져오기
  useEffect(() => {
    props.appActions.getOrderHistoryList(props.storeId)
  }, [])

  return (
    <>
      <PageWrapper>
        <PageTitle>처리 완료 주문</PageTitle>
        <PageListWrapper items={props.orderHistoryList}>
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

const mapStateToProps = ({ app }) => ({
  orderHistoryList: app.orderHistoryList,
  storeId: app.storeId,
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersHistoryContainer)
