import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

const SocialMedia = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div className="social-media">
      <a href="https://github.com/jennego">
        <i className="fab fa-github-square fa-4x"></i>
      </a>
      <a href="https://www.linkedin.com/in/jennego/?">
        <i className="fab fa-linkedin fa-4x"></i>
      </a>
      <a href="https://www.instagram.com/thejennego/">
        <i className="fab fa-instagram fa-4x"></i>
      </a>
    </div>
  </div>
)

export default SocialMedia
