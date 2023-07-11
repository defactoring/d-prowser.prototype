import { atom } from 'recoil'
import { getAuth } from 'firebase/auth'
import { generateUser, User } from '@domain/user'
import { app } from '@libs/firebase'

const auth = getAuth(app)
const currentUser = auth.currentUser

export const userState = atom<User | null>({
  key: 'userState',
  default: currentUser ? generateUser(currentUser.uid) : null,
  effects: [
    ({ setSelf, resetSelf }) => {
      const unregisterAuthObserver = auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          setSelf(generateUser(firebaseUser.uid))
        } else {
          resetSelf()
        }
      })
      return () => unregisterAuthObserver()
    },
  ],
})
