import * as React from "react";
import { Box } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";

const styles = {
  wrapper: {
    textAlign: 'center',
  },
}

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Calendar</h1>
      <p>Here are all our scheduled sessions and events.</p>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23616161&ctz=America%2FChicago&mode=MONTH&showTabs=1&showPrint=1&showDate=1&showNav=1&showTitle=1&title=Scheduled%20Sessions&src=Y3JpdC5mdW1ibGUud2ViQGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23A79B8E&color=%230B8043" style={{ border: "solid 1px #777" }} width="100%" height="600px" frameBorder="0" /></Box>
  </Layout>
)

export default ContactPage
