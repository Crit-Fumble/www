import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";
import { StaticImage } from "gatsby-plugin-image";

const styles = {
  header: {
    mb: {
      mobile: 2,
      desktop: 4
    },
    textAlign: 'center',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: '1em',
    width: '960px',
    maxWidth: '100%',
    minWidth: '200px',
    borderRadius: '32px',
    backgroundColor: 'background.paper',
    margin: '1.5rem auto',
    padding: '8px',
  },
  navItem: {
    margin: 'auto',
    textAlign: 'center',
    width: 'auto',
  },
  link: {
    textTransform: 'uppercase',
    color: 'text.primary',
    textDecoration: 'none',
    whiteSpace: 'pre',
  },
}

const Header = ({ siteTitle }) => (
  <Box component="header" sx={styles.header}>
    <Link to="/">
      <StaticImage
        src="../images/cf-logo.png"
        width={160}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Crit Fumble Gaming"
      />
    </Link>
    <Box sx={styles.navBar}>
      <Box sx={styles.navItem}>
        <Link to="/about-us/" sx={styles.link}>About Us</Link>
      </Box>
      <Box sx={styles.navItem}>
        <Link to="/settings/" sx={styles.link}>Settings</Link>
      </Box>
      <Box sx={styles.navItem}>
        <Link to="/campaigns/" sx={styles.link}>Campaigns</Link>
      </Box>
      <Box sx={styles.navItem}>
        <Link to="/calendar/" sx={styles.link}>Calendar</Link>
      </Box>
      <Box sx={styles.navItem}>
        <Link to="/contact/" sx={styles.link}>Contact</Link>
      </Box>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
