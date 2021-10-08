import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.wallpaperup.com/uploads/wallpapers/2016/09/03/1014964/63b86661345e13b430af6acc1442634f-700.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sunil Shah</h2>
        <h4>sunilshah2416@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">743</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent </p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
