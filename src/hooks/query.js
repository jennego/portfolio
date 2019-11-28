import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}



// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
//  const useData = () => {
//   const {data} = useStaticQuery(graphql`
//     {
//       allContentfulSiteInfo {
//         edges {
//           node {
//             title
//           }
//         }
//       }
//       allContentfulPortfolio {
//         nodes {
//           shortDescription
//           name
//         }
//       }
//     }`
//   )
// return console.log(data.allContentfulSiteInfo)
//   }

//   export default useData

