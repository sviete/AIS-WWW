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
        {'AIS PRO1 działa na wydajnym układzie {soc}, posiada wbudowane WiFi oraz dysk, a także porty Ethernet, USB, SPDIF, Aux, HDMI.'}
      </Translate>
    ),
    button: <button className="snipcart-add-item button button--outline button--secondary button--lg"
              data-item-id="ais-pro1"
              data-item-description="AIS PRO1, wydajny układ Amlogic SoC s922x-H, wbudowane WiFi oraz dysk 64GB, porty Ethernet, USB, SPDIF, Aux, HDMI."
              data-item-image="/img/ais_gate_pro1.png"
              data-item-name="AIS PRO1"
              data-item-price="{&quot;usd&quot;:250,&quot;eur&quot;:225, &quot;pln&quot;: 999}"
              data-item-custom1-name="Wiadomość"
              data-item-custom1-type="textarea"
              >
              Dodaj do koszyka 
            </button>,
  },
  {
    title: translate({
      id: 'home.featureList.gate.title',
      message: 'Kontroler AIS DEV3',
    }),
    Svg: '/img/ais_gate_dev3.png',
    linkTo: "docs/ais_bramka_index",
    description: (
      <Translate
        id="home.featureList.gate.description"
        values={{
          soc: (
            <strong>
              <Translate id="home.featureList.gate.description.soc">
                AIS DEV3
              </Translate>
            </strong>
          ),
        }}
      >
        {
          "{soc} działa na układzie Amlogic SoC 905x3, posiada wbudowane WiFi oraz dysk 128GB, a także porty Ethernet, USB, SPDIF, Aux i HDMI."
        }
      </Translate>
    ),
    button: <button className="snipcart-add-item button button--outline button--secondary button--lg"
              data-item-id="ais-dev3"
              data-item-description="AIS DEV3, Amlogic SoC 905x3, wbudowane WiFi oraz dysk 128GB, porty Ethernet, USB, SPDIF, Aux i HDMI."
              data-item-image="/img/ais_gate_dev3.png"
              data-item-name="AIS DEV3"
              data-item-price="{&quot;usd&quot;:95,&quot;eur&quot;:90, &quot;pln&quot;: 399}"
              data-item-custom1-name="Wiadomość"
              data-item-custom1-type="textarea"
              >
              Dodaj do koszyka 
            </button>,
  },
  {
    title: translate({
      id: 'home.featureList.system.title',
      message: 'Adapter AIS 1',
    }),
    Svg: '/img/ais_adapter_1.png',
    linkTo: "docs/ais_zigbee_index",
    description: (
      <>
        <Translate
          id="home.featureList.system.description"
          values={{
            info: (
              <strong>
                <Translate id="home.featureList.system.description.info">
                  obsługuje 128+
                </Translate>
              </strong>
            ),
          }}
        >
          {
            "Zigbee 3.0 Adapter {info} urządzeń zigbee (będących jednocześnie online), ma zasięg 200 metrów i działa w sieci LAN!"
          }
        </Translate>
      </>
    ),
    button: <button className="snipcart-add-item button button--outline button--secondary button--lg"
              data-item-id="ais-adapter-1"
              data-item-description="AIS ADAPTER 1, Zigbee 3.0 Adapter {info} urządzeń zigbee (będących jednocześnie online), ma zasięg 200 metrów i działa w sieci LAN."
              data-item-image="/img/ais_adapter_1.png"
              data-item-name="AIS ADAPTER 1"
              data-item-price="{&quot;usd&quot;:45,&quot;eur&quot;:40, &quot;pln&quot;: 179}"
              data-item-custom1-name="Wiadomość"
              data-item-custom1-type="textarea"
              >
              Dodaj do koszyka  
            </button>,
  },
];

function Feature({ title, Svg, description, linkTo, button }: FeatureItem) {
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