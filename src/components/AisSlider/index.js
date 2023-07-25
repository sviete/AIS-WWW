import React from 'react';
import Slider from 'react-slick';
import styles from './slider.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';


function AisSlider() {
  var sliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: '32.5px',
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return <section className="rds-resources">
    <div className="container" id="resources">

      <h1 className="section-title white">
          <Translate
              id="homepage.ais_one_gate_for_all_text"
              description="One gate to rule them all text">
              Wiele inteligentnych rozwiązań. Dobranych dla Każdego!
          </Translate>
      </h1>

      <Slider className="row articles" {...sliderSettings}>

      <div className="col">
          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/img/ais_assistant_mini.jpg')} className="thumb" loading="lazy" alt="TTS" />
              <div className="article-body">
                <span className="type">
                    <span className="strongInfo">
                        <Translate
                            id="homepage.ais_features.voice.title"
                            description="Voice commands in AIS title"
                            values={{aisTtsStt: <span>📣 TTS/STT 🎙️</span>}}
                            >
                            {'Komunikacja głosowa {aisTtsStt}'}
                        </Translate>
                    </span>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.voice.description"
                    description="Voice commands in AIS description"
                    values={{
                      aisVoiceCommands: <Link to="/docs/ais_app_assistent_commands">AIS TTS/STT <br /></Link>
                    }}
                >
                  {'Na bramce dostarczamy zamianę tekstu na mowę i mowy na tekst {aisVoiceCommands} Możesz sterować urządzeniami za pomocą poleceń głosowych.'}
                </Translate>
                </span>
              </div>
              <a href="/docs/ais_app_assistent_commands" className="link">Read More</a>
            </div>
          </article>
        </div>

        <div className="col">
          <article className="article">
            <div className="article-wrapper">
              <div className="article-body">
                <span className="type">
                    <span className="strongInfo">
                        <Translate
                            id="homepage.ais_features.wifi.title"
                            description="Wifi number devices title"
                            values={{devices: <span className="strongInfo">2690 🌐 </span>}}>
                            {'Ponad {devices} urządzeń WiFi'}
                        </Translate>
                    </span>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.wifi.description"
                    description="Wifi number devices description"
                    values={{
                      aisSocket: <Link to="https://templates.blakadder.com/index.html">WiFi S26</Link>,
                      moreWiFiDevices: <Link to="https://templates.blakadder.com/index.html">2600</Link>,
                      aizWifiImg: <Link to="https://templates.blakadder.com/index.html" alt="AIS Wifi"> <br />
                        <div className="CarouselImage">
                          <div className="imgCenter"><img alt="AIS dom feature" src="img/ais_wifi_mini.png" alt="WiFi" /></div>
                        </div>
                      </Link>
                    }}>
                  {'{aizWifiImg} Masz do wyboru ponad {moreWiFiDevices} różnych urządzeń WiFi, które możesz podłączyć do bramki.'}
                </Translate>
                </span>
              </div>
              <a href="https://templates.blakadder.com/index.html" className="link">Read More</a>
            </div>
          </article>
        </div>

        <div className="col">
          <article className="article">
            <div className="article-wrapper">
            <img src={useBaseUrl('/img/ais_con_bee2_mini.jpg')} className="thumb" loading="lazy" alt="Zigbee" />
              <div className="article-body">
                <span className="type">
                    <span className="strongInfo">
                    <Translate
                    id="homepage.ais_features.zigbee.title"
                    description="Zigbee number devices title"
                    values={{devices: <span>2970 🐝</span>}}>
                    {'Ponad {devices} urządzeń Zigbee'}
                    </Translate>
                    </span>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.zigbee.description"
                    description="Zigbee number devices description"
                    values={{
                      aisZigbee: <Link to="/docs/ais_zigbee_index">Zigbee2Mqtt</Link>,
                      moreZigbeeDevices: <Link to="https://www.zigbee2mqtt.io/information/supported_devices.html">3000</Link>,
                    }}
                >
                  {'Ponad {moreZigbeeDevices} urządzeń Zigbee od 379 producentów jest wspieranych przez oprogramowanie {aisZigbee}, które dostarczamy na bramce.'}
                </Translate>
                </span>
              </div>
              <a href="/docs/ais_zigbee_index" className="link">Read More</a>
            </div>
          </article>
        </div>

        <div className="col">
          <article className="article">
            <div className="article-wrapper">
              <div className="article-body">
                <span className="type">
                <Translate
                    id="homepage.ais_features.zwave.title"
                    description="Voice commands in AIS title"
                    values={{aisTtsStt: <span className="strongInfo">Zwave 🌊🌊🌊<br /></span>}}
                    >
                    {'{aisTtsStt}'}
                </Translate>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.zwave.description"
                    description="Zwave in AIS description"
                    values={{
                      aisZwave: <Link to="/docs/ais_app_integration_zwave">ZwaveJs2Mqtt</Link>,
                      aizZigbeeConnbee2Img: <Link to="/docs/ais_app_integration_zwave" alt="AIS in Google Play"> <br /><br /> <div className="imgCenter"><img alt="AIS dom feature" src="img/ais_zwave_mini.png" alt="zigbee adapter" /></div><br /></Link>
                    }}
                >
                  {'Na bramce dostarczamy {aisZwave}, dzięki czemu możesz dodać do bramki obsługę swoich urządzeń Zwave. {aizZigbeeConnbee2Img}'}
                </Translate>
                </span>
              </div>
              <a href="/docs/ais_app_integration_zwave" className="link">Read More</a>
            </div>
          </article>
        </div>

        <div className="col">
          <article className="article">
            <div className="article-wrapper">
              <div className="article-body">
                <span className="type">
                    <span className="strongInfo">
                        <Translate
                            id="homepage.ais_features.ble.title"
                            description="BLE devices title"
                            values={{devices: <span className="strongInfo">2400 🌐 </span>}}>
                            {'Urządzenia Bluetooth LE'}
                        </Translate>
                    </span>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.wifi.description"
                    description="Wifi number devices description"
                    values={{
                      aisSocket: <Link to="https://templates.blakadder.com/index.html">WiFi S26</Link>,
                      moreWiFiDevices: <Link to="https://templates.blakadder.com/index.html">2150</Link>,
                      aizWifiImg: <Link to="https://templates.blakadder.com/index.html" alt="AIS Wifi"> <br />
                        <div className="CarouselImage">
                          <div className="imgCenter"><img alt="AIS dom feature" src="img/s10_4.webp" alt="ble" /></div>
                        </div>
                      </Link>
                    }}>
                  {'{aizWifiImg} Możesz komunikować się z urządzeniami Bluetooth za pośrednictwem bramki BLE proxy'}
                </Translate>
                </span>
              </div>
              <a href="/docs/ais_iot_ble" className="link">Read More</a>
            </div>
          </article>
        </div>


        <div className="col">
          <article className="article">
            <div className="article-wrapper">
              <div className="article-body">
                <span className="type">
                  <span className="strongInfo">Audio 📻</span>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.audio.description"
                    description="Audio in AIS description"
                    values={{
                      aisAudioPlayer: <Link to="/docs/ais_app_player">AIS Audio Player</Link>,
                      aisAudioYouTube: <Link to="/docs/ais_app_youtube_dl">YouTube</Link>,
                      aisAudioSpotify: <Link to="/docs/ais_app_spotify">Spotify</Link>,
                      aisAudioPortal: <Link to="/docs/ais_app_add_media">Media</Link>,
                      aisAudioImg: <Link to="/docs/ais_app_ai_integration" alt="AIS Integrations"> <br /><br /> <div className="imgCenter"><img alt="AIS dom feature" src="img/ais_audio_mini.png" alt="zigbee adapter" /></div><br /></Link>
                    }}
                >
                  {'Na bramce dostarczamy wbudowany odtwarzacz audio {aisAudioPlayer}, za pomocą którego możesz odtwarzać setki stacji radiowych, podcastów, darmowych audiobooków, darmowe treści z {aisAudioYouTube} oraz {aisAudioSpotify}. {aisAudioImg}'}
                </Translate>
                </span>
              </div>
              <a href="/docs/ais_app_player" className="link">Read More</a>
            </div>
          </article>
        </div>


        <div className="col">
          <article className="article">
            <div className="article-wrapper">
              <div className="article-body">
                <span className="type">
                    <span className="strongInfo">
                        <Translate
                            id="homepage.ais_features.ha.title"
                            description="HA number of integrations title"
                            values={{devices: 2480  }}
                        >
                            {'Ponad 🏠 {devices} Integracji'}
                        </Translate>
                    </span>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.ha.description"
                    description="HA number of integrations description"
                    values={{
                      aisHomeAssistant: <Link to="https://www.home-assistant.io/"> Home Assistant</Link>,
                      aisHomeAssistantIntegrations: <Link to="/docs/ais_app_player">AIS</Link>,
                      moreHomeAssistantMoreIntegrations: <Link to="https://www.home-assistant.io/integrations/#all">2240 HA Integrations</Link>,
                      aisHomeAssistantImg: <Link to="/docs/ais_app_ai_integration" alt="AIS Integrations"> <br /><br /> <div className="imgCenter"> <img alt="AIS dom feature" src="img/ais_ha_mini.png" alt="zigbee adapter" /></div><br /></Link>
                    }}

                >
                  {' {aisHomeAssistantImg}  Wiele integracji wspieranych i rozwijanych przez społeczność skupioną wokół projektu {aisHomeAssistant}.'}
                </Translate>
                </span>
              </div>
              <a href="/docs/ais_iot_index" className="link">Read More</a>
            </div>
          </article>
        </div>

        <div className="col">
          <article className="article">
            <div className="article-wrapper">
            <img src={useBaseUrl('/img/ais_fosshost_mini.png')} className="thumb" loading="lazy" alt="fosshost" />
              <div className="article-body">
                <span className="type">
                    <span className="strongInfo">
                        <Translate
                        id="homepage.ais_features.services.title"
                        description="Free services title">
                        {'🆓 Darmowe usługi ☁️'}
                        </Translate>
                    </span>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.services.description"
                    description="Services number devices description"
                    values={{
                      aisFosshost: <Link to="https://fosshost.org/">fosshost.org</Link>,
                      aisFosshostImg: <Link to="/docs/ais_dom_cloud_services_terms" alt="AIS Services"><br /></Link>,
                    }}
                >
                  {'Nasze usługi w chmurze na bramkach DEV są hostowane przez organizację {aisFosshost}. {aisFosshostImg} Fosshost to organizacja non-profit, skupiona na wspieraniu projektów OpenSource.'}
                </Translate>
                <Translate
                    id="homepage.ais_features.services.description2"
                    description="Services number devices description"
                    values={{
                      aisFosshostFree: <Link to="/docs/ais_dom_cloud_services_terms">AIS 🆓 ☁️</Link>,
                    }}
                >
                  {'Dowiedz się więcej o darmowych usługach {aisFosshostFree}'}
                </Translate>
                </span>
              </div>
              <a href="/docs/ais_dom_cloud_services_terms" className="link">Read More</a>
            </div>
          </article>
        </div>


        <div className="col">
          <article className="article">
            <div className="article-wrapper">
              <div className="article-body">
                <span className="type">
                <span className="strongInfo">AIS ❤️ OpenSource </span>
                </span>
                <span className="title">
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
                </span>
              </div>
              <a href="/docs/ais_dev_kit_1_index" className="link">Read More</a>
            </div>
          </article>
        </div>


        <div className="col">
          <article className="article">
            <div className="article-wrapper">
            <img src={useBaseUrl('/img/ais_sla_mini.png')} className="thumb" loading="lazy" alt="fosshost" />
              <div className="article-body">
                <span className="type">
                  <span className="strongInfo">
                    <Translate
                      id="homepage.ais_features.pro_services.title"
                      description="Pro services title">
                      {'🏢 Usługi PRO'}
                    </Translate>
                  </span>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.pro_services.description"
                    description="Services number devices description"
                    values={{
                      aisPro: "Możliwe jest też wykonanie lub dostosowanie funkcjonalności pod zamówienie klienta.",
                      aisProImg: <Link to="/docs/ais_dom_cloud_services_terms#bramka-pro" alt="AIS Services"></Link>,
                    }}
                >
                  {'{aisProImg}'}
                </Translate>
                <br/>
                <Translate
                    id="homepage.ais_features.pro_services.description2"
                    description="Services number devices description"
                    values={{
                        aisEmail: <a href="info@ai-speaker.com" alt="info@ai-speaker.com">info@ai-speaker.com</a>,
                    }}
                >
                  {'Jeżeli masz pomysł jak wykorzystać AIS w komercyjnym produkcje, to skontaktuj się z nami {aisEmail} w celu ustalenia zasad współpracy.'}
                </Translate>
                </span>
              </div>
              <a href="/docs/ais_dom_cloud_services_terms#bramka-pro" className="link">Read More</a>
            </div>
          </article>
        </div>

        <div className="col">
          <article className="article">
            <div className="article-wrapper">
              <div className="article-body">
                <span className="type">
                <span className="strongInfo">
                  <Translate
                    id="homepage.ais_features.tunnel_service.title"
                    description="Tunnel service title">
                    {'🛡️ Cloudflare Tunnel'}
                  </Translate>
                  </span>
                </span>
                <span className="title">
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
                  {'Zarówno nasze usługi w chmurach, jak i tunel do bramki chroniony jest przez bezpośrednimi atakami za pomocą mechanizmów {aisCloudFlare}.'}
                </Translate>
                </span>
              </div>
              <a href="/docs/ais_bramka_remote_www_index" className="link">Read More</a>
            </div>
          </article>
        </div>

        <div className="col">
          <article className="article">
            <div className="article-wrapper">
            <img src={useBaseUrl('/img/ais_ubiquiti_mini.jpg')} className="thumb" loading="lazy" alt="ubiquiti" />
              <div className="article-body">
                <span className="type">
                <span className="strongInfo">
                  <Translate
                    id="homepage.ais_features.tunnel_service.title"
                    description="Tunnel service title">
                    {'🕸️ Warstwa sieciowa'}
                  </Translate>
                  </span>
                </span>
                <span className="title">
                <Translate
                    id="homepage.ais_features.tunnel_service.description"
                    description="Services number devices description"
                    values={{
                        aisUbiquiti: <Link to="https://www.cloudflare.com/" alt="cloudflare"> UISP Ubiquiti® </Link>,
                        aisWireGuard: <Link to="https://www.wireguard.com/" alt="cloudflare"> WireGuard VPN </Link>
                      }}
                >
                  {'Dostawcom systemów automatyki domowej oferujemy integracje warstwy sieciowej. Zapewniamy zdalne scentralizowane zarządzanie sieciami w wielu lokalizacjach za pomocą {aisUbiquiti} oraz serwisowy dostęp do lokalizacji {aisWireGuard}.'}
                </Translate>

                </span>
              </div>
              <a href="/docs/ais_dom_pro_network" className="link">Read More</a>
            </div>
          </article>
        </div>

      </Slider>

    </div>
  </section>;
}

export default AisSlider;
