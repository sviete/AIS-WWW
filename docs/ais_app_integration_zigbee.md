---
title: "Zigbee2MQTT"
sidebar_label: Zigbee
---

## Wprowadzenie


Integracja Zigbee w Asystencie domowym daje możliwość łatwego korzystania z urządzeń Zigbee bez potrzeby stosowania bramek producentów. Rozwiązanie oparte jest na projekcie [Zigbee2MQTT](https://www.zigbee2mqtt.io/). I jest całkowicie zintegrowane z naszym oprogramowaniem, dzięki czemu możesz łatwo dodać swoje urządzenia Zigbee do całej infrastruktury inteligentnego domu działającej na systemie Asystent domowy.

![CC2531](/img/en/frontend/ais_zigbee_web_app2.png)

## Integracja

Integracja sprowadza się do włożenia do portu USB  [odpowiednio zaprogramowanego urządzenia CC2531](/docs/ais_zigbee_index). Asystent domowy sam rozpozna to urządzenie USB, poinformuje głosowo, że uruchamia serwis Zigbee i automatycznie w kongiguracji pojawi się możliwość dodawania urządzeń zigbee.

## Obsługiwane urządzenia

Obsługujemy to, co obsługuje Zigbee2MQTT, wg informacji na stronie projektu Zigbee2MQTT -> [obecnie 10/2020 obsługiwanych jest ponad 1000 urządzeń od 168 różnych dostawców](https://www.zigbee2mqtt.io/information/supported_devices.html).Projekt rozwija się bardzo intensywnie i nowe urządzenia są stale dodawane.

## Dodanie nowego urządzenia Zigbee

### Zezwalanie urządzeniom na dołączenie do sieci

Aby zapewnić bezpieczeństwo sieci Zigbee i uniknąć przypadkowego dołączenia innych urządzeń Zigbee, domyślnie w konfiugracji mamy ustawiony parametr **enable_join: false**.

Przed rozpoczęciem parowania nowego urządzenia należy włączyć w aplikacji możliwość czasowego parowania z bramką. W przeciwnym razie nowe urządzenia nie będą mogły dołączyć do sieci!
Możliwość czasowego parowania z bramką włączamy po przejściu do konfiguracji zigbee2mqtt, w menu wybieramy **Konfiguracja** -> **Konfiguracja urządzeń zigbee** 

![Zigbee integracja](/img/en/frontend/zigbee2mqtt_ais_dom_1.png)
 
następnie naciskamy przycisk **permit join** - zezwolenie na dołączenie nowych urządzeń
 

![Zigbee integracja](/img/en/bramka/zigbee_integration_enable_join.png)

### Parowanie

Najpierw sprawdź na stronie Zigbee2MQTT w obsługiwanych urządzeniach [instrukcję dotyczącą parowania urządzenia](https://www.zigbee2mqtt.io/information/supported_devices.html) po wybraniu modelu urządzenia.

![Zigbee integracja](/img/en/bramka/zigbee_integration_pair.png)

![Zigbee integracja](/img/en/bramka/zigbee_integration_pair2.png)

Jeśli nie są dostępne żadne instrukcje, urządzenie można prawdopodobnie sparować przywracając ustawienia fabryczne

### Mapa sieci

Po sparowaniu urządzenia możemy odświeżyć kartę z mapą sieci Zigbee, by zobaczyć nasze nowe urządzenie podłączone do bramki

![Zigbee integracja](/img/en/bramka/zigbee_integration_pair_device_map.png)


### Zmiana nazwy urządzenia

![Zigbee integracja](/img/en/bramka/zigbee_integration_change_name.png)


### Sterowanie

Nasze nowe urządzenie autmatycznie dostępne jest w urządzeniach

![Zigbee integracja](/img/en/bramka/zigbee_integration_new_device.png)

Po wybraniu urządzenia możemy zobaczyć jego szczegóły i przejść do dodania automatyzacji

![Zigbee integracja](/img/en/bramka/zigbee_integration_new_device_info.png)


Oczywiście nowe encje możemy umieszczać na karcie i wykorzystywać w automatyzacjach, przykłady gotowych rozwiązań zostaną dodane [na forum](https://ai-speaker.discourse.group/).
