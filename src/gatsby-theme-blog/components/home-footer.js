import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
      display: "flex",
      justifyContent: "space-between",
    })}
  >
    <section>© {new Date().getFullYear()} Lucas Homer</section>
    <section>
      {socialLinks.map((platform, i, arr) => (
        <Fragment key={platform.url}>
          <Styled.a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform.name}
          </Styled.a>
          {arr.length - 1 !== i && (
            <Fragment>
              {` `}&bull;{` `}
            </Fragment>
          )}
        </Fragment>
      ))}
    </section>
  </footer>
)
export default Footer
