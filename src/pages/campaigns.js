import * as React from "react";
import { Box, Typography } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";
import DataService from "../services/DataService";

const Head = () => <Seo title="Campaigns" />

const styles = {
  wrapper: {
    textAlign: 'center',
  },
  campaignWrapper: {
    borderRadius: '32px',
    backgroundColor: 'white',
    margin: 'auto',
    padding: '16px',
    mt: '2rem'
  },
  campaignImage: {
    maxHeight: '300px',
    maxWidth: '100%',
  }
}

const Campaign = ({data}) => {
  return (
    <Box component="div" sx={styles.campaignWrapper}>
      <a href={data.weblink}> 
        <Typography align="center" fontWeight="800">{data.name}</Typography>
        {data.image && <img 
          style={styles.campaignImage}
          src={data.image}
          alt={data.name}
        />}
      </a>
      {data.storytellers?.length > 0 && (
        <div>
        Storyteller{data.users?.filter(({roles}) => (roles.includes(1)))?.length > 1 && 's'}:&nbsp;&nbsp;
        {DataService.users.filter(({roles}) => roles.includes(1))
          .filter(({id}) => (data.storytellers.includes(id)))
          .map((storyteller, idx) => (<span key={`storyteller ${idx}`}>{storyteller.name}</span>))
        }
        </div>
      )}
      {data.settings?.length > 0 && (
        <div>
          Setting{data.settings?.length > 1 && 's'}:&nbsp;&nbsp;
          {DataService.settings
            .filter(({id}) => (data.settings.includes(id)))
            .map((setting, idx) => (<a key={`link ${idx}`} href={setting.weblink}>{setting.name}</a>))
          }
        </div>
      )}
      {data.weblinks?.length > 0 && (
        <div>
          Link{data.weblinks?.length > 1 && 's'}:&nbsp;&nbsp;
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

// TODO: export Head above instead of including in markup
const CampaignsPage = () => (
  <Layout>
  <Head />
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
