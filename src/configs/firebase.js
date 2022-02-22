
import firebase from 'firebase';
// import { useContext } from 'react';
// import * as auth from 'firebase'

// working package :      "firebase": "7.20.0",
// Your web app's Firebase configuration
const firebaseConfig = {

};

// export const app = firebase.initializeApp(firebaseConfig);

export const app = {
  firestore: () => null,
  auth: () => {return {currentUser: null, signOut: () => null}},
}
export const db = app.firestore()
export const auth = app.auth()

export const useAuthState = () => {
  // const _auth = useContext(auth)
  console.log("Auth cont: ", auth);
  return { ...auth, isAuthenticated: auth.currentUser != null }
}

// export const signin = async (email, password) => auth.signInWithEmailAndPassword(email, password)
// export const createUser = async (email, password) => auth.createUserWithEmailAndPassword(email, password)
export const signout = async () => auth.signOut()
export const getUser = async () => auth.currentUser
