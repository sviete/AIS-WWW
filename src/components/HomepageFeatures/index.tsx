import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: string;
  description: JSX.Element;
  linkTo: string;
  button: JSX.Element;
  buttonDoc: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'home.featureList.pro1.title',
      message: 'Kontroler AIS PRO1',
    }),
    Svg: '/img/ais_gate_pro1.png',
    linkTo: "docs/ais_bramka_pro1",
    description: (
      <Translate
        id="home.featureList.pro1.description"
        values={{
          soc: (
            <strong>
              <Translate
                id="home.featureList.pro1.description.soc"
                description="SoC s922x-H"
              >
               Amlogic SoC s922x-H
              </Translate>
            </strong>
          ),
        }}
      >
        {'AIS PRO1 działa na wydajnym układzie {soc}, posiada wbudowane WiFi oraz dysk, a także porty Ethernet, USB, SPDIF, Aux, HDMI. Ma zainstalowaną platformę Home Assistant.'}
      </Translate>
    ),
    button: <button className="snipcart-add-item button button--outline button--secondary button--lg"
              onClick={(e) => {e.preventDefault();window.location.href='https://get-iot.com/index.php?id_product=31&rewrite=ais-pro1-home-assistant&controller=product&id_lang=2';}}>
              <Translate id="home.featureList.addToBasket">
                Kup teraz
              </Translate>
            </button>,
    buttonDoc: <button className="snipcart-go-to-doc button button--outline button--secondary button--lg" 
    onClick={(e) => {e.preventDefault();window.location.href='docs/ais_bramka_pro1';}}>
          <Translate id="home.featureList.goToDoc">
            Dokumentacja
          </Translate>  
        </button>,
  },
  {
    title: translate({
      id: 'home.featureList.dev3.title',
      message: 'Kontroler AIS DEV3',
    }),
    Svg: '/img/ais_gate_dev3.png',
    linkTo: "docs/ais_bramka_index",
    description: (
      <Translate
        id="home.featureList.dev3.description"
        values={{
          soc: (
            <strong>
              <Translate id="home.featureList.dev3.description.soc">
                AIS DEV3
              </Translate>
            </strong>
          ),
        }}
      >
        {
          "{soc} działa na układzie Amlogic SoC 905x3, posiada wbudowane WiFi oraz dysk 128GB, a także porty Ethernet, USB, SPDIF, Aux i HDMI. Ma zainstalowaną platformę Home Assistant."
        }
      </Translate>
    ),
    button: <button className="snipcart-add-item button button--outline button--secondary button--lg"
    onClick={(e) => {e.preventDefault();window.location.href='https://get-iot.com/index.php?id_product=27&rewrite=ais-dom-dev-3-bramka-lotaudio-wersja-deweloperska&controller=product&id_lang=2';}}>
              <Translate id="home.featureList.addToBasket">
                Kup teraz
              </Translate>
            </button>,
    buttonDoc: <button className="snipcart-go-to-doc button button--outline button--secondary button--lg" 
    onClick={(e) => {e.preventDefault();window.location.href='docs/ais_bramka_index';}}>
          <Translate id="home.featureList.goToDoc">
            Dokumentacja
          </Translate>  
        </button>,
  },
  {
    title: translate({
      id: 'home.featureList.adapter1.title',
      message: 'Adapter AIS 1',
    }),
    Svg: '/img/ais_adapter_1.png',
    linkTo: "docs/ais_zigbee_index",
    description: (
      <>
        <Translate
          id="home.featureList.adapter1.description"
          values={{
            info: (
              <strong>
                <Translate id="home.featureList.adapter1.description.info">
                  obsługuje 128+
                </Translate>
              </strong>
            ),
          }}
        >
          {
            "Zigbee 3.0 Adapter {info} urządzeń zigbee (będących jednocześnie online), ma zasięg 200 metrów i działa w sieci LAN!  Jest kompatybilny z Home Assistant oraz z Zigbee2mqtt."
          }
        </Translate>
      </>
    ),
    button: <button className="snipcart-add-item button button--outline button--secondary button--lg" 
        onClick={(e) => {e.preventDefault();window.location.href='https://get-iot.com/index.php?id_product=30&rewrite=slzb-06-zigbee-ethernet-poe-usb-lan-wifi-adapter&controller=product&id_lang=2';}}>
              <Translate id="home.featureList.addToBasket">
                Kup teraz
              </Translate>  
            </button>,
    buttonDoc: <button className="snipcart-go-to-doc button button--outline button--secondary button--lg" 
    onClick={(e) => {e.preventDefault();window.location.href='docs/ais_zigbee_index';}}>
          <Translate id="home.featureList.goToDoc">
            Dokumentacja
          </Translate>  
        </button>,
  },
];

function Feature({ title, Svg, description, linkTo, button, buttonDoc }: FeatureItem) {
  return (
        <div className={clsx('col col--4')}>
        <div className="text--center">
            <Link to={linkTo}>
                <img className={styles.featureSvg} src={Svg} alt="" />
            </Link>
        </div>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        {/* <Link to='https://allegro.pl/uzytkownik/AI-Speaker'>
          {button}
        </Link> */}
        {buttonDoc}&nbsp;&nbsp;&nbsp;
        {button}
        </div>
        
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
 );
}