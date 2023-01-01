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

const Storyteller = ({data}) => { 
  return (
    <Box component="div" sx={styles.settingWrapper}>
        <Typography align="center">{data.name}</Typography>
    </Box>
  );
}

const CampaignsPage = () => (
  <Layout>
    <Seo title="Creators" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Creators</h1>
      <p>Contributors other than storytellers provide things like art, note taking, and other types of storyteller assistance.</p>
      {DataService.creators?.map((data) =>(
        <Storyteller key={`${data.id}`} data={data} />
      ))}
    </Box>
  </Layout>
)

export default CampaignsPage
