import {
  CurrentXState,
  CurrentYState,
  GridXState,
  GridYState,
  ImageState,
  NicknameState,
} from 'atoms/atom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Temperature from 'page/main/Temperature';
import SessonBg from 'page/main/SeasonBg';

export default function MainPagecode() {
  const [latitude, setLatitude] = useState<number | any>();
  const [longitude, setLongitude] = useState<number | any>();
  const [gridX, setGridX] = useRecoilState<number | any>(GridXState);
  const [gridY, setGridY] = useRecoilState<number | any>(GridYState);
  const [currentX, setCurrentX] = useRecoilState<number | any>(CurrentXState);
  const [currentY, setCurrentY] = useRecoilState<number | any>(CurrentYState);
  const [nick, setNick] = useRecoilState<string | any>(NicknameState);
  const [image, setImage] = useRecoilState(ImageState);

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  });

  return (
    <div className="flex items-center justify-center bg-gray-200 antialiased">
      <div
        className="flex flex-col shadow-xl bg-white overflow-scroll"
        style={{ width: '411px' }}
      >
        <div className="flex flex-col ">
          <div className="my-auto mx-2 mt-5">
            <Temperature />
            <SessonBg />
          </div>
        </div>
      </div>
    </div>
  );
}
