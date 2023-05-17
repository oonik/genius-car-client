import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password) ;
    };

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmail = () =>{
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])
    
    const authInfo = {
       user,
       loading,
       createUser,
       loginUser,
       loginWithEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;