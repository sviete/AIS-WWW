---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.114.5
tags: ["sync", "demo", "home assistant", "zigbee2mqtt", "nfc", "wearos", "tasmota"]
---

# 0.114.5 NFC+

- ![AIS MOB NFC+](/img/en/blog/202009/tag.png) **Skanowanie tagów NFC**
- ![AIS Wear OS](/img/en/blog/202009/watch.png) Integracja AIS Wear OS
- ![Synchronizacja](/img/en/blog/202009/sync.png) Synchronizacja z bramką
- ![Poprawki](/img/en/blog/202009/fixes.png) Poprawki i ułatwienia
- ![Demo](/img/en/blog/202009/demo.png) DEMO Aplikacji
- ![Tasmota](/img/en/blog/202005/tasmota_small.png) Tasmota 8.5.0 Hannah
- ![Zigbee](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.14.4 
- ![Home Assistant](/img/en/blog/202007/hass.png) Home Assistant 0.114.4


<!--truncate-->

## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
Kopia zapasow![A](/img/en/blog/202009/alpha-a-circle.png).

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Bramka, konsola i logi.
![A](/img/en/blog/202009/alpha-b-circle.png)ramka, konsola i logi.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
Poczekaj ![A](/img/en/blog/202009/alpha-c-circle.png)ierpliwie. Pierwsze uruchomienie po aktualizacji trwa dłużej.

 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::


## ![](/img/en/blog/202009/tag.png) Skanowanie tagów NFC


W dokumentacji naszej mobilnej aplikacji opisujemy jej nową funkcjonalność - skanowanie tagów NFC
Jako część opisu działania automatyzacji na bramce dodaliśmy [przykłady automatyzacji wyzwalanych tagiem NFC](/docs/ais_bramka_tag_automation)

Jak to działa prezentujemy na filmie poniżej:
<iframe width="560" height="315"  src="https://www.youtube.com/embed/nzRBeRZZX7Q" frameBorder="0" allowFullScreen></iframe>




## ![](/img/en/blog/202009/watch.png) Integracja AIS Wear OS 

Zakup zegarka z Wear OS przez naszego programistę ;) zaowocował wieloma usprawnieniami w aplikacji Wear OS.

![Wear OS](/img/en/blog/202009/wear_os_1.jpeg)


Integrację [AIS Wear OS](/docs/ais_app_android_dom_wear) możemy teraz dodać za pomocą prostego kreatora z poziomu integracji:

![Wear OS](/img/en/frontend/wear_os_wiz_2.png)



## ![](/img/en/blog/202009/sync.png) Synchronizacja z bramką

W nowej wersji aplikacji mobilnej możemy włączyć opcję raportowania do bramki, spowoduje to uruchomienie serwisu, który okresowo (**nie częściej niż co 15 minut**) będzie przesyłał do bramki lokalizację urządzenia oraz informacje o stanie czujników w telefonie. Na początek okresowo raportujemy 3 rzeczy: Lokalizację, adres oraz status baterii.

![GPS](/img/en/frontend/apk_report_gps2.png)

Podobną funkcjonalność szykujemy na [Wear OS](/docs/ais_app_android_dom_wear#synchronizacja-z-bramką) przy czym tu chodzi nam o okresowe raportowanie aktywności:

![Wear OS](/img/en/blog/202009/wear_os_2.png)


## ![](/img/en/blog/202009/fixes.png) Poprawki i ułatwienia

Klika poparwek, które dodaliśmy i które da się zauważyć:

1. Gdzie jest Jolka, ciąg dalszy...

Dodaliśmy sensor z adresem lokalizacji wysyłanym z aplikacji mobilnej AIS dom i z aplikacji AIS dom Wear OS

![FIX](/img/en/blog/202009/fix_1.png)

Pytanie ``Gdzie jest Osoba`` działa teraz tak:

- jeżeli osoba jest w zdefiniowanej strefie (Dom, Praca, Szkoła …), to mówimy nazwę strefy
![FIX](/img/en/blog/202009/fix_2.png)

- jeżeli osoba jest poza strefą dom, to sprawdzamy ostatni zaraportowany adres (z ostatniego urządzenia które zaraportowało) i go mówimy:
![FIX](/img/en/blog/202009/fix_3.png)

2. Możliwość podania adresu, na który chcemy przejść po kliknięciu w powiadomienie push

Nowy parametr nazywa się ``click_action``

![FIX](/img/en/blog/202009/fix_4.png)


Czyli jeżeli np. mamy widok z kamerą o takim adresie ``/lovelace/cam``
![FIX](/img/en/blog/202009/fix_6.png)

To po wywołaniu usługi powiadomienia z bramki do aplikacji mobilnej (za pomocą automatyzacji):
![FIX](/img/en/blog/202009/fix_5.png)

Otrzymamy powiadomienie: 

![FIX](/img/en/blog/202009/fix_6.jpeg)


którego kliknięcie spowoduje przejście do podanego adresu w powiadomieniu:

![FIX](/img/en/blog/202009/fix_7.jpeg)


3. Sterujemy głośnością odtwarzacza na bramce za pomocą przycisków vol+ / vol- w aplikacji mobilnej

Aż dziwne, że to wcześniej nie działało ;) 

