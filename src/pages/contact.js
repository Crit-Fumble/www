import * as React from "react";
import { Box, Typography } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";
import DataService from "../services/DataService";

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

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Contact</h1>
      <p>To contact us, join our Discord server!</p>
      <iframe src={`https://discord.com/widget?id=${DataService.discordId}&theme=dark`} width="500" height="400" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
    </Box>
  </Layout>
)

export default ContactPage
