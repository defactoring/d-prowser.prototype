import React, { FormEventHandler, useCallback, useState } from 'react'
import 'firebase/compat/auth'
import * as A from '@atoms'
import * as S from './style'
import { Button, FormHelperText, TextField } from '@mui/material'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@hooks'

type Inputs = {
  email: string
  password: string
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

/**
 * サインイン画面
 */
export const SignIn: React.FC = () => {
  const { signIn } = useAuth()
  const [error, setError] = useState<string | null>(null)

  const { handleSubmit, register, formState } = useForm<Inputs>({ resolver: zodResolver(schema) })

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    handleSubmit(async (data) => {
      signIn(data.email, data.password).catch(() => {
        setError('メールアドレスまたはパスワードが間違っています')
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
          Sign In
        </Button>
      </S.Form>
      <FormHelperText error>{error}</FormHelperText>
      <A.Link href='/signup'>Sign Up</A.Link>
    </S.Container>
  )
}
