/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      type="text/javascript"
      src="https://kit.fontawesome.com/1ee357d2bb.js"
      crossorigin="anonymous"
    />,
  ])
}