import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuItem from '@material-ui/core/MenuItem'
import Scrollspy from 'react-scrollspy'
import { Link } from 'gatsby'

const Nav = () => {

return (
  <AppBar position="fixed">
    <Toolbar className="menu-surface">
      <Typography variant="body1">
        <div>
          <Scrollspy
            className="horiz-menu"
            items={["intro", "portfolio", "about"]}
            currentClassName="is-current"
          >
            <MenuItem>
              <Link to="#intro" path="/intro">
                Intro
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="#portfolio" path="/portfolio">
                Portfolio
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="#about"> About </Link>
            </MenuItem>
            <MenuItem>Home</MenuItem>
          </Scrollspy>
        </div>
      </Typography>
    </Toolbar>
  </AppBar>
)}

export default Nav
