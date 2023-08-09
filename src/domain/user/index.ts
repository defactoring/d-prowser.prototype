export type User = {
  readonly _symbol: unique symbol
  id: string
}

export const buildUser = (id: string): User => {
  return { id } as User
}
