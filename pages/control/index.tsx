import Header from '@/components/common/Header';
import DataLine from '@/components/DataLine';
// import { Fragment } from 'react';
import Image from 'next/image';
import profileImage from '/public/login.png';

export interface DummyProps {
  active: boolean;
  idx: number;
  setTime: number;
  day: string;
  startTime: string;
}

const dummyList = [
  {
    active: true,
    idx: '1',
    setTime: '45',
    day: '2023-02-02',
    startTime: '16:03:25',
  },
  {
    active: true,
    idx: '2',
    setTime: '45',
    day: '2023-01-03',
    startTime: '16:03:25',
  },
  {
    active: false,
    idx: '3',
    setTime: '45',
    day: '2023-02-02',
    startTime: '16:03:25',
  },
  {
    active: true,
    idx: '4',
    setTime: '45',
    day: '2023-02-02',
    startTime: '16:03:25',
  },
  {
    active: true,
    idx: '5',
    setTime: '45',
    day: '2023-02-02',
    startTime: '16:03:25',
  },
  {
    active: false,
    idx: '6',
    setTime: '20',
    day: '2023-02-02',
    startTime: '16:03:25',
  },
];

export default function Control() {
  return (
    <div>
      <Header></Header>
      <div className="mx-auto mt-12 h-[700px] w-1/2 bg-blue-500">
        <div className="flex flex-row border-b-4">
          <DataLine {...dummyList} />
        </div>
      </div>
    </div>
  );
}
