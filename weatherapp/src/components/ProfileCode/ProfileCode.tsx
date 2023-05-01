import { getAuth } from 'firebase/auth';
import React from 'react';
import profile from '../../assets/profile.png';
import InformationCorrection from 'page/profile/InformationCorrection';
export default function ProfileCode() {
  const auth = getAuth();
  const user: any = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
    console.log(photoURL);
  }

  return (
    <div className="flex items-center justify-center from-gray-700 via-gray-800 to-gray-900 bg-gray-200">
      <div className="bg-white" style={{ width: '411px' }}>
        <div className="relative w-full group max-w-md min-w-0 mt-20 mx-auto break-words bg-white border shadow-2xl  md:max-w-sm rounded-xl">
          <div className="pb-6">
            <div className="flex flex-wrap justify-center">
              <div className="flex justify-center w-full">
                <div className="relative">
                  <img
                    src={profile}
                    className="dark:shadow-xl border-white rounded-full align-middle border-8 absolute -m-16 max-w-[140px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 mt-20 text-center">
              <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700">
                {user.displayName}
              </h3>
              <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                <div className="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl">
                  Front-end
                </div>
              </div>
              <div className="w-full text-center">
                <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                  <div className="flex space-x-2">
                    <a
                      className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                      href="https://github.com/janggichul"
                      rel="noopener"
                      aria-label="Ariel Cerda on Github"
                      target="_blank"
                    >
                      <svg
                        className="w-6 h-6 overflow-visible fill-current"
                        aria-hidden="true"
                        viewBox="0 0 140 140"
                      >
                        <path d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-4 font-light leading-relaxed ">
                안녕하세요 장기철입니다.
              </p>
            </div>
            <div className="mx-6 mt-6 text-center border-t border-gray-200 ">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-6"></div>
                <InformationCorrection />
              </div>
            </div>
            <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
              <div className="absolute flex -space-x-12 rounded-b-2xl">
                <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
