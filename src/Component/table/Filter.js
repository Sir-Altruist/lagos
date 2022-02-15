import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const Filter = ({ filter, setFilter }) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonSearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setFilter(e.target.value)}
        value={filter || ""}
      />
    </div>
  );
};

export default Filter;
