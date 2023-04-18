import React from 'react'
import { NormalContents } from '../../NormalContents'
import * as T from '@templates'

export const App: React.FC = () => {
  return (
    <T.Authenticated>
      <NormalContents />
    </T.Authenticated>
  )
}
