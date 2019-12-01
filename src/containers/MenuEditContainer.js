import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

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
// - 쿼리 스트링 여부에 따라
//   - 있음: 기존 메뉴 변경
//   - 없음: 새로운 메뉴 추가

const MenuDetailContainer = (props) => {
  return (
    <>
      <PageWrapper>
        <MenuEditWrapper>
          <MenuEditContent
            menuId={11} // 테스트용 props
          />
        </MenuEditWrapper>
      </PageWrapper>
    </>
  )
}

export default MenuEditContainer
