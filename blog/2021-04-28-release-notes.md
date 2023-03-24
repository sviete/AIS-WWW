---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Franek
tags: ["ais dom", "home assistant", "zigbee2mqtt", "ais-tasmota"]
---

<div class="IntroAisBlogMenu" >
<div>

![AIS](/img/en/blog/202104/franek.png)

</div>

<h2>Franek</h2>

</div>

![DEV3](/img/en/blog/202104/dev3.png) DEV3 ![AIS Commands](/img/en/blog/202104/commands.png) Komendy ![AIS Tasmota](/img/en/blog/202104/robot.png) Automatyzacje

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
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::



## ![](/img/en/blog/202104/franek.png) Franek


W tej wersji aktualizujemy mniej pakietów (Python w wersji 3.9.4 zostawiamy w repozytorium apt w statusie beta, wydamy go w kolejnej wersji za miesiąc).
Mniejsza aktualizacja to mniej problemów :) Jeżeli ktoś będzie miał problem z aktualizacją automatyczną, to zawsze może wykonać pełny reset aplikacji - pobrać startową paczkę z naszymi aktualnymi domyślnymi kodami.

Ten groźnie brzmiący "Pełny reset aplikacji" to coś bardzo podobnego do wyczyszczenia danych w aplikacji Android i... tak naprawdę to nie jest takie straszne :) 
Cała procedura opisna jest krok po kroku tu: [Pełny reset aplikacji](/docs/ais_bramka_reset_ais_step_by_step)


Jeżeli ktoś nie poradzi sobie z aktualizacją, to wystarczy odezwać się do Celiny, która wprowadziła [Usługę programowania urządzeń w AI-Speaker](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368).

**Dzięki temu macie urządzenie zaprogramowane (osobiście przez Jolkę) najnowszym oprogramowaniem w AI-Speaker!**

Na forum dostępne są szczegóły: [Usługa programowania urządzeń w AI-Speaker](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368)



### ![](/img/en/blog/202104/commands.png) Automatyzacje uruchamiane głosowo - aliasy

W poprzedniej wersji zaprezentowaliśmy najprostszy sposób na dodanie własnej komendy głosowej - poprzedzenie nazwy automatyzacji zwrotem "Jolka: [własna komenda]".

![Działanie komend](/img/en/frontend/jolka-assistant-automation.jpeg)

Teraz idziemy krok dalej i dodajemy:

- obsługę aliasów komend/poleceń - dzięki czemu tę samą automatyzację można uruchomić wieloma komendami:
![Działanie komend](/img/en/frontend/jolka-assistant-automation-aliases.jpeg)

- nadpisujemy wbudowane komendy

:::caution Uwaga
**Od tej wersji komendy dodane przez Was mają największy priorytet i nadpisują wbudowane komendy.**
Dzięki temu każdy może całkowicie dostosować działanie asystenta do własnych potrzeb i nawet samemu oprogramować odpowiedzi na pytania o godzinę itd. 
:::

![](/img/en/blog/202104/kot1.jpeg)


Szczegóły w dokumentacji [Dodawanie komendy](/docs/ais_app_assistent_add_command/)


### ![](/img/en/blog/202104/robot.png) Tasmota 9.4.0 Leslie


Pełna kontrola lokalna z szybką konfiguracją i aktualizacjami. Sterowanie urządzeń za pomocą MQTT, interfejsu WWW, protokołu HTTP. 
Kolejne wydanie niesamowicie rozszerzalnego, elastycznego, otwartego i coraz bardziej niezawodnego oprogramowania do urządzeń **ESP8266**.
[To już **1940** wspierawnych urządzeń](https://templates.blakadder.com/index.html).
W tej wersji dodany został konfigurator połączenia z siecią WiFi, którego nie powstydziłby się żaden komercyjny produkt.

Więcej na naszym forum: 

[![](/img/en/blog/202104/tasmota.jpeg)](https://ai-speaker.discourse.group/t/tasmota-v9-4-0-leslie/1703)




### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.8.2 Ponad **1400** wspieranych urządzeń. 
To jest wydanie poprawkowe, wszystkie szczegóły tu [1.18.2](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.18.2)

![z2m](/img/en/blog/202103/z2m.png)


Gdyby ktoś miał problem ze swoim adapterem Zigbee to tak jak już wspominaliśmy - dodaliśmy usługę programania urządzeń - szczegóły na forum:

 [![](/img/en/blog/202102/ais_devices_suport.png)](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368)



### ![](/img/en/blog/202101/hass.png) Asystent domowy

Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.

![Asystent domowy](/img/en/blog/202104/social.png)

Szczegółowy opis zmian w Home Assistant dostępny na blogu projektu Home Assistant: [2021.4: For our advanced users](https://www.home-assistant.io/blog/2021/04/07/release-20214/)

Największa zmiana to możliwość śledzienia wykonania automatyzacji. Poniższy zrzut ekranu przedstawia poprzednie uruchomienie automatyzacji. Automatyzacja jest wyświetlana za pomocą interaktywnego wykresu, który przedstawia ścieżkę, którą przeszła automatyzacja. Każdy węzeł na wykresie można kliknąć, aby wyświetlić szczegółowe informacje o tym, co stało się z automatyzacją podczas tego konkretnego kroku. 👏 brawo HA! Bardzo ładnie! 

![](/img/en/blog/202104/trace.jpeg)



## ![](/img/en/blog/202103/dev3.png) DEV3

Wprowadziliśmy już na stałe do oferty nową bramkę **AIS DEV3** - jest to jak do tej pory najszybsza, najprostsza w konfiguracji i obsłudze bramka AIS.

![AIS dom DEV2](/img/en/bramka/ais_dev3_in_box.jpg)


Parametry nowej bramki są opisane tu: [Bramka AIoT](/docs/ais_bramka_index), dodaliśmy też nowy konfigurator, który ma ułatwić [Pierwsze uruchomienie](/docs/ais_bramka_first_run_the_gate).
Szczerze polecamy! To naprawdę świetny sprzęt o ogromnych możliwościach, które będziemy wspólnie eksplorowali przez najbliższe 2 lata. 

-------

##### AI-Speaker 04/2021
