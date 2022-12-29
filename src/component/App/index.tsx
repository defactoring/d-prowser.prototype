import React, { useRef, useState } from 'react'
import { context } from '../../context'
import { NormalContents } from '../NormalContents'
import { EditContents } from '../EditContents'

// React大元
export const App = () => {
  const [mode, setMode] = useState<'normal' | 'edit'>('normal')
  const value = useRef({ mode, setMode }).current
  return (
    <context.Provider value={value}>
      {mode === 'normal' ? <NormalContents /> : <EditContents />}
    </context.Provider>
  )
}
