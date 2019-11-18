import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import SimpleCounter from '../components/SimpleCounter'
import Header from '../components/base/Header'
import ContentWrapper from '../components/common/templates/ContentWrapper'
import MainButton from '../components/common/main/MainButton'

import * as appActions from '../redux/modules/app'

const items = [
  '메뉴 관리',
  '주문 확인'
]

const MainContainer = (props) => {
  return (
    <>
      <Header />
      <ContentWrapper items={items}>
        {
          (item) => <MainButton>{item}</MainButton>
        }
      </ContentWrapper>
    </>
  )
}

const mapStateToProps = ({ app }) => ({
  value: app.value
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
