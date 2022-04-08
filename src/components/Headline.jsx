import { Button } from "@mui/material";
import React from "react";
import SearchMaster from "./SearchMaster";
import FileUploadTwoToneIcon from "@mui/icons-material/FileUploadTwoTone";

const Headline = () => {
  return (
    <div
      style={{
        width: 1440,
        paddingLeft: 40,
        paddingRight: 40,
        margin: "auto",
        height: 48,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Students</h1>
      <SearchMaster />
      <Button
        variant="text"
        startIcon={<FileUploadTwoToneIcon />}
        sx={{
          fontFamily: "Rubik",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: 12,
          lineHeight: "140%",
          color: "#C0C0C0",
        }}
      >
        Export CSV
      </Button>
    </div>
  );
};

export default Headline;
