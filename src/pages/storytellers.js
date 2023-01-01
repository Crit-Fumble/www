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
  console.log(data.weblinks);
  return (
    <Box component="div" sx={styles.settingWrapper}>
      <Typography align="center">{data.name}</Typography>
      {data.weblinks?.length > 0 && (
        <div>
          Links:&nbsp;&nbsp;
          {data.weblinks.map(weblink => (
            [
              <a href={weblink.url}>
                  {weblink.name}
              </a>,
              <span>&nbsp;&nbsp;</span>
            ]
          ))}
        </div>
      )}
    </Box>
  );
}

const CampaignsPage = () => (
  <Layout>
    <Seo title="Storytellers" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Storytellers</h1>
      <p>The Storytellers and Game Masters of Crit Fumble Gaming.</p>
      {DataService.storytellers?.map((data) =>(
        <Storyteller key={`${data.id}`} data={data} />
      ))}
    </Box>
  </Layout>
)

export default CampaignsPage
