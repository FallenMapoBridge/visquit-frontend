import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import MenuDetailWrapper from '../../templates/MenuDetailWrapper'
import MenuDetailContent from './MenuDetailContent'

storiesOf('MenuDetailContent', module)
  .addDecorator(story => (
    <MenuDetailWrapper>
      {story()}
    </MenuDetailWrapper>
  ))
  .add('default', () => {
    return (
      <MenuDetailContent
        menuId={1234}
      />
    )
  })