![FIX](/img/en/blog/202009/fix_8.png)


## ![](/img/en/blog/202009/demo.png) DEMO Aplikacji 

Nasze demo udostępniliśmy początkowo na serwerze w chmurze. Założenie od początku było takie, żeby pokazać nie prezentację, ale prawdziwą aplikację, która działa z prawdziwymi urządzeniami (przełącznikami, światłami, roletami, kamerami...).

Zaczęliśmy przekierowywać porty, stawiać brokery i podłączać urządzenia do chmury... i tu się pojawiły schody, bo nasze urządzenia działają oczywiście lokalnie, sterowanie nimi przez chmurę wymagało dodatkowej konfiguracji... postawiliśmy broker mqtt w chmurze i to działa OK. Niestety w przypadku kamer, głośników cast oraz zigbee2mqtt nie jest tak łatwo... sprawę głównie komplikuje nasz biurowy internet z Orange i ich Fun Box2, który sam sobie zmienia porty i wszystko psuje.

Ostatecznie zrozumieliśmy, że nie ma co walczyć z wiatrakami, mamy przecież lepsze rozwiązanie (szyfrowany tunel do bramki) i demo będzie działało na takiej samej zasadzie jak każda bramka dom, a dokładnie ``dom-demo``.

Na obecną chwilę demo mamy na naszej ``deweloperskiej bramce`` (maszyna, na której budujemy paczki z aplikacją) , tunelujemy aplikację na adres https://dom-demo.paczka.pro
Ten adres i ta architektura w przypadku demo już zostanie - w najbliższym czasie dokończymy konfigurację demo i ją oficjalnie udostępnimy do zabawy dla zainteresowanych.

![](/img/en/blog/202009/demo2.png)

Postaramy się też, żeby demo było łatwe i ładne :) zaawansowane konfiguracje zostawimy dla konta admin ;)


## ![](/img/en/blog/202005/tasmota_small.png) Tasmota 8.5.0 Hannah

Tasmota w najnowszej wersji coraz lepiej wspiera ESP32. Sebastian uruchomił kamerę z czujnikiem ruchu i wyświetlaczem. 
ESP32 V162 działa bardzo fajnie z Asystentem domowym (dodajemy do dom-demo), brakuje jeszcze tylko mikrofonu do pełni szczęścia :)

![](/img/en/blog/202009/tasmo_cam.jpg)

Jest też kompilacja do bramki ESP32-BLE, monitorujemy nim roślinkę w biurze ;) 

![](/img/en/blog/202009/ble.png)

![](/img/en/blog/202009/ble2.png)

Rozwiązanie będzie oczywiście opublikowane na forum z instrukcją dla tych, co lubią woń kalafonii z lutownicy o poranku ;)


## ![](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.14.4


zigbee2mqtt rozwija się w rekordowym tempie. Jest już 951 urządzeń obsługiwanych "z automatu", oczywiście każde urządzenie, które komunikuje się po zigbee, może zostać dodane.

![](/img/en/blog/202009/zigbee.png) 

Więcej informacji na stronie projektu [zigbee2mqtt](https://www.zigbee2mqtt.io/information/supported_devices.html)


Pojawiły się też nowe informacje o projekcie ``Connected Home over IP`` realizowanym wspólnie przez Apple, Amazon, Goole i Zigbee Alliance (Ikea, Samsung, Philips Hue...).
Ten standard ma być otwarty i każde urządzenie ma się łatwo dać sterować każdym asystentem głosowym, szczegóły już w 2021 - zobaczymy :)

![](/img/en/blog/202009/zigbee2.png) 

To pozwala prognozować rozwój Zigbee, cieszy nas to bo Zigbee == sterowanie lokalne :)
Więcej informacji o projekcie [Connected Home over IP](https://zigbeealliance.org/news_and_articles/project-development-to-reality/)


## ![](/img/en/blog/202007/hass.png) Home Assistant 0.114.4


Najnowszy (stabilny) [Home Assistant 0.114.4](https://www.home-assistant.io/blog/2020/08/12/release-114/)

Jak zwykle sporo ułatwień i fajnych nowości w największej na świecie otwartej platformie do automatyki domowej :heart_eyes_cat: 

![Home Assistant](/img/en/blog/202009/ha0.14.4.png)



----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)

##### AI-Speaker 09/2020

