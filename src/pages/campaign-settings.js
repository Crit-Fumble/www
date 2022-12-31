import * as React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const styles = {
  wrapper: {
    textAlign: 'center',
  },
  settingWrapper: {
    borderRadius: '32px',
    backgroundColor: 'white',
    margin: 'auto',
    padding: '16px',
    mt: '2rem'
  }
}

const CampaignSettingsPage = () => (
  <Layout>
    <Seo title="Campaign Settings" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Campaign Settings</h1>
      <p>This is a list of the campaign settings used by Crit Fumble.</p>
      <Box component="div" sx={styles.settingWrapper}>
        <a href="https://www.worldanvil.com/w/khalbadia-prime" target="_blank"> 
          <StaticImage 
            src="../images/khalbadia-prime.webp"
            width={600}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Khalbadia Prime"
          />
          <Typography align="center">Khalbadia Prime</Typography>
        </a>
      </Box>
      <Box component="div" sx={styles.settingWrapper}>
        <a href="https://www.worldanvil.com/w/bitu" target="_blank">
          <StaticImage 
            src="../images/bitu.webp"
            width={600}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="The Plane of Bitu"
          />
          <Typography align="center">The Plane of Bitu</Typography>
        </a>
      </Box>
      <Box component="div" sx={styles.settingWrapper}>
        <a href="https://www.worldanvil.com/w/ithlon-sovereignrk" target="_blank">
        <StaticImage 
          src="../images/ithlon.png"
          width={600}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Ithlon"
        />
        <Typography align="center">Ithlon</Typography>
        </a>
      </Box>
      <Box component="div" sx={styles.settingWrapper}>
      <a href="https://www.worldanvil.com/w/toril22" target="_blank">
        <StaticImage 
          src="../images/toril22.webp"
          width={600}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Toril22"
        />
        <Typography align="center">Toril22</Typography>
      </a>
      </Box>
    </Box>
  </Layout>
)

export default CampaignSettingsPage
