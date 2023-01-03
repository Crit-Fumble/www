import * as React from "react";
import { Box } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";

const styles = {
  wrapper: {
    textAlign: 'center',
  },
  iFrame: {
    border: 0,
  }
}

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Calendar</h1>
      <p>All scheduled sessions and events are subject to change.</p>
      <iframe src="https://calendar.google.com/calendar/embed?title=%20&showNav=1&color=%23A79B8E&color=%23616161&bgcolor=%23EEEEEE&showTabs=1&showPrint=1&src=Y3JpdC5mdW1ibGUud2ViQGdtYWlsLmNvbQ" style={styles.iFrame} width="100%" height="600px" frameBorder="0" /></Box>
  </Layout>
)

export default ContactPage
