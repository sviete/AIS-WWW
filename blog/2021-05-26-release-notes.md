---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Greta
tags: ["ais dom", "home assistant", "zigbee2mqtt", "ais-tasmota"]
---

<div class="IntroAisBlogMenu" >
<div>

![AIS](/img/en/blog/202105/greta.png)

</div>

<h2>Greta</h2>

</div>

:::caution Uwaga - BETA.

 **To jest informacja o wydaniu wersji beta systemu AIS
 (a zatem prace nad ostateczną wersją i nad tym postem są jeszcze w toku).**

Wydanie na kanale stabilnym  ![AIS Tasmota](/img/en/blog/202105/construction_3.png) planowane jest na 26 maja 2021.

:::



<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png) Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja ręczna](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać długo.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji.
 Możesz sprawdzić status uruchamiania(dowiedzieć się co robi system) w konsoli komendą ``htop`` i/lub ``pm2 logs``**
:::



## ![](/img/en/blog/202105/greta.png) Greta


W tej wersji aktualizujemy następujące pakiety binarne:
- Python do najnowszej wersji 3.9.5
- Rclone do najnowszej wersji 1.55
- FFmpeg do najnowszej wersji 4.4
- Clang/llvm do najnowszej wersji 12.0.0
- Mosquitto 2.0.10

... i jeszcze ponda 20 innych pakietów zainstalowanych na bramce.

Aktualizacja może trwać dłużej, w zależności od tego ile macie na bramkach integracji i jakie dodatkowe pakiety zostaną podczas instalacji zaktualizowane lub czasami skompilowane na bramce.

> Poczekajcie cierpliwie, zawsze można sprawdzić co robi bramka w konsoli poleceniem ``htop``
lub sprawdzać na bieżąco logi poleceniem ``pm2 logs``

### Integracja Zwave

Dodaliśmy pierwszą wersję integracji Zwave. Zastosowaliśmy ten sam mechanizm co w przypadku Zigbee czy Supli (integracja przez MQTT). Wg nas tego typu integracja to najlepszy sposób i tak powinno to działać w przypadku wszystkich urządzeń, MQTT powinno być rozwijane jako API w Home Assistant do integracji z innymi systemami i technologiami. Możliwe, że kiedyś tak będzie.

:::caution Uwaga
**Integracja jest w trakcie rozwoju i testowania**

W obecnej wersji integracja wymaga instalacji ręcznej kodów projektu ZwaveJs2Mqtt.
Cała procedura opisana jest na forum AI-Speaker: [ZWave na bramce AIS - Zwavejs2Mqtt](https://ai-speaker.discourse.group/t/zwave-na-bramce-ais-zwavejs2mqtt/1769)

:::

Integracja testowana jest z popularnym na rynku adapterem Aeotec Z-Stick który komunikuje się za pomocą USB CDC (Communication Device Class).

![Zwave](/img/en/frontend/zwave_adapter.jpeg)


Integracja może też działać z adapterami, które nie obsługują USB CDC, za pomocą zdalnego połączenia tcp socket, obsługiwanego przez ZwaveJs2Mqtt:
```
 tcp://dongle.lan:5000
```




### USB HID

Bramka obsługuje urządzenia USB klasy HID (Human Interface Device) które służą głównie do interakcji z użytkownikiem. Naciśnięcie przycisku na klawiaturze czy innym kontrolerze USB HID podłączonym do bramki, przesyłane jest do Asystenta domowego jako zdarzenie. Takie zdarzenia mogą wyzwalać automatyzację.


![AIS button](/img/en/bramka/ais_remote_key_events_0.png)

Realizując zamówienie funkcjonalności dla klienta, dodaliśmy wysyłanie zdarzenia naciśnięcia przycisku kontrolera w obu trybach pracy bramki (na i bez monitora), więcej informacji w dokumentacji: [Automatyzacja wyzwalana przyciskiem](/docs/ais_bramka_key_event_automation)



### ![](/img/en/blog/202104/robot.png) Tasmota 9.4.0 Leslie

Uwaga wykryliśmy błąd w Tasmota, w pewnych okolicznościach (po utracie połączenia z MQTT i wystąpieniu problemu z ustaleniem adresu IP brokera MQTT na bramce) może dojść do tego, że urządzenie zrestartuje się szybko 6 razy i zmieni model (funkcjonalność wbudowana w Tasmota).
Jest wpis na naszym blogu w tym temacie [Utrata konfiguracji w urządzeniach z Tasmotą](https://ai-speaker.discourse.group/t/utrata-konfiguracji-w-urzadzeniach-z-tasmota/1734).

Jeżeli kogoś dotknoł taki problem (tak jak nas) to sugerujemy aktualizację do wersji AIS-Tasmota 9.4.0 Leslie w której zablokowaliśmy możliwość samoczynnej zmiany modelu urządzenia.
![](/img/en/blog/202105/Tasmota.png)


### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.8.3 Ponad **1430** wspieranych urządzeń.
To jest wydanie poprawkowe, wszystkie szczegóły tu [1.18.3](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.18.3)

![z2m](/img/en/blog/202103/z2m.png)


### ![](/img/en/blog/202101/hass.png) Asystent domowy

Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym Home Assistant Core.
Ta wersja to głównie poprawki stabilizacji, uruchamianie bez czekania na migracje danych i kilka innych ulepszeń.

![hass](/img/en/blog/202105/social.png)

Szczegółowy opis zmian w Home Assistant dostępny na blogu projektu Home Assistant: [2021.5: Stability, performance, triggers, color modes!](https://www.home-assistant.io/blog/2021/05/05/release-20215/)



## ![](/img/en/blog/202105/placard.png) AIS DEV3

Wprowadziliśmy już na stałe do oferty nową bramkę **AIS DEV3** - jest to jak do tej pory najszybsza, najprostsza w konfiguracji i obsłudze bramka AIS.

AIS DEV3 to bramka która możesz sterować urządzeniami głosowo kilka minut po jej wyjęciu z pudełka.
Dodatkowo masz wbudowaną obsługę audio, zdalny dostęp i konfiguracje za pośrednictwem interfejsu użytkownika. Dzięki AIS DEV3, nie trzeba już nagrywać systemu na kartę SD, majstrować przy ustawieniach routera, wiedzieć co to dynamicznym DNS lub YAML. Oczywiście bez żadnych opłat miesięcznych i reklam w aplikacji.

![AIS dom DEV3](/img/en/bramka/ais_dev3_in_box.jpg)


Zobaczcie co mówi o bramce AIS DEV3 Greta:
:::tip Greta

"Bardzo dobrze działa mi się na AIS DEV3! To naprawdę świetny sprzęt o ogromnych możliwościach! Szczerze polecam."

:::

![Greta](/img/en/blog/202105/greta.png)


Parametry nowej bramki są opisane tu: [Bramka AIoT](/docs/ais_bramka_index), dodaliśmy też nowy konfigurator, który ma ułatwić [Pierwsze uruchomienie](/docs/ais_bramka_first_run_the_gate).

-------

##### AI-Speaker 05/2021