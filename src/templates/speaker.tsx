import { graphql, Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import React, { useState } from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Layout, Section, Header, Content } from '../components';
import { SEO } from '../components/base/SEO';
import { Agenda } from '../models/Agenda';
import { Speaker } from '../models/Speaker';
import config from '../config';
import { Timezone } from '../models/Timezone';
import spacetime from 'spacetime';
// @ts-ignore
import TimezoneSelect from 'react-timezone-select';
import { AddToCal } from '../components/common/AddToCal';

const SpeakerRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const SpeakerImage = styled.div`
  flex: 1;
`;
const SpeakerInfo = styled.div`
  padding: 0 4rem;
  flex: 1;
`;

export default ({
  path,
  data,
}: {
  path: string;
  data: {
    agenda: Agenda;
    speaker: Speaker;
    image: { childImageSharp: { fluid: FluidObject } };
  };
}) => {
  const { speaker, image, agenda } = data;
  let speakerTimeSlot;
  let timezoneValue = config.defaultTimezone.value;
  let timezoneBasedStartTime = spacetime.now(config.defaultTimezone.value);
  let timezoneBasedEndTime = spacetime.now(config.defaultTimezone.value);
  let spaceDate;
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone>(
    config.defaultTimezone,
  );
  if (agenda) {
    speakerTimeSlot = agenda.programs.filter((slot) => slot.speaker === speaker.id)[0];
    timezoneValue = selectedTimezone.value;
    spaceDate = spacetime(agenda.dateISO, config.defaultTimezone.value);
    timezoneBasedStartTime = spaceDate.time(speakerTimeSlot.startTime);
    timezoneBasedEndTime = spaceDate.time(speakerTimeSlot.endTime);
  }
  return (
    <>
      <Layout>
        <Section>
          <SEO
            description={speaker.bio}
            path={path}
            title={speaker.name + ` Online'20 Speaker `}
          />
          <Container>
            <Header>
              <div style={{ justifyContent: 'center', display: 'flex' }}>
                <img
                  alt="FlutterVikings"
                  className="SceneOverlay-logo"
                  src="/assets/logo.svg"
                />
              </div>
              <h1 className="font__caesar size__h1">{speaker.name}</h1>
            </Header>
            <Content>
              <SpeakerRow>
                <SpeakerImage>
                  <GatsbyImage fluid={image.childImageSharp.fluid} />
                  <br />
                  {agenda && speakerTimeSlot && (
                    <>
                      <p>
                        Time is based on {selectedTimezone.altName} (
                        {selectedTimezone.abbrev})
                      </p>
                      <br />
                      <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                      />
                      <br />
                      <p>
                        Date:{' '}
                        <b>
                          {agenda.name}, {agenda.date}
                        </b>
                      </p>
                      <p>
                        Time:{' '}
                        <b>
                          {timezoneBasedStartTime?.goto(timezoneValue).time()} to{' '}
                          {timezoneBasedEndTime?.goto(timezoneValue).time()}
                        </b>
                      </p>
                      <br />
                      <AddToCal
                        startsAt={timezoneBasedStartTime
                          .goto(timezoneValue)
                          .format('iso')
                          .toString()}
                        endsAt={timezoneBasedEndTime
                          .goto(timezoneValue)
                          .format('iso')
                          .toString()}
                        location={timezoneValue}
                        title={
                          `${speaker?.talk?.title} by ${speaker?.name}` ||
                          speakerTimeSlot.title
                        }
                        desc={
                          `${speaker?.talk?.description} https://flutterVikings.com` || ''
                        }
                      />
                    </>
                  )}
                </SpeakerImage>
                <SpeakerInfo>
                  <p>
                    Name: <b>{speaker.name}</b>
                  </p>
                  <p>
                    Company: <b>{speaker.company}</b>
                  </p>
                  <p>
                    Biography: <br />
                    <b>{speaker.bio}</b>
                  </p>
                  <br />
                  <h2 className="font__caesar">Talk</h2>
                  <br />
                  <p>
                    Title: <br />
                    <b>{speaker.talk.title}</b>
                  </p>
                  <br />
                  <p>
                    Abstract:
                    <br />{' '}
                    <b
                      dangerouslySetInnerHTML={{ __html: speaker.talk.description ?? '' }}
                    />
                  </p>
                  <br />
                  <h2 className="font__caesar">Social Media</h2>
                  <p>
                    Twitter:{' '}
                    <a
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      href={speaker.social.twitter}
                    >
                      {speaker.social.twitter}
                    </a>
                  </p>
                  <p>
                    Linkedin:{' '}
                    <a rel="noopener noreferrer nofollow" href={speaker.social.linkedin}>
                      {speaker.social.linkedin}
                    </a>
                  </p>
                  <p>
                    Github:
                    <a rel="noopener noreferrer nofollow" href={speaker.social.github}>
                      {speaker.social.github}
                    </a>
                  </p>
                </SpeakerInfo>
              </SpeakerRow>
              <br />
              <br />
              <br />
              <div className="CTA-actions" style={{ textAlign: 'center' }}>
                <Link className="Btn Btn--ticket Btn--cta" to="/">
                  Back to homepage
                </Link>
              </div>
            </Content>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query($speakerId: String!) {
    agenda: agendaJson(programs: { elemMatch: { speaker: { eq: $speakerId } } }) {
      name
      date
      dateISO
      programs {
        startTime
        endTime
        speaker
      }
    }

    image: file(name: { eq: $speakerId }, relativeDirectory: { eq: "speakers" }) {
      childImageSharp {
        fluid(
          maxWidth: 700
          maxHeight: 700
          quality: 100
          cropFocus: CENTER
          grayscale: true
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    speaker: speakersJson(id: { eq: $speakerId }) {
      id
      name
      social {
        twitter
        github
        linkedin
      }
      talk {
        title
        description
        lightening
        coSpeaker
      }
      company
      title
      bio
    }
  }
`;
