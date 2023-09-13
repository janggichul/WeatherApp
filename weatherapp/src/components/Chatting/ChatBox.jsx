import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from 'firebase/firestore';
import { db } from '../../App';
import ScrollToBottom from 'react-scroll-to-bottom';
import { isLoginState } from 'atoms/atom';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt'),
      limit(50),
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  if (isLogin !== true) {
    return (
      <div className="flex items-center justify-center bg-gray-200 antialiased">
        <div
          className="flex flex-col shadow-xl bg-white overflow-scroll"
          style={{ width: '411px', height: '560px' }}
        >
          <div className="mt-5 items-center justify-center p-2">
            <div className="mt-10">
              <div className="flex items-center justify-center gap-2">
                <p className="text-base font-bold text-navy-700 dark:text-white mt-10">
                  채팅을 하시려면 로그인을 해주세요.
                </p>
              </div>
            </div>
            <Link to="/Login">
              <button className="mt-10 ml-24 group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
                로그인하러 가기!
              </button>{' '}
              ㅠ
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <ScrollToBottom>
          <div className="items-center justify-center flex bg-gray-200 antialiased">
            <div
              className="flex flex-col bg-white messages-wrapper"
              style={{ width: '411px', overflowX: 'scroll', height: '525px' }}
            >
              {messages?.map((message) => (
                <Message key={message.id} message={message} />
              ))}
            </div>
            <span ref={scroll}></span>
          </div>
          <SendMessage scroll={scroll} />
        </ScrollToBottom>
      </>
    );
  }
};

export default ChatBox;
