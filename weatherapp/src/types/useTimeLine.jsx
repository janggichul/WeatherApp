import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTimelineAction,
  resetTimeline,
  timelineSelector,
} from '../components/features';

export default function useTimeLine() {
  const { loading, timeLines, nextId } = useSelector(timelineSelector);

  const dispatch = useDispatch();

  const getTimeline = useCallback(() => {
    let params = {
      count: 7,
    };
    if (nextId) {
      params.next_id = nextId;
    }
    dispatch(getTimelineAction(params));
  }, [dispatch, nextId]);

  const onClickMoreButton = useCallback(() => {
    if (!nextId) {
      alert('모든 데이터를 조회했습니다.');
    } else {
      getTimeline();
    }
  }, [nextId, getTimeline]);

  useEffect(() => {
    getTimeline();
  }, []);

  useEffect(
    () => () => {
      dispatch(resetTimeline());
    },
    [dispatch],
  );

  return {
    loading: loading && !timeLines.days.length,
    timeLines,
    onClickMoreButton,
  };
}
