import React, { useState } from 'react';

export default function WritingCreate() {
  const [content, setContent] = useState('');

  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setContent(value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    // <div>
    //   {/* Create : 데이터를 받아 저장할 form */}
    //   <form onSubmit={onSubmit}>
    //     <input
    //       type="text"
    //       placeholder="입력해주세요."
    //       onChange={onChange}
    //       value={content}
    //       maxLength={120}
    //     />
    //     <input type="submit" value="SNS" />
    //   </form>
    //   {/* Read : 저장된 데이터를 보여줄 div */}
    //   <div></div>
    // </div>
    <div className="flex items-center justify-center bg-gray-200 antialiased">
      <div
        className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-2 flex flex-col w-full h-full relative z-10 shadow-md"
        style={{ width: '411px' }}
      >
        <div className="relative z-1000 flex items-center justify-end">
          <button
            type="button"
            className="border border-green-500 bg-green-500 text-white rounded-md px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            등록
          </button>
        </div>
        <div className="border-t-2 border-b-2 border-gray-400 ">
          <input
            className="text-gray-700 text-lg mb-1 title-font"
            placeholder="제목"
          />
        </div>
        <p className="leading-relaxed mb-5 text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        {/* <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div> */}
        <div className="relative mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="내용을 입력해주세요"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-80 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          등록
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  );
}
