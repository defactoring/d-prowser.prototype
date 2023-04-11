import { useContext } from 'react'
import { appContext } from '@contexts'
/**
 * ユーザー情報を提供する
 * @returns
 */
export const useUser = () => {
  const { user } = useContext(appContext)
  return { user }
}
