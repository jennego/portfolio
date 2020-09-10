import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { Fade } from "react-awesome-reveal"

const Logo = () => {
  return (
    <section
      id="logo"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0",
        paddingTop: "20px",
      }}
    >
      <div>
        <h1 className="site-heading">Jennifer Chow</h1>
        <h2 className="subheading">Web Developer</h2>
      </div>
    </section>
  )
}

export default Logo
