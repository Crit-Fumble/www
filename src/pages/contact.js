import * as React from "react";
import { Box } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";
import DataService from "../services/DataService";

const Head = () => <Seo title="Contact" />

const styles = {
  wrapper: {
    textAlign: 'center',
  },
  iFrame: {
    border: 0,
    width: '100%',
    height: '600px',
  }
}

// TODO: export Head above instead of including in markup
const ContactPage = () => (
  <Layout>
    <Head />
    <Box component="div" sx={styles.wrapper}>
      <h1>Contact</h1>
      <p>To contact us, join our Discord server!</p>
      <iframe style={styles.iFrame} src={`https://discord.com/widget?id=${DataService.discord.id}&theme=dark`} allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
    </Box>
  </Layout>
)

export default ContactPage
