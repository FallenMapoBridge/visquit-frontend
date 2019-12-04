import React from 'react'
import { storiesOf } from '@storybook/react'

import PageTitle from './PageTitle'

storiesOf('PageTitle', module)
  .add('default', () => {
    return (
      <PageTitle>페이지 제목</PageTitle>
    )
  })
