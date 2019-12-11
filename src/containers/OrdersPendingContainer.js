import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../redux/modules/app'

import PageWrapper from '../components/base/PageWrapper'
import PageListWrapper from '../components/common/templates/PageListWrapper'
import PageTitle from '../components/common/typography/PageTitle'
import OrderItem from '../components/common/item/OrderItem'

const OrdersPendingContainer = (props) => {
  // 현재 가게에서 처리해야 하는 주문 목록 가져오기
  useEffect(() => {
    props.appActions.getMenuList(props.storeId)
    props.appActions.getOrderPendingList(props.storeId)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      props.appActions.getOrderPendingList(props.storeId)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <PageWrapper>
        <PageTitle>현재 주문 목록</PageTitle>
        <PageListWrapper items={props.orderPendingList}>
        {
          (item) => {
            // 메뉴 전체 목록을 조회하여 메뉴 이름을 가져오기
            const menu = props.menuList.filter((menu) => {
              if (menu.menu_id === item.menu_id) return true
              else return false
            })[0]
            const menuName = menu.menu_name

            return (<OrderItem
              menuName={menuName}
              item={item}
              key={item.order_id}
              onClickConfirm={() => alert('cooking done!')}
            />)
          }
        }
        </PageListWrapper>
      </PageWrapper>
    </>
  )
}

const mapStateToProps = ({ app }) => ({
  orderPendingList: app.orderPendingList,
  menuList: app.menuList,
  storeId: app.storeId,
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersPendingContainer)
