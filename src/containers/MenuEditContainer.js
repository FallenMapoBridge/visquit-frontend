import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as actions from '../redux/modules/menu'

import PageWrapper from '../components/base/PageWrapper'
import MenuEditWrapper from '../components/common/templates/MenuEditWrapper'
import MenuEditContent from '../components/common/content/MenuEditContent'

// # TODOS
// - 각 버튼에 대한 디스패처 전달해줘야 함:
//   - 등록: 새 메뉴 추가
//   - 수정: 기존 메뉴 수정
//   - 삭제: 기존 메뉴 삭제
//   - 취소: 이전 화면으로 돌아가기
//   - 각 버튼은 모달 띄어주면서 재확인
// - 초기 로드시 menuId는 스토어에 저장

const MenuEditContainer = (props) => {
  const handleChange = name => event => {
    // 각 입력 폼에 대한 입력값을 Redux Store에 반영
    props.actions.changeInput({
      key: name,
      value: event.target.value
    })
  }

  return (
    <>
      <PageWrapper>
        <MenuEditWrapper>
          <MenuEditContent
            menuId={11} // 테스트용 props
            menuName={props.menuName}
            menuPrice={props.menuPrice}
            handleChange={handleChange}
          />
        </MenuEditWrapper>
      </PageWrapper>
    </>
  )
}

const mapStateToProps = ({ menu }) => ({
  menuId: menu.menuId,
  menuName: menu.menuName,
  menuPrice: menu.menuPrice,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuEditContainer)
