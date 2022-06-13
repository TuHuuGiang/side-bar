import { Routes, Route } from "react-router-dom";

import Content from "../components/Content";
import SideBar from "../components/SideBar";

import "./style.scss";

export default function Layouts() {
  return (
    <>
      <div className="container">
          <SideBar />
          <Content />
      </div>
    </>
  );
}
