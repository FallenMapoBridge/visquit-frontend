import React, { useState } from 'react'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import MenuBookIcon from '@material-ui/icons/MenuBook'
import MainButton from './MainButton'

export const routes = {
  name: '메뉴 관리',
  uri: '#',
  icon: <MenuBookIcon />,
}

storiesOf('MainButton', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('default', () => {
    return (
      <MainButton
        item={routes}
        key={routes.name}
      />
    )
  })
