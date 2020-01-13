import React from "react"
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container"
import { useStaticQuery, graphql } from "gatsby"


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
    <section id="intro">
      <div style={{ padding: "13px 15px", marginTop: "5em" }}>
        <Container>
          <Typography variant="body1" component="div">
            <div style={{textAlign:'center'}}
              dangerouslySetInnerHTML={{
                __html: `${data.allContentfulSiteInfo.edges[0].node.intro.childMarkdownRemark.html}`,
              }}
            ></div>
          </Typography>
        </Container>
      </div>
    </section>
  )}

export default Intro
