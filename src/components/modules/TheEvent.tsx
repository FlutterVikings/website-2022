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
            FlutterVikings is a community-driven event made up of GDGs and other Nordic
            user groups focused on Flutter and Dart, as well as the global Flutter
            Community. <br />
            With a fantastic lineup of Google Developer Experts and top-notch
            international speakers the FlutterVikings Conference boasts two of the best
            Flutter and Dart tracks anywhere, offering some of the most informative,
            technical and actually useful talks anywhere.
            <br />
            This website is being updated as more speakers are confirmed so make sure you
            subscribe to our newsletter, or follow us on twitter to get the latest
            updates!
            <br />
            <h3>Engagement</h3>
            Besides the conference talks, be prepared for awesome MCs and a number of
            networking activities, interactive entertainment, and engaging challenges for
            all participants.
            <br />
            <h3>COVID-19</h3>
            We are observing COVID situation closely.Health and safety of our attendees
            and speakers are a high priority. If travel becomes more challenging and
            stricter restrictions or an increased risk of having an in-person conference,
            we might postpone the in-person conference. We strongly advise you to book
            your trip with the flexibility that you can change in an emergency. We will
            decide about in-person in week one or week two. Regardless, the online
            conference in Feb 2022 will be running.
            <br /> <h3>Refund Policy</h3>We will fully refund your ticket price if the
            conference gets canceled due to the COVID situation.
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
