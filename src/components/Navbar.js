import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <NavItem />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
