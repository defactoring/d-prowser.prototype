import { useRecoilValue } from 'recoil'
import { userState } from '@stores'

/**
 * ユーザー情報を提供する
 * @returns
 */
export const useUser = () => {
  const user = useRecoilValue(userState)
  return { user }
}
