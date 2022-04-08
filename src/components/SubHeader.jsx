import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

const SubHeader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 40,
        backgroundColor: "#5B5B5B",
        display: "flex",
      }}
    >
      <div style={{ width: 845, margin: "auto" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            textTransform: "uppercase",
            color: "#C0C0C0",
          }}
        >
          <li style={{ display: "flex" }}>
            show all <ArrowDropDownIcon />
          </li>
          <li style={{ display: "flex" }}>
            All grades <ArrowDropDownIcon />
          </li>
          <li style={{ display: "flex" }}>
            All classes <ArrowDropDownIcon />
          </li>
          <li style={{ display: "flex" }}>
            Av.Score <ArrowDropDownIcon />
          </li>
          <li style={{ display: "flex" }}>
            Av.Speed <ArrowDropDownIcon />
          </li>
          <li style={{ display: "flex" }}>
            All Classes <ArrowDropDownIcon />
          </li>
          <li style={{ display: "flex" }}>
            <CloseIcon /> clear all
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
