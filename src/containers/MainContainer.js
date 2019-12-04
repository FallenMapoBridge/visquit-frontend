import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import MainHeader from '../components/base/MainHeader'
import MainContentWrapper from '../components/common/templates/MainContentWrapper'
import MainButton from '../components/common/button/MainButton'

import * as appActions from '../redux/modules/app'

import routes from '../utils/temp/routes'

const MainContainer = (props) => {
  return (
    <>
      <MainHeader />
      <MainContentWrapper items={routes}>
        {
          (item) => (
            <MainButton
              item={item}
              key={item.name}
            />
          )
        }
      </MainContentWrapper>
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
