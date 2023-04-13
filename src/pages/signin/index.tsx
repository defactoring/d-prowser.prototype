import React from 'react'
import { SignIn } from '@pages'
import { useAuth } from '@hooks'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { CircularProgress } from '@mui/material'

const Page: NextPage = () => {
  const [loading, setLoading] = React.useState(true)
  const { user } = useAuth()
  const { push } = useRouter()
  useEffect(() => {
    setLoading(true)
    if (user !== null) push('/').then(() => setLoading(false))
    return () => setLoading(false)
  }, [user])
  if (loading) return <CircularProgress />
  return <SignIn />
}

export default Page
