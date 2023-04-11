import { useContext } from 'react'
import { appContext } from '@contexts'

export const useStorage = () => {
  const { storage } = useContext(appContext)
  return { storage }
}
