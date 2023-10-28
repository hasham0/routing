import React from "react";
import { Link } from "react-router-dom";
export default function NavItem() {
  return (
    <div className="border-2 border-black capitalize">
      <ul className="flex justify-around text-2xl">
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/signup"}>SignUp</Link>
        </li>
      </ul>
    </div>
  );
}
