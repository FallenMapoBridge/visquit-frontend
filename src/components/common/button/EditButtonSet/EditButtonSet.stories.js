import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import EditButtonSet from './EditButtonSet'

storiesOf('EditButtonSet', module)
  .add('default', () => {
    return (
      <EditButtonSet
        onClickUpdate={action('update button!')}
        onClickDelete={action('delete button!')}
        onClickCancel={action('cancel button!')}
      />
    )
  })
