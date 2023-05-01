import React, { useState } from 'react';
import weatherImg from '../assets/weather.svg';
import weatherblackImg from '../assets/weather_black.svg';
import communityImg from '../assets/community.svg';
import communityblackImg from '../assets/community_black.svg';
import chattingImg from '../assets/chatting.svg';
import chattingblackImg from '../assets/chatting_black.svg';
import logoImg from '../assets/LOGO.png';
import MapSearchCode from 'components/MainPagecode/MapSearchCode';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoginState } from 'atoms/atom';
import { Auth } from '../App';
import { signOut } from 'firebase/auth';

export default function Nav() {
  const [latitude, setLatitude] = useState<number | any>();
  const [longitude, setLongitude] = useState<number | any>();
  const [weather, setWeather] = useState<boolean>(true);
  const [community, setCommunity] = useState<boolean>(false);
  const [chatting, setChatting] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useRecoilState<boolean>(isLoginState);

  const navigate = useNavigate();

  if (localStorage.getItem('login')) {
    setIsLogin(true);
  }

  const handleLogoutButton = () => {
    signOut(Auth).then((result) => {
      navigate('/Login');
      window.location.reload();
      localStorage.removeItem('login');
      localStorage.removeItem('location');
    });
    setIsLogin(false);
  };

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  });

  const handleWeatherbutton = () => {
    setWeather(true);
    setCommunity(false);
    setChatting(false);
  };

  const handleCommunityButton = () => {
    setCommunity(true);
    setWeather(false);
    setChatting(false);
  };

  const handleChattingButton = () => {
    setChatting(true);
    setCommunity(false);
    setWeather(false);
  };
  return (
    <>
      <div className="flex items-center justify-center bg-gray-200 antialiased">
        <div
          className="flex flex-col bg-white overflow-scroll"
          style={{ width: '411px' }}
        >
          <div className="flex flex-col">
            <div className="mt-3 ml-32 flex">
              <img src={logoImg} alt="" style={{ width: '120px' }} />
              {!isLogin ? (
                <Link to="/Login">
                  <button className="ml-12 mt-4 group rounded-2xl h-8 w-20 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
                    로그인
                  </button>
                </Link>
              ) : (
                <button
                  className="ml-12 mt-4 group rounded-2xl h-8 w-20 bg-green-500 font-bold text-lg text-white relative overflow-hidden"
                  onClick={handleLogoutButton}
                >
                  로그아웃
                </button>
              )}
            </div>
            <MapSearchCode latitude={latitude} longitude={longitude} />
            <ul className="border-b border-gray-200 flex flex-row justify-between px-5 mt-4 ">
              <Link to="/">
                <li
                  className={`${
                    weather
                      ? 'cursor-pointer flex flex-col items-center border-b-2 border-black pb-2'
                      : 'cursor-pointer flex flex-col items-center'
                  }`}
                  onClick={handleWeatherbutton}
                >
                  {weather ? (
                    <img className="h-7 w-7 mx-auto" src={weatherImg} alt="" />
                  ) : (
                    <img
                      className="h-7 w-7 mx-auto"
                      src={weatherblackImg}
                      alt=""
                    />
                  )}
                  <p
                    className={`${
                      weather
                        ? 'text-xxsm text-black font-bold'
                        : 'text-xxsm text-black'
                    }`}
                  >
                    Weather
                  </p>
                </li>
              </Link>

              <Link to="/community">
                <li
                  className={`${
                    community
                      ? ' cursor-pointer flex flex-col items-center border-b-2 border-black pb-2'
                      : 'cursor-pointer flex flex-col items-center'
                  }`}
                  onClick={handleCommunityButton}
                >
                  {community ? (
                    <img
                      className="h-7 w-7 mx-auto opacity-60"
                      src={communityImg}
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-7 w-7 mx-auto opacity-60"
                      src={communityblackImg}
                      alt=""
                    />
                  )}
                  <p
                    className={`${
                      community
                        ? 'text-xxsm text-black font-bold'
                        : 'text-xxsm text-gray-600'
                    }`}
                  >
                    Community
                  </p>
                </li>
              </Link>
              <Link to="test1">
                <li
                  className={`${
                    chatting
                      ? 'cursor-pointer flex flex-col items-center border-b-2 border-black pb-2'
                      : 'cursor-pointer flex flex-col items-center'
                  }`}
                  onClick={handleChattingButton}
                >
                  {chatting ? (
                    <img
                      className="h-7 w-7 mx-auto opacity-60"
                      src={chattingImg}
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-7 w-7 mx-auto opacity-60"
                      src={chattingblackImg}
                      alt=""
                    />
                  )}
                  <p
                    className={`${
                      chatting
                        ? 'text-xxsm text-black font-bold'
                        : 'text-xxsm text-gray-600'
                    }`}
                  >
                    Chatting
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
