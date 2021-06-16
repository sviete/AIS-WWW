import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import Translate, {translate} from '@docusaurus/Translate';
import googlePlayLogo from '../../static/img/main/google-play-badge.png';
import domDemoLogo from '../../static/img/main/Anzela-Demo.png';
import Typewriter from 'typewriter-effect';
import AisCarousel from '../components/AisCarousel';


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
            <div className={classnames('col col--5 col--offset-1')}>
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
                    Automatyka domowa która działa.
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
              <a href="docs/ais_bramka_index">
                <img alt="AIS dom logo" className={styles.heroLogo} src="img/logo-responsive.svg" />
              </a>

            </div>
            <div className={classnames('col col--5')}>
                <br></br>
                 <h4>
                  <Translate
                      id="homepage.demo_ask_to_try"
                      description="The homepage ask to try demo">
                      Chcesz zobaczyć, jak to działa?
                  </Translate>
                  </h4>
                <Link to="https://dom-demo.paczka.pro">
                  <Image className={styles.aisDemoImg} img={domDemoLogo} alt="Dom demo"/>
                </Link>
                <div className={styles.Text}>
                <Translate
                      id="homepage.demo_tip"
                      description="The homepage tip to try demo">
                      Kliknij mnie 👆 aby przejść do demo.
                  </Translate>
                </div>
            </div>
          </div>

          <div className={classnames(styles.announcement)}>
            <div className={styles.announcementInner}>
            <div className={styles.buttons}>
              <a href="https://play.google.com/store/apps/details?id=pl.sviete.dom" aria-label={translate({message: 'Zainstaluj z Google Play.', description: 'Install from Google Play label',})}>
                <Image img={googlePlayLogo} alt="AIS in Google Play"/>
              </a>
            </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.MouseContainer}>
      <div className={styles.Mouse}>
        <span className={styles.MouseWheel} />
      </div>

      <div className={styles.ScrollText}>
                <Translate
                      id="homepage.scroll_tip"
                      description="The homepage tip to scroll">
                      Przewiń
                  </Translate>


        </div>
    </div>
    </div>
      
      <div className="container">
        <div className={classnames('row', styles.aisDiferencesFromOthers)}>
        <h1>
          <br/>
          <Translate
                id="homepage.ais_one_gate_for_all_text"
                description="One gate to rule them all text">
                  Wiele inteligentnych urządzeń gotowych by nimi sterować!
            </Translate>
        </h1>
        <AisCarousel/>
        </div>
     </div>

    <div className={classnames(styles.announcement, styles.announcementDark, "announcementDark")}>
        <div className={styles.announcementInner}>
            <span>
            <Translate
                id="homepage.ais_announcement_line_one"
                description="Announcement line one">
                  Łączymy zalety lokalnego sterowania i automatyzacji z usługami w chmurach.
            </Translate>
              <br/>
              <Translate
                id="homepage.ais_announcement_line_two"
                description="Announcement line two">
                  Nasza bramka AIoT jest kompatybilna z popularnymi urządzeniami automatyki domowej, zawiera wiele wbudowanych integracji i ma aktywną społeczność użytkowników, która dzieli się pomysłami i rozwiązaniami.
            </Translate>
            <br/><br/>
            <img alt="AIS gate"  src="img/ais_gate.png" />
            <br/>
            <Translate
              id="homepage.ais_announcement_line_three"
              description="Announcement line three">
              Razem integrujemy fajny świat inteligentnych rzeczy, którymi można sterować i automatyzować. Świat, w którym jesteśmy niezależni, w którym są społeczności tworzone wokół otwartych projektów, w którym jest tak wiele możliwości i samouczków. Chcemy,  żeby ten świat był bardziej dostępny dla wszystkich ludzi.
          </Translate>
            </span>
        </div>
      </div>

      <main>
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
      </main>
    </Layout>
  );
}

export default Home;
