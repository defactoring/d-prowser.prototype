import React from 'react'
import { NextPage } from 'next'
import { App } from '@pages'
import { withAuth } from '@hoc'

const Page: NextPage = () => {
  return <App />
}

export default withAuth(Page)
