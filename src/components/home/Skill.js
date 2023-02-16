/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
        <ul className="pt-2">
          <li className="pb-1">
            <p className="relative pl-3">
              <span className="font-bold" css={title}>
                前端技能：
              </span>
              HTML、CSS、Javascript、JQuery、React.Js、Scss、Bootstrap、Tailwind
            </p>
          </li>
          <li className="pb-1">
            <p className="relative pl-3">
              <span className="font-bold" css={title}>
                後端技能：
              </span>
              Node.js、PHP、MySQL、Express
            </p>
          </li>
          <li className="pb-1">
            <p className="relative pl-3">
              <span className="font-bold" css={title}>
                版本控制：
              </span>
              Git、GitHub
            </p>
          </li>
          <li className="pb-1">
            <p className="relative pl-3">
              <span className="font-bold" css={title}>
                其他技能：
              </span>
              Figma、npm
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
