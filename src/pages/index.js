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
import Typewriter from 'typewriter-effect';
import { Carousel } from '@trendyol-js/react-carousel';


export const Highlight = ({children, color, textColor}) => ( <span style={{
  backgroundColor: color,
  color: textColor,
  padding: '90px 0',
  display: 'block',
  height: '100%',
  textAlign: 'center',
  margin: '1em',
}} className="AisHighlightFuture"> {children} </span> );

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

function getShowFeaturesNum() {
  console.log(window.innerWidth);
  const w = window.innerWidth;
  if (w > 1800) {
    return 3.5;
  }
  if (w > 1200) {
    return 2.5;
  }
  if (w > 600) {
    return 1.5;
  }
  return 1;
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
              <p className="hero__subtitle">
                <Translate
                    id="homepage.hero_subtitle"
                    description="The homepage hero subtitle">
                    Automatyka domowa która działa.
                </Translate>
                <Typewriter
                  options={{
                    strings: [
                      'Lokalnie.', 'Niezawodnie.', 'Szybko.', 'Prywatnie.', 'Prosto.'
                  ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
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
        </div>
     </div>

    <Carousel className={'exampleCarousel1'} show={getShowFeaturesNum()} slide={1} swiping={true}>
            
      <Highlight color="#2d66c3" textColor="#fff">
        <Translate
          id="homepage.ais_features.wifi.title"
          description="Wifi number devices title"
          values={{devices: <span className="strongInfo">1990</span>}}>
          {'Ponad {devices} urządzeń WiFi'}
          </Translate>
          <br/>
          <Translate
              id="homepage.ais_features.wifi.description"
              description="Wifi number devices description"
              values={{
                aisSocket: <Link to="/docs/ais_iot_s26">WiFi S26</Link>,
                moreWiFiDevices: <Link to="https://templates.blakadder.com/index.html">1990</Link>,
                aizWifiImg: <Link to="/docs/ais_iot_s26" alt="AIS Wifi"> <br /> 
                  <div className="CarouselImage">
                    <img alt="AIS dom feature" src="img/ais_wifi_mini.png" alt="zigbee adapter" />
                  </div>
                </Link>
              }}>
            {'Inteligentne gniazdo {aisSocket} to najprostszy sposób, by sterować urządzeniami w domu. {aizWifiImg} Urządzenie działa na oprogramowaniu, którego źródła oraz skompilowaną wersję udostępniamy za darmo. Dzięki czemu masz do wyboru {moreWiFiDevices} różnych urządzeń WiFi, które możesz podłączyć do bramki w ten sam prosty sposób jak nasze Inteligentne gniazdo.'}
          </Translate>
      </Highlight>

      <Highlight color="#f9f8f6" textColor="black">  ‍
        <Translate
          id="homepage.ais_features.zigbee.title"
          description="Zigbee number devices title"
          values={{devices: <span className="strongInfo">1490 🐝</span>}}>
          {'Ponad {devices} urządzeń Zigbee'}
        </Translate>
        <br/>
        <Translate
            id="homepage.ais_features.zigbee.description"
            description="Zigbee number devices description"
            values={{
              aisZigbee: <Link to="/docs/ais_zigbee_index">Zigbee2Mqtt</Link>,
              moreZigbeeDevices: <Link to="https://www.zigbee2mqtt.io/information/supported_devices.html">1490</Link>,
              aizZigbeeConnbee2Img: <Link to="/docs/ais_zigbee_index" alt="AIS in Google Play"> <br /> <img alt="AIS dom feature" src="img/ais_con_bee2_mini.jpg" alt="zigbee adapter" /></Link>
            }}
        >
          {'Dzięki {aisZigbee} możesz łatwo dołączyć do bramki urządzenia Zigbee.  {aizZigbeeConnbee2Img} Ponad {moreZigbeeDevices} jest wspieranych przez oprogramowanie Zigbee2Mqtt które dostarczamy na bramce.'}
        </Translate>
    </Highlight>

    <Highlight color="#16be48" textColor="#fff">We love Zwave 😍
      <Translate
          id="homepage.ais_features.voice.title"
          description="Voice commands in AIS title"
          values={{aisTtsStt: <span className="strongInfo">Zwave</span>}}
          >
          {'{aisTtsStt}'}
      </Translate>
      <Translate
            id="homepage.ais_features.zwave.description"
            description="Zwave in AIS description"
            values={{
              aisZwave: <Link to="/docs/ais_app_integration_zwave">ZwaveJs2Mqtt</Link>
            }}
        >
          {'Na bramce dostarczamy {aisZwave}, dzięki czemu możesz łatwo dodać do bramki obsługę swoich urządzeń Zwave i nimi sterować. Automatyzować ich działanie oraz sterować komendami głosowymi.'}
        </Translate>
      </Highlight>
    
    <Highlight color="#d53f8c" textColor="#fff">
      <Translate
          id="homepage.ais_features.ha.title"
          description="HA number of integrations title"
          values={{devices: <span className="strongInfo">1800</span>}}>
          {'Ponad {devices} Integracji Home Assistant'}
      </Translate>
      <Translate
          id="homepage.ais_features.ha.description"
          description="HA number of integrations description"
          values={{
            aisHomeAssistant: <Link to="https://www.home-assistant.io/">Home Assistant Core</Link>,
            aisHomeAssistantIntegrations: <Link to="/docs/ais_app_player">AIS</Link>,
            moreHomeAssistantMoreIntegrations: <Link to="https://www.home-assistant.io/integrations/#all">1800 HA Integrations</Link>
          }}
       >
        {'Jedną ze składowych oprogramowania dostarczanego na bramce jest system automatyki domowej {aisHomeAssistant} z zainstalowanymi i gotowymi do użycia wbudowanymi integracjami {aisHomeAssistantIntegrations}, oraz z możliwością dodania ponad {moreHomeAssistantMoreIntegrations} które są wspierane i rozwijanych przez społeczność skupioną wokół projektu Home Assistant.'}
      </Translate>
    </Highlight>


    <Highlight color="#d53f8c" textColor="#fff">We love Zwave 😍
          <Translate
            id="homepage.ais_features.voice.title"
            description="Voice commands in AIS title"
            values={{aisTtsStt: <span className="strongInfo">TTS/STT</span>}}
            >
            {'Komunikacja głosowa {aisTtsStt}'}
        </Translate>
        <Translate
            id="homepage.ais_features.voice.description"
            description="Voice commands in AIS description"
            values={{
              aisVoiceCommands: <Link to="/docs/ais_app_assistent_commands">AIS TTS/STT</Link>,
              aisVoiceCommandsWeb: <Link to="/docs/ais_app_index">AIS Web App</Link>,
              aisVoiceCommandsMob: <Link to="/docs/ais_app_android_dom">AIS Mob App</Link>,
              aisVoiceCommandsRemote: <Link to="/docs/ais_remote_index">AIS Remote</Link>,
              aisVoiceCommandsApi: <Link to="/docs/ais_bramka_api_index">AIS API</Link>,
              aisVoiceCommandsCreate: <Link to="/docs/ais_app_assistent_add_command">AIS Conversation</Link>
            }}
        >
          {'Na bramce dostarczamy {aisVoiceCommands} (zamianę tekstu na mowę i mowy na tekst) oraz wbudowane komendy, dzięki czemu możesz sterować dołączonymi urządzeniami za pomocą poleceń głosowych. Komendy można przesyłać z aplikacji działającej w przeglądarce {aisVoiceCommandsWeb}, aplikacji mobilnej {aisVoiceCommandsMob} lub pilota z mikrofonem {aisVoiceCommandsRemote}.  Można też wysyłać komendy z innych systemów/aplikacji za pomocą {aisVoiceCommandsApi}. Oraz definiować własne komendy {aisVoiceCommandsCreate}.'}
        </Translate>
      </Highlight>
      
      <Highlight color="#f27a1a" textColor="#fff">Audio 😍
        <Translate
            id="homepage.ais_features.audio.description"
            description="Audio in AIS description"
            values={{
              aisAudioPlayer: <Link to="/docs/ais_app_player">AIS Audio Player</Link>,
              aisAudioYouTube: <Link to="/docs/ais_app_youtube_dl">YouTube</Link>,
              aisAudioSpotify: <Link to="/docs/ais_app_spotify">Spotify</Link>,
              aisAudioPortal: <Link to="/docs/ais_app_add_media">Media</Link>
            }}
        >
          {'Na bramce dostarczamy wbudowany odtwarzacz audio {aisAudioPlayer}, za pomocą którego możesz odtwarzać setki stacji radiowych, podcastów, darmowych audiobooków, darmowe treści z {aisAudioYouTube} oraz {aisAudioSpotify}. Istnieje też możliwość odtwarzania mediów udostępnionych przez innych użytkowników oraz definiowania własnych dodatkowych zasobów mediów i udostępniania ich dla społeczności {aisAudioPortal}.'}
        </Translate>
       </Highlight>

       <a target="_blank" href="https://github.com/sviete/">
        <Highlight color="#303846" textColor="#fff">AIS ❤️ OpenSource 
          <Translate
              id="homepage.ais_features.audio.description"
              description="Audio in AIS description"
              values={{
                aisAudioPlayer: <Link to="/docs/ais_app_player">AIS Audio Player</Link>,
                aizOpenSourceImg: <Link to="/docs/ais_iot_s26" alt="AIS Wifi"> <br /> 
                  <div className="CarouselImage">
                    <img alt="AIS dom feature" src="img/ais_opensource_mini.png" alt="zigbee adapter" />
                  </div>
                </Link>
              }}
          >
            {' {aizOpenSourceImg} .'}
          </Translate>
        </Highlight>
       </a>
    </Carousel>

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
