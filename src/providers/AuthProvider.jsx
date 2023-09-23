import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const auth = getAuth(app);
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (user, name, photoUrl) => {
        setLoader(true)
        return updateProfile(user, name, photoUrl)
    }
    const userEmailVarification = (user) => {
        setLoader(true)
        return sendEmailVerification(user)
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = { createUser, signInUser, updateUserProfile, userEmailVarification, user, logOut, loader };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;