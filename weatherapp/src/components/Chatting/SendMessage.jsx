import React, { useState } from 'react';
import { Auth, db } from '../../App';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

// eslint-disable-next-line react/prop-types
const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('메세지가 유효하지 않습니다.');
      return;
    }
    const { uid, displayName, photoURL } = Auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage('');
    // eslint-disable-next-line react/prop-types
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="items-center justify-center flex bg-gray-200 antialiased">
      <form
        onSubmit={(event) => sendMessage(event)}
        className="items-center justify-center flex antialiased bg-[#23262d]"
        style={{ width: '411px' }}
      >
        <label htmlFor="messageInput" hidden>
          Enter Message
        </label>
        <input
          id="messageInput"
          name="messageInput"
          type="text"
          className="form-input__input h-10 p-3 flex-grow bg-white border-none text-base placeholder:text-placeholder text-black"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-violet-800 text-white w-20 h-10 px-1 py-2 font-semibold rounded-r-[8px]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
