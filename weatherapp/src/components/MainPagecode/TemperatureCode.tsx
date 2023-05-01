import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dfs_xy_conv from './GridTransformation';
import { AiFillCloud } from 'react-icons/ai';
import { BsFillCloudDrizzleFill } from 'react-icons/bs';
import { BsFillCloudSnowFill } from 'react-icons/bs';
import { BsCloudSleetFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import {
  CurrentXState,
  CurrentYState,
  GridXState,
  GridYState,
  ProbabilityState,
  TemapaMaxState,
  TempaMinState,
  hourTempaState,
  precipitationState,
} from '../../atoms/atom';

interface MapSearchProps {
  latitude?: number | any;
  longitude?: number | any;
  gridX?: number | any;
  gridY?: number | any;
}

const remote = axios.create();

export default function TemperatureCode(props: MapSearchProps) {
  const [hourTempa, setHourTempa] = useRecoilState(hourTempaState);
  const [precipitation, setPrecipitation] = useRecoilState(precipitationState);
  const [gridX, setGridX] = useRecoilState<number | any>(GridXState);
  const [gridY, setGridY] = useRecoilState<number | any>(GridYState);
  const [currentX, setCurrentX] = useRecoilState<number | any>(CurrentXState);
  const [currentY, setCurrentY] = useRecoilState<number | any>(CurrentYState);
  const [tempaMin, setTempaMin] = useRecoilState(TempaMinState);
  const [tempaMax, setTempaMax] = useRecoilState(TemapaMaxState);
  const [probability, setProbability] = useRecoilState(ProbabilityState);

  // 기상청 api URL 베이스타임 시간 계산
  const baseTime = [200, 500, 800, 1100, 1400, 1700, 2000, 2300];
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const date = ('0' + now.getDate()).slice(-2);
  const hours: number | any =
    now.getHours() < 10 && now.getHours() >= 0
      ? '0' + now.getHours() + '00'
      : now.getHours() + '00';
  // solution = baseTime과 가장 가까운 시간;
  const closeHours: number | any =
    now.getHours() < 10 && now.getHours() >= 0
      ? '0' +
        baseTime
          .filter(
            (a) =>
              Math.abs(a - hours) ===
              Math.min(...baseTime.map((a) => Math.abs(a - hours))),
          )
          .sort((a, b) => a - b)[0]
      : baseTime
          .filter(
            (a) =>
              Math.abs(a - hours) ===
              Math.min(...baseTime.map((a) => Math.abs(a - hours))),
          )
          .sort((a, b) => a - b)[0];

  const solution: string =
    closeHours + 100 > hours ? closeHours - 300 : closeHours;

  const curBaseTime: string = solution < '1000' ? '0' + solution : solution;

  // 금일 날짜 ex) 20230312
  const currentDate = Number(`${year}${month}${date}`);
  // 시간당 온도
  const tmpTime = [...hourTempa]
    .map((el: any) => {
      if (el.fcstTime === hours) {
        return el.fcstValue;
      }
    })
    .find((a) => a);

  // 시간당 강수형태
  const ptyForm = [...precipitation].map((el: any) => {
    if (el.fcstTime === hours) {
      return el.fcstValue;
    }
  });

  // const PTYForm = ["비"];
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

  useEffect(() => {
    // 지역검색 / 현재위치 값 초기화
    const test = currentX != null ? currentX : gridX;
    const test2 = currentY != null ? currentY : gridY;
    // 격자 X Y 값
    const rs = dfs_xy_conv('toXY', test2, test);
    remote
      .get(
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=AUAtxZM0Y3JjyLVDdxQAvOobhLHtdxSd5MBrSFmUOHFrDfjfEl4TlLcbE6atZvQrSSYwiXIZo%2BOnQJP7j3JUGg%3D%3D&numOfRows=310&pageNo=1&dataType=JSON&base_date=${currentDate}&base_time=${solution}&nx=${rs.x}&ny=${rs.y}`,
      )
      .then((responseData) => {
        const result = responseData.data.response.body.items.item;
        const POP = result.filter((el: any) => el.category === 'POP');
        const TMN = result.filter((el: any) => el.category === 'TMN');
        const TMX = result.filter((el: any) => el.category === 'TMX');
        const TMP = result.filter((el: any) => el.category === 'TMP');
        const PTY = result.filter((el: any) => el.category === 'PTY');
        const WSD = result.filter((el: any) => el.category === 'WSD');
        console.log(WSD);
        setHourTempa(TMP);
        setPrecipitation(PTY);
        setTempaMin(TMN);
        setTempaMax(TMX);
        setProbability(POP);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [gridX, currentX]);

  return (
    <div
      className="absolute bg-white rounded-2xl top-60"
      style={{ left: '53%' }}
    >
      <div className="my-2 mx-2">
        <div className="flex flex-row space-x-4 items-center ml-2">
          <div id="icon">
            <span>
              {PTYForm.map((el) => {
                if (el === '맑음') {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <AiFillCloud
                      size={'40px'}
                      color={'white'}
                      style={{
                        backgroundColor: 'skyblue',
                        borderRadius: '10px',
                      }}
                    />
                  );
                } else if (el === '비') {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <BsFillCloudDrizzleFill size={'40px'} color={'white'} />
                  );
                } else if (el === '비 또는 눈') {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <BsCloudSleetFill size={'40px'} color={'white'} />
                  );
                } else if (el === '눈') {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <BsFillCloudSnowFill size={'40px'} color={'white'} />
                  );
                }
              }).find((a) => a)}{' '}
            </span>
          </div>
          <div id="temp">
            {tmpTime ? <h4 className="text-3xl">{tmpTime}&deg;C</h4> : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
