import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import Typewriter from 'typewriter-effect';
import HomepageFeatures from '../components/HomepageFeatures'


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={
        translate({
          message: 'Dokumentacja AIS',
          description: 'The homepage title',
        })
      }
      description={
        translate({
          message: 'Automatyzujemy Twój dom lokalnie.',
          description: 'The homepage description',
        })
      }>
      <div className={styles.Container}>
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--6 col--offset-1')}>
              <h1 className="hero__title">
                <Translate
                    id="homepage.hero_title"
                    description="The homepage hero title">
                    AI-Speaker
                </Translate>
              </h1>
              <div className="hero__subtitle">
                <Translate
                    id="homepage.hero_subtitle"
                    description="The homepage hero subtitle">
                    Automatyka, która działa.
                </Translate>
                <Typewriter
                  options={{
                    strings: [
                        translate({
                          message: 'Lokalnie.',
                          description: 'The typewriter item Lokalnie',
                        }),
                        translate({
                          message: 'Niezawodnie.',
                          description: 'The typewriter item Niezawodnie',
                        }),
                        translate({
                          message: 'Szybko.',
                          description: 'The typewriter item Szybko',
                        }),
                        translate({
                          message: 'Prywatnie.',
                          description: 'The typewriter item Prywatnie',
                        }),
                        translate({
                          message: 'Prosto.',
                          description: 'The typewriter item Prosto',
                        })
                  ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            {/* <div className={classnames(styles.heroLogo)}>
                <Link to="https://allegro.pl/uzytkownik/AI-Speaker">
                <img src="/img/allegro.png"></img>
                </Link>
                <a href="https://allegro.pl/uzytkownik/AI-Speaker">
                  <div className={styles.Text}>
                  <Translate
                        id="homepage.allegro_tip"
                        description="The homepage tip to try demo">
                        Kliknij 👆 aby przejść do sklepu.
                    </Translate>
                </div>
                </a>
            </div> */}

            <div className={classnames(styles.heroLogo)}>
                <Link to="https://dom-842b4861bcb86d18.paczka.pro">
                  <img alt="AIS dom demo" src="img/start_live_demo.png" />
                </Link>
                <div className={styles.Text}>
                  <a href="https://dom-842b4861bcb86d18.paczka.pro">
                  <Translate
                        id="homepage.demo_tip"
                        description="The homepage tip to try demo">
                        Kliknij 👆 aby przejść do demo.
                    </Translate>
                  </a>
                </div>
            </div>
            
          </div>
        
          <HomepageFeatures/>

          <div className="row">
            <div className={classnames('col logo-text-right')}>
              <a href="https://play.google.com/store/apps/details?id=pl.sviete.dom" aria-label={translate({message: 'Zainstaluj z Google Play.', description: 'Install from Google Play label',})}>
                <img src="img/main/google-play-badge.png" alt="AIS in Google Play" width="160px"/>
              </a>
            </div>

            <div className={classnames('col logo-text-left')}>
              <a href="https://apps.apple.com/us/app/home-assistant/id1099568401" aria-label={translate({message: 'Zainstaluj z Apple Store.', description: 'Install from Apple Store label',})}>
                <img src="img/main/apple-store-badge.png" alt="AIS in Apple Store" width="160px"/>
              </a>
            </div>
          </div>

        </div>
      </header>
    </div>

    {/* <AisSlider/> */}

      {/* <main>
        <section className={styles.loveSection}>
          <div className={classnames('container')}>
            <div className="row">
              <div className={classnames('col col--10', styles.aisPeoples)}>
                <div className="aisFeatureTitle">
                  <Translate
                    id="homepage.ais_project_people_info"
                    description="This project is sponsored by people info">
                      Projekt tworzony i sponsorowany przez ludzi - dziękujemy!
                  </Translate>
              </div>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Andrzej.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Sebastian.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Celka.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Rysio.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Anzela.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Michal.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Bartek.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Asia.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Piotrek.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Kasia.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Tomek.webp" /></a>
                <a href="https://github.com/sviete"><img alt="AIS dom user" className={styles.sponsorImg} src="img/main/Ania.webp" /></a>
              </div>


              <div className={classnames('col col--2', styles.loveSectionPlea)}>
                <div>
                  <a href="https://allegro.pl/uzytkownik/AI-Speaker">
                    <img alt="AIS dom join us" className={styles.loveImg} src="img/main/join_new_user.svg" alt="Join US" />
                  </a>
                </div>
                <Link
                  className={classnames('button button--danger')}
                  to="https://allegro.pl/uzytkownik/AI-Speaker">
                  <Translate
                    id="homepage.ais_project_join_button_line_1"
                    description="Join button line 1">
                      ZOSTAŃ BOHATEREM.
                  </Translate>
                  <br/>
                  <Translate
                    id="homepage.ais_project_join_button_line_2"
                    description="Join button line 2">
                      Kup nasze urządzenie i
                  </Translate>
                  <br/>
                  <Translate
                    id="homepage.ais_project_join_button_line_3"
                    description="Join button line 3">
                      wesprzyj nasz projekt.
                  </Translate>
                  <br/>
                  <Translate
                    id="homepage.ais_project_join_button_line_4"
                    description="Join button line 4">
                      Dołącz do nas!
                  </Translate>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main> */}

    </Layout>
  );
}

export default Home;
