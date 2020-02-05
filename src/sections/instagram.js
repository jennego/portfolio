import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

const Instagram = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(limit: 10) {
        edges {
          node {
            localFile {
              name
              url
              publicURL
            }
            caption
            id
          }
        }
      }
    }
  `)
  return (
    <div>
      <GridList cellHeight={150} cols={10}>
        {data.allInstaNode.edges.map(tile => (
          <GridListTile>
            <img src={tile.node.localFile.url} />
          </GridListTile>
          // <p>{tile.node.caption} </p>
        ))}
      </GridList>
      <div style={{ textAlign: "right" }}>Instagram @thejennego </div>
    </div>
  )
}

export default Instagram
