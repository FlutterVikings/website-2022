import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Content, Layout, Section } from '../components';
import ScrollIntoView from 'react-scroll-into-view';
import { SEO } from '../components/base/SEO';

const ActivityRow = styled.div`
  display: flex;
`;

const ActivityDivider = styled.div`
  margin: 2rem 0;
  display: flex;
  width: 100%;
  height: 1px;
  background: #ccc;
`;

const TableContentItem = styled.b`
  padding: 1rem 0;
  cursor: pointer;
`;

const SmallHeader = styled.header`
  position: relative;
  padding: 2rem 0;
  text-align: center;
  font-size: 32px;
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
                    <li>Book reader from Invertase.io</li>
                    <li>Cash up to 4000 USD from the @ company</li>
                    <li>Swags from Stream.io</li>
                    <li>And many more</li>
                  </ul>

                  <h3>Table of content</h3>
                  <ol>
                    <li>
                      <ScrollIntoView selector="#a-1">
                        <TableContentItem>
                          Draw a Vikings Dash and win a Dash! by Flutter Vikings
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-2">
                        <TableContentItem>
                          "Write a Flutter article" and win a book reader! by Invertase.io
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-3">
                        <TableContentItem>Google DevLibrary</TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-4">
                        <TableContentItem>
                          Reinvent the @rrive mobile app and win up to 4000 USD! by The @
                          Company
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-5">
                        <TableContentItem>Stream Code-lab</TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-6">
                        <TableContentItem>
                          Quiz run by Robert Brunhage and win his course for FREE!
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-7">
                        <TableContentItem>
                          Quiz run by Andrea Bizzotto and win his courses!
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                  </ol>
                  <ActivityDivider id="a-1" />
                  <SmallHeader className="font__caesar size__h1">
                    Draw a Vikings Dash and win a Dash! by Flutter Vikings
                  </SmallHeader>
                  <p>It's simple, use Flutter and draw the Dashes below</p>
                  <p>
                    <img
                      alt="FlutterVikings Dash"
                      src="/assets/vikings-dash.svg"
                      style={{ height: '300px', width: '100%' }}
                    />
                  </p>
                  <p>We will judge based on</p>
                  <ul>
                    <li>Code quality</li>
                    <li>Best drawing</li>
                    <li>Added extra features such as animation</li>
                    <li>Scaling properly based on screen sizes</li>
                    <li>We accept only on CodePen or DartPad</li>
                    <li>You must have a valid ticket to be able to submit</li>
                  </ul>

                  <p>
                    The top 2 submissions will receive a Dash and the top 10 submission
                    will receive a Flutter or FlutterVikings T-shirt and Flutter stickers
                  </p>
                  <br />
                  <p>
                    <a
                      href="https://bit.ly/3s5oBqa"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Submit your work here{' '}
                    </a>{' '}
                    and we will contact you
                  </p>
                  <ActivityDivider id="a-2" />
                  <SmallHeader className="font__caesar size__h1">
                    "Write a Flutter article" and win a book reader! by Invertase.io
                  </SmallHeader>
                  <p>TBA</p>
                  <ActivityDivider id="a-3" />
                  <SmallHeader className="font__caesar size__h1">
                    Google DevLibrary
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
                      href="https://bit.ly/3gqjX0N"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Click here to check{' '}
                    </a>{' '}
                    the existing Flutter projects.{' '}
                  </p>
                  <ActivityDivider id="a-4" />
                  <SmallHeader className="font__caesar size__h1">
                    Reinvent the @rrive mobile app and win up to 4000 USD! by The @
                    Company
                  </SmallHeader>
                  <p>
                    One of our @platform apps in development is nearly complete but needs
                    your help! @rrive is a fully open source Flutter app designed to
                    securely share locations with people you trust. Share locations
                    one-on-one for a specific time period or create an event for several
                    people in your circle and share your locations for that event.
                  </p>
                  <p>
                    <a
                      href="https://bit.ly/35u5zSJ"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Read more here and good luck! It will have 7000 USD cash!{' '}
                    </a>
                  </p>
                  <br />
                  <p>
                    <strong>BTW</strong>, did you know you can also request a FREE @sign!
                    You can request a custom blue 💙 or purple heart 💜 (or both!) @sign,
                    normally priced at $100! But you will get it for <strong>FREE</strong>
                    !{' '}
                    <a
                      href="https://bit.ly/3s04mu5"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Click here!
                    </a>
                  </p>
                  <ActivityDivider id="a-5" />
                  <SmallHeader className="font__caesar size__h1">
                    Stream Code-lab
                  </SmallHeader>
                  <p>TBA</p>
                  <ActivityDivider id="a-6" />
                  <SmallHeader className="font__caesar size__h1">
                    Quiz run by Robert Brunhage
                  </SmallHeader>
                  <p>
                    Robert is a well-known community member which has done a fantastic job
                    by creating courses and videos on youtube. He will run a quiz on Day 1
                    (Activity time) online and will give away Free and discounted coupon
                    to his course{' '}
                    <a
                      href="https://bit.ly/3KZ5lDl"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      https://robertbrunhage.com/course
                    </a>
                  </p>
                  <ActivityDivider id="a-7" />
                  <SmallHeader className="font__caesar size__h1">
                    Quiz run by Andrea Bizzotto
                  </SmallHeader>
                  <p>
                    Andrea is a well-known community member which has done a fantastic job
                    by creating courses and videos on Youtube and so many amazing articles
                    on his website. He will run a quiz on Day 2 (Activity time) online and
                    will give away Free and discounted coupon to his courses{' '}
                    <a
                      href="https://bit.ly/3IMZZcp"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      https://codewithandrea.com/courses/
                    </a>
                  </p>
                  <ActivityDivider />
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
