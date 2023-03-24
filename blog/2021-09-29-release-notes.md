---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Kasia
tags: ["mqtt", "home assistant", "zigbee"]
---

<div class="IntroAisBlogMenu" >

![AIS](/img/en/blog/202109/kasia.png)

</div>

<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png) Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Aktualizacja i pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać długo.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce.
 **Poczekaj cierpliwie na zakończenie aktualizacji.
 Możesz sprawdzić status uruchamiania (dowiedzieć się co robi system) w konsoli komendą ``htop`` i/lub ``pm2 logs``**
:::


## ![](/img/en/blog/202109/kasia.png) Kasia


W tej wersji AIS dom, czyli nasza główna aplikacja mobilna, zmienia swoje przeznaczenie z ogólnego na bardziej specyficzne i będzie ewoluowała w stronę aplikacji dedykowanej na tablet. Ostatnie zmiany, które dodaliśmy do aplikacji (obsługa SIP-a i RTSP) spowodowały spory przyrost kodu tej aplikacji - aplikacja ma już powyżej 100 MB. Sporo funkcjonalności jest typowo tabletowych (wideodomofon, gesty, przekierowanie audio i sterowanie audio).

Od tej wersji nasze aplikacje mobilne to forki (rozgałęzienia kodu) mobilnych aplikacji Home Assistant.
Aplikacje mobilne AIS będą się nieznacznie różniły od aplikacji mobilnych HA, główne różnice:
- domyślnie polska wersja językowa,
- kolory,
- logo,
- darmowy tunel,
- większy limit dzienny powiadomień -> 999

Poza tym wszytko będzie 100% jak w HA.

Co w ten sposób osiągneliśmy:
- wprowadzamy dedykowane aplikacje dla Apple,
- wprowadziliśmy dedykowaną aplikację mobilną na system Android,
- wprowadziliśmy dedykowaną aplikację do panelu sterowania (tablet),
- kody aplikacji mobilnych tworzone przez programistów wolontariuszy do projektu HA będą automatycznie trafiały do AIS.

Dzięki temu AI-Speaker staje się integratorem, który jest w stanie dostarczyć aplikacje do automatyki domowej dla każdego.

### Android

####  AIS dom Tablet - Wideodomofon

AIS dom, czyli nasza główna aplikacja mobilna zmienia swoje przeznaczenie z ogólnego na bardziej specyficzne i będzie ewoluowała w stronę aplikacji dedykowanej na tablet. Ostatnie zmiany, które dodaliśmy do aplikacji (obsługa SIP-a i RTSP) spowodowały spory przyrost kodu tej aplikacji - aplikacja ma już powyżej 100 MB. Sporo funkcjonalności jest typowo tabletowych (wideodomofon, gesty, przekierowanie audio i sterowanie audio).


![Smart glass ustawienia](/img/en/frontend/video_doorbell.png)

Funkcjonalność aplikacji  "Dotykowego panelu / Smart panel" opisana jest w dokumentacji: [AIS dom Panel](/docs/ais_app_android_dom_tablet)

####  AIS dom Mobile

To nasza nowa aplikacja dedykowana na urządzenia mobilne z systemem Android. Aplikacja jest do pobrania w Google Play:

![](/img/en/blog/202109/mob.png)

Funkcjonalność aplikacji  "AIS dom Mobile" zostanie opisana w dokumentacji: [AIS dom Mobile](/docs/ais_app_android_dom_mob)


### AIS dom iOS/macOS

Dostarczamy aplikacje do App Strore. Aplikacja na iOS czy macOS to nie tylko kod, ale też wypełnienie formularzy w Apple ze zgodami na wysyłanie "Powiadomień krytycznych", "Lokalnych powiadomień" i wyjaśnianie, do czego potrzebujemy uprawnienie "com.apple.security.device.camera" a do czego "com.apple.security.files.downloads.read-write" itd.
Jeszcze nie mamy zaakceptowanej aplikacji w Apple i spodziewamy się, że potrwa to jeszcze jakiś czas... dlatego jabłuszko jest jeszcze zielone ;)

![](/img/en/blog/202109/ios.png)

![](/img/en/blog/202109/macOS.png)

Funkcjonalność aplikacji  "AIS dom iOS/macOS" zostanie opisana w dokumentacji: [AIS dom iOS](/docs/ais_app_ios_mob)



### Linux - Binarki

