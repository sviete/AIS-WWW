---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Asia
tags: ["google calendars", "home assistant", "automatyzacje", "zigbee2mqtt", "tasmota"]
---

# Asia ![](/img/en/blog/202012/asia.png) 

- ![AIS NBP](/img/en/blog/202012/nbp.png) AIS NBP
- ![AIS LTS](/img/en/blog/202012/handshake.png) AIS LTS
- ![AIS Kalendarze](/img/en/blog/202011/ais_calendar.png) Kalendarze AIS
- ![Zigbee](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.16.2
- ![Home Assistant](/img/en/blog/202007/hass.png) AIS HA 0.118.5 + Konferencja Home Assistant


<!--truncate-->

## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png)Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja z konsoli](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::


## ![](/img/en/blog/202012/asia.png) Asia

#### Od tej wersji zmieniamy nazwy wersji systemu z numerów na imiona.

Nazywając naszą werję systemu **Asia** nie chodziło nam o brytyjską grupę muzyczną Asia, ani też o planetoidę o numerze katalogowym 67, czy prowincję rzymską, ani też Asię, która w mitologii greckiej była jedną z Nereid... 

**Asia**, wg nas, to zdrobnienie imienia Joanna. Wg [wikipedia.pl](https://pl.wikipedia.org/wiki/Joanna) Asia to zdrobnienie imienia żeńskiego, odpowiednika imienia Jan pochodzącego z języka hebrajskiego: Jo-hanan – „Jahwe jest łaskawy”.

Cel zmiany nazw wersji, z numerów na imiona jest taki, żeby łatiwiej nam było zapamiętać, jaką mamy wersję systemu.
Tak samo jak łatwiej pamiętamy, że zaparkowaliśmy na parkingu **Jeżyk** a nie na pargingu o numerze **108/5**.

Witamy w systemie **Asia** i zapraszamy do aktualizacji :)



### ![](/img/en/blog/202012/nbp.png) AIS - Narodowy Bank Polski

Dodaliśmy integrację AIS NBP, której opis działania dostępny jest w dokumentacji: [AIS Narodowy Bank Polski](/docs/ais_app_ai_integration_nbp)

![Konfiguracja AIS NBP](/img/en/frontend/ais_nbp6.png)

Co ważniejsze, proces powstawania tej integracji został ze szczegółami krok po kroku opisany na naszym forum w dziale [programowanie](https://ai-speaker.discourse.group/c/programowanie/15)
![](/img/en/blog/202012/programowanie.png) 

Szablon integracji umieściliśmy w GitHub [AIS-hello](https://github.com/sviete/AIS-hello). 
Jest to minimalna implementacja integracji czujnika / licznika, której można użyć jako wzór/szablon do własnej integracji.

![AIS Hello](/img/en/blog/202012/ais-hello.png)


#### Dzięki temu każdy kto ma czas, pomysł i chęci do nauki nowych rzeczy, może dodać własną integrację.


### ![](/img/en/blog/202012/handshake.png) AIS LTS

Jednym z elementów projektu, nad którym obecnie pracujemy, jest zapewnienie długoterminowego wsparcia. Chodzi o to, żeby dostarczyć urządzenie z zainstalowanymi binarkami w wersji, która będzie wspierana przez kilka nadchodzących lat.

Największa zmiana to najnowszy Python 3.9, który będzie wspierany do 2025 roku:

![AIS LTS](/img/en/blog/202012/python.png)

Na forum opisaliśmy całą [procedurę przejścia do wersji LTS](https://ai-speaker.discourse.group/t/ais-lts-long-time-support-dlugoterminowe-wsparcie/1013).

Ci, którzy wykonają [Pełny reset aplikacji](/docs/ais_bramka_reset_ais_step_by_step) dostaną nowe binarki bez potrzeby instalacji, bo dodaliśmy je do najnowszej paczki z kodami startowymi (bootstrap).

![AIS LTS](/img/en/blog/202012/bootstrap.png)

Przejście na najnowszą wersję binarek jest oczywiście dobrowolne :) Jeżeli tego nie zrobimy, to też przez kilka najbliższych wydań wszystko będzie działać ok i się aktualizować.
Za kilka miesięcy zakończymy wsparcie do Python 3.7 i wtedy system, który ma nadal Python 3.7, przestanie się aktualizować, ale o tym oczywiście poinformujemy.


### ![](/img/en/blog/202011/ais_calendar.png) Kalendarze AIS

Dostaliśmy zgodę na używanie API kalendarza Google.

![AIS LTS](/img/en/blog/202012/calendar.png)


Poprawiliśmy kilka rzeczy w integracji, w kolejnych wydaniach będziemy ją nadal upraszczali i poprawiali tak, żeby kalendarze stały się funkcjonalnym elementem systemu.


### ![](/img/en/blog/202007/zigbee.png) Zigbee2Mqtt 1.16.2

Poprawki i ulepszenia oraz oczywiście obsługa nowych urządzeń. Opis całego wydania dostępny na stronie projektu [Zigbee2Mqtt](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.16.2)

![](/img/en/blog/202012/z2m.png)



### ![](/img/en/blog/202007/hass.png) AIS HA 0.118.5


AIS HA to najnowszy (stabilny) Home Assistant 0.118.5, oczywiście jak zwykle otrzymujemy sporo poprawek i nowych rzeczy. 
Cała lista nowości dostępna jest na stronie projektu: [Home Assistant 0.118.5](https://www.home-assistant.io/blog/2020/11/18/release-118/)



![Home Assistant](/img/en/blog/202012/ha-social.png)


## ![](/img/en/blog/202007/hass.png) Konferencja Home Assistant

13 Grudnia, czyli w najbliższą niedzielę, zapowiedziana jest konferencja Home Assistant - największej otwartej platformy do automatyki domowej.

![Home Assistant](/img/en/blog/202012/conference-header.png)

Będzie kilka ciekawych tematów - cały harmonogram konferencji dostępny jest na stronie [Home Assistant Conference](https://hopin.com/events/home-assistant-conference#schedule)

### Home Assistant Core 1.0! :) 

Wiemy, że na konferencji zostanie ogłoszone wydanie Home Assistant Core 1.0. Oznacza to zakończenie 7-letniego okresu bety, co bardzo nas cieszy. 

### Nasze plany i zapowiedzi na 2021 rok.

W przyszłym tygodniu podsumujemy zapowiedzi HA, które będą miały wpływ na nasz system - być może zmieni się cykl wydawniczy.
**Opublikujemy też nasze plany i zapowiedzi na 2021 rok.**



----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)

##### AI-Speaker 12/2020
