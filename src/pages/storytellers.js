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
  const campaigns = DataService.campaigns.filter(({storytellers})=>(storytellers.includes(data.id)));
  const settings = DataService.settings.filter(({storytellers})=>(storytellers.includes(data.id)));
  return (
    <Box component="div" sx={styles.settingWrapper}>
      <Typography align="center" fontWeight="800">{data.name}</Typography>
      {/* {campaigns?.length > 0 && (
        <div>
        Campaign{campaigns?.length > 1 && 's'}:&nbsp;&nbsp;
        {campaigns.map((campaign, idx) => (
          [
            <span key={`name ${idx}`}>"{campaign.name}"</span>,
            <span key={`space ${idx}`}>&nbsp;&nbsp;</span>
          ]
        ))}
        </div>
      )} */}
      {settings?.length > 0 && (
        <div>
        Setting{settings?.length > 1 && 's'}:&nbsp;&nbsp;
        {settings.map((setting, idx) => (
          [
            <a key={`link ${idx}`} href={setting.weblink} target="_blank">
                {setting.name}
            </a>,
            <span key={`space ${idx}`}>&nbsp;&nbsp;</span>
          ]
        ))}
        </div>
      )}
      {data.weblinks?.length > 0 && (
        <div>
          Links:&nbsp;&nbsp;
          {data.weblinks.map((weblink, idx) => (
            [
              <a key={`link ${idx}`} href={weblink.url} target="_blank">
                  {weblink.name}
              </a>,
            <span key={`space ${idx}`}>&nbsp;&nbsp;</span>
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
