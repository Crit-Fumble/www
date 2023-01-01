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
        <Typography align="center" fontWeight="800">{data.name}</Typography>
        {data.image && <img 
          src={data.image}
          width={600}
          alt={data.name}
        />}
      </a>
      {data.storytellers?.length > 0 && (
        <div>
        Storyteller:&nbsp;&nbsp;
        {DataService.storytellers
          .filter(({id}) => (data.storytellers.includes(id)))
          .map((storyteller, idx) => (<span key={`${idx}`}>{storyteller.name}</span>))
        }
        </div>
      )}
    </Box>
  );
}

const SettingsPage = () => (
  <Layout>
    <Seo title="Settings" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Settings</h1>
      <p>This is a list of the campaign settings used by Crit Fumble Gaming storytellers.</p>
      {DataService.settings?.map((data) =>(
        <Setting key={`${data.id}`} data={data} />
      ))}
    </Box>
  </Layout>
)

export default SettingsPage
