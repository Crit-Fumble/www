import * as React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { campaignSettings } from "../data/data.json";

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

const Campaign = ({data}) => {
  console.log(data);
  return (
    <Box component="div" sx={styles.settingWrapper}>
      <a href={data.weblink}> 
        {data.image && <img 
          src={data.image}
          width={600}
          alt={data.name}
        />}
        <Typography align="center">{data.name}</Typography>
      </a>
    </Box>
  );
}

const CampaignSettingsPage = () => (
  <Layout>
    <Seo title="Campaign Settings" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Campaign Settings</h1>
      <p>This is a list of the campaign settings used by Crit Fumble.</p>
      {campaignSettings.map((data) =><Campaign key={`${data.id}`} data={data} />)}
    </Box>
  </Layout>
)

export default CampaignSettingsPage
