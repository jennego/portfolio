import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { useStaticQuery, graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"

const Intro = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSiteInfo {
        edges {
          node {
            intro {
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
    <section id="intro" style={{ paddingTop: "0" }}>
      <Fade>
        <Container>
          <Typography variant="body1" component="div">
            <div
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: `${data.allContentfulSiteInfo.edges[0].node.intro.childMarkdownRemark.html}`,
              }}
            ></div>
          </Typography>
        </Container>
      </Fade>
    </section>
  )
}

export default Intro
