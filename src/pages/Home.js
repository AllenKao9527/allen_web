import React, { useState } from 'react';
import Profile from '../components/home/Profile';
import Project from '../components/home/Project';
import Skill from '../components/home/Skill';
import {
  AiOutlineProfile,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai';

export default function Home() {
  const [tabNow, setTabNow] = useState(0);

  const tabs = [
    { id: 1, name: '個人簡介', icon: <AiOutlineProfile /> },
    { id: 2, name: '專業技能', icon: <AiOutlineBulb /> },
    { id: 3, name: '參與專案', icon: <AiOutlineFundProjectionScreen /> },
  ];

  const tabPages = [<Profile />, <Skill />, <Project />];

  return (
    <>
      <div className="border-b border-lightGray mb-6">
        <ul className="flex gap-5 max-w-main mx-auto py-3 px-3">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                setTabNow(tab.id - 1);
              }}
            >
              {tab.icon} {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-main mx-auto">{tabPages[tabNow]}</div>
    </>
  );
}
