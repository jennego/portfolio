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

import { useStaticQuery, graphql } from "gatsby"


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "2px solid gray",

    transform: "perspective(1px) translateZ(0)",
    boxShadow: "0 0 1px rgba(0, 0, 0, 0)",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    "&:hover": {
      transform: "scale(1.1) rotate(4deg)",
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))


const Album = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio {
        edges {
          node {
            childContentfulPortfolioLongDescriptionTextNode {
              longDescription
              childMarkdownRemark {
                html
              }
            }
            name
            id
            shortDescription
            projectDate
            projectUrl
            categories
            mainPhoto {
              file {
                url
              }
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
  
  const handleClose = () => {
    setOpen(false)
  }
  const classes = useStyles()

  const items = data.allContentfulPortfolio.edges

   
   const sayHello = (name) => {
    console.log(`hello, ${name}`)
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h3">Portfolio</Typography>
      {/* End hero unit */}
      {console.log(items)}
      <Grid container spacing={4}>
        {items.map(card => (
          <Grid item key={card.node.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea
                onClick={() => handleClickOpen(`${items.indexOf(card)}`)}
              >
                {items.indexOf(card)}
                <CardMedia
                  className={classes.cardMedia}
                  alt="image"
                  image="https://source.unsplash.com/random"
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
                <Button size="small" color="primary">
                  Site
                </Button>
                <Button size="small" color="primary">
                  Github
                </Button>
                <Button onClick={() => sayHello(`${card.node.name}`)}>
                  Greet
                </Button>
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
              <DialogTitle id="alert-dialog-title">
                {`${items[selectedItem].node.name}`}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {items[selectedItem].node
                    .childContentfulPortfolioLongDescriptionTextNode == null
                    ? items[selectedItem].node.shortDescription
                    : items[selectedItem].node
                        .childContentfulPortfolioLongDescriptionTextNode
                        .longDescription}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Album
