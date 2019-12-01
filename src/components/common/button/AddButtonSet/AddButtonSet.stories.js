import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AddButtonSet from './AddButtonSet'

storiesOf('AddButtonSet', module)
  .add('default', () => {
    return (
      <AddButtonSet
        onClickCreate={action('create button!')}
        onClickCancel={action('cancel button!')}
      />
    )
  })
