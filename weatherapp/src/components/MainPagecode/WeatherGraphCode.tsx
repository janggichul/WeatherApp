import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { hourTempaState, precipitationState } from '../../atoms/atom';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
// import HorizontalScroll from 'react-scroll-horizontal';
import { AiFillCloud } from 'react-icons/ai';
import { BsFillCloudDrizzleFill } from 'react-icons/bs';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { BsCloudSleetFill } from 'react-icons/bs';
import cliud from '../../assets/images/cloud.png';

export default function WeatherGraphCode() {
  const [hourTempa, setHourTempa] = useRecoilState(hourTempaState);
  const [precipitation, setPrecipitation] = useRecoilState(precipitationState);

  const ptyForm = [...precipitation].map((el: any) => el.fcstValue);

  const PTYForm = ptyForm.map((el) => {
    if (el === '0') {
      return '맑음';
    } else if (el === '1') {
      return '비';
    } else if (el === '2') {
      return '비 또는 눈';
    } else if (el === '3') {
      return '눈';
    }
  });

  const test = PTYForm.map((el) => {
    if (el === '맑음') {
      // eslint-disable-next-line react/jsx-key
      return <AiFillCloud size={'40px'} color={'white'} />;
    } else if (el === '비') {
      // eslint-disable-next-line react/jsx-key
      return <BsFillCloudDrizzleFill size={'40px'} color={'white'} />;
    } else if (el === '비 또는 눈') {
      // eslint-disable-next-line react/jsx-key
      return <BsCloudSleetFill size={'40px'} color={'white'} />;
    } else if (el === '눈') {
      // eslint-disable-next-line react/jsx-key
      return <BsFillCloudSnowFill size={'40px'} color={'white'} />;
    }
  });

  const data2 = PTYForm.map((el) => ({ name: el }));

  const PTY = [...data2].map((el: any) => {
    return el;
  });

  const data = [...hourTempa]
    .map((el: any) => ({
      name: el.fcstTime.substring(0, 2) + '시',
      temp: el.fcstValue,
      pty: [...PTY],
    }))
    .splice(1);
  return (
    <>
      <div
        style={{
          width: '100%',
          border: '5px solid #fafbfc',
          borderRadius: '20px',
          boxShadow: '10px',
        }}
      >
        <GraphSpan>
          <ResponsiveContainer width={1500} height={40}>
            <LineChart data={data} margin={{ top: 10, left: 30, right: 30 }}>
              <XAxis
                interval="preserveStartEnd"
                minTickGap={5}
                dataKey="name"
                tickLine={false}
                axisLine={false}
                stroke="black"
                fontSize="15px"
                fontWeight={'bold'}
              />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width={1500} height={80}>
            <LineChart
              data={data}
              margin={{ top: 20, bottom: 10, left: -30, right: 30 }}
            >
              <XAxis
                interval="preserveStartEnd"
                minTickGap={5}
                dataKey="temp"
                tickLine={false}
                axisLine={false}
                stroke="gray"
                fontWeight={'bold'}
                fontSize="13px"
                unit="°C"
              />
              <YAxis axisLine={false} tick={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                }}
                cursor={{ stroke: '#FEE500', strokeWidth: 4 }}
                filterNull={false}
              />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="darkgray"
                strokeWidth={3}
                unit="°C"
                name="온도"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GraphSpan>
      </div>
    </>
  );
}

const GraphSpan = styled.div`
  overflow: auto;
  white-space: nowrap;
`;
