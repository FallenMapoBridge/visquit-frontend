import React, { useState } from 'react'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PageWrapper from './PageWrapper'

storiesOf('PageWrapper', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('default', () => {
    return (
      <PageWrapper />
    )
  })
