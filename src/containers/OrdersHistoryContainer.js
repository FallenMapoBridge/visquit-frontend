import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../redux/modules/app'

import PageWrapper from '../components/base/PageWrapper'
import PageListWrapper from '../components/common/templates/PageListWrapper'

import OrderItem from '../components/common/item/OrderItem'
import PageTitle from '../components/common/typography/PageTitle'

const OrdersHistoryContainer = (props) => {
  // 현재 가게에서 기존에 처리 완료한 주문 목록 가져오기
  useEffect(() => {
    props.appActions.getMenuList(props.storeId)
    props.appActions.getOrderHistoryList(props.storeId)
  }, [])

  return (
    <>
      <PageWrapper>
        <PageTitle>처리 완료 주문</PageTitle>
        <PageListWrapper items={props.orderHistoryList}>
        {
          (item) => {
            // 메뉴 전체 목록을 조회하여 메뉴 이름을 가져오기
            const menu = props.menuList.filter((menu) => {
              if (menu.menu_id === item.menu_id) return true
              else return false
            })[0]
            const menuName = menu.menu_name

            return (
              <OrderItem
                menuName={menuName}
                item={item}
                key={item.order_id}
              />
            )
          }
        }
        </PageListWrapper>
      </PageWrapper>
    </>
  )
}

const mapStateToProps = ({ app }) => ({
  orderHistoryList: app.orderHistoryList,
  menuList: app.menuList,
  storeId: app.storeId,
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersHistoryContainer)
