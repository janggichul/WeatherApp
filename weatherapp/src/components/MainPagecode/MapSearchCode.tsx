import {
  CurrentXState,
  CurrentYState,
  GridXState,
  GridYState,
  isLoginState,
} from 'atoms/atom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import { useRecoilState } from 'recoil';
import locationImg from '../../assets/location_current_icon_211947.svg';

interface MapSearchProps {
  latitude?: number;
  longitude?: number;
}

export default function MapSearchCode(props: MapSearchProps) {
  const [locationObj, setLocationObj] = useState<any>(
    localStorage.getItem('location'),
  );
  const [fullAddress, setFullAddress] = useState<string>();
  const [gridX, setGridX] = useRecoilState(GridXState);
  const [gridY, setGridY] = useRecoilState(GridYState);
  const [currentX, setCurrentX] = useRecoilState(CurrentXState);
  const [currentY, setCurrentY] = useRecoilState(CurrentYState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  // 현재위치 설정 버튼 로직
  const API = process.env.REACT_APP_kakaoApikey;

  const handleLocationButton = async () => {
    try {
      const res = await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${props.longitude}&y=${props.latitude}`,
          {
            headers: {
              Authorization: `KakaoAK ${API}`,
            },
          },
        )
        .then((res) => {
          const location = res.data.documents[0];
          localStorage.setItem('location', location.address.address_name);
          setLocationObj(location.address.address_name);
        });
      setFullAddress('');
    } catch (error) {
      console.log(error);
    }
    setIsLogin(false);
  };
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  // 지역 검색 로직
  const handleComplete = (data: any) => {
    let fullAddress = data.jibunAddress;
    let extraAddress = '';
    if (data.addressType === 'J') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    //fullAddress -> 전체 주소반환
    setFullAddress(fullAddress);
    setLocationObj('');
  };

  // localstorage 현재위치 저장
  const location = localStorage.getItem('location');
  const locationText = location ? location : '지역을 설정해주세요.';

  // 지역검색 다음 모달창 open
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  useEffect(() => {
    const remote = axios.create();
    // 지역검색 주소 값 => 위도 경도 변환
    remote
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query="${fullAddress}"`,
        {
          headers: {
            Authorization: `KakaoAK ${API}`,
          },
        },
      )
      .then((responseData) => {
        const gridx = responseData.data.documents[0].x;
        const gridy = responseData.data.documents[0].y;
        setGridX(gridx);
        setGridY(gridy);
        setCurrentX(null);
        setCurrentY(null);
      })
      .catch((error) => {
        console.log(error);
      });

    // 현재위치 주소 값 => 위도 경도 변환
    remote
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query="${locationObj}"`,
        {
          headers: {
            Authorization: `KakaoAK ${API}`,
          },
        },
      )
      .then((responseData) => {
        const currentX = responseData.data.documents[0].x;
        const currentY = responseData.data.documents[0].y;
        setCurrentX(currentX);
        setCurrentY(currentY);
        setGridX(null);
        setGridY(null);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <div className="bg-white rounded-full p-1 shadow-md border-gray-200 border items-center justify-between flex flex-row mx-5 mt-5">
        <button
          className="p-2 rounded-full text-black "
          type="button"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <section>{fullAddress ? fullAddress : locationText}</section>
        <button
          className="p-2 text-black rounded-full border border-gray-200"
          type="button"
          onClick={handleLocationButton}
        >
          <img src={locationImg} alt="" style={{ width: '15px' }} />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 7h-9"></path>
            <path d="M14 17H5"></path>
            <circle cx="17" cy="17" r="3"></circle>
            <circle cx="7" cy="7" r="3"></circle>
          </svg> */}
        </button>
      </div>
    </>
  );
}
