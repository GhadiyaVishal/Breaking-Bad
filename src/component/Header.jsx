import React from "react";
import { AppBar, InputBase, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../images/logo.png";
import { Box } from "@mui/system";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const useStyle = makeStyles({
  header: {
    background: "#000",
    padding: 10,
  },
  image: {
    width: 100,
  },
  search: {
    backgroundColor: "rgba(255,255,255,0.15)",
    marginLeft: 100,
    borderRadius: 10,
    position: "relative",
    // color: '#fff'
  },
  inputBox: {
    color: "inherit",
    margin: "0 50px",
  },
  PersonSearchIcon: {
    position: "absolute",
    marginLeft: 10,
    top: 3,
  },
});
const Header = ({ getText }) => {
  //({getText} props)
  const classes = useStyle();
  return (
    <>
      <AppBar
        className={classes.header}
        position="static"
        sx={{ backgroundColor: "black" }}
      >
        <Toolbar>
          <img className={classes.image} src={logo} alt="logo" />

          <Box className={classes.search}>
            <Box className={classes.PersonSearchIcon}>
              <PersonSearchIcon />
            </Box>
            <InputBase
              placeholder="Search by name"
              autoFocus
              classes={{ root: classes.inputBox }}
              onChange={e => getText(e.target.value)}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
