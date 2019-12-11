import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../redux/modules/app'

import PageWrapper from '../components/base/PageWrapper'
import PageListWrapper from '../components/common/templates/PageListWrapper'
import PageTitle from '../components/common/typography/PageTitle'
import MenuItem from '../components/common/item/MenuItem'

const MenuContainer = (props) => {
  // 현재 가게에서 사용하는 메뉴 목록 가져오기
  useEffect(() => {
    props.appActions.getMenuList(props.storeId)
  }, [])

  return (
    <>
      <PageWrapper>
        <PageTitle>메뉴 목록</PageTitle>
        <PageListWrapper items={props.menuList}>
        {
          (item) => (
            <MenuItem
              item={item}
              key={item.menu_name}
              handleClick={() => props.history.push(`/menu/edit/${item.menu_id}`)}
            />
          )
        }
        </PageListWrapper>
      </PageWrapper>
    </>
  )
}

const mapStateToProps = ({ app }) => ({
  menuList: app.menuList,
  storeId: app.storeId,
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MenuContainer))
