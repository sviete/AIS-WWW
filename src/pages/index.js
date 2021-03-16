import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import Translate, {translate} from '@docusaurus/Translate';
import googlePlayLogo from '../../static/img/main/google-play-badge.png';
import domDemoLogo from '../../static/img/main/Anzela-Demo.png';


const ais_features = [
  {
    title:
    <Translate
        id="homepage.ais_features.wifi.title"
        description="Wifi number devices title"
        values={{devices: <span className="strongInfo">1900</span>}}>
        {'Ponad {devices} urządzeń WiFi'}
    </Translate>,
    imageUrl: 'img/main/wifi.svg',
    imageBttomUrl: 'img/main/wifi.svg',
    description: (
      <Translate
          id="homepage.ais_features.wifi.description"
          description="Wifi number devices description"
          values={{
            aisSocket: <Link to="/docs/ais_iot_s26">WiFi S26</Link>,
            moreWiFiDevices: <Link to="https://templates.blakadder.com/index.html">1900</Link>
          }}
       >
        {'Inteligentne gniazdo {aisSocket} to najprostszy sposób, by dodać odrobinę inteligencji do urządzeń w domu. Urządzenie działa na oprogramowaniu, którego źródła oraz skompilowaną wersję udostępniamy za darmo. Dzięki czemu masz do wyboru {moreWiFiDevices} różnych urządzeń WiFi, które możesz podłączyć do bramki w ten sam prosty sposób jak nasze Inteligentne gniazdo.'}
      </Translate>
    ),
    addClass: 'col col--4 aisFeature row1',
    addImgClass: 'aisFeatureImg',
  },
  {
    title:
    <Translate
        id="homepage.ais_features.zigbee.title"
        description="Zigbee number devices title"
        values={{devices: <span className="strongInfo">1350</span>}}>
        {'Ponad {devices} urządzeń Zigbee'}
    </Translate>,
    imageUrl: 'img/main/zigbee.svg',
    imageBttomUrl: 'img/main/zigbee.svg',
    description: (
      <Translate
          id="homepage.ais_features.zigbee.description"
          description="Zigbee number devices description"
          values={{
            aisZigbee: <Link to="/docs/ais_zigbee_index">Zigbee2Mqtt</Link>,
            moreZigbeeDevices: <Link to="https://www.zigbee2mqtt.io/information/supported_devices.html">1350</Link>
          }}
       >
        {'Dzięki {aisZigbee} możesz łatwo dołączyć do bramki urządzenia Zigbee.  Ponad {moreZigbeeDevices} jest wspieranych przez oprogramowanie Zigbee2Mqtt które dostarczamy na bramce.'}
      </Translate>
    ),
    addClass: 'col col--4 aisFeature row1',
    addImgClass: 'aisFeatureImg',
  },
  {
    title:
    <Translate
        id="homepage.ais_features.ha.title"
        description="HA number of integrations title"
        values={{devices: <span className="strongInfo">1740</span>}}>
        {'Ponad {devices} Integracji Home Assistant'}
    </Translate>,
    imageUrl: 'img/main/ha.svg',
    imageBttomUrl: 'img/main/ha.svg',
    description: (
      <Translate
          id="homepage.ais_features.ha.description"
          description="HA number of integrations description"
          values={{
            aisHomeAssistant: <Link to="https://www.home-assistant.io/">Home Assistant Core</Link>,
            aisHomeAssistantIntegrations: <Link to="/docs/ais_app_player">AIS</Link>,
            moreHomeAssistantMoreIntegrations: <Link to="https://www.zigbee2mqtt.io/information/supported_devices.html">1740 HA Integrations</Link>
          }}
       >
        {'Jedną ze składowych oprogramowania dostarczanego na bramce jest system automatyki domowej {aisHomeAssistant} z zainstalowanymi i gotowymi do użycia wbudowanymi integracjami {aisHomeAssistantIntegrations}, oraz z możliwością dodania ponad {moreHomeAssistantMoreIntegrations} które są wspierane i rozwijanych przez społeczność skupioną wokół projektu Home Assistant.'}
      </Translate>
    ),
    addClass: 'col col--4 aisFeature row1',
    addImgClass: 'aisFeatureImg',
  },
  {
    title:
    <Translate
        id="homepage.ais_features.voice.title"
        description="Voice commands in AIS title">
        Sterowanie głosowe
    </Translate>,
    imageUrl: 'img/main/account-voice.svg',
    imageBttomUrl: '',
    description: (
      <Translate
          id="homepage.ais_features.voice.description"
          description="Voice commands in AIS description"
          values={{
            aisVoiceCommands: <Link to="/docs/ais_app_assistent_commands">AIS TTS/STT</Link>,
            aisVoiceCommandsWeb: <Link to="/docs/ais_app_index">AIS Web App</Link>,
            aisVoiceCommandsMob: <Link to="/docs/ais_app_android_dom">AIS Mob App</Link>,
            aisVoiceCommandsRemote: <Link to="/docs/ais_remote_index">AIS Remote</Link>,
            aisVoiceCommandsApi: <Link to="/docs/ais_bramka_api_index">STT API</Link>,
            aisVoiceCommandsCreate: <Link to="/docs/ais_app_assistent_add_command">AIS Conversation</Link>
          }}
       >
        {'Na bramce dostarczamy {aisVoiceCommands} (zamianę tekstu na mowę i mowy na tekst) oraz wbudowane komendy, dzięki czemu możesz sterować dołączonymi urządzeniami za pomocą poleceń głosowych. Komendy można przesyłać z aplikacji działającej w przeglądarce {aisVoiceCommandsWeb}, aplikacji mobilnej {aisVoiceCommandsMob} lub pilota z mikrofonem {aisVoiceCommandsRemote}.  Można też wysyłać komendy z innych systemów/aplikacji za pomocą {aisVoiceCommandsApi}. Oraz definiować własne komendy {aisVoiceCommandsCreate}.'}
      </Translate>

    ),
    addClass: 'col col--4 col--offset-2 aisFeature row2',
    addImgClass: 'aisFeatureImg',
  },
  {
    title: <>Audio</>,
    imageUrl: 'img/main/monitor-speaker-2.svg',
    imageBttomUrl: '',
    description: (
      <Translate
          id="homepage.ais_features.audio.description"
          description="Audio in AIS description"
          values={{
            aisAudioPlayer: <Link to="/docs/ais_app_player">AIS Audio Player</Link>,
            aisAudioYouTube: <Link to="/docs/ais_app_youtube_dl">YouTube</Link>,
            aisAudioSpotify: <Link to="/docs/ais_app_spotify">Spotify</Link>,
            aisAudioPortal: <Link to="/docs/ais_dom_cloud_login">AIS Portal</Link>
          }}
       >
        {'Na bramce dostarczamy wbudowany odtwarzacz audio {aisAudioPlayer}, za pomocą którego możesz odtwarzać setki stacji radiowych, podcastów, darmowych audiobooków, darmowe treści z {aisAudioYouTube} oraz {aisAudioSpotify}. Istnieje też możliwość definiowania własnych dodatkowych treści audio w {aisAudioPortal}.'}
       </Translate>

    ),
    addClass: 'col col--4 aisFeature row2',
    addImgClass: 'aisFeatureImg',
  },
];


