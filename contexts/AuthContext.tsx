import { createContext, ReactNode, useState } from "react";
import Router from "next/router";
import firebase from "../lib/firebase";


interface IAuthProvider {
children: ReactNode;
}

const AuthContext = createContext(null!);

export function AuthProvider({children}: IAuthProvider){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signin = () => {
        try {
            setLoading(true);
            return firebase.auth()
                .signInWithPopup(new firebase.auth.GithubAuthProvider())
                .then((response) => {
                    setUser(response.user);
                    Router.push('/dashboard');
                });
        } finally {
            setLoading(false);
        }
    }

    const signout = () => {
        try {
            Router.push('/dashboard');

            return firebase.auth()
                   .signOut()
                   .then(() => setUser(false));
        } finally {
            setLoading(false);
        }
    };

    return <AuthContext.Provider value={{user, loading, signin, signout}}>
             {children}
           </AuthContext.Provider>
}


export default AuthContext;