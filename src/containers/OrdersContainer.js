import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import PageWrapper from '../components/base/PageWrapper'
import Article from '../components/common/templates/Article'

const OrdersContainer = (props) => {
  return (
    <>
      <PageWrapper>
        <Article>
          <h3>주문 확인</h3>
          <p>This page is a bolierplate for React App. If you want to use it, <i>feel free to try out!</i></p>
          <Link to="/">Go back to home</Link>
        </Article>
      </PageWrapper>
    </>
  )
}

export default OrdersContainer
