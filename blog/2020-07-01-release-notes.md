---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.111.6
tags: ["spotify", "zigbee", "home assistant", "mqtt bridge", "exta life"]
---

# 0.111.6 Biblioteka Spotify, MQTT bridge, EXTA LIFE...

- ![Biblioteka Spotify](/img/en/blog/202007/spoify_icon.png) Biblioteka Spotify
- ![EXTA LIFE](/img/en/blog/202007/exta_life.png) Integracja EXTA LIFE
- ![Restore from backup](/img/en/blog/202007/system_restore.png) Łatwiejsze przywrócenie konfiguracji z kopii
- ![MQTT bridge](/img/en/blog/202007/mqtt_bridge.png) Skalowanie systemu za pomocą mostu MQTT
- ![Home Assistant](/img/en/blog/202007/hass.png) Nowy Home Assistant - szybsze uruchamianie
- ![Zigbee](/img/en/blog/202007/zigbee.png) Aktualizacja Zigbee2Mqtt, już [ponad 849 urządzeń od 146 różnych producentów](https://www.zigbee2mqtt.io/information/supported_devices.html)




<!--truncate-->

:::tip Wskazówka
UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important informacja
W razie problemów po aktualizacji sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)- to może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Ważna informacja o aktualizacji!
 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**

 ![wait](/img/en/blog/202007/wait.png) w tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.

 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::



## ![Biblioteka Spotify](/img/en/blog/202007/spoify_icon.png) Biblioteka Spotify

