import React, { useState } from 'react';
import { Auth } from '../../App';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import GoogleSignin from '../assets/btn_google_signin.png';

const NavBar = () => {
  const [user] = useAuthState(Auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(Auth, provider);
  };

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <nav className="nav-bar flex items-center justify-between px-10 py-4 font-NotoSansKR font-semibold text-white">
      <h1 className="text-3xl">
        <span className="text-react">React</span>{' '}
        <span className="text-firebase">Firebase</span> Chat App
      </h1>
      {user ? (
        <button
          onClick={signOut}
          className="sign-out font-bold px-8 py-4 text-xl bg-transparent"
          type="button"
        >
          Sign Out
        </button>
      ) : (
        <button className="sign-in border-none bg-transparent p-0">
          <img
            className="w-16 h-auto"
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
