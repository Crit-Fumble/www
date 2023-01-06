import * as React from "react";
import { Box } from "@mui/material";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const Head = () => <Seo title="Home" />

const styles = {
  wrapper: {
    textAlign: 'center',
    backgroundImage: `url(${"../images/dice-backdrop.jpg"})`,
  }
}

const IndexPage = () => (
  <Layout>
    <Box component="div" sx={styles.wrapper}>
      <h1>Crit Fumble Gaming</h1>
      <p>If the GM doesn't kill you, the dice will.</p>
      <p>Welcome to Crit Fumble Gaming! This site is for a VTTRPG group with players with some of the worst luck and dumbest ideas. We are based out of the Midwest United States, but also have players who live in other parts of the country.</p>
    </Box>
  </Layout>
)

export default IndexPage
