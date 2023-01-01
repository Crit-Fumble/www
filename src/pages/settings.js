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

const Setting = ({data}) => {
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

const SettingsPage = () => (
  <Layout>
    <Seo title="Settings" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Settings</h1>
      <p>This is a list of the campaign settings used by Crit Fumble Gaming storytellers.</p>
      {DataService.campaignSettings?.map((data) =>(
        <Setting key={`${data.id}`} data={data} />
      ))}
    </Box>
  </Layout>
)

export default SettingsPage
