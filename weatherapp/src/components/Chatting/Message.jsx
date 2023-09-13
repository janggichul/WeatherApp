/* eslint-disable react/prop-types */
import React from 'react';
import { Auth } from '../../App';
import { useAuthState } from 'react-firebase-hooks/auth';

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  const [user] = useAuthState(Auth);

  return (
    <div
      className={`chat-bubble p-4 w-max text-black flex items-start max-w-[100%-50px] mb-8 ${
        // eslint-disable-next-line react/prop-types
        message.uid === user.uid
          ? 'right rounded-l-[20px] ml-auto bg-white'
          : 'rounded-r-[20px] bg-gray-300'
      }`}
    >
      <img
        className="chat-bubble__left w-8 h-8 rounded-[50%] mr-4"
        // eslint-disable-next-line react/prop-types
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name font-black mb-1.5 text-lg text-black">
          {message.name}
        </p>
        <p className="user-message break-keep">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
