import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function HeaderColumnsGrid() {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <img src="logo.png" alt="sakra logo"  style={{width:"10%"}}/>

        </Typography>
        <Button color="inherit"> Inbound &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Welcome Agent/3447  &nbsp; &nbsp; &nbsp; &nbsp; grassroots</Button>
      </Toolbar>
    </AppBar>
    
  );
}