W naszej wbudowanej [integracji Spotify](/docs/ais_app_spotify) dodaliśmy obsługę biblioteki ze Spotify. [Sebastian](https://github.com/sgrzys) ciężko się nakodował 🥵 żeby całe to (nie zawsze niestety spójne) [API Spotify](https://developer.spotify.com/documentation/web-api/) wywołać i zaprezentować w aplikacji wyniki. Dzięki temu mamy przyciski, które pozwalają na szybkie przeglądanie i odtwarzanie ze Spotify:
- Polecanych nam list odtwarzania
- Naszych zapisanych list odtwarzania
- Naszych ulubionych artystów
- Nasze ulubione albumy
- Nasze ulubione piosenki

Sebastian dodał też stronicowanie wyników, dzięki czemu nawet słabsze przeglądarki powinny sobie płynnie radzić z szybkim wyświetlaniem list wyników zwracanych ze Spotify 🥳

:::caution Uwaga.
 Potrzebujemy więcej uprawnień do Spotify, żeby można było z poziomu AI-Speaker przeglądać ulubione playlisty, albumy, wykonawców, utwory.
 **Nic nie modyfikujemy z poziomu Asystenta domowego w bibliotece Spotify (tylko przeglądamy i odtwarzamy treści).**
:::

Jeżeli korzystasz z integracji ze Spotify, to po tej aktualizacji należy ją przeinstalować, w tym celu wystarczy:

1. Usunąć integrację ze Spotify

![spotify auth](/img/en/blog/202007/spotify_auth_1.png)

2. Dodać ponownie integrację ze Spotify

![spotify auth](/img/en/blog/202007/spotify_auth_2.png)


3. Przyznać więcej uprawnień dla AI-Speaker

![spotify auth](/img/en/blog/202007/spotify_auth_3.png)


## ![EXTA LIFE](/img/en/blog/202007/exta_life.png) Integracja EXTA LIFE

Autorem integracji Exta Life z Home Assistant jest [dgtal1](https://github.com/dgtal1), który to był tak otwarty i uprzejmy, że zgodził się dodać tę integrację jako wbudowany komponent do bramki AIS. **Dzięki dgtal1** 🥰 **!**
Dzięki temu nasi użytkownicy mają możliwość łatwej konfiguracji integracji z poziomu aplikacji (bez konieczności doinstalowywania niestandardowych komponentów).

Taka integracja jest efektem miesięcy kodowania, zachęcamy do zapoznania się z projektem na [forumextalife.pl](https://www.forumextalife.pl/index.php/topic,311.0.html)

Jest to kolejny ciekawy przykład tego, jak skuteczna jest pasja i otwartość, żadna firma nie jest w stanie konkurować z tym swoimi zamkniętymi rozwiązaniami.
Zrozumieli to już tacy giganci IT jak Microsoft, Google... miejmy nadzieję, że kiedyś zrozumieją to też inne firmy.

![EXTA LIFE](/img/en/frontend/extalife_1.png)

Integracja jest jeszcze rozwijana, w przyszłości dodamy ją jako sub moduł do naszego repozytorium kodów i postaramy się dodać jakieś nasze 3 grosze do tego kodu.
Uzupełnimy też dokumentację i opiszemy jak dodać konfigurację krok po kroku.
Tym samym mamy już możliwość konfiguracji z interfejsu użytkownika popularnych w Polsce urządzeń: FIBARO, SUPLA, BleBox, Exta Life 🥳

![EXTA LIFE](/img/en/frontend/extalife_2.png)


## ![Restore from backup](/img/en/blog/202007/system_restore.png) Łatwiejsze przywrócenie konfiguracji z kopii

Dotychczas po wykonaniu procedury [Pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step) lub po wykonaniu [Przywrócenia ustawień fabrycznych urządzenia](/docs/ais_bramka_reset_index), żeby przywrócić konfigurację bramki, trzeba było wykonać kilka kroków:

- Uruchomić bramkę i wykonać “Początkową konfigurację” :
- dodać nowe konto,
- wybrać lokalizację,
- dodać urządzenia i usługi (lub pominąć ekran).
- Przejść do “Ustawienia” -> “Konfiguracja bramki AIS dom” -> “Oprogramowanie bramki” -> “Przywracanie ustawień”
- Zrestartować bramkę i zalogować się na konto z przywróconych ustawień

Teraz będzie łatwiej 😊, bo dodaliśmy do interfejsu użytkownika możliwość przywrócenia z kopii przed wykonaniem “Początkowej konfiguracji”.

![AIS restore](/img/en/blog/202007/ais_restore.png)

Czyli przed rozpoczęciem konfiguracji systemu, w kroku, w którym tworzymy pierwszego użytkownika, dodaliśmy możliwość zalogowania się do “Portalu integratora AI-Speaker” i przywrócenia konfiguracji z kopii zapasowej przesłanej do “Portalu Integratora AI-Speaker”.

Opisujemy to w dokumentacji [Pierwsze uruchomienie - Konto właściciela](/docs/ais_bramka_first_run_step_account)


## ![MQTT bridge](/img/en/blog/202007/mqtt_bridge.png) Skalowanie systemu za pomocą mostu MQTT

Docelowo wprowadzimy do aplikacji możliwość definiowania mostu MQTT pomiędzy instancjami Asystenta domowego:

![MQTT Bridge](/img/en/blog/202007/mosquitto_mqtt_bridg2.png)


Na forum pokazujemy krok po kroku jak połączyć dwie bramki za pomocą MQTT Bridge -> [opis na forum](https://ai-speaker.discourse.group/t/skalowanie-systemu-do-sterowania-automatyka-domowa-most-mqtt-pomiedzy-bramkami/537)

![MQTT Bridge](/img/en/blog/202007/mosquitto_mqtt_bridg.png)

Oraz jak działa IoT w wielkiej skali - czyli jak połączyć 10 milionów urządzeń za pomocą brokera EMQX i mostów do bramek MQTT -> [opis na forum](https://ai-speaker.discourse.group/t/10-milionow-urzadzen-skalowanie-systemu-do-sterowania-automatyka-domowa/538)

![MQTT Bridge](/img/en/blog/202007/emqx_mqtt_bridge.jpeg)


## ![Zigbee](/img/en/blog/202004/honeybee.png) Aktualizacja Zigbee2Mqtt do wersji 1.14.1

### [849 urządzeń od 146 różnych producentów](https://www.zigbee2mqtt.io/information/supported_devices.html)


Aktualizacja Zigbee, tak samo jak aktualizacja innych składowych, wykona się automatycznie.

![CC2531](/img/en/iot/CC2531_Zigbee2MQTT_USB.jpg)


## ![Home Assistant](/img/en/blog/202007/hass.png) Nowy Home Assistant - szybsze uruchamianie


Najnowszy (stabilny) [Home Assistant 0.111.4](https://www.home-assistant.io/blog/2020/06/10/release-111/)
Tym razem oprócz nowości i kolejnych integracji, otrzymujemy poprawki dotyczące uruchamiania serwera Home Assistant.

![Home Assistant](/img/en/blog/202007/ha.png)



----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 07/2020
----
