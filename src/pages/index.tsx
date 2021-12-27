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
      <Schedules />
      <Speakers />

      {/* <Moderators /> */}
      <Sponsors />
      <Communities />
      {/* <Team /> */}
      <Venue />
      <Content center={true}>
        <h3>
          <a target="_blank" href="https://2020.fluttervikings.com">
            Check out Online'2020 website
          </a>
        </h3>
      </Content>
    </Layout>
  );
};
