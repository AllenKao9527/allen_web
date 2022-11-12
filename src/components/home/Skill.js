/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

export default function Skill() {
  const title = css`
    &::before {
      content: '';
      width: 5px;
      height: 20px;
      background: #c8d5b9;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  `;
  return (
    <div className="border border-lightGray rounded pt-3">
      <div className="max-w-sub mx-auto">
        <div className="text-2xl font-bold">專業技能 Skills</div>
        <ul>
          <li>
            <span className="font-bold relative pl-3" css={title}>
              前端技能：HTML、CSS、Javascript、JQuery、React.Js、Scss、Bootstrap、tailwind
            </span>
          </li>
          <li>
            <span className="font-bold relative pl-3" css={title}>
              後端技能：Node.js、PHP、MySQL、Express
            </span>
          </li>
          <li>
            <span className="font-bold relative pl-3" css={title}>
              版本控制：Git、GitHub
            </span>
          </li>
          <li>
            <span className="font-bold relative pl-3" css={title}>
              IDE：Visual Studio Code
            </span>
          </li>
          <li>
            <span className="font-bold relative pl-3" css={title}>
              其他技能：Figma、npm
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
