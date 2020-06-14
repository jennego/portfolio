import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import Portfolio from "../sections/portfolio"
import Slider from "../sections/slider"
import Intro from "../sections/intro"
import About from "../sections/about"
import Instagram from "../sections/instagram"
import Nav from "../sections/menu"
import Contact from "../sections/contact"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const dark = createMuiTheme({
  palette: {
    type: "dark", // Switching the dark mode on is a single property value change.
  },
})

const light = createMuiTheme({
  palette: {
    type: "light", // Switching the dark mode on is a single property value change.
  },
})

const fonts = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
    h3: {
      fontFamily: "Amaranth",
    },
    h5: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
    },
  },
})

const IndexPage = () => {
  return (
    <MuiThemeProvider theme={dark} theme={fonts}>
      <Layout>
        <Nav></Nav>
        <SEO title="Home" />
        <Slider></Slider>
        <Intro></Intro>
        <MuiThemeProvider theme={light} theme={fonts}>
          <Portfolio></Portfolio>
        </MuiThemeProvider>
        <About></About>
        {/* <Instagram></Instagram> */}
        <Contact></Contact>
      </Layout>
    </MuiThemeProvider>
  )
}

export default IndexPage
