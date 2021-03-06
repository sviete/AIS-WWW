import React from  'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Carousel } from '@trendyol-js/react-carousel';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export const Highlight = ({children, color, textColor}) => ( <span style={{
  backgroundColor: color,
  color: textColor,
  padding: '10px 0',
  display: 'block',
  height: '650px',
  textAlign: 'center',
  margin: '10px',
}} className="AisHighlightFuture"> {children} </span> );


export const AisCarousel = () => {

  if (typeof window !== "undefined") {
    const w = window.innerWidth;
    let cards_no = 3.5;
    if (w <= 600) {
      cards_no = 1;
    }
    if (w > 600) {
      cards_no = 1.5;
    }
    if (w > 1200) {
      cards_no = 2.5;
    }
    if (w > 1600) {
      cards_no =  3.5;
    }
    if (w > 1900) {
      cards_no =  4.5;
    }

  return (
    <Carousel className={'exampleCarousel1'} show={cards_no} slide={1} swiping={true} swipeOn={0.3} useArrowKeys={true} responsive={true}>



        <Highlight color="#ffffff" textColor="black">  ‍
          <Translate
            id="homepage.ais_features.zigbee.title"
            description="Zigbee number devices title"
            values={{devices: <span className="strongInfo">1540 🐝</span>}}>
            {'Ponad {devices} urządzeń Zigbee'}
          </Translate>
          <br/>
          <Translate
              id="homepage.ais_features.zigbee.description"
              description="Zigbee number devices description"
              values={{
                aisZigbee: <Link to="/docs/ais_zigbee_index">Zigbee2Mqtt</Link>,
                moreZigbeeDevices: <Link to="https://www.zigbee2mqtt.io/information/supported_devices.html">1540</Link>,
                aizZigbeeConnbee2Img: <Link to="/docs/ais_zigbee_index" alt="AIS in Google Play"> <br /><br /> <img alt="AIS dom feature" src="img/ais_con_bee2_mini.jpg" alt="zigbee adapter" /><br /></Link>
              }}
          >
            {'Dzięki {aisZigbee} możesz łatwo dołączyć do bramki urządzenia Zigbee.  {aizZigbeeConnbee2Img} Ponad {moreZigbeeDevices} urządzeń Zigbee od 220 producentów jest wspieranych przez oprogramowanie Zigbee2Mqtt, które dostarczamy na bramce.'}
          </Translate>
      </Highlight>

      <Highlight color="#16be48" textColor="#fff">
        <Translate
            id="homepage.ais_features.zwave.title"
            description="Voice commands in AIS title"
            values={{aisTtsStt: <span className="strongInfo">Zwave 🌊🌊🌊<br /></span>}}
            >
            {'{aisTtsStt}'}
        </Translate>
        <Translate
              id="homepage.ais_features.zwave.description"
              description="Zwave in AIS description"
              values={{
                aisZwave: <Link to="/docs/ais_app_integration_zwave">ZwaveJs2Mqtt</Link>,
                aizZigbeeConnbee2Img: <Link to="/docs/ais_app_integration_zwave" alt="AIS in Google Play"> <br /><br /> <img alt="AIS dom feature" src="img/ais_zwave_mini.png" alt="zigbee adapter" /><br /></Link>
              }}
          >
            {'Na bramce dostarczamy {aisZwave}, dzięki czemu możesz dodać do bramki obsługę swoich urządzeń Zwave. {aizZigbeeConnbee2Img} Zwave zapewnia interoperacyjność wszystkich certyfikowanych produktów, dlatego każde certyfikowane urządzenie Z-Wave może działać z bramką.'}
          </Translate>
      </Highlight>


      <Highlight color="#2d66c3" textColor="#fff">
          <Translate
            id="homepage.ais_features.wifi.title"
            description="Wifi number devices title"
            values={{devices: <span className="strongInfo">2020 🌐 </span>}}>
            {'Ponad {devices} urządzeń WiFi'}
            </Translate>
            <br/>
            <Translate
                id="homepage.ais_features.wifi.description"
                description="Wifi number devices description"
                values={{
                  aisSocket: <Link to="/docs/ais_iot_s26">WiFi S26</Link>,
                  moreWiFiDevices: <Link to="https://templates.blakadder.com/index.html">2020</Link>,
                  aizWifiImg: <Link to="/docs/ais_iot_s26" alt="AIS Wifi"> <br />
                    <div className="CarouselImage">
                      <img alt="AIS dom feature" src="img/ais_wifi_mini.png" alt="zigbee adapter" />
                    </div>
                  </Link>
                }}>
              {'Inteligentne gniazdo {aisSocket} to najprostszy sposób, by sterować lokalnie urządzeniami w domu. {aizWifiImg} Urządzenie działa na oprogramowaniu, którego źródła oraz skompilowaną wersję udostępniamy za darmo. Dzięki temu masz do wyboru ponad {moreWiFiDevices} różnych urządzeń WiFi, które możesz podłączyć do bramki w ten sam prosty sposób, co nasze Inteligentne gniazdo.'}
            </Translate>
        </Highlight>

      <Highlight color="#febfb8" textColor="#000">
            <Translate
              id="homepage.ais_features.voice.title"
              description="Voice commands in AIS title"
              values={{aisTtsStt: <span className="strongInfo">📣 TTS/STT 🎙️</span>}}
              >
              {'Komunikacja głosowa {aisTtsStt}'}
          </Translate>
          <br/>
          <Translate
              id="homepage.ais_features.voice.description"
              description="Voice commands in AIS description"
              values={{
                aisVoiceCommands: <Link to="/docs/ais_app_assistent_commands">AIS TTS/STT <br /></Link>,
                aisVoiceCommandsWeb: <Link to="/docs/ais_app_index">AIS Web App</Link>,
                aisVoiceCommandsMob: <Link to="/docs/ais_app_android_dom">AIS Mob App</Link>,
                aisVoiceCommandsRemote: <Link to="/docs/ais_remote_index">AIS Remote</Link>,
                aisVoiceCommandsApi: <Link to="/docs/ais_bramka_api_index">AIS API</Link>,
                aisVoiceCommandsCreate: <Link to="/docs/ais_app_assistent_add_command">AIS Conversation</Link>,
                aisTtsSttImg: <Link to="/docs/ais_app_ai_integration" alt="AIS Integrations"> <br /><br /> <img alt="AIS dom feature" src="img/ais_assistant_mini.jpg" alt="zigbee adapter" /><br /></Link>
              }}
          >
            {'Na bramce dostarczamy zamianę tekstu na mowę i mowy na tekst {aisVoiceCommands} Możesz sterować urządzeniami za pomocą poleceń głosowych. {aisTtsSttImg} Komendy można przesyłać z przeglądarki {aisVoiceCommandsWeb}, aplikacji mobilnej {aisVoiceCommandsMob} lub pilota z mikrofonem {aisVoiceCommandsRemote}.  Można też wysyłać komendy z innych systemów/aplikacji za pomocą {aisVoiceCommandsApi} oraz definiować własne komendy {aisVoiceCommandsCreate}.'}
          </Translate>
        </Highlight>

        <Highlight color="black" textColor="#fff">
          <span className="strongInfo">Audio 📻</span>
          <br/>
          <Translate
              id="homepage.ais_features.audio.description"
              description="Audio in AIS description"
              values={{
                aisAudioPlayer: <Link to="/docs/ais_app_player">AIS Audio Player</Link>,
                aisAudioYouTube: <Link to="/docs/ais_app_youtube_dl">YouTube</Link>,
                aisAudioSpotify: <Link to="/docs/ais_app_spotify">Spotify</Link>,
                aisAudioPortal: <Link to="/docs/ais_app_add_media">Media</Link>,
                aisAudioImg: <Link to="/docs/ais_app_ai_integration" alt="AIS Integrations"> <br /><br /> <img alt="AIS dom feature" src="img/ais_audio_mini.png" alt="zigbee adapter" /><br /></Link>
              }}
          >
            {'Na bramce dostarczamy wbudowany odtwarzacz audio {aisAudioPlayer}, za pomocą którego możesz odtwarzać setki stacji radiowych, podcastów, darmowych audiobooków, darmowe treści z {aisAudioYouTube} oraz {aisAudioSpotify}. {aisAudioImg} Istnieje też możliwość odtwarzania mediów udostępnionych przez innych użytkowników oraz definiowania własnych dodatkowych zasobów mediów i udostępniania ich dla społeczności {aisAudioPortal}.'}
          </Translate>
        </Highlight>

        <Highlight color="#ffeb3b" textColor="#000">
        <span className="strongInfo">
          <Translate
              id="homepage.ais_features.ha.title"
              description="HA number of integrations title"
              values={{devices: 1820  }}
          >
              {'Ponad 🏠 {devices} Integracji'}
          </Translate>
        </span>
        <br />
        <Translate
            id="homepage.ais_features.ha.description"
            description="HA number of integrations description"
            values={{
              aisHomeAssistant: <Link to="https://www.home-assistant.io/"> Home Assistant Core</Link>,
              aisHomeAssistantIntegrations: <Link to="/docs/ais_app_player">AIS</Link>,
              moreHomeAssistantMoreIntegrations: <Link to="https://www.home-assistant.io/integrations/#all">1820 HA Integrations</Link>,
              aisHomeAssistantImg: <Link to="/docs/ais_app_ai_integration" alt="AIS Integrations"> <br /><br /> <img alt="AIS dom feature" src="img/ais_ha_mini.png" alt="zigbee adapter" /><br /></Link>
            }}

        >
          {'Jedną ze składowych oprogramowania dostarczanego na bramce jest system automatyki domowej AIS-dom. {aisHomeAssistantImg}  AIS-dom bazuje na {aisHomeAssistant} i posiada wiele wbudowanych integracji {aisHomeAssistantIntegrations} oraz możliwość dodania ponad {moreHomeAssistantMoreIntegrations}, które są wspierane i rozwijane przez społeczność skupioną wokół projektu Home Assistant.'}
        </Translate>
      </Highlight>

      <Highlight color="#ffffff" textColor="black">  ‍
        <span className="strongInfo">
          <Translate
            id="homepage.ais_features.services.title"
            description="Free services title">
            {'🆓 Darmowe usługi ☁️'}
          </Translate>
          </span>
          <br/>
          <Translate
              id="homepage.ais_features.services.description"
              description="Services number devices description"
              values={{
                aisFosshost: <Link to="https://fosshost.org/">fosshost.org</Link>,
                aisFosshostImg: <Link to="/docs/ais_dom_cloud_services_terms" alt="AIS Services"> <br /><br /> <img alt="AIS dom feature" src="img/ais_fosshost_mini.png" alt="zigbee adapter" /><br /></Link>,
              }}
          >
            {'Nasze usługi w chmurze na bramkach DEV są hostowane przez organizację {aisFosshost}. {aisFosshostImg} Fosshost to organizacja non-profit, skupiona na wspieraniu projektów OpenSource.'}
          </Translate>
          <Translate
              id="homepage.ais_features.services.description2"
              description="Services number devices description"
              values={{
                aisFosshostFree: <Link to="/docs/ais_dom_cloud_services_terms"><br /><br />AIS 🆓 ☁️</Link>,
              }}
          >
            {'Dowiedz się więcej o darmowych usługach AIS {aisFosshostFree}'}
          </Translate>
        </Highlight>

      <Highlight color="#303846" textColor="#fff"><span className="strongInfo">AIS ❤️ OpenSource </span>
            <br/>
            <Translate
                id="homepage.ais_features.open.description"
                description="OpenSource in AIS description"
                values={{
                  aisGithub: <Link to="https://github.com/sviete/">AIS Github</Link>,
                }}
            >
              {' Kody zródłowe większości składowych naszego systemu są darmowe i ogólnie dostępne w repozytorium {aisGithub}.'}
            </Translate>
            <Translate
                id="homepage.ais_features.open.description1"
                description="OpenSource in AIS description2"
                values={{
                  aisDevKit1: <Link to="/docs/ais_dev_kit_1_index">AIS DEV KIT1</Link>,
                  aizOpenSourceImg: <Link to="https://github.com/sviete/" alt="AIS Wifi"> <br />
                    <div className="CarouselImage">
                      <img alt="AIS dom feature" src="img/ais_opensource_mini.png" alt="zigbee adapter" />
                    </div>
                  </Link>
                }}
            >
              {' {aizOpenSourceImg} Wierzymy w otwartość i wolność wyboru. Dzięki temu sam możesz wykonać głośnik wg naszego projektu {aisDevKit1}.'}
            </Translate>
          </Highlight>

          <Highlight color="#ffffff" textColor="black">  ‍
          <span className="strongInfo">
            <Translate
              id="homepage.ais_features.pro_services.title"
              description="Pro services title">
              {'🏢 Usługi PRO'}
            </Translate>
            </span>
          <br/>
          <Translate
              id="homepage.ais_features.pro_services.description"
              description="Services number devices description"
              values={{
                aisPro: "Możliwe jest też wykonanie lub dostosowanie funkcjonalności pod zamówienie klienta.",
                aisProImg: <Link to="/docs/ais_dom_cloud_services_terms#bramka-pro" alt="AIS Services"><img alt="AIS dom feature" src="img/ais_sla_mini.png" alt="ais sla" /></Link>,
              }}
          >
            {'Oferujemy bramki w lini prduktowej AIS PRO na których istnieje możliwość wykupienia usług na serwerach komercyjnych z gwarancją działania. {aisProImg}'}
          </Translate>
          <br/>
          <Translate
              id="homepage.ais_features.pro_services.description2"
              description="Services number devices description"
              values={{}}
          >
            {'Jeżeli masz pomysł jak wykorzystać bramkę AIS w komercyjnym produkcje, to skontaktuj się z nami info@ai-speaker.com w celu ustalenia zasad współpracy.'}
          </Translate>
        </Highlight>
        <Highlight color="#ffffff" textColor="black">  ‍
          <span className="strongInfo">
            <Translate
              id="homepage.ais_features.tunnel_service.title"
              description="Tunnel service title">
              {'🛡️ Cloudflare Tunnel'}
            </Translate>
            </span>
          <br/>
          <Translate
              id="homepage.ais_features.tunnel_service.description"
              description="Services number devices description"
          >
            {'Szyfrowany zdalny dostęp do bramki z Internetu.'}
          </Translate>
          <br/>
          <br/>
          <Link to="/docs/ais_bramka_remote_www_index" alt="AIS Services"><img alt="AIS dom feature" src="img/ais_tunnel_service.png" alt="ais tunnel service" /></Link>

          <br/>
          <br/>
          <Translate
              id="homepage.ais_features.tunnel_service.description2"
              description="Services number devices description"
              values={{
                aisCloudFlare: <Link to="https://www.cloudflare.com/" alt="cloudflare"> Cloudflare </Link>,
              }}
          >
            {'Zarówno nasze usługi w chmurach, jak i tunel do bramki chroniony jest przez bezpośrednimi atakami za pomocą mechanizmów {aisCloudFlare}. Twoja bramka jest bezpieczna bez względu na to, w jaki sposób uzyskujesz do niej dostęp: z lokalnej sieci, z aplikacji mobilnej, czy z Internetu.'}
          </Translate>
        </Highlight>

      </Carousel>

  );
  } else {
    return "";
  }
};


export default AisCarousel;
