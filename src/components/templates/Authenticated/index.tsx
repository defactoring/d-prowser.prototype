import React from 'react'
import { AppBar } from '@organisms'
import { Box } from '@mui/material'

type Props = {
  children: React.ReactNode
}

export const Authenticated: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <AppBar />
      {children}
    </Box>
  )
}
