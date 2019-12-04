import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import Typography from "@material-ui/core/typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import "react-awesome-slider/dist/styles.css"


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
      style={{ display: "block", margin: "1em", height: "650px" }}
    >
      {console.log(photos)}
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        fillParent={true}
        className="slideshow"
      >

        {photos.map(image =>
        <div key={image.id} data-src={image.file.url}> </div>
          )}  

      
      </AutoplaySlider>
  
      <div className="title">
        <Typography variant="h3" component="h1">
          Jennifer Chow
        </Typography>
        <Typography variant="h4" component="h2">
          Web Developer
        </Typography>
      </div>
      <div className="scroll-down">
        <a href="#">
          <ExpandMoreIcon fontSize={"large"} />
        </a>
      </div>
    </div>
  )
}

export default Slider
