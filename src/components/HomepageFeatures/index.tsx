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
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'home.featureList.gate.title',
      message: 'Kontrolery',
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
                wydajnych komponentach
              </Translate>
            </strong>
          ),
        }}
      >
        {
          "Nasze kontrolery automatyki działają na {soc}, posiadają wbudowane dysk, a także porty LAN, USB, HDMI."
        }
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'home.featureList.esp.title',
      message: 'Adaptery',
    }),
    Svg: '/img/mesh.png',
    linkTo: "docs/ais_zigbee_index",
    description: (
      <Translate
        id="home.featureList.esp.description"
        values={{
          zigbee: (
            <strong>
              <Translate
                id="home.featureList.esp.description.zigbee"
                description="adapter Zigbee"
              >
               Zigbee, Matter i BLE
              </Translate>
            </strong>
          ),
        }}
      >
        {'Do kontrolera oferujemy dodatkowo adapter {zigbee}, który daje możliwość korzystania z urządzeń różnych producentów.'}
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'home.featureList.system.title',
      message: 'System',
    }),
    Svg: '/img/ha_logo.png',
    linkTo: "docs/ais_app_index",
    description: (
      <>
        <Translate
          id="home.featureList.system.description"
          values={{
            info: (
              <strong>
                <Translate id="home.featureList.system.description.info">
                  największą na świecie
                </Translate>
              </strong>
            ),
          }}
        >
          {
            "Na kontrolerze dostarczamy zainstalowaną {info} platformę do sterowania automatyką domową!"
          }
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'home.featureList.addons.title',
      message: 'Dodatki',
    }),
    Svg: '/img/Moby-logo1.png',
    linkTo: "docs/ais_app_player",
    description: (
      <Translate
        id="home.featureList.addons.description"
        values={{
          tl: (
            <strong>
              <Translate
                id="home.featureList.addons.description.tl"
                description="any testing libraries"
              >
                any testing libraries
              </Translate>
            </strong>
          ),
          extend: (
            <strong>
              <Translate
                id="home.featureList.addons.description.extend"
                description="frontend frameworks"
              >
                funkcjonalność kontrolera
              </Translate>
            </strong>
          ),
        }}
      >
        {'Dodatki pozwalają użytkownikowi łatwo rozszerzyć {extend} poprzez instalacje nowych aplikacji.'}
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description, linkTo }: FeatureItem) {
  return (
        <div className={clsx('col col--3')}>
        <div className="text--center">
            <Link to={linkTo}>
                <img className={styles.featureSvg} src={Svg} alt="" />
            </Link>
        </div>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
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