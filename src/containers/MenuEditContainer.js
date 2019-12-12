import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as menuActions from '../redux/modules/menu'
import * as appActions from '../redux/modules/app'

import PageWrapper from '../components/base/PageWrapper'
import MenuEditWrapper from '../components/common/templates/MenuEditWrapper'
import MenuEditContent from '../components/common/content/MenuEditContent'

// # TODOS
// - 각 버튼에 대한 디스패처 전달해줘야 함:
//   - 등록: 새 메뉴 추가
//   - 수정: 기존 메뉴 수정
//   - 삭제: 기존 메뉴 삭제
//   - 취소: 이전 화면으로 돌아가기
// - 초기 로드시 menuId는 스토어에 저장

const MenuEditContainer = (props) => {
  const handleInputChange = name => event => {
    // 각 입력 폼에 대한 입력값을 Redux Store에 반영
    props.menuActions.changeInput({
      key: name,
      value: event.target.value
    })
    if (name === 'menuName')
    props.menuActions.generateMenuList(event.target.value)
  }

  const handleMenuNameCheckbox = index => event => {
    props.menuActions.checkMenuNameList(index)
  }

  const handleCreateMenu = (menuName, menuPrice) => {
    props.menuActions.createMenu(props.storeId, menuName, menuPrice)
      .then(() => {
        // 생성 성공
        props.history.push('/menu')
      })
  }

  const handleUpdateMenu = (menuId, menuName, menuPrice) => {
    props.menuActions.updateMenu(props.storeId, menuId, menuName, menuPrice)
      .then(() => {
        // 수정 성공
        // 새 메뉴 목록 가져온 뒤 화면 전환
        props.appActions.getMenuList(props.storeId)
        props.history.push('/menu')
      })
  }

  const handleDeleteMenu = (menuId) => {
    props.menuActions.deleteMenu(props.storeId, menuId)
      .then(() => {
        // 삭제 성공
        // 새 메뉴 목록 가져온 뒤 화면 전환
        props.appActions.getMenuList(props.storeId)
        props.history.push('/menu')
      })
  }

  useEffect(() => {
    if (props.match.params.menuId !== undefined) {
      props.menuActions.getMenu(props.storeId, props.match.params.menuId)
    }

    return () => {
      const keysWithInit = [
        { key: 'menuId', initValue: '' },
        { key: 'menuName', initValue: '' },
        { key: 'menuPrice', initValue: '' },
        { key: 'menuNameList', initValue: [] },
        { key: 'menuNameListChosen', initValue: [] }
      ]
      keysWithInit.map((item) => {
        props.menuActions.changeInput({
          key: item.key,
          value: item.initValue,
        })
      })
    }
  }, [])

  return (
    <>
      <PageWrapper>
        <MenuEditWrapper>
          <MenuEditContent
            menuId={props.menuId}
            menuName={props.menuName}
            menuPrice={props.menuPrice}
            menuNameList={props.menuNameList}
            handleInputChange={handleInputChange}
            handleMenuNameCheckbox={handleMenuNameCheckbox}
            handleCreateMenu={handleCreateMenu}
            handleUpdateMenu={handleUpdateMenu}
            handleDeleteMenu={handleDeleteMenu}
          />
        </MenuEditWrapper>
      </PageWrapper>
    </>
  )
}

const mapStateToProps = ({ menu, app }) => ({
  menuId: menu.menuId,
  menuName: menu.menuName,
  menuPrice: menu.menuPrice,
  menuNameList: menu.menuNameList,
  menuNameListChosen: menu.menuNameListChosen,
  storeId: app.storeId,
})

const mapDispatchToProps = (dispatch) => ({
  menuActions: bindActionCreators(menuActions, dispatch),
  appActions: bindActionCreators(appActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MenuEditContainer))
