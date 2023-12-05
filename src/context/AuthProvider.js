import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        localStorage.removeItem('jwtToken');
        setLoading(true);
        return signOut(auth)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])


    const authInfo = { createUser, logIn, user, logOut, updateUser, loading };
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;