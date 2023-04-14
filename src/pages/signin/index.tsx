import React from 'react'
import { SignIn } from '@pages'
import { useAuth } from '@hooks'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { CircularProgress } from '@mui/material'

const Page: NextPage = () => {
  const { loading, user } = useAuth()
  const { push } = useRouter()
  useEffect(() => {
    if (!loading && user !== null) push('/')
  }, [loading, user])
  if (loading || user !== null) return <CircularProgress />
  return <SignIn />
}

export default Page
