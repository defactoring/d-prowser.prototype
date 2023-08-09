import React, { Suspense } from 'react'
import { SignIn } from '@pages'
import { useUser } from '@hooks'
import { NextPage } from 'next'
import { CircularProgress } from '@mui/material'
import { Redirect } from '../../components/atoms/Redirect'

const Page: NextPage = () => {
  const { user } = useUser()
  return (
    <Suspense fallback={<CircularProgress />}>
      {user !== null ? <Redirect href='/' /> : <SignIn />}
    </Suspense>
  )
}

export default Page
