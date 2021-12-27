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
  Content,
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
      <Committee />
      <Diversity />
      <Speakers />
      <Schedules />

      <Moderators />
      <Sponsors />
      <Communities />
      {/* <Team /> */}
      <Venue />
    </Layout>
  );
};
