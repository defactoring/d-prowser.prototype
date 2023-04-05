import React, { FormEventHandler, useCallback, useContext, useEffect, useState } from 'react'
import 'firebase/compat/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '../../feature/firebase'
import { authContext } from '../../context'
import * as A from '../atoms'
import * as S from './style'
import { Button, FormHelperText, TextField } from '@mui/material'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type Inputs = {
  email: string
  password: string
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

/**
 * サインインスクリーンタグ
 * サインイン画面を表示
 * @returns
 */
const SignInScreen: React.FC = () => {
  const { setUser } = useContext(authContext)
  const [error, setError] = useState<string | null>(null)

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  const { handleSubmit, register, formState } = useForm<Inputs>({ resolver: zodResolver(schema) })

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    handleSubmit(async (data) => {
      signInWithEmailAndPassword(firebaseApp.auth(), data.email, data.password)
        .then(({ user }) => {
          setUser(user)
          // if (user.emailVerified) {
          //   setUser(user)
          // } else  {
          //   firebaseApp.auth().currentUser?.sendEmailVerification()
          // }
        })
        .catch(() => {
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

export default SignInScreen
