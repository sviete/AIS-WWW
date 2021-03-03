import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import googlePlayLogo from '../../static/img/main/google-play-badge.png';
import domDemoLogo from '../../static/img/main/Anzela-Demo.png';


const ais_features = [
  {
    title: <>Ponad <span className="strongInfo">1890</span> urządzeń WiFi</>,
    imageUrl: 'img/main/wifi.svg',
    imageBttomUrl: 'img/main/wifi.svg',
    description: (
      <>
        <a href="/docs/ais_iot_s26">Inteligentne gniazdo WiFi</a> to najprostszy sposób, by dodać odrobinę inteligencji do urządzeń w domu. <br/>
        Urządzenie działa na oprogramowaniu, którego źródła oraz skompilowaną wersję udostępniamy za darmo. Dzięki czemu masz do wyboru <a rel="noopener" href="https://templates.blakadder.com/index.html" target="_blank">ponad 1890 różnych urządzeń WiFi</a>, które możesz podłączyć do bramki w ten sam prosty sposób jak nasze Inteligentne gniazdo.
      </>
    ),
    addClass: 'col col--4 aisFeature row1',
    addImgClass: 'aisFeatureImg',
  },
  {
    title: <>Ponad <span className="strongInfo">1350</span> urządzeń Zigbee</>,
    imageUrl: 'img/main/zigbee.svg',
    imageBttomUrl: 'img/main/zigbee.svg',
    description: (
      <>
        Dzięki <a href="/docs/ais_zigbee_index"> USB Zigbee2Mqtt</a> możesz łatwo dołączyć do bramki urządzenia Zigbee.
        <a href="https://www.zigbee2mqtt.io/information/supported_devices.html" target="_blank" rel="noopener"> Ponad 1350 urządzeń</a> jest wspieranych przez oprogramowanie Zigbee2Mqtt które dostarczamy na bramce.
      </>
    ),
    addClass: 'col col--4 aisFeature row1',
    addImgClass: 'aisFeatureImg',
  },
  {
    title: <>Ponad <span className="strongInfo">1740</span> Integracji Home Assistant</>,
    imageUrl: 'img/main/ha.svg',
    imageBttomUrl: 'img/main/ha.svg',
    description: (
      <>
        Jedną ze składowych oprogramowania dostarczanego na bramce jest system automatyki domowej <a rel="noopener" href="https://www.home-assistant.io/" target="_blank">Home Assistant Core</a>.
        Z zainstalowanymi i gotowymi do użycia <a href="/docs/ais_app_player"> integracjami</a> oraz z możliwością dodania <a href="https://www.home-assistant.io/integrations/" target="_blank" rel="noopener">ponad 1740 dodatkowych integracji</a> które są wspierane i rozwijanych przez społeczność skupioną wokół projektu Home Assistant.
      </>
    ),
    addClass: 'col col--4 aisFeature row1',
    addImgClass: 'aisFeatureImg',
  },
  {
    title: <>Sterowanie głosowe</>,
    imageUrl: 'img/main/account-voice.svg',
    imageBttomUrl: '',
    description: (
      <>
        Na bramce dostarczamy <a href="/docs/ais_app_assistent_commands">wbudowane komendy</a>, dzięki czemu możesz sterować dołączonymi urządzeniami za pomocą komend. Komendy można przesyłać z <a href="/docs/ais_app_index"> aplikacji w przeglądarce</a>  internetowej, naszej<a href="/docs/ais_app_android_dom"> aplikacji mobilnej</a> lub <a href="/docs/ais_remote_index">pilota z mikrofonem</a>.
        Można też wysyłać komendy z innych systemów/aplikacji za pomocą <a href="/docs/ais_bramka_api_index">API</a>. Oraz definiować <a href="/docs/ais_app_assistent_add_command">własne komendy</a>.
      </>
    ),
    addClass: 'col col--4 col--offset-2 aisFeature row2',
    addImgClass: 'aisFeatureImg',
  },
  {
    title: <>Audio</>,
    imageUrl: 'img/main/monitor-speaker-2.svg',
    imageBttomUrl: '',
    description: (
      <>
        Na bramce dostarczmy wbudowany <a href="/docs/ais_app_player">odtwarzacz audio</a>, za pomocą którego możesz odtwarzać setki stacji radiowych, podcastów, darmowych audiobooków, darmowe treści z <a href="/docs/ais_app_youtube_dl">YouTube</a> oraz <a href="/docs/ais_app_spotify">Spotify</a>.
        Istnieje też możliwość definiowania własnych dodatkowych treści audio w <a href="/docs/ais_dom_cloud_login">portalu integratora</a>.
      </>
    ),
    addClass: 'col col--4 aisFeature row2',
    addImgClass: 'aisFeatureImg',
  },
];

