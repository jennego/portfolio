import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSiteInfo {
        edges {
          node {
            mainSlideshow {
              title
              id
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const photos = data.allContentfulSiteInfo.edges[0].node.mainSlideshow

  return (
    <div
      className="main-slider"
      style={{ display: "block", margin: "1em", height: "100vh" }}
    >
      {console.log(photos)}
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        fillParent={true}
        className="slideshow"
      >
        {photos.map(image => (
          <div key={image.id} data-src={image.file.url}>
            {" "}
          </div>
        ))}
      </AutoplaySlider>
      <div className="slideshow-overlay">
        <div className="site-title">
          <Container>
            <h1 className="site-heading">Jennifer Chow</h1>
            <h2 className="subheading">Web Developer</h2>
          </Container>
        </div>
      </div>
      <a href="/#portfolio">
        <div className="scroll-down">
          <i className="fas fa-chevron-circle-down fa-3x"></i>
        </div>
      </a>
    </div>
  )
}

export default Slider
