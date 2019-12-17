import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

const SocialMedia = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div className="social-media">
      <a href="http://github.com/jennego">
        <i class="fab fa-github-square fa-4x"></i>{" "}
      </a>
      <a href="http://instagram.com/thejennego">
        <i class="fab fa-instagram fa-4x"></i>{" "}
      </a>
         
      <a href="http://linkedin/jennego">
        <i class="fab fa-linkedin fa-4x"></i>{" "}
      </a>
    </div>
  </div>
)

export default SocialMedia
