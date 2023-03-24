---
title: "Zigbee2MQTT"
sidebar_label: Zigbee
---

## Wprowadzenie


Integracja Zigbee w Asystencie domowym daje możliwość łatwego korzystania z urządzeń Zigbee bez potrzeby stosowania bramek producentów. Rozwiązanie oparte jest na projekcie [Zigbee2MQTT](https://www.zigbee2mqtt.io/). I jest całkowicie zintegrowane z naszym oprogramowaniem, dzięki czemu możesz łatwo dodać swoje urządzenia Zigbee do całej infrastruktury inteligentnego domu działającej na systemie Asystent domowy.

![CC2531](/img/en/frontend/ais_zigbee_web_app2.png)

## Integracja

Integracja sprowadza się do włożenia do portu USB  [odpowiednio zaprogramowanego adaptera](/docs/ais_zigbee_index). Asystent domowy sam rozpozna to urządzenie USB, poinformuje głosowo, że uruchamia serwis Zigbee i automatycznie w konfiguracji pojawi się możliwość dodawania urządzeń zigbee.

## Obsługiwane urządzenia

Obsługujemy to, co obsługuje Zigbee2MQTT, wg informacji na stronie projektu Zigbee2MQTT -> [obecnie 06/2021 obsługiwanych jest ponad 1490 urządzeń od 230 różnych dostawców](https://www.zigbee2mqtt.io/information/supported_devices.html). Projekt rozwija się bardzo intensywnie i nowe urządzenia są stale dodawane.

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


-----------------------------------------------------
## Informacje techniczne

### Proces zigbee

Procesami na bramce steruje [Menedżer procesów PM2](http://pm2.keymetrics.io/).
PM2 odpowiedzialny jest też za uruchomienie procesu zigbee po wykryciu urządzenia CC2531, a następnie czuwa nad jego ciągłym działaniem.

Żeby zobaczyć status procesu zigbee w konsoli wpisujemy:

```
pm2 show zigbee
```

![zigbee](/img/en/bramka/pm2_zigbee.png)


### Aplikacja i binarka

Proces zigbee oparty jest na aplikacji [zigbee2mqtt](https://www.zigbee2mqtt.io/) która działa na binarce [nodejs-lts](https://nodejs.org/en/)

Naszą kompilację nodejs udostępniamy w naszym repozytorium pakietów binarnych [bintray](https://bintray.com/sviete/ais/nodejs-lts)

![zigbee](/img/en/bramka/nodejs_binary.png)

### Dostęp lokalny

Aplikacja 8099 działa na porcie **8099** w lokalnej sieciu można połączyć się z ją bezpośrednio, wpisując w przeglądarce ``http://<ip-bramki>:8099``

![zigbee](/img/en/bramka/app_zigbee2mqtt.png)

### Dostęp zdalny

Umożliwiamy też na zdalny dostęp do aplikacji webowej zigbee2mqtt. Dostęp ten jest możliwy tylko po zalogowaniu do Asystenta domowego i jest realizowany z pomocą naszego dodatku ais_proxy - mechnizmu typu [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)

![zigbee](/img/en/bramka/app_zigbee2mqtt_proxy.png)

### Aktualizacja automatyczna

Zigbee2Mqtt jest dostarczane jako składowa systemu Asystent domowy. Aktualizacja **Zigbee2Mqtt do najnowszej stabilnej wersji** jest wykonywana automatycznie z interfejsu użytkownika i polega na pobraniu i rozpakowaniu na bramkę gotowej paczki Zigbee2Mqtt z naszego serwisu OTA.

![zigbee](/img/en/bramka/zigbee2mqtt_upgrade.png)

### Aktualizacja/instalacja ręczna

:::caution Uwaga
**Uwaga!** Ręczna aktualizacja jest skomplikowanym procesem dostępnym dla programistów i technicznie zaawansowanych użytkowników.
W przypadku wystąpienia problemów po ręcznej aktualizacji zalecamy [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)
:::

Jeżeli chcemy zainstalować wersję dev Zigbee2Mqtt, żeby dodać obsługę nowego urządzenia lub przetestować nowe funkcje, to możemy to zrobić ręcznie z konsoli.
Instalacja ręczna polega na pobraniu kodów Zigbee2Mqtt z repozytorium GIT, a następnie uruchomieniu na bramce instalacji zależności (dependencies) aplikacji zigbee2mqtt.
Poniżej skrypt bash (do uruchomienia w konsoli) z wyjaśnieniem kroków instalacji ręcznej.

``` bash
echo "Zatrzymanie serwisu zigbee..."
pm2 stop zigbee

echo "kopia konfiguracji zigbee..."
cp -R ~/zigbee2mqtt/data/configuration.yaml ~/configuration.yaml

echo "Usuwamy bieżącą wersję zigbee2mqtt..."
rm -rf ~/zigbee2mqtt

echo "Kolonujemy kody najnowszej wersji..."
git clone --depth=1 https://github.com/Koenkk/zigbee2mqtt.git

echo "Przechodzimy do folderu z kodami zigbee2mqtt..."
cd ~/zigbee2mqtt

echo "Przełączamy się na wersję kodu zigbee2mqtt który chcemy uruchomić..."
git checkout HEAD -- npm-shrinkwrap.json
git pull

echo "Instalujemy zależności..."
npm ci --unsafe-perm

echo "Przywracamy konfigurację zigbee2mqtt..."
cp ~/configuration.yaml ~/zigbee2mqtt/data/configuration.yaml
rm ~/configuration.yaml

echo "Uruchomienie serwisu zigbee2mqtt..."
pm2 start zigbee

```

### Konfiguracja

Konfiguracja Zigbee2Mqtt znajduje się na bramce w pliku ``~/zigbee2mqtt/data/configuration.yaml``

:::caution Uwaga
**Uwaga!** W przypadku podstawowej konfiguracji ustawienia domyślne są dobre i nie trzeba nic zmieniać.

Potrzeba zmiany konfiguracji może dotyczyć tylko programistów i technicznie zaawansowanych użytkowników którzy np. chcą zmienić parametry połączenia z brkerem MQTT (dodać autentykację itp.).
W przypadku wystąpienia problemów po zmianie konfiguracji Zigbee2Mqtt zalecamy [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)
:::

Plik z konfiguracją dostępny jest do edycji z aplikacji. Wystarczy przejść do konfiguracji i wybrać konfigurację urządzeń zigbee:

![zigbee](/img/en/integrations/zigbee2mqtt_go_to_configuration_yaml.png)

Następnie w prawym górnym rogu z rozwijalnego menu wybrać opcję "Edit Zigbee2Mqtt configuraton.yaml"
![zigbee](/img/en/integrations/zigbee2mqtt_configuration_yaml.png)

![zigbee](/img/en/integrations/zigbee2mqtt_configuration_file.png)

Standardowa konfiguracja znajduje się w pliku ``~/zigbee2mqtt/data/configuration.yaml``.
Konfiugracja różni się w zależności od zastosowanego adaptera i jest następująca:

- Adapter PRO Zigbee ConBee2
``` yaml
# configuration.yaml Zigbee2MQTT v 1.19.1   
homeassistant: true
permit_join: false
mqtt:
  base_topic: zigbee2mqtt
  server: 'mqtt://localhost'
serial:
  adapter: deconz
  port: /dev/ttyACM0
frontend:
  port: 8099
advanced:
  log_level: info
  log_output:
    - console
  channel: 11
```

- Adapter DEV Zigbee USB CC2531
``` yaml
# configuration.yaml Zigbee2MQTT v 1.19.1   
homeassistant: true
permit_join: false
mqtt:
  base_topic: zigbee2mqtt
  server: 'mqtt://localhost'
serial:
  adapter: zstack
  port: /dev/ttyACM0
frontend:
  port: 8099
advanced:
  log_level: info
  log_output:
    - console
  channel: 11
```

