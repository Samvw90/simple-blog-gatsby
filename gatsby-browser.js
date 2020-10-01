/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import React from "react"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
