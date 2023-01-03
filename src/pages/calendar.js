import * as React from "react";
import { Box } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";

const styles = {
  wrapper: {
    textAlign: 'center',
  },
  iFrame: {
    border: 0,
    width: '100%',
    height: '600px',
  }
}

const calendarIds = [
  '90edebde311398da3345cd7943584420db8195a867752f1815f6fb36357b47dc%40group.calendar.google.com', // The Tidal Waves
  '22a627a6918e6287dd866215ca008dea76b9c3cb6faa8503230fa83fc5bca50b%40group.calendar.google.com', // Good Omens
  '4093b725d85474c513243e7d5b5f6b8e591d400d6761d63231380102f4a2b8a0%40group.calendar.google.com', // The Mutants
  'e3adb5ed7d536baa3357c687aa95ca629f307bec0d3083d8a4bc67b674865d21%40group.calendar.google.com', // USCSS Nostromo
  '770b94ed1c4eef18f7a60b2adbef1239f23a497ac1e120c7889980f298e20e3b%40group.calendar.google.com', // Tell No Tales
  '221d1927042102cbeba9cfb037054163826b567398e0ce43a27b7a413ef3e655%40group.calendar.google.com', // The Party
  '32573e1502e8c27c33196b4ff6d660ad79bd7aba971fadeed0a5cff3e3c0bb4d%40group.calendar.google.com', // DAPS
  'f7742274324ce74b220323d176114293d188e8c6c0208fa4361e68bcf326617c%40group.calendar.google.com', // Death Be Damned
  '439b3127ff43e2212d431bc27865092e21947c5d390ba6c0c0964c814df3a736%40group.calendar.google.com', // Player
  '68b52257c754f2bcde70015c2e51fa475dfe31b9bfa12433fb6aec60ad543c73%40group.calendar.google.com', // NPC
  'Y3JpdC5mdW1ibGUud2ViQGdtYWlsLmNvbQ', // Everyone
]

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <Box component="div" sx={styles.wrapper}>
      <h1>Calendar</h1>
      <p>All scheduled sessions and events are subject to change.</p>
      <iframe 
        src={`https://calendar.google.com/calendar/embed?title=%20&showNav=1&color=%23A79B8E&color=%23616161&bgcolor=%23EEEEEE&showTabs=1&showPrint=1&src=${calendarIds.join('&src=')}`}
        style={styles.iFrame} 
      />
    </Box>
  </Layout>
)

export default ContactPage