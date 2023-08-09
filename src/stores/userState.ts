import { atom } from 'recoil'
import { getAuth } from 'firebase/auth'
import { buildUser, User } from '@domain/user'
import { app } from '@libs/firebase'

const auth = getAuth(app)

export const userState = atom<User | null>({
  key: 'userState',
  default: auth.currentUser ? buildUser(auth.currentUser.uid) : null,
  effects: [
    ({ setSelf, resetSelf }) => {
      const unregisterAuthObserver = auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          setSelf(buildUser(firebaseUser.uid))
        } else {
          resetSelf()
        }
      })
      return () => unregisterAuthObserver()
    },
  ],
})
