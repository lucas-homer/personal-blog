import "typeface-varela-round"
import "typeface-lora"
import { toTheme } from "@theme-ui/typography"
import lincoln from "typography-theme-lincoln"

import merge from "deepmerge"
import defaultTypography from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/typography"

export default merge(defaultTypography, {
  ...toTheme(lincoln),
})
