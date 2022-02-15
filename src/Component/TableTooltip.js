import React from "react";
import { Button, Toolbar, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import PropTypes from "prop-types";

const TableToolbar = ({ click, generatePin }) => {
  return (
    <Toolbar
      className={click ? "toolbar-1" : "toolbar-2"}
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(click > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.success.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {click > 0 && (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {click} selected
        </Typography>
      )}

      {click > 0 && (
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
  click: PropTypes.number.isRequired,
};

export default TableToolbar;
