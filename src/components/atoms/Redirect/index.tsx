import React from 'react'
import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

type Props = {
  href: string
}

export const Redirect: React.FC<Props> = ({ href }) => {
  const router = useRouter()
  useEffect(() => {
    router.push(href)
  }, [href])
  return <CircularProgress />
}
