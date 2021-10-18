import { Link } from '@reach/router';
import React from 'react';
import { Container, Content, MainTitle, Section } from '../common';

const TheEvent = () => {
  return (
    <>
      <Section>
        <Container>
          <MainTitle title="The Event" titleStrokeText={'Welcome'} />
          <Content center={true}>
            FlutterVikings is a community-driven event comprised of Nordic user groups,
            especially Flutter, Dart, and GDGs, with lots of active members in total as
            well as Flutter Community together with its amazing generous sponsors.
            <br />
            Having outstanding Flutter/Dart team members, excellent Google Developer
            Experts, and top-notch international speakers onboard, FlutterVikings
            Conference guarantees a superb program: fresh, technically deep, and 100%
            useful. BTW, We are updating our website constantly, make sure you subscribe
            to our newsletter or follow us on twitter to get the latest update
            <br />
            <h3>Engagement</h3>
            Besides the conference talks, be prepared for awesome MCs and a number of
            networking activities, interactive entertainment, and engaging challenges for
            all participants.
          </Content>
        </Container>
      </Section>
    </>
  );
};

const Diversity = () => {
  return (
    <>
      <Section>
        <Container>
          <MainTitle title="Everyone is welcome" titleStrokeText={'Diversity'} />
          <Content center={true}>
            <h3>Diversity</h3>
            FlutterVikings believes in diversity! We want to be as much inclusive as
            possible! FlutterVikings is here to close a gap between code and people! We
            care about you! Let's meet, chat, discuss, share, and spread the love, all
            with respect! Let's get together! Let's have fun and learn! Let's be a{' '}
            <strong>viking</strong>
            <br />
            <h3>Code of Conduct</h3>
            FlutterVikings is committed to providing a friendly, safe and welcoming
            environment for all, regardless of gender, sexual orientation, disability,
            ethnicity, or religion. Our Code of Conduct outlines our expectations for
            participants' behavior. We do not tolerate harassment of conference
            participants in any form.{' '}
            <Link className="blue" to={'code-of-conduct'}>
              Read full version
            </Link>
          </Content>
        </Container>
      </Section>
    </>
  );
};

export { TheEvent, Diversity };
