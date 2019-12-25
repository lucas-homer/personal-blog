import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const whiteBlue = `hsla(191, 74%, 98%, 1)`
const sageBlue = `hsla(191, 74%, 45%, 1)`
const darkBlue = `hsla(191, 74%, 15%, 1)`
const brightBlue = `hsla(191, 74%, 85%, 1)`

const whiteMaroon = `hsla(331, 74%, 90%, 1)`
const maroon = `hsla(331, 74%, 45%, 1)`
const darkMaroon = `hsla(331, 74%, 10%, 1)`
const brightMaroon = `hsla(331, 74%, 65%, 1)`

export default merge(defaultThemeColors, {
  background: whiteBlue,
  text: darkBlue,
  primary: sageBlue,
  highlight: brightBlue,
  modes: {
    dark: {
      background: darkMaroon,
      text: whiteMaroon,
      primary: maroon,
      highlight: brightMaroon,
    },
  },
})
