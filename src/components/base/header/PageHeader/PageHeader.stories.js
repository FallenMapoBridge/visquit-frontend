import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PageHeader from './PageHeader'

storiesOf('PageHeader', module)
  .add('default', () => {
    return (
      <PageHeader />
    )
  })
