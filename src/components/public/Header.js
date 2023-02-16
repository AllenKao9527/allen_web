import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="font-bold flex bg-mainClr text-white">
      <div className="py-3 px-8 flex items-center">
        <Link to="/" className="px-2 py-0.5">
          ALLEN
        </Link>
      </div>
      <ul className="flex items-center gap-5">
        <li className="hover:text-subContent">
          <Link to="/">About Me</Link>
        </li>
        <li className="hover:text-subContent">
          <Link to="/todolist">Todolist</Link>
        </li>
        <li className="hover:text-subContent">
          <Link to="/timer">Timer</Link>
        </li>
      </ul>
    </div>
  );
}
