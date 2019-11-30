import React, { useState } from 'react'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Sidebar from './Sidebar'

storiesOf('Sidebar', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('default', () => {
    return (
      <Sidebar />
    )
  })
