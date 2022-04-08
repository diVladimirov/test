import React from "react";
import { Avatar } from "@mui/material";
import icon from "../assets/user_icon.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div style={{ width: "100%", height: 60, display: "flex" }}>
      <div
        style={{
          width: 1440,
          paddingLeft: 40,
          paddingRight: 40,
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textTransform: "uppercase",
            alignItems: "center",
          }}
        >
          <p>School 1</p>
          <ul
            style={{
              width: 640,
              display: "flex",
              justifyContent: "space-between",
              textTransform: "uppercase",
            }}
          >
            <li>Analytics</li>
            <li>Gradebooks</li>
            <li>Tests</li>
            <li>Students</li>
            <li>Teachers</li>
            <li>archive</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar alt="user icon" src={icon} />
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
