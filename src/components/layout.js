import * as React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const styles = {
    container: {
      my: 0,
      mx: 'auto',
      pt: 0,
      px: '1.0875rem',
      pb: '1.45rem',
      maxWidth: 960,
      borderRadius: '32px',
      backgroundColor: 'background.paper',
      margin: 'auto',
    },
    footer: {
      textAlign: 'center',
      maxWidth: 960,
      borderRadius: '32px',
      backgroundColor: 'background.paper',
      margin: 'auto',
      padding: '16px',
      mt: '2rem'
    }
  }

  return (
    <>
      <br/>
      <Header siteTitle={data.site.siteMetadata?.title || `Crit Fumble Gaming`} />
      <Box component="div" sx={styles.container}>
        <main>{children}</main>
      </Box>
      <Box component="footer" sx={styles.footer}>
        <Box compionent="div">
          <a href="https://discord.gg/X93uutXCDd" target="_blank">
            <StaticImage
              src="../images/discord.jpg"
              height={50}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Join the chat on Discord"
            />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.patreon.com/critfumbleweb" target="_blank">
            <StaticImage
              src="../images/patreon.webp"
              height={50}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Become a Patron"
            />
          </a>
        </Box>
        <p>© {new Date().getFullYear()}, Crit Fumble Gaming</p>
      </Box>
      <br />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
