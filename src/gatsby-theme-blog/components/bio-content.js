import React, { Fragment } from "react"
import { Styled } from "theme-ui"

export default () => (
  <Fragment>
    Personal blog for{` `}
    <Styled.a href="http://mobile.twitter.com/lucas_c_homer">
      Lucas Homer
    </Styled.a>
    {` `}
    <br />
    If I can keep my dog alive, can I keep my blog alive?
  </Fragment>
)
