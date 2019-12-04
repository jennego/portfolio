import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../sections/portfolio"
import Slider from "../sections/slider"
import '../components/layout.css'
import Intro from "../sections/intro"
import About from "../sections/about"
import Nav from "../sections/menu"


const IndexPage = () => {

  return(
    <Layout>
      <Nav></Nav>
      <SEO title="Home" />
      <Slider></Slider>
      <Intro></Intro>
      <Portfolio></Portfolio>
      <About></About>
      <Link to="/page-2/">Go to page 2</Link>
      <section id="contact"></section>
    </Layout>
  )
  }



export default IndexPage
