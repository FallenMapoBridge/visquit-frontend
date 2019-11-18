import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import MainButton from './MainButton'

storiesOf('MainButton', module)
  .add('default', () => {
    return (
      <MainButton>
        {'메인 버튼'}
      </MainButton>
    )
  })
