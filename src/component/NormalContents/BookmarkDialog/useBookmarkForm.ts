import { useForm } from 'react-hook-form'
import { add, Bookmark, create, get, modify } from '../../../feature/bookmark'
import { useBookmarks, useStorage } from '../../../hooks'
import { FormEventHandler, useCallback, useEffect, useMemo } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type Inputs = Pick<Bookmark, 'name' | 'url' | 'tags'>

/**
 * 入力されたブックマークの名前とURLとタグの入力チェックを行う
 */
const schema = z.object({
  name: z.string().min(1),
  url: z.string().url(),
  tags: z.string().array(),
})

/**
 * Props型定義
 */
type Props = {
  bookmark?: Bookmark
  onSuccess: () => void
}

/**
 * ブックマーク登録フォーム関数
 * @param param0
 * @returns
 */
export const useBookmarkForm = ({ bookmark: _bookmark, onSuccess }: Props) => {
  const defaultValues = useMemo<Pick<Bookmark, 'name' | 'url' | 'tags'> & Partial<Bookmark>>(
    () => _bookmark ?? { name: '', url: '', tags: [] },
    [_bookmark],
  )
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues,
    resolver: zodResolver(schema),
  })
  const { setBookmarks } = useBookmarks()
  const { storage } = useStorage()
  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    handleSubmit(async (bookmark) => {
      if (defaultValues.id === undefined) {
        await add(storage, create(bookmark))
      } else {
        await modify(storage, defaultValues.id, bookmark)
      }
      await get(storage)
        .then(setBookmarks)
        .then(() => reset())
        .then(onSuccess)
    }),
    [defaultValues, handleSubmit, storage, reset, onSuccess],
  )
  useEffect(() => reset(defaultValues), [reset, defaultValues])
  return { register, control, onSubmit, errors, reset, tags: storage.tags }
}
