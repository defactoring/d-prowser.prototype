import React, { useContext } from 'react'
import { NextPage } from 'next'
import { App, SignIn } from '@pages'
import { authContext } from '@contexts'

const Page: NextPage = () => {
  const { user } = useContext(authContext)
  return <>{user === null ? <SignIn /> : <App user={user} />}</>
}

export default Page