W tej aktualizacji dostarczamy najnowsze wersje dziesiątek pakietów binarnych, w tym kluczowe pakiety do działania systemu: python, nodejs, rclone, mosquitto, ttyd, libwebsockets, llvm, ffmpeg…

:::warning
Trzeba cierpliwie poczekać na zakończenie aktualizacji i uruchomienie asystenta domowego. To może potrwać dłużej, w zależności od tego, jakie integracje macie na bramce - jakie zależności w pakietach Pythona będą kompilowane na bramce podczas instalacji i jak wydajną masz bramkę (kompilacja, która trwa na PRO1 5 minut może trwać na DEV1 60 minut).
:::

![](/img/en/blog/202109/termuxhero.jpg)

Przebudowaliśmy ponad 1000 pakietów po aktualizacji głównej wersji libffi, która zmieniła swój ABI (niskopoziomowy interfejs binarny). Ostatnia taka przełomowa zmiana była w roku 2012.
Zmiana libffi spowodowała, że musieliśmy przebudować wszystkie pakiety zależne od libffi:
- ctypes-sh
- ecl
- glib
- imagemagick
- libgmime
- libllvm
- p11-kit
- profanity
- python
- python2
- ruby
-  ... i pakiety zależne od tych pakietów…




Aktualizujemy też binarkę Tunel Cloudflare do najnowszej wersji [Tunel Cloudflare](https://github.com/cloudflare/cloudflared/releases/tag/2021.9.0)

Wg Cloudflare nowy tunel ma być nawet 40% szybszy niż bezpośrednie połączenie, bo wykorzystuje algorytm Smart Routing.

![Tunel Cloudflare](https://aws1.discourse-cdn.com/free1/uploads/ai_speaker/optimized/2X/f/fb115cb8ae2bb2924d8638f67e2b82acef117c50_2_463x500.jpeg)

Po poprawkach w Cloudflare przeszliśmy na nowy format definiowania tuneli.
Definicja jest teraz w pliku yaml na bramce, który można zobaczyć z aplikacji (nie pozwalamy na modyfikację).

![](https://aws1.discourse-cdn.com/free1/uploads/ai_speaker/original/2X/5/5934b0c4f6552c9603fc8beeab2619c182a72c53.png)


### AIS Easy - Ankieta

Dziękujemy za wypełnienie ankiety - otrzymujemy od was bardzo cenne opinie, które pomogą nam kształtować naszą ofertę. Zdecydowaliśmy się kontynuować temat i przedłużamy ankietę do wyczerpania nagród (maksymalnie do końca roku).

![](/img/en/blog/202108/open_question.jpg)



### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.21.1 - **1667** wspieranych urządzeń. Wszystkie szczegóły tu [1.21.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.21.1)

Ewolucja Zigbee trwa i niebawem na rynku pojawią się dwa tanie i ciekawe urządzenia do Zigbee 3.0, które mają potencjał żeby "namieszać" na rynku koordynatorów Zigbee:

#### 1. Adapter Sonoff

![](/img/en/blog/202109/sonoff.jpg)



#### 2. Bramka Ethernet

![](/img/en/blog/202109/ZB-GW03-ESP32-Ethernet-Zigbee-Gateway.jpg)


Jak te urządzenia będą miały certyfikat CE i będą działały ;) to będziemy je wspierać w AIS - żebyśmy wszyscy mieli większy wybór koordynatorów Zigbee.
Pojawiaenie się tych urządzeń to kolejny krok w rozwoju rynku Zigbee. Dotychczas, żeby mieć mocny adapter Zigbee 3.0, trzeba było kupić sprawdzone i certyfikowane Conbee 2 albo lutowane urządzenie DIY bez certyfikatu, teraz nadchodzi alternatywa i prawdopodobie tą zmianę odczują najbardziej autorzy lutowanych rozwiązań.



### ![](/img/en/blog/202101/hass.png) Asystent domowy 2021.9


Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.

![](/img/en/blog/202109/ha.png)


Opis wszystkich zmian i nowości [2021.9](https://www.home-assistant.io/blog/2021/09/01/release-20219/)

W tej wersji nie ma większych zmian, zespół HA zajęty był projektem Amber, o którym piszemy na blogu:


[![](/img/en/blog/202109/amber.png)](https://ai-speaker.discourse.group/t/amber-by-home-assistant/2122)




--------

##### AI-Speaker 09/2021
