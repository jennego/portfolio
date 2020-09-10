import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { useStaticQuery, graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSiteInfo {
        edges {
          node {
            aboutMe {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="about">
      <Container>
        <Fade left>
          <Typography variant="h3">About</Typography>
        </Fade>
        <Typography variant="body1" component="div">
          <Fade cascade>
            <div
              dangerouslySetInnerHTML={{
                __html: `${data.allContentfulSiteInfo.edges[0].node.aboutMe.childMarkdownRemark.html}`,
              }}
            ></div>
          </Fade>
        </Typography>
      </Container>
    </section>
  )
}

export default About
