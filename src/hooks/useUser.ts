import { useContext } from 'react'
import { appContext } from '../context'

export const useUser = () => {
  const { user } = useContext(appContext)
  return { user }
}
