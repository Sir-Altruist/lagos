import React from "react";
import { Button, Toolbar, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import PropTypes from "prop-types";

const TableToolbar = ({ numSelected, generatePin }) => {
  return (
    <Toolbar
      style={{ marginTop: "3rem" }}
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.success.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 && (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      )}

      {numSelected > 0 && (
        <div style={{ marginRight: "3rem" }}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{ textTransform: "inherit", width: "8rem" }}
            onClick={generatePin}
          >
            Generate Pin
          </Button>
        </div>
      )}
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default TableToolbar;
