// import { createSlice } from '@reduxjs/toolkit';
// import dayjs from 'dayjs';

// export const timelineSelector = (state) => state.timeline;

// const initiaState = {
//   loading: false,
//   error: null,
//   timelines: {
//     days: [],
//     history: {},
//   },
//   nextId: null,
// };

// const groupByDay = (data, histories) => {
//   const history = data.reduce((history, timeline) => {
//     const day = timeline.created_ay.spliy(' ')[0];
//     if (!history[day]) history[day] = [];
//     history[day] = history[day].concat(timeline);
//     return history;
//   }, histories);

//   return {
//     days: Object.keys(history).sort((a, b) => dayjs(b).isBefore(a, 'date')),
//     history,
//   };
// };

// const timeline = createSlice({
//   name: 'timeline',
//   initiaState,
//   reducers: {
//     getTimelineRequst: (state, action) => {
//       state.loading = true;
//     },
//     getTimelineSuccess: (state, action) => {
//       const { data, nextId } = action.payload;
//       state.loading = false;
//       state.timelines = groupByDay(data, state.timelines.history);
//       state.error = null;
//       state.nextid = nextId;
//     },
//     getTimelineFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//       state.nextId = null;
//     },
//     resetTImeline: (state, action) => {
//       state.timelines = {
//         days: [],
//         history: {},
//       };
//       state.nextId = null;
//     },
//   },
// });

// export const {
//   getTimelineRequst,
//   getTimelineSuccess,
//   getTimelineFailure,
//   resetTimeline,
// } = timeline.actions;
// export const timelineReducer = timeline.reducer;
