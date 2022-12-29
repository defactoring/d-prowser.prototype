import { useContext } from 'react'
import { context } from '../context'

export const useMode = () => {
  const { mode, setMode } = useContext(context)
  return { mode, setMode }
}
