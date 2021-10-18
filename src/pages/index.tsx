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

export default () => {
  return (
    <Layout>
      <SEO />
      <Scene />
      <TheEvent />
      {/* <Speakers /> */}
      <Diversity />
      {/* <Moderators /> */}
      {/* <Schedules /> */}
      {/* <Committee /> */}
      <Sponsors />
      {/* <Communities /> */}
      {/* <Team /> */}
    </Layout>
  );
};