function Feature({imageUrl, imageBttomUrl, title, description, addClass, addImgClass}) {
  const imgUrl = useBaseUrl(imageUrl);
  const imgBottomUrl = useBaseUrl(imageBttomUrl);
  return (
    <div className={classnames(addClass, styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img alt="AIS dom feature" className={classnames(addImgClass, styles.aisComiksImg)} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="aisFeatureTitle">{title}</div>
      <div>{description}</div>
    </div>
  );
}

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
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title">
                <Translate
                    id="homepage.hero_title"
                    description="The homepage hero title">
                    Asystent domowy
                </Translate>
              </h1>
              <p className="hero__subtitle">
                <Translate
                    id="homepage.hero_subtitle"
                    description="The homepage hero subtitle">
                    Lokalny, niezawodny, szybki i prywatny.
                </Translate>
              </p>
              <div className={styles.buttons}>
                <a href="https://play.google.com/store/apps/details?id=pl.sviete.dom" aria-label={translate({message: 'Zainstaluj z Google Play.', description: 'Install from Google Play label',})}>
                  <Image img={googlePlayLogo} alt="AIS in Google Play"/>
                </a>
              </div>
            </div>
            <div className={classnames('col col--5')}>
              <a href="docs/ais_bramka_index">
                <img alt="AIS dom logo" className={styles.heroLogo} src="img/logo-responsive.svg" />
              </a>
            </div>
          </div>
          <div className={classnames(styles.announcement)}>
            <div className={styles.announcementInner}>
                <Translate
                    id="homepage.demo_ask_to_try"
                    description="The homepage ask to try demo">
                    Chcesz zobaczyć, jak to działa?
                </Translate>
              <br></br>
              <Link to="https://dom-demo.paczka.pro">
                <Image className={styles.aisDemoImg} img={domDemoLogo} alt="Dom demo"/>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className={classnames(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
            <p>
            <Translate
                id="homepage.ais_announcement_line_one"
                description="Announcement line one">
                  Automatyzujemy, łącząc zalety lokalnego przetwarzania
            </Translate>
              <br/>
              <Translate
                id="homepage.ais_announcement_line_two"
                description="Announcement line two">
                  z łącznością z usługami w chmurze IoT.
            </Translate>
            </p>
        </div>
      </div>

      <div className="container">
        <div className={classnames('row', styles.aisDiferencesFromOthers)}>
        <h1>
          <br/>
          <Translate
                id="homepage.ais_one_gate_for_all_text"
                description="One gate to rule them all text">
                  Wiele inteligentnych urządzeń i jeden system, by nimi sterować!
            </Translate>
        </h1>
        </div>
     </div>

      <main>
        {ais_features && ais_features.length && (
          <section className={styles.features}>
            <div className="container aisFeaturesConteiner">
              <div className="pulse-container">
              </div>
              <div className="row aisFeatures">
                {ais_features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
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
