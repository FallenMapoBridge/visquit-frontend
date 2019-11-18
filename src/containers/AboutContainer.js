import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import Header from '../components/base/Header'
import Article from '../components/common/templates/Article'

const AboutContainer = (props) => {
  return (
    <>
      <Header />
      <Article>
        <h3>About this page</h3>
        <p>This page is a bolierplate for React App. If you want to use it, <i>feel free to try out!</i></p>
        <Link to="/">Go back to home</Link>
      </Article>
    </>
  )
}

export default AboutContainer
