import React from "react"
import { useState } from "react"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from '@material-ui/icons/Close';


import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

import { useStaticQuery, graphql } from "gatsby"


const useStyles = makeStyles(theme => ({

}))


const Album = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio {
        edges {
          next {
            name
          }
          node {
            name
            projectDate(formatString: "MMMM DD YYYY")
            shortDescription
            projectUrl
            githubUrl
            longDescription {
              childMarkdownRemark {
                html
              }
            }
            mainPhoto {
              file {
                url
              }
              title
              description
            }
            gallery {
              file {
                url
              }
              description
              title
            }
          }
        }
      }
    }
  `)

const [selectedItem, setSelectedItem] = useState(0)
const [open, setOpen] = React.useState(false)

const handleClickOpen = (current) => {
    setOpen(true)
    setSelectedItem(current)
    console.log(current)
  }

  const handleNext = (current) => {
     setSelectedItem(parseInt(current) + 1)
       console.log(selectedItem)
  }

  const handlePrev = (current) => {
      setSelectedItem(parseInt(current) - 1)
         console.log(selectedItem)
  }
  
  const handleClose = () => {
    setOpen(false)
  }
  const classes = useStyles()

  const items = data.allContentfulPortfolio.edges

   

  return (
    <section id="portfolio">
      <Container className="cardGrid" maxWidth="lg">
        <Typography variant="h3">Portfolio</Typography>
        {items[0].previous}
        {/* End hero unit */}
        {console.log(items)}
        <Grid container spacing={4}>
          {items.map(card => (
            <Grid item key={card.node.id} xs={12} sm={6} md={4}>
              <Card className="card">
                <CardActionArea
                  onClick={() => handleClickOpen(`${items.indexOf(card)}`)}
                >
                  <CardMedia
                    className="cardMedia"
                    alt="image"
                    image={card.node.mainPhoto.file.url}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.node.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {card.node.shortDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {card.node.projectUrl === null ? (
                    ""
                  ) : (
                    <Button size="small" color="primary">
                      <i class="fas fa-globe fa-lg fa-fw"></i>
                      Site
                    </Button>
                  )}
                  {card.node.githubUrl === null ? (
                    ""
                  ) : (
                    <Button size="small" color="primary">
                      <i class="fab fa-github-square fa-lg fa-fw"></i>
                      Github
                    </Button>
                  )}
                </CardActions>
              </Card>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={"md"}
              >
                <IconButton
                  aria-label="close"
                  className="close-button"
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
                <DialogTitle id="alert-dialog-title">
                  {`${items[selectedItem].node.name}`}

                  <div className="item-links">
                    {items[selectedItem].node.projectUrl === null ? (
                      ""
                    ) : (
                      <Button size="small" color="primary">
                        <i class="fas fa-globe fa-2x fa-fw"></i>
                        Site
                      </Button>
                    )}
                    {items[selectedItem].node.githubUrl === null ? (
                      ""
                    ) : (
                      <Button size="small" color="primary">
                        <i class="fab fa-github-square fa-2x fa-fw"></i>
                        Github
                      </Button>
                    )}
                  </div>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="project-date">
                    <div className="date">
                      {items[selectedItem].node.projectDate === null
                        ? "Ongoing Project"
                        : "Completed on " +
                          `${items[selectedItem].node.projectDate}`}
                    </div>
                  </DialogContentText>

                  <DialogContentText id="alert-dialog-description">
                    {items[selectedItem].node.longDescription === null ? (
                      items[selectedItem].node.shortDescription
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${items[selectedItem].node.longDescription.childMarkdownRemark.html}`,
                        }}
                      ></div>
                    )}
                  </DialogContentText>
                  {items[selectedItem].node.gallery === null ? (
                    <AwesomeSlider bullets={false} organicArrows={false}>
                      <div
                        data-src={items[selectedItem].node.mainPhoto.file.url}
                      />
                    </AwesomeSlider>
                  ) : (
                    <AwesomeSlider>
                      {items[selectedItem].node.gallery.map(image => (
                        <div key={image.id} data-src={image.file.url}>
                          {" "}
                        </div>
                      ))}
                    </AwesomeSlider>
                  )}
                </DialogContent>
                <DialogActions>
                  {items[selectedItem].previous === null ? (
                    <Button disabled={true}> Previous Item </Button>
                  ) : (
                    <Button onClick={() => handlePrev(`${selectedItem}`)}>
                      Previous Item
                    </Button>
                  )}

                  <Button
                    onClick={handleClose}
                    className="bottom-close"
                    color="primary"
                  >
                    close
                  </Button>

                  {items[selectedItem].next === null ? (
                    <Button disabled={true}> Next Item </Button>
                  ) : (
                    <Button onClick={() => handleNext(`${selectedItem}`)}>
                      Next Item
                    </Button>
                  )}
                </DialogActions>
              </Dialog>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Album
