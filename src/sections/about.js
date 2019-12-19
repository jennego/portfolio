import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { useStaticQuery, graphql } from "gatsby"

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
        <Typography variant="h3">About</Typography>
        <Typography variant="body1" component="div">
          <p
            dangerouslySetInnerHTML={{
              __html: `${data.allContentfulSiteInfo.edges[0].node.aboutMe.childMarkdownRemark.html}`,
            }}
          ></p>
        </Typography>
      </Container>
    </section>
  )}

export default About
