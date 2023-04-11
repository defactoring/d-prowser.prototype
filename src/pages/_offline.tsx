import React from 'react'
import { NextPage } from 'next'
import { App, SignIn } from '@pages'
import { useUser } from '@hooks'

const Page: NextPage = () => {
  const { user } = useUser()
  return <>{user === null ? <SignIn /> : <App user={user} />}</>
}

export default Page
