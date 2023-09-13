// import { call, put, takeLatest } from 'redux-saga/effects';
// import { createAction } from '@reduxjs/toolkit';
// import { getTimelineData } from 'components/data/data';
// import {
//   getTimelineFailure,
//   getTimelineRequst,
//   getTimelineSuccess,
// } from './slice';

// export const getTimelineAction = createAction('timeline/getTimelineAction');

// export default function getLimiteData(data, start = 0, cnt) {
//   const end = start + cnt;
//   return {
//     data: data.slice(start, end),
//     nextId: data.length < end ? null : end,
//   };
// }

// function* getTimelineFlow(action) {
//   try {
//     yield put(getTimelineRequst());
//     const response = yield call(getTimelineData);

//     const { count, next_id } = action.payload;
//     const limited_result = getLimiteData(response, next_id, count);
//     yield put(getTimelineSuccess(limited_result));
//   } catch (error) {
//     console.log(error);
//     yield put(getTimelineFailure(error));
//   }
// }

// function* timelineWatcher() {
//   yield takeLatest(getTimelineAction, getTimelineFlow);
// }
// export { timelineWatcher };
