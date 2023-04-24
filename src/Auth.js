import React, {useEffect, useState} from 'react';
import app from './firebase'
// import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, [])

    return (
        <AuthContext.Provider
        value={{
            currentUser
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}