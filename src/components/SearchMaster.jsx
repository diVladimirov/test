import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchMaster = () => {
  return (
    <Paper
      component="form"
      sx={{
        padding: "6px 12px",
        display: "flex",
        alignItems: "center",
        width: 500,
        height: 32,
        backgroundColor: "#F2F2F2",
        borderRadius: 0,
      }}
    >
      <InputBase
        sx={{ flex: 1 }}
        placeholder="Enter Student Name, Parent or ID here"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchMaster;
