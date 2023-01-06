import * as React from "react";
import { Box, Typography } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";
import DataService from "../services/DataService";

export const Head = () => <Seo title="Settings" />

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
  },
  settingImage: {
    maxHeight: '300px',
    maxWidth: '100%',
  }
}

const Setting = ({data}) => {
  return (
    <Box component="div" sx={styles.settingWrapper}>
      <a href={data.weblink}> 
        <Typography align="center" fontWeight="800">{data.name}</Typography>
        {data.image && <img 
          style={styles.settingImage}
          src={data.image}
          alt={data.name}
        />}
      </a>
      {data.storytellers?.length > 0 && (
        <div>
        Storyteller{data.storytellers?.length > 1 && 's'}:&nbsp;&nbsp;
        {DataService.users.filter(({roles}) => roles.includes(1))
          .filter(({id}) => (data.storytellers.includes(id)))
          .map((storyteller, idx) => ([
            <span key={`name ${idx}`}>{storyteller.name}</span>,
            <span key={`space ${idx}`}>&nbsp;&nbsp;</span>
          ]))
        }
        </div>
      )}
    </Box>
  );
}

const SettingsPage = () => (
  <Layout>
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
