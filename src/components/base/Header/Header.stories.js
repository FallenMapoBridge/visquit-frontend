import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Header from './Header'

storiesOf('Header', module)
  .add('default', () => {
    return (
      <Header />
    )
  })
