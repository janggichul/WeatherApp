import React from 'react';
import { Auth } from '../../App';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import GoogleSignin from '../assets/btn_google_signin.png';

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(Auth, provider);
  };

  return (
    <main className="welcome p-5 mt-6 text-white items-center justify-center text-center text-2xl break-keep">
      <h2 className="font-semibold">
        React와 Firebase를 활용한 채팅 앱 예제입니다.
      </h2>
      <p>상단 메뉴의 로그인 버튼을 눌러 구글 로그인을 진행해주세요.</p>
      <p>로그인이 성공하면 채팅 화면으로 자동으로 이동됩니다.</p>
    </main>
  );
};

export default Welcome;
