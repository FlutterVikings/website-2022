import React from 'react';
import {
  Layout,
  TheEvent,
  Scene,
  Committee,
  Sponsors,
  Speakers,
  Diversity,
  Team,
  Schedules,
} from '../components';
import { SEO } from '../components/base/SEO';
import { Communities } from '../components/modules/Communities';
import { Moderators } from '../components/modules/Moderators';
import { Venue } from '../components/modules/Venue';

export default () => {
  return (
    <Layout>
      <SEO />
      <Scene />
      <TheEvent />
      <Venue />
      <Speakers />

      {/* <Moderators /> */}
      {/* <Schedules /> */}
      <Sponsors />
      <Communities />
      {/* <Team /> */}
      {/* <Committee /> */}
      <Diversity />
    </Layout>
  );
};
