/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';

export default function Profile() {
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
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">高偉倫 Allen</h1>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <AiOutlinePhone />
              0983-339-598
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineMail />
              rcvr1024@gmail.com
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineGithub />
              <a href="https://github.com/AllenKao9527">AllenKao9527</a>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <h2 className="relative pl-3" css={title}>
            About Me
          </h2>
          <ul className="list-disc list-inside pl-5 pt-1">
            <li>勇於挑戰</li>
            <li>持續學習</li>
          </ul>
        </div>
        <div className="pt-2">
          <h2 className="relative pl-3" css={title}>
            Education
          </h2>
          <div className="pl-5 pt-1 max-w-sub">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">財團法人資訊工業策進會</h4>
              <p>2022/05 ~ 2022/10</p>
            </div>
            <p className="text-sm">前端工程師培訓養成班</p>
          </div>

          <div className="pl-5 pt-1 max-w-sub">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">淡江大學</h4>
              <p>2014/09 ~ 2018/07</p>
            </div>
            <p className="text-sm">資訊管理學系</p>
          </div>
        </div>
        <div className="pt-2">
          <h2 className="relative pl-3" css={title}>
            自傳
          </h2>
        </div>
      </div>
    </div>
  );
}
