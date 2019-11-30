import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import PageWrapper from '../components/base/PageWrapper'
import MenuDetailWrapper from '../components/common/templates/MenuDetailWrapper'
import MenuDetailContent from '../components/common/content/MenuDetailContent'

const MenuDetailContainer = (props) => {
  return (
    <>
      <PageWrapper>
        <MenuDetailWrapper>
          <MenuDetailContent
            menuId={11}
          />
        </MenuDetailWrapper>
      </PageWrapper>
    </>
  )
}

export default MenuDetailContainer
