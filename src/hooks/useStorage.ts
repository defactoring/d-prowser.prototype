import { useContext } from 'react'
import { appContext } from '../context'

export const useStorage = () => {
  const { storage } = useContext(appContext)
  return { storage }
}
