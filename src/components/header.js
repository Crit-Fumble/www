import PropTypes from "prop-types";
import { Box, List, ListItem } from "@mui/material";
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
    display: 'block',
    padding: '1em',
    maxWidth: 960,
    borderRadius: '32px',
    backgroundColor: 'background.paper',
    margin: '1.5rem auto',
    padding: '8px',
  },
  navItem: {
    display: 'inline',
    textAlign: 'center',
  },
  link: {
    textTransform: 'uppercase',
    width: '100px',
    height: '100px',
    color: 'text.primary',
    textDecoration: 'none',
    whiteSpace: 'pre',
  },
}

const Header = ({ siteTitle }) => (
  <Box component="header" sx={styles.header}>
    <StaticImage
      src="../images/cf-logo.png"
      width={160}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Crit Fumble Gaming"
    />
    <List sx={styles.navBar}>
      <ListItem sx={styles.navItem}>
        <Link to="/" sx={styles.link}>Home</Link>
      </ListItem>
      <ListItem sx={styles.navItem}>
        <Link to="/campaigns/" sx={styles.link}>Campaigns</Link>
      </ListItem>
      <ListItem sx={styles.navItem}>
        <Link to="/settings/" sx={styles.link}>Settings</Link>
      </ListItem>
      <ListItem sx={styles.navItem}>
        <Link to="/storytellers/" sx={styles.link}>Storytellers</Link>
      </ListItem>
      <ListItem sx={styles.navItem}>
        <Link to="/creators/" sx={styles.link}>Creators</Link>
      </ListItem>
      <ListItem sx={styles.navItem}>
        <Link to="/contact/" sx={styles.link}>Contact</Link>
      </ListItem>
    </List>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
