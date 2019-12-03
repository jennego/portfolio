import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Menu from '@material-ui/core/Menu'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'

const Nav = () => {

return (
  <AppBar position="static">
    <Toolbar className="menu-surface">
      
      
      <Typography variant="body1">
        <div className="horiz-menu">
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Home</MenuItem>
        </div>
      </Typography>
 
    </Toolbar>
  </AppBar>
)}

export default Nav
