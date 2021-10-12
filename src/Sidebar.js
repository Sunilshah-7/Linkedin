import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

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
        <Avatar src={user.user.photoUrl} className="sidebar__avatar">
          {user.user.email[0]}
        </Avatar>
        <h2>{user.user.displayName}</h2>
        <h4>{user.user.email}</h4>
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
