import { ProbabilityState, TemapaMaxState, TempaMinState } from 'atoms/atom';
import React from 'react';
import { useRecoilState } from 'recoil';

export default function TodayTemperatureCode() {
  const [tempaMin, setTempaMin] = useRecoilState(TempaMinState);
  const [tempaMax, setTempaMax] = useRecoilState(TemapaMaxState);
  const [probability, setProbability] = useRecoilState(ProbabilityState);

  const data = new Date();
  const time = {
    year: data.getFullYear(),
    month: data.getMonth(),
    date: data.getDate(),
  };
  const hours: number | any =
    data.getHours() < 10 && data.getHours() >= 0
      ? '0' + data.getHours() + '00'
      : data.getHours() + '00';

  const tmpMin = [...tempaMin]
    .map((el: any) => {
      {
        return el.fcstValue;
      }
    })
    .find((a) => a)
    .slice(0, 2);

  const tmpMax = [...tempaMax]
    .map((el: any) => {
      {
        return el.fcstValue;
      }
    })
    .find((a) => a)
    .slice(0, 2);

  const POP = [...probability]
    .map((el: any) => {
      if (el.fcstTime === hours) {
        return el.fcstValue;
      }
    })
    .find((a) => a);

  return (
    <div
      style={{
        width: '100%',
        border: '5px solid #fafbfc',
        borderRadius: '20px',
        boxShadow: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
    >
      <div className="flex">
        <div className="w-14 border-r-2 text-center">
          <span className="font-bold">오늘</span>
          <span className="text-blue-600 font-bold">
            {time.month}.{time.date}
          </span>
        </div>
        <div className="ml-3 mt-3 flex">
          <span className="text-base font-bold">
            최저 : <span className="text-blue-600">{tmpMin}&deg;C</span>
          </span>
          <span className="text-base ml-3 font-bold">
            최고 : <span className="text-red-600">{tmpMax}&deg;C</span>
          </span>
          <span className="text-base ml-3 font-bold">
            강수확률 : <span>{POP}%</span>
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="w-14 border-r-2 text-center">
          <span className="font-bold">내일</span>
          <span className="text-red-600 font-bold">
            {time.month}.{time.date + 1}
          </span>
        </div>
        <div className="ml-3 mt-3 flex">
          <span className="text-base font-bold">
            최저 : <span className="text-blue-600">{tmpMin}&deg;C</span>
          </span>
          <span className="text-base ml-3 font-bold">
            최고 : <span className="text-red-600">{tmpMax}&deg;C</span>
          </span>
          <span className="text-base ml-3 font-bold">
            강수확률 : <span>{POP}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
