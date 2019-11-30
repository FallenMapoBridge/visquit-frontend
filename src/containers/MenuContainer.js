import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import PageWrapper from '../components/base/PageWrapper'
import PageListWrapper from '../components/common/templates/PageListWrapper'
import MenuItem from '../components/common/item/MenuItem'

import menu from '../utils/temp/menu'

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
