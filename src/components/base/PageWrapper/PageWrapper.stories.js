import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PageWrapper from './PageWrapper'

storiesOf('PageWrapper', module)
  .add('default', () => {
    return (
      <PageWrapper />
    )
  })
