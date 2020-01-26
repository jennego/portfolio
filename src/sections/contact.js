import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import SocialMedia from "./social-media"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSiteInfoContactInfoTextNode {
        edges {
          node {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)
  return (
    <section id="contact">
      <Container>
        <Typography variant="h3">Contact</Typography>
        <Typography variant="body1" component="div">
          {console.log(data)}
          <div
            dangerouslySetInnerHTML={{
              __html: `${data.allContentfulSiteInfoContactInfoTextNode.edges[0].node.childMarkdownRemark.html}`,
            }}
          ></div>
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <form
            id="contact-form"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* You still need to add the hidden input with the form name to your JSX form */}
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              color={"skyblue"}
              fullWidth={true}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              color={"skyblue"}
              fullWidth={true}
            />
            <TextField
              name="message"
              id="standard-multiline-static"
              label="Message"
              multiline
              rows="4"
              placeholder="Placeholder"
              variant="outlined"
              fullWidth={true}
              color={"skyblue"}
            />
            <Button
              style={{ alignSelf: "center" }}
              variant="contained"
              className="form-button"
              color="primary"
              type="submit"
              form="contact-form"
              value="Submit"
            >
              Send Message
            </Button>
          </form>
        </div>
        <SocialMedia></SocialMedia>
      </Container>
    </section>
  )
}

export default Contact
