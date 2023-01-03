import * as React from "react";
import { Box, Typography } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";
import DataService from "../services/DataService";

const Head = () => <Seo title="About Us" />

const roleIds = {
  STORYTELLER: 1,
  CREATOR: 2
}

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

const User = ({data}) => { 
  // const campaigns = DataService.campaigns.filter(({storytellers})=>(storytellers.includes(data.id)));
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

const AboutUsPage = () => {
  const storytellers = DataService.users
    .filter(({roles}) => roles.includes(roleIds.STORYTELLER));
  const creators = DataService.users
    .filter(({roles}) => roles.includes(roleIds.CREATOR) && !roles.includes(roleIds.STORYTELLER));
  // const players = DataService.users
  //  .filter(({roles}) => roles.includes(3) && ![1,2].some(r => roles.includes(r)));
  return (
    <Layout>
      <Head />
      <Box component="div" sx={styles.wrapper}>
        <h1>About Us</h1>
        <p></p>
      </Box>
      {storytellers?.length > 0 && (
        <Box component="div" sx={styles.wrapper}>
          <h2>Storytellers</h2>
          <p>The Storytellers and Game Masters of Crit Fumble Gaming.</p>
          {storytellers?.map((data) =>(
            <User key={`${data.id}`} data={data} />
          ))}
        </Box>
      )}
      {creators?.length > 0 && (
        <Box component="div" sx={styles.wrapper}>
          <h2>Creators</h2>
          <p>Contributors other than storytellers provide things like art, note taking, and other types of storyteller assistance.</p>
          {creators?.map((data) =>(
            <User key={`${data.id}`} data={data} />
          ))}
        </Box>
      )}
      {/* {players?.length > 0 && (
        <Box component="div" sx={styles.wrapper}>
          <h2>Players</h2>
          <p></p>
          {creators?.map((data) =>(
            <User key={`${data.id}`} data={data} />
          ))}
        </Box>
      )} */}
    </Layout>
  );
}

export default AboutUsPage
