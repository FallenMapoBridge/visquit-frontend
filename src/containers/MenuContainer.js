import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../redux/modules/app'

import PageWrapper from '../components/base/PageWrapper'
import PageListWrapper from '../components/common/templates/PageListWrapper'
import PageTitle from '../components/common/typography/PageTitle'
import MenuItem from '../components/common/item/MenuItem'



import menu from '../utils/temp/menu'

// # TODOS
// - API 사용하여 메뉴 전체 가져오기
// - 각 메뉴 아이템에 대하여 메뉴 ID 전달하기
//   - 메뉴 Update / Delete에 활용

const MenuContainer = (props) => {
  useEffect(() => {
    props.appActions.getMenuList(1)
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
  menuList: app.menuList
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MenuContainer))
