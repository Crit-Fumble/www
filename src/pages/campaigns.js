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
          .map((storyteller, idx) => (<span key={`storyteller ${idx}`}>{storyteller.name}</span>))
        }
        </div>
      )}
      {data.settings?.length > 0 && (
        <div>
          Setting:&nbsp;&nbsp;
          {DataService.settings
            .filter(({id}) => (data.settings.includes(id)))
            .map((setting, idx) => (<a key={`link ${idx}`} href={setting.weblink}>{setting.name}</a>))
          }
        </div>
      )}
      {data.weblinks?.length > 0 && (
        <div>
          Links:&nbsp;&nbsp;
          {data.weblinks.map((weblink, idx) => (
            [
              <a key={`link ${idx}`} href={weblink.url}>
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
