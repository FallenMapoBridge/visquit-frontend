import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import PageWrapper from '../components/base/PageWrapper'
import PageListWrapper from '../components/common/templates/PageListWrapper'
import MenuItem from '../components/common/item/MenuItem'

import menu from '../utils/temp/menu'

// # TODOS
// - API 사용하여 메뉴 전체 가져오기
// - 각 메뉴 아이템에 대하여 메뉴 ID 전달하기
//   - 메뉴 Update / Delete에 활용
// - 각 메뉴 클릭시 props.history.push('/')
//   - 수정 화면으로
//   - 이떄, 쿼리스트링으로 menuId 전달

const MenuContainer = (props) => {
  return (
    <>
      <PageWrapper>
        <PageListWrapper items={menu}>
        {
          (item) => (
            <MenuItem
              item={item}
              key={item.name}
            />
          )
        }
        </PageListWrapper>
      </PageWrapper>
    </>
  )
}

export default MenuContainer
