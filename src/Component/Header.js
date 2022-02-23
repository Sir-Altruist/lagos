import React from "react";
import { Box, Container } from "@mui/material";
import Logo from "../images/lagos.png";

const Header = () => {
  return (
    <Box component="div" style={{ backgroundColor: "#151B54" }}>
      <Container style={{ display: "flex" }}>
        <span>
          <img
            src={Logo}
            width="50"
            height="50"
            alt="logo"
            style={{ marginTop: ".5rem" }}
          />
        </span>
        <h3
          style={{
            color: "#ffffff",
            paddingLeft: "1.5rem",
            paddingTop: "1.5rem",
          }}
        >
          Lagos State Government
        </h3>
      </Container>
    </Box>
  );
};

export default Header;
