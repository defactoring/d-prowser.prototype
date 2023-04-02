import { useContext } from 'react'
import { appContext } from '../context'

/**
 * Firebaseのユーザーとブックマーク情報を提供
 */
export const useStorage = () => {
  const { storage } = useContext(appContext)
  return { storage }
}
