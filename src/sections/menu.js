import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuItem from '@material-ui/core/MenuItem'
import Scrollspy from 'react-scrollspy'
import { Link } from 'gatsby'

const Nav = () => {

return (
  <AppBar position="fixed" style={{ background: "rgba(42, 8, 97,0.8)" }}>
    <Toolbar variant="dense" className="menu-surface">
      <Typography variant="body1">
        <div>
          <Scrollspy
            className="horiz-menu"
            items={["intro", "portfolio", "about", "contact"]}
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
            <MenuItem>
              <Link to="#contact"> Contact </Link>
            </MenuItem>
          </Scrollspy>
        </div>
      </Typography>
    </Toolbar>
  </AppBar>
)}

export default Nav
