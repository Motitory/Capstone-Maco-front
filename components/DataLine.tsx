import React from 'react';
import { DummyProps } from '@/pages/control';

export default function DataLine(dummyList: DummyProps) {
  Object.values(dummyList).map((v, idx) => {
    console.log(v.idx);
  });
  return (
    <div>
      {Object.values(dummyList).map((v, idx) => {
        <div>
          <div className="w-1/5">라인가동상태</div>
          <div className="w-1/5 border-l-4">인덱스</div>
          <div className="w-1/5 border-l-4">설정 시간</div>
          <div className="w-1/5 border-l-4">날짜</div>
          <div className="w-1/5 border-l-4">시작 시간</div>
        </div>;
      })}
    </div>
  );
}
