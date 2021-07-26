import { createContext, ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import firebase from "../lib/firebase";
import { IUser } from "interfaces/props.dto";
import cookie from 'js-cookie';

interface IAuthProvider {
children: ReactNode;
}

const AuthContext = createContext(null!);



async function formatUser(user): Promise<IUser>{
  return {
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
  }
}

export function AuthProvider({children}: IAuthProvider){

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (currentUser) => {
      if (currentUser) {
          const formatedUser = await formatUser(currentUser);
          setUser(formatedUser);
          setSession(true);
          return formatedUser.email;
      }
      setUser(false);
      setSession(false);
      return false;
  }

    const setSession = (session) => {
      if (session) {
          cookie.set('wenedevsite-auth', session, {
            expires: 1,
          });
      } else {
          cookie.remove('wenedevsite-auth');
      }
  }




    const signinGitHub = async () => {
      try {
          setLoading(true);
          const response = await firebase
              .auth()
              .signInWithPopup(new firebase.auth.GithubAuthProvider());
          handleUser(response.user);

      } finally {
          setLoading(false);
      }
    }

    const signinGoogle = async () => {
      try {
          setLoading(true);
          const response = await firebase
              .auth()
              .signInWithPopup(new firebase.auth.GoogleAuthProvider());
          handleUser(response.user);
      } finally {
          setLoading(false);
      }
    }


    const signout = async () => {
      try {
          Router.push('/');
          await firebase.auth().signOut();
          handleUser(false);

        } finally {
          setLoading(false);
        }
  }

    useEffect(() => {
      const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
      return () => unsubscribe();
  }, []);

    return <AuthContext.Provider value={{user, loading, signinGitHub, signinGoogle, signout}}>
             {children}
           </AuthContext.Provider>
}


export default AuthContext;
