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

const Campaign = ({data}) => { 
  return (
    <Box component="div" sx={styles.settingWrapper}>
      {/* <a href={data.weblink}> 
        {data.image && <img 
          src={data.image}
          width={600}
          alt={data.name}
        />} */}
        <Typography align="center">{data.name}</Typography>
      {/* </a> */}
    </Box>
  );
}

const CampaignsPage = () => (
  <Layout>
    <Seo title="Campaigns" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Campaigns</h1>
      <p>This is a list of current Crit Fumble campaigns.</p>
      {DataService.campaigns?.map((data) =>(
        <Campaign key={`${data.id}`} data={data} />
      ))}
    </Box>
  </Layout>
)

export default CampaignsPage
