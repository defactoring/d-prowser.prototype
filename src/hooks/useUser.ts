import { useContext } from 'react'
import { appContext } from '../context'
/**
 * ユーザー情報を提供する
 */
export const useUser = () => {
  const { user } = useContext(appContext)
  return { user }
}
