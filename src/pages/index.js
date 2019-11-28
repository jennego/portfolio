import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Portfolio from "../sections/portfolio"
import Slider from "../sections/slider"
import '../components/layout.css'
import Intro from "../sections/intro"
import Query from './query'



const IndexPage = () => {


  return(
    <Layout>
      <Query></Query>
      <SEO title="Home" />
      <Slider></Slider>
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
  }



export default IndexPage
