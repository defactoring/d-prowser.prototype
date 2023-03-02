import { useForm } from 'react-hook-form'
import { add, Bookmark, create, get } from '../../../feature/bookmark'
import { useBookmarks, useStorage } from '../../../hooks'
import { FormEventHandler, useCallback } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type Inputs = Pick<Bookmark, 'name' | 'url'>

/**
 * 入力されたブックマークの名前とURLの
 * 入力チェックを行う
 */
const schema = z.object({
  name: z.string().min(1),
  url: z.string().url(),
})
/**
 * Props型定義
 */
type Props = {
  onSuccess: () => void
}
/**
 * ブックマーク登録フォーム関数
 * @param param0 
 * @returns 
 */
export const useBookmarkForm = ({ onSuccess }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { name: '', url: '' },
    resolver: zodResolver(schema),
  })
  const { setBookmarks } = useBookmarks()
  const { storage } = useStorage()
  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    handleSubmit(async (bookmark) => {
      await add(storage, create(bookmark.name, bookmark.url))
      await get(storage)
        .then(setBookmarks)
        .then(() => reset())
        .then(onSuccess)
    }),
    [handleSubmit, storage, reset, onSuccess],
  )
  return { register, onSubmit, errors }
}
