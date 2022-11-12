import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="font-bold flex bg-mainClr">
      <div className="py-3 px-8 flex items-center">
        <Link to="/" className="px-2 py-0.5">
          舒適小圈圈
        </Link>
      </div>
      <ul className="flex items-center gap-3">
        <li className="">
          <Link to="/" className="">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/accounting" className="">
            Accounting
          </Link>
        </li>
        <li>
          <Link to="/todolist" className="">
            Todolist
          </Link>
        </li>
      </ul>
    </div>
  );
}
