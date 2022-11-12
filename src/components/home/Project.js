import { css } from '@emotion/react';
import React from 'react';

export default function Project() {
  const title = css`
    &::before {
      content: '';
      width: 5px;
      height: 24px;
      background: #e60012;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  `;
  return (
    <div>
      <div className="border border-lightGray rounded p-6 flex flex-col gap-2 text-mainContent">
        <div className="text-2xl font-bold relative pl-3" css={title}>
          專案 Side Projects
        </div>

        <div>
          <div className="border border-lightGray rounded p-6">
            <h2 className="text-xl font-bold text-mainContent">{}</h2>
            {/* main section */}
            <div className="flex gap-3 mb-2">
              {/* left section : image */}
              <figure className="max-w-sideProject shadow-md">
                <img alt="life" className="object-contain" />
              </figure>
              {/* right sectioin : content / tech / job */}
              <div>
                <p className="mb-1">{}</p>
                <ul className="list-disc list-inside"></ul>
                <h3 className="text-mainContent my-2">負責功能：</h3>
                <ul className="list-decimal list-inside"></ul>
              </div>
            </div>
            {/* link section */}
            <div>
              <span>專案前端 repository ：</span>
              <a className="text-link" target="_blank" rel="noreferrer">
                {}
              </a>
            </div>
            <div>
              <span>專案後端 repository ：</span>
              <a className="text-link" target="_blank" rel="noreferrer">
                {}
              </a>
            </div>
            <div>
              <span>專案 Demo 影片：</span>
              <a className="text-link" target="_blank" rel="noreferrer"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
