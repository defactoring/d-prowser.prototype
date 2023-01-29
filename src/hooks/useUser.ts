import { useContext } from 'react'
import { appContext } from '../context'
/**
 * 
 * @returns 
 */
export const useUser = () => {
  const { user } = useContext(appContext)
  return { user }
}
