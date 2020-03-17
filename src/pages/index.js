import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Prywatność. Nie musisz płacić za usługę smart home utratą prywatności.',
    imageUrl: 'img/main/pl_voice-threats-featured.jpg',
    description: (
      <>
        <p>
          <img className="aisPointInfo" src="img/main/issue.svg" />
          Gdy masz w domu stale włączony mikrofon firmy, która zarabia na dostarczaniu spersonalizowanych reklam, wtedy
          to o czym rozmawiasz i co robisz w domu, może być towarem sprzedawanym firmom trzecim.
          Dane o Tobie mogą też zostać użyte do politycznej propagandy.
          To nie jest scenariusz z powieści dystopijnej, to już rzeczywistość.
        </p>
        <p>
        <img className="aisPointInfo" src="img/main/solution.svg" />
        To, co nas odróżnia od innych asystentów to fakt, że oferujemy rozwiązanie, które działa lokalnie w Twoim domu i nie wysyła nikomu żadnych Twoich danych.
        Skoro <b>nie gromadzimy danych, to też ich nikomu nie sprzedajemy - proste!</b>
        </p>
      </>
    ),
  },
  {
    title: 'Działanie lokalne. Kontroluj swoje urządzenia lokalnie, nie pozwól by zrobiono z Twoich danych produkt.',
    imageUrl: 'img/main/great-hack-review-featured.jpg',
    description: (
      <>
      <p>
          <img className="aisPointInfo" src="img/main/issue.svg" />
          Popularne technologie smart home, wykorzystują chmurę do sterowania automatyką domową.
          To niesie ze sobą kilka problemów, takich jak opóźnienia w reakcji urządzeń na komendę, utrata prywatności, uzależnienie się od dostawcy - jeśli firma, od której kupiłeś urządzenie, postanowi zamknąć usługę, Twój smart home przestanie działać.
      </p>
      <p>
        <img className="aisPointInfo" src="img/main/solution.svg" />
        W naszym rozwiązaniu system sterowania działa w Twoim domu, nie w chmurze producenta.
        Dzięki naszej bramce z brokerem MQTT i oprogramowaniem Home Assistant możesz sterować urządzeniami lokalnie.
        <b> Chmurę traktujemy jako rozszerzenie inteligentnego domu, a nie jego podstawę.</b>
      </p>
      </>
    ),
  },
  {
    title: 'Wolność. To co ważne',
    imageUrl: 'img/main/voice-helper-ads-featured.jpg',
    description: (
      <>
        <p>
          <img className="aisPointInfo" src="img/main/issue.svg" />
           Gdy pytasz o daną rzecz lub jej szukasz w sieci, to znaczy, że się nią interesujesz i chętnie wysłuchasz "porady asystenta" lub przejrzysz zwracane wyniki.
           Niestety często nie są to najlepsze dla Ciebie odpowiedzi, ale takie, za które ktoś najwięcej zapłacił, żeby zostały Ci zaprezentowane.
           Reklamy spersonalizowane, godne zaufania, trafne... są prawdziwą kopalnią złota dla gigantów technologicznych.
           Tylko jak można ufać prywatnemu asystentowi, który umieszcza reklamy w odpowiedzi na pytania?
        </p>
        <p>
        <img className="aisPointInfo" src="img/main/solution.svg" />
          Nie "wysysamy" danych z Twojego domu i <b>nie umieszczamy w żaden sposób reklam w żadnej formie w odpowiedziach, które zwracamy</b>
          . Jesteśmy otwarci i udostępniamy kody naszego systemu za darmo dla wszystkich ludzi.
          Asystent domowy to wybór dla ludzi ceniących sobie ponadczasowe wartości, takie jak wolność,
          prywatność i szczerość.
        </p>
      </>
    ),
  },
  {
    title: 'Otwartość i dostępność. Asystent dostępny dla każdego',
    imageUrl: 'img/main/ksc-free-download-featured.jpg',
    description: (
      <>
      <p>
        <img className="aisPointInfo" src="img/main/issue.svg" />
        Uzależnienie od dostawcy (ang. vendor lock-in), to sytuacja, w której klient jest uzależniony od produktów dostawcy.
        W przypadku systemów automatyki termin ten odnosi się też do niemożności zastosowania urządzenia innego producenta z powodu niekompatybilności.
        Często niekompatybilność urządzeń jest celowym zamierzeniem dostawcy, który z uzależnienia nabywcy czerpie korzyści – w modelu biznesowym powiązanych produktów, dostawca sprzedaje główny produkt (np. centralkę) po zaniżonej cenie po to, aby czerpać korzyści ze sprzedaży komponentów, które do niego pasują.
      </p>
        <p>
          <img className="aisPointInfo" src="img/main/solution.svg" />
          Nasza <b>bramka może być konfigurowana i sterowana z przeglądarki internetowej</b>, nie zamykamy nikogo w jednym ekosystemie.
          Asystent domowy jest kompatybilny z popularnymi urządzeniami automatyki domowej, jest wyposażony w wiele wbudowanych integracji.
          Bazujemy na Home Assistant, gdzie aktywna społeczność użytkowników dzieli się pomysłami, spostrzeżeniami i rozwiązaniami.
        </p>
        <p>
          Asystent domowy został od podstaw zbudowany w ten sposób, aby można go było używać w sposób wygodny dla każdego z nas.
          Nie musisz mieć smartfona czy komputera ze specyficznym systemem operacyjnym. Możesz uruchomić Asystenta domowego także w przeglądarce internetowej lub podłączyć naszą bramkę bezpośrednio do monitora/telewizora za pomocą kabla HDMI.
          Dzięki dedykowanemu pilotowi radiowemu możesz za pomocą fizycznych klawiszy oraz wbudowanego mikrofonu mieć szybki dostęp do każdej opcji systemu.
          <b> Asystent domowy to nie tylko sterowanie urządzeniami, ale także łatwe odtwarzanie mediów-
          wystarczy powiedzieć jakiej muzyki chcesz posłuchać.</b>
        </p>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.aisComiksImg} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Dokumentacja ${siteConfig.title}`}
      description="Automatyzujemy Twój dom lokalnie.">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <a href="https://play.google.com/store/apps/details?id=pl.sviete.dom">
                  <img className={styles.googlePlayImg}  src="/img/main/google-play-badge.png" />
                </a>
              </div>
            </div>
            <a href="docs/ais_bramka_index">
            <div className={classnames('col col--5')}>
              <img className={styles.heroLogo} src="img/logo-responsive.svg" />
            </div>
            </a>
          </div>
        </div>
      </header>
      <div className={classnames(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <p>Automatyzujemy Twój dom, łącząc zalety lokalnego przetwarzania<br/>z łącznością z usługami w chmurze IoT.</p>
          <Link to={useBaseUrl('/docs/ais_bramka_index')}>
            <div>
            <img className="aisPointInfo" src="img/main/text-to-speech.svg" />
            <img className="aisPointInfo" src="img/main/plus.svg" />
            <img className="aisPointInfo" src="img/main/monitor-speaker.svg" />
            <img className="aisPointInfo" src="img/main/plus.svg" />
            <img className="aisPointInfo" src="img/main/home-assistant.svg" />
            <br />
            </div>
            System do sterowania automatyką domową i multimiediami<br />z wbudowanym inteligentnym asystentem głosowym.
          </Link>
          <br /><br />
          <p>Nasza innowacyjna bramka steruje urządzeniami lokalnie, zapewniając błyskawiczną reakcję i prywatność, a dodatkowo odtwarza multimedia i ma większe możliwości niż konkurencyjne rozwiązania.</p>
        </div>
      </div>

      <div className="container">
        <div className={classnames('row', styles.aisDiferencesFromOthers)}>
        <h1>
          <br/>
          Co nas wyróżnia, jakie problemy rozwiązujemy:
        </h1>
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
                <h3>Projekt tworzony i sponsorowany przez ludzi - dziękujemy!</h3>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Andrzej.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Sebastian.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Celka.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Rysio.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Anzela.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Michal.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Bartek.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Asia.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Piotrek.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Kasia.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Tomek.png" /></a>
                <a href="https://github.com/sviete"><img className={styles.sponsorImg} src="img/main/Ania.png" /></a>
              </div>
              <div className={classnames('col col--2', styles.loveSectionPlea)}>
                <div>
                  <a href="https://allegro.pl/uzytkownik/AI-Speaker">
                    <img className={styles.loveImg} src="img/main/join_new_user.svg" alt="Join US" />
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
