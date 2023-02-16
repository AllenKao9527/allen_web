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
            <li>勇於挑戰，培養自主解決問題的能力，也善於團隊溝通與協作。</li>
            <li>持續學習，精進自己，樂於分享並幫助團隊一起成長</li>
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
          <div className="pl-5 pt-1">
            <p className="pb-1">
              　　大學時就讀資訊管理學系，也因此在學期間就有接觸過程式。畢業後選擇協助家中事業，然而，在對自身未來職涯發展思考過後，決定往前端工程師發展，故而參加資策會的前端工程師培訓班，穩固自己的基礎以外，也能更好的掌握日新月異的前端技術。
            </p>
            <p className="pb-1">
              　　期中專題的部分，是利用 PHP 搭配 Mysql
              製作網站後台，小組中我所負責的部分為訂單管理，可以對訂單進行排序、篩選、修改、刪除。而期末專題則是為期近一個月的電商網站製作，算是驗收了近5個月以來的學習成果。
            </p>
            <p className="pb-1">
              　　專題實作的過程中，遇到了許多問題與挫折，過程雖然說不上順利，但最終還是順利將問題解決了。這也讓我再次意識到，技術的學習是沒有終點的，能夠持續面對並嘗試去解決問題才是一個工程師所應具備的基本素養。也希望未來的自己能夠勇於面對未知的挑戰，成為前端的佼佼者。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
