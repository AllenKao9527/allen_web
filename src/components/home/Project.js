import React from 'react';

export default function Project() {
  return (
    <div className="border border-lightGray rounded pt-3">
      <div className="max-w-sub mx-auto pb-3">
        <div className="text-2xl font-bold pb-2">專案 Side Projects</div>
        <div className="border border-lightGray rounded pt-2 pl-5">
          <div>
            <h2 className="text-xl font-bold">LIFE - 電子商務網站</h2>
            <div className="flex gap-3">
              <figure className="max-w-todo pt-2">
                <img src="/img/proj.jpg" alt="" />
              </figure>
              <div>
                <div>
                  <span className="font-bold">專案簡介：</span>
                  <p className="pl-3">
                    生活家電的電商網站，前台提供使用者購物、分享食譜、參加活動、購物車結帳、會員中心，後台具商品、活動管理及前後台客服聊天室。
                  </p>
                </div>
                <ul className="pt-2 list-disc list-inside">
                  <span className="font-bold">使用技術：</span>
                  <li className="pl-3">前端技術：React / Sass / Bootstrap</li>
                  <li className="pl-3">後段技術：Node.js / MySQL / Express</li>
                  <li className="pl-3">前後端串接：RESTful API</li>
                  <li className="pl-3">其他：Git / GitHub / npm</li>
                </ul>
                <ul className="pt-2 list-decimal list-inside">
                  <span className="font-bold">負責功能：</span>
                  <li className="pl-3">購物車及結帳流程</li>
                  <li className="pl-3">LinePay 金流串接</li>
                  <li className="pl-3">RWD 切版設計</li>
                  <li className="pl-3">
                    後端 Restful API 架構設計、Mysql 資料庫設計
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
