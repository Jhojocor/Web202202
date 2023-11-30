import React, { createContext, useContext } from 'react'
import { auth } from '../firebase/firebase.config'

import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) {
    console.log('error creating auth context')
  }
  return context
}

export function AuthProvider ({ children }) {
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
    console.log(response)
  }
  const logout = async () => {
    const response = await signOut(auth)
    console.log(response)
  }
  return (
    <authContext.Provider
      value={{
        login,
        logout
      }}
    >
      {children}
    </authContext.Provider>
  )
}
