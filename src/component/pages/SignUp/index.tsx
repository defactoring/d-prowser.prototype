import React, { useCallback, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import * as S from './style'
import { Button, FormHelperText, TextField } from '@mui/material'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { firebaseApp } from '../../../feature/firebase'
import { useRouter } from 'next/router'

type Inputs = {
  email: string
  password: string
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const SignUp: React.FC = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const { handleSubmit, register, formState } = useForm<Inputs>({ resolver: zodResolver(schema) })
  const onSubmit = useCallback(
    handleSubmit(async (data) => {
      createUserWithEmailAndPassword(firebaseApp.auth(), data.email, data.password)
        .then(() => {
          router.push('/')
        })
        .catch((error) => {
          console.error(error)
          setError('登録に失敗しました')
        })
    }),
    [handleSubmit],
  )
  return (
    <S.Container>
      <h1>D-Prowser</h1>
      <S.Form onSubmit={onSubmit}>
        <TextField
          size='small'
          type='email'
          placeholder='email'
          autoComplete='email'
          {...register('email')}
          error={!!formState.errors.email}
        />
        <TextField
          size='small'
          type='password'
          placeholder='password'
          autoComplete='password'
          {...register('password')}
          error={!!formState.errors.password}
        />
        <Button size='small' type='submit' variant='contained'>
          Sign Up
        </Button>
      </S.Form>
      <FormHelperText error>{error}</FormHelperText>
    </S.Container>
  )
}
