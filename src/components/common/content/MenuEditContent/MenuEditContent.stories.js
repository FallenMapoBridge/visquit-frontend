import React, { useState } from 'react'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import MenuEditWrapper from '../../templates/MenuEditWrapper'
import MenuEditContent from './MenuEditContent'

storiesOf('MenuEditContent', module)
  .addDecorator(story => (
    <MenuEditWrapper>
      {story()}
    </MenuEditWrapper>
  ))
  .add('new menu', () => {
    return (
      <MemoryRouter initialEntries={['/menu/edit/new']}>
        <MenuEditContent />
      </MemoryRouter>
    )
  })
