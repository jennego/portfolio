import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Tooltip from "@material-ui/core/Tooltip"
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
    <div className="insta">
      <GridList cellHeight={150} cols={10}>
        {data.allInstaNode.edges.map(tile => (
          <GridListTile style={{ padding: 0 }}>
            <Tooltip
              title={
                <span style={{ fontSize: "15px" }}> {tile.node.caption} </span>
              }
            >
              <a
                href={"https://instagram.com/p/" + `${tile.node.id}`}
                target="_blank"
              >
                <img
                  src={tile.node.localFile.url}
                  key={tile.node.id}
                  className="insta-pic"
                />
              </a>
            </Tooltip>
          </GridListTile>
        ))}
      </GridList>
      <div style={{ textAlign: "right", color: "darkgrey" }}>
        Instagram @thejennego{" "}
      </div>
    </div>
  )
}

export default Instagram
