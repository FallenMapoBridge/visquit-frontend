import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import MainHeader from '../components/base/MainHeader'
import ContentWrapper from '../components/common/templates/ContentWrapper'
import MainButton from '../components/common/main/MainButton'

import * as appActions from '../redux/modules/app'

import routes from '../utils/routes'

const MainContainer = (props) => {
  return (
    <>
      <MainHeader />
      <ContentWrapper items={routes}>
        {
          (item) => (
            <MainButton
              item={item}
              key={item.name}
            />
          )
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
