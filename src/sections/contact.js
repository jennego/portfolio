import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const Contact = () => (
  <section id="contact">
    <Container>
      <Typography variant="h3">Contact</Typography>
      <form
        id="contact-form"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />>
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
      <Typography>Some sort of form here Social media here</Typography>
    </Container>
  </section>
)

export default Contact
