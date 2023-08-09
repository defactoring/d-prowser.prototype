import { useContext } from 'react'
import { appContext } from 'src/context'

export const useStorage = () => {
  const { storage } = useContext(appContext)
  return { storage }
}
