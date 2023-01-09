import { useContext } from 'react'
import { appContext } from '../context'

export const useMode = () => {
  const { mode, setMode } = useContext(appContext)
  return { mode, setMode }
}
