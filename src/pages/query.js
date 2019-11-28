import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export default () => {
  const data = useStaticQuery(graphql`
     {
      allContentfulSiteInfo {
        edges {
          node {
            title
          }
        }
      }
      allContentfulPortfolio {
        nodes {
          shortDescription
          name
        }
      }
    }`
  )

  const {title, name, shortDescription} = data

  return (
    <div>
      {console.log(data)}
      {console.log(data.allContentfulSiteInfo.edges[0].node.title)}
    </div>
  )
}


