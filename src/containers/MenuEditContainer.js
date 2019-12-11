import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as menuActions from '../redux/modules/menu'

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

  useEffect(() => {
    props.menuActions.getMenu(props.storeId, props.match.params.menuId)

    return () => {
      const keys = ['menuId', 'menuName', 'menuPrice']
      keys.map((key) => {
        props.menuActions.changeInput({
          key: key,
          value: '',
        })
      })
    }
  }, [])

  return (
    <>
      <PageWrapper>
        <MenuEditWrapper>
          <MenuEditContent
            menuId={props.menuId} // 테스트용 props
            menuName={props.menuName}
            menuPrice={props.menuPrice}
            menuNameList={props.menuNameList}
            handleInputChange={handleInputChange}
            handleMenuNameCheckbox={handleMenuNameCheckbox}
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
  menuActions: bindActionCreators(menuActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MenuEditContainer))
