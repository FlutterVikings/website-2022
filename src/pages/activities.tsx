import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Layout, Section, Header, Content } from '../components';
// @ts-ignore
import TimezoneSelect from 'react-timezone-select';
import { SEO } from '../components/base/SEO';

const ActivityRow = styled.div`
  display: flex;
`;

const SimpleClickToTweet = styled.div`
  display: block;
  position: relative;
  border-style: solid;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 15px 30px;
  margin: 15px 0px;
`;

const TwitterLogoLink = styled.a`
  margin: 0;
  padding: 0;
  position: center;
  display: inline-block;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 100%;
  color: #ffffff;
  padding-right: 24px;
  text-decoration: none;
  background: transparent url(/assets/Twitter_Social_Icon_Circle_Color.svg) no-repeat
    right top;
`;

const SmallHeader = styled.header`
  position: relative;
  padding: 0rem 0rem 1rem;
  text-align: center;
  font-size: 32px;
`;

const VerySmallHeader = styled.header`
  position: relative;
  text-align: center;
  font-size: 18px;
`;

export default () => {
  return (
    <>
      <Layout>
        <SEO title="FlutterVikings activities - Win a Dash or other prizes" />
        <Section>
          <Container>
            <Content>
              <SmallHeader>
                <h1 className="font__caesar size__h1">Activities & Prizes</h1>
              </SmallHeader>
              <ActivityRow>
                <div className="entry-contest">
                  <p>
                    As an online conference, we know that it's important to go the extra
                    mile to keep our attendees interested and engaged. That's why we have
                    a host of live activities and contests running throughout the
                    conference lined up.
                  </p>
                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    Prizes and Gifts!
                  </SmallHeader>
                  <p>
                    Why should you participate 🤔 ? Well, we hope that they will be fun
                    and that maybe you will learn something new about Flutter while
                    participating. However, we also have some more concrete incentives
                    lined up... Prizes!!!
                  </p>
                  <p>
                    Here are the prizes that will be awarded throughout the conference for
                    the various activity contests and quiz winners!
                  </p>
                  <ul>
                    <li>Dash!</li>
                    <li>Free Flutter in action book</li>
                    <li>Flutter Vikings and Flutter T-Shirt</li>
                    <li>Flutter Stickers</li>
                    <li>Bookreader from Invertase.io</li>
                    <li>Cash up to 5000 euro from the @ company</li>
                    <li>Swags from Stream.io</li>
                    <li>And many more</li>
                  </ul>
                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    Flutter Vikings Draw a Vikings Dash
                  </SmallHeader>
                  <p>TBA</p>
                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    The Invertase "Write a Flutter article" contest!
                  </SmallHeader>
                  <p>TBA</p>
                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    Google DevLibrary Contest
                  </SmallHeader>
                  <p>
                    Google’s Dev Library is an open-source platform displaying quality
                    work by developers who have created or built projects using any of the
                    Google Technologies.
                  </p>
                  <p>
                    Dev Library is collaborating with Flutter Vikings Conference to add
                    some execution with the learnings!
                  </p>
                  <p>
                    Dev Library is an open-source platform that is built for external
                    developers who have built an open-source project or written a blog
                    using any of the Google Technologies–Angular, Android, Flutter,
                    Firebase, Machine Learning, or Cloud.{' '}
                  </p>

                  <p>
                    With Flutter Vikings, we are presenting a week of Flutter Projects!
                  </p>

                  <p>
                    During the actual Flutter Vikings Conference (1st to 4th February), we
                    will open the space for Flutter Innovations. Submit your projects or
                    articles built using Flutter on Dev Library.
                  </p>

                  <p>
                    By the end of the week, best projects will be accepted on the site,
                    and a few will receive special prizes from Google’s Dev Library under
                    the following categories:
                  </p>
                  <ul>
                    <li>Most Innovative Project</li>
                    <li>Inspired from Dev Library </li>
                    <li>Best use of Flutter</li>
                  </ul>
                  <p>
                    So, start submitting your Flutter projects NOW! You could also add
                    your suggestions or views.{' '}
                    <a
                      href="https://devlibrary.withgoogle.com/products/flutter"
                      target="_blank"
                      rel="noopenner nofollow"
                    >
                      Click here to check{' '}
                    </a>{' '}
                    the existing Flutter projects.{' '}
                  </p>

                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    The @ Company Contest
                  </SmallHeader>
                  <p>TBA</p>
                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    Stream Code-lab Contest
                  </SmallHeader>
                  <p>TBA</p>
                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    Quiz run by Robert Brunhage
                  </SmallHeader>
                  <p>TBA</p>
                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    Quiz run by Andrea Bizzotto
                  </SmallHeader>
                  <p>TBA</p>
                  <br />
                </div>
              </ActivityRow>
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