const features = [
  {
    title: 'Prywatność. Nie musisz płacić za usługę smart home utratą prywatności.',
    imageUrl: 'img/main/ais-privacy.svg',
    description: (
      <>
        <p>
          Gdy masz w domu stale włączony mikrofon firmy, która zarabia na dostarczaniu spersonalizowanych reklam, wtedy
          to o czym rozmawiasz i co robisz w domu, może być towarem sprzedawanym firmom trzecim.
          Dane o Tobie mogą też zostać użyte do politycznej propagandy.
          To nie jest scenariusz z powieści dystopijnej, to już rzeczywistość.
        </p>
        <p>
        <img alt="AIS dom info" className="aisPointInfo" src="img/main/solution.svg" />
        To, co nas odróżnia od innych asystentów to fakt, że oferujemy rozwiązanie, które działa lokalnie w Twoim domu i nie wysyła nikomu żadnych Twoich danych.
        Skoro <b>nie gromadzimy danych, to też ich nikomu nie sprzedajemy - proste!</b>
        </p>
      </>
    ),
    addClass: 'col col--6',
  },
  {
    title: 'Działanie lokalne. Kontroluj swoje urządzenia lokalnie, nie pozwól by zrobiono z Twoich danych produkt.',
    imageUrl: 'img/main/ais-local.svg',
    description: (
      <>
      <p>
          Popularne technologie smart home, wykorzystują chmurę do sterowania automatyką domową.
          To niesie ze sobą kilka problemów, takich jak opóźnienia w reakcji urządzeń na komendę, utrata prywatności, uzależnienie się od dostawcy - jeśli firma, od której kupiłeś urządzenie, postanowi zamknąć usługę, Twój smart home przestanie działać.
      </p>
      <p>
        <img alt="AIS dom info" className="aisPointInfo" src="img/main/solution.svg" />
        W naszym rozwiązaniu system sterowania działa w Twoim domu, nie w chmurze producenta.
        Dzięki naszej bramce z brokerem MQTT i oprogramowaniem Home Assistant możesz sterować urządzeniami lokalnie.
        <b> Chmurę traktujemy jako rozszerzenie inteligentnego domu, a nie jego podstawę.</b>
      </p>
      </>
    ),
    addClass: 'col col--6',
  },
  {
    title: 'Wolność. To co ważne',
    imageUrl: 'img/main/ais-freedom.svg',
    description: (
      <>
        <p>
           Gdy pytasz o daną rzecz lub jej szukasz w sieci, to znaczy, że się nią interesujesz i chętnie wysłuchasz "porady asystenta" lub przejrzysz zwracane wyniki.
           Niestety często nie są to najlepsze dla Ciebie odpowiedzi, ale takie, za które ktoś najwięcej zapłacił, żeby zostały Ci zaprezentowane.
           Reklamy spersonalizowane, godne zaufania, trafne... są prawdziwą kopalnią złota dla gigantów technologicznych.
           Tylko jak można ufać prywatnemu asystentowi, który umieszcza reklamy w odpowiedzi na pytania?
        </p>
        <p>
        <img alt="AIS dom info" className="aisPointInfo" src="img/main/solution.svg" />
          Nie "wysysamy" danych z Twojego domu i <b>nie umieszczamy w żaden sposób reklam w żadnej formie w odpowiedziach, które zwracamy</b>
          . Jesteśmy otwarci i udostępniamy kody naszego systemu za darmo dla wszystkich ludzi.
          Asystent domowy to wybór dla ludzi ceniących sobie ponadczasowe wartości, takie jak wolność,
          prywatność i szczerość.
        </p>
      </>
    ),
    addClass: 'col col--6',
  },
  {
    title: 'Otwartość i dostępność. Asystent dostępny dla każdego',
    imageUrl: 'img/main/ais-open.svg',
    description: (
      <>
      <p>
        Uzależnienie od dostawcy (ang. vendor lock-in), to sytuacja, w której klient jest uzależniony od produktów dostawcy.
        W przypadku systemów automatyki termin ten odnosi się też do niemożności zastosowania urządzenia innego producenta z powodu niekompatybilności.
        Często niekompatybilność urządzeń jest celowym zamierzeniem dostawcy, który z uzależnienia nabywcy czerpie korzyści – w modelu biznesowym powiązanych produktów, dostawca sprzedaje główny produkt (np. centralkę) po zaniżonej cenie po to, aby czerpać korzyści ze sprzedaży komponentów, które do niego pasują.
      </p>
        <p>
          <img alt="AIS dom info" className="aisPointInfo" src="img/main/solution.svg" />
          Nasza <b>bramka może być konfigurowana i sterowana z przeglądarki internetowej</b>, nie zamykamy nikogo w jednym ekosystemie.
          Asystent domowy jest kompatybilny z popularnymi urządzeniami automatyki domowej, jest wyposażony w wiele wbudowanych integracji.
          Bazujemy na Home Assistant, gdzie aktywna społeczność użytkowników dzieli się pomysłami, spostrzeżeniami i rozwiązaniami.
        </p>
      </>
    ),
    addClass: 'col col--6',
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
      title="Dokumentacja AIS"
      description="Automatyzujemy Twój dom lokalnie.">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <a href="https://play.google.com/store/apps/details?id=pl.sviete.dom" aria-label="Zainstaluj AIS z Google Play">
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
              Chcesz zobaczyć, jak to działa?<br></br>
              <Link to="https://dom-demo.paczka.pro">
                <Image className={styles.aisDemoImg} img={domDemoLogo} alt="Dom demo"/>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className={classnames(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <p>Automatyzujemy Twój dom, łącząc zalety lokalnego przetwarzania<br/>z łącznością z usługami w chmurze IoT.</p>
          <Link to={useBaseUrl('/docs/ais_bramka_index')}>
            <div className="miniImages">
            <img alt="AIS dom text to speech" className="aisPointInfo" src="img/main/text-to-speech.svg" />
            <img alt="AIS dom plus" className="aisPointInfo" src="img/main/plus.svg" />
            <img alt="AIS dom speaker" className="aisPointInfo" src="img/main/monitor-speaker.svg" />
            <img alt="AIS dom plus" className="aisPointInfo" src="img/main/plus.svg" />
            <img alt="AIS dom assistant" className="aisPointInfo" src="img/main/home-assistant.svg" />
            <br />
            </div>
            <div className="shapeshifter play"></div>
            Bramka do sterowania automatyką domową i multimiediami<br />z wbudowanym inteligentnym asystentem głosowym.
          </Link>
          <br /><br />
          <p>Nasza innowacyjna bramka steruje urządzeniami lokalnie, zapewniając błyskawiczną reakcję i prywatność, a dodatkowo odtwarza multimedia i ma większe możliwości niż konkurencyjne rozwiązania.</p>
        </div>
      </div>

      <div className="container">
        <div className={classnames('row', styles.aisDiferencesFromOthers)}>
        <h1>
          <br/>
          Wiele inteligentnych urządzeń i jeden system, by nimi sterować!
        </h1>
        </div>
     </div>

      <main>
        {ais_features && ais_features.length && (
          <section className={styles.features}>
            <div className="container aisFeaturesConteiner">
              <div className="pulse-container">
                    <div className="pulse-box">
                      <div className="pulse-css"></div>
                    </div>
              </div>
              <div className="row aisFeatures">
                {ais_features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>


      <div className="container">
        <div className={classnames('row', styles.aisDiferencesFromOthers)}>
        <h1>
          <br/>
          Co nas wyróżnia? Jakie problemy rozwiązujemy?
        </h1>
        <h3>
          W miarę jak inteligentne domy i technologia głosowa stają się coraz bardziej zintegrowane z naszym codziennym życiem, coraz większe znaczenie mają kluczowe względy dotyczące kosztów, prywatności i praktyczności.
        </h3>
        <p>
          Obecnie na rynku systemów do sterowania automatyką domową dominują rozwiązania technicznie oparte całkowicie na usługach w chmurze. Takie podejście ma pewne wady, co skutkuje nieoptymalnymi doświadczeniami zarówno dla klientów, jak i producentów inteligentnych urządzeń.
          Popularne dzisiaj rozwiązania dostępne na rynku mają też problem z modelem biznesowym, ponieważ producent sprzedając urządzenie musi utrzymać usługi w chmurze przez lata i dlatego często w celu pokrycia kosztów utrzymania serwisów, sprzedaje dane użytkownika, wprowadza abonament albo przestaje wspierać urządzenia po gwarancji i zostawia klienta z niedziałającym rozwiązaniem.
        </p>
          <p>
            Poniżej przedstawimy, co wyróżnia rozwiązania AI-Speaker i w jaki sposób staramy się skutecznie i etycznie rozszerzać technologie inteligentnego domu, jednocześnie chroniąc prywatność użytkowników, zapewniając długoterminowe wsparcie dla urządzeń oraz budując lojalność i zaufanie pomiędzy producentem i klientami.
          </p>
        </div>
     </div>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
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
                <div className="aisFeatureTitle">Projekt tworzony i sponsorowany przez ludzi - dziękujemy!</div>
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
                  ZOSTAŃ BOHATEREM.<br/>
                  Kup nasze urządzenie i <br/>
                  wesprzyj nasz projekt.<br/>
                  Dołącz do nas!
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
