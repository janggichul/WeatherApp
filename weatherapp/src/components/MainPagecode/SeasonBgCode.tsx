import styled from 'styled-components';
import snowDay from '../../assets/snowDay.jpeg';
import rainDay from '../../assets/rainDay.jpeg';
import sunnyDay from '../../assets/landscape.jpeg';
import { precipitationState } from '../../atoms/atom';
import { useRecoilState } from 'recoil';
import BounceLoader from 'react-spinners/BounceLoader';
import WeatherGraph from 'page/main/WeatherGraph';
import Todayetmperature from 'page/main/TodayTemperature';

export default function SeasonBgCode() {
  const [precipitation, setPrecipitation] =
    useRecoilState<any>(precipitationState);
  const now = new Date();
  const hours = Number(('0' + now.getHours()).slice(-2) + '00');

  const curPrecipaitation = [...precipitation].map((el) => {
    if (Number(el.fcstTime) === hours) {
      return el.fcstValue;
    }
  });

  // 현재 기상에 맞는 배경이미지 전시
  const currentWeather = curPrecipaitation.filter((el) => el).find((a) => a);
  // const currentWeather = 1

  let backgroundImg = '';
  const winter = currentWeather == '3';
  const rain = currentWeather == '1';
  const sunny = currentWeather == '0';

  if (winter) {
    backgroundImg = snowDay;
  } else if (rain) {
    backgroundImg = rainDay;
  } else if (sunny) {
    backgroundImg = sunnyDay;
  }
  if (backgroundImg) {
    return (
      <>
        <Img src={backgroundImg} />

        <div className="flex flex-row justify-between items-start mt-4 ">
          <WeatherGraph />
        </div>
        <div className="flex flex-row justify-between items-start mt-4 mb-4 ">
          <Todayetmperature />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '0',
            paddingBottom: '100%',
          }}
        >
          <div className="flex justify-center items-center mt-40">
            <span className="flex justify-center items-center text-center rounded-2xl w-80 h-14 bg-green-500 font-bold text-lg text-white">
              지역을 설정 후 날씨확인이 가능합니다.
            </span>
          </div>
          <div className="ml-40 -mt-48">
            <BounceLoader color="rgb(34 197 94)" size="60" />
          </div>
        </div>
        {/* <div
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            width: '40px',
            height: '50px',
            top: '180px',
            right: '620px',
            borderBottom: '1px solid black',
          }}
        ></div> */}
      </>
    );
  }
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
