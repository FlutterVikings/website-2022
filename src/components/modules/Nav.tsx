import { Link } from '@reach/router';
import React, { useEffect, useMemo, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { ThemeConsumer } from 'styled-components';
import config from '../../config';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { VikingTheme } from '../../theme';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  const onBurgerBtnClick = () => {
    setIsOpen(!isOpen);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    undefined,
    false,
    400,
  );

  const closeNavDefaultPrevent = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]); // Empty array ensures effect is only run on mount and unmount

  return useMemo(
    () => (
      <ThemeConsumer>
        {(theme: VikingTheme) => {
          return (
            <div
              className={`Nav ${isOpen ? 'Nav--open' : 'Nav--away'} ${
                hideOnScroll ? '' : 'Nav--scrolled'
              }`}
            >
              <div
                className="Nav-bar"
                style={!hideOnScroll ? { backgroundColor: theme.colors.primary } : {}}
              >
                <div className="Nav-barMenu">
                  <span id="OpenMenuLabel" className="VisuallyHidden">
                    Open Menu
                  </span>
                  <button
                    onClick={onBurgerBtnClick}
                    className={`BurgerBtn ${isOpen ? 'BurgerBtn--open' : ''}`}
                    style={{ backgroundColor: theme.colors.primary }}
                    aria-controls="Nav-overlay"
                    aria-haspopup="true"
                    aria-label="Open Menu"
                    aria-labelledby="OpenMenuLabel"
                  >
                    <div className="BurgerBtn-line" />
                    <div className="BurgerBtn-line" />
                    <div className="BurgerBtn-line" />
                  </button>
                </div>

                <a className="Nav-barLogo" href="/">
                  <img alt="FlutterVikings" className="NavLogo" src="/assets/logo.svg" />
                  <span className="Nav-title">
                    <span className="font__caesar">Flutter Vikings</span>
                    <br />
                    2022
                  </span>
                </a>
              </div>
              <div
                id="Nav-overlay"
                className="Nav-overlay"
                aria-hidden={isOpen}
                style={{ backgroundColor: theme.colors.primary }}
              >
                <nav className="NavContent">
                  <div className="NavContent-row">
                    <section className="NavContent-section">
                      <h2 className="NavContent-title">Where do you want to go?</h2>
                      <ul className="NavContent-items">
                        <li className="NavContent-item">
                          <Link to={''} onClick={closeNav}>
                            Homepage
                          </Link>
                          {/* <li className="NavContent-item">
                            <Link to={'activities'} onClick={closeNav}>
                              Activities and Prizes
                            </Link>
                          </li> */}
                        </li>
                        {/* <li className="NavContent-item">
                          <a href="#">Speakers</a>
                          </li>
                          <li className="NavContent-item">
                          <a href="#">Agenda</a>
                        </li> */}
                        <li className="NavContent-item">
                          <Link to={'code-of-conduct/'} onClick={closeNav}>
                            Code of Conduct
                          </Link>
                        </li>
                        <li className="NavContent-item">
                          <ScrollIntoView selector="#agenda">
                            {/* <Link to={''} onClick={closeNavDefaultPrevent}> */}
                            Our program
                            {/* </Link> */}
                          </ScrollIntoView>
                        </li>
                      </ul>
                    </section>

                    <section className="NavContent-section">
                      <h2 className="NavContent-title">What do you want to do?</h2>
                      <ul className="NavContent-items">
                        <li className="NavContent-item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={config.ticketUrl}
                          >
                            Free Viking tickets
                          </a>
                        </li>
                        <li className="NavContent-item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={config.ticketUrl}
                          >
                            in-person tickets
                          </a>
                        </li>
                        {/* <li className="NavContent-item">
                          <a target="_blank" rel="noopener noreferrer" href={config.twitterUrl}>
                            Share on Twitter
                          </a>
                        </li> */}
                        <li className="NavContent-item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={config.youtubeUrl}
                          >
                            Subscribe on Youtube
                          </a>
                        </li>
                        {/* <li className="NavContent-item">
                          <a target="_blank" rel="noopener noreferrer" download="" href="#">
                            Become sponsor
                          </a>
                        </li> */}
                      </ul>
                    </section>
                  </div>

                  <div className="NavContent-row">
                    <section className="NavContent-section">
                      <h2 className="NavContent-title">How do you want to reach us?</h2>
                      <ul className="NavContent-items">
                        <li className="NavContent-item">
                          <div className="NavContact">
                            <div className="NavContact-label">Write to:</div>
                            <div className="NavContact-value">
                              <a href="mailto:team@flutterVikings.com">
                                team@flutterVikings..com
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </section>

                    <section className="NavContent-section">
                      <h2 className="NavContent-title">Subscribe our newsletter</h2>
                      <div className="NavContent-newsletter">
                        <div className="NavContent-item">
                          <form
                            action="https://fluttervikings.us2.list-manage.com/subscribe/post?u=04d2c285193cfdda93a775eae&amp;id=e6a702864d"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="NewsletterForm"
                            target="_blank"
                          >
                            <div className="NewsletterForm-input">
                              <span className="InputHoshi InputHoshi--nav">
                                <input
                                  className="InputHoshi-field"
                                  defaultValue=""
                                  type="email"
                                  name="EMAIL"
                                  id="mce-EMAIL"
                                  placeholder="Your Email"
                                />
                                <label className="InputHoshi-label" htmlFor="mce-EMAIL">
                                  <span className="InputHoshi-border" />
                                </label>
                              </span>
                            </div>

                            <div className="NewsletterForm-submit">
                              <input
                                type="submit"
                                className="Btn Btn--regular Btn--bordered"
                                value="Subscribe"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
                  </div>

                  <section className="NavContent-bottom">
                    <a
                      className="NavContent-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={config.twitterUrl}
                    >
                      {/* <svg width="25px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg> */}
                      @flutterVikings
                    </a>

                    <a
                      className="NavContent-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={config.youtubeUrl}
                    >
                      {/* <svg width="25px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg> */}
                      flutterVikings.com/youtube
                    </a>
                  </section>
                </nav>
              </div>
            </div>
          );
        }}
      </ThemeConsumer>
    ),
    [hideOnScroll, isOpen],
  );
};

export { Nav };
