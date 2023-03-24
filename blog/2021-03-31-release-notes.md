---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Ewa
tags: ["ais dom", "home assistant", "zigbee2mqtt"]
---

<div class="IntroAisBlogMenu" >
<div>

![AIS](/img/en/blog/202103/eva.png)

</div>

<h2>Ewa</h2>

</div>

![DEV3](/img/en/blog/202103/dev3.png) DEV3 ![AIS Python](/img/en/blog/202102/snake.png) Python3.9.2 ![AIS Zigbee2Mqtt](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt ![AIS Radio](/img/en/blog/202103/radio.png) AIS audio

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



## ![](/img/en/blog/202103/eva.png) Ewa


W tej wersji aktualizujemy wiele pakietów, w tym Python do wersji 3.9.2 i mosquitto do wersji 2.0.7.
O szczegółach pisaliśmy na blogu: [Python 3.9.2](https://ai-speaker.discourse.group/t/nowe-wersje-pakietow-binarnych-w-repozytorium-apt/1492) i [mosquitto  2.0.7](https://ai-speaker.discourse.group/t/broker-mqtt-nowe-mosquitto-2-0-7/1493)

Aktualizujemy też aplikację Android, dzięki czemu cały system jest teraz ładniejszy i przechodzenie pomiędzy ekranami jest bardziej przejrzyste. O tym, jak to działa pisaliśmy na blogu [Ułatwienia na starcie](https://ai-speaker.discourse.group/t/aktualizacja-aplikacji-android-na-bramce-ulatwienia-na-starcie/1477)


Zdajemy sobie sprawę, że te wszystkie "rewolucyjne zmiany", które wprowadzamy w oprogramowaniu, wymagają cierpliwości podczas instalacji.
Przy niektórych konfiguracjach może nawet podczas instalacji zdarzyć się jakiś wyjątek i komuś może pójść coś nie tak... jesteśmy na to przygotowani. Jeżeli ktoś ma problem z aktualizacją automatyczną, to zawsze może wykonać pełny reset aplikacji - pobrać startową paczkę z naszymi aktualnymi domyślnymi kodami.

Cała procedura opisna jest krok po kroku tu: [Pełny reset aplikacji](/docs/ais_bramka_reset_ais_step_by_step)
Ten groźnie brzmiący "Pełny reset aplikacji" to coś bardzo podobnego do wyczyszczenia danych w aplikacji Android i... tak naprawdę to nie jest takie straszne :) 

![Reset](/img/en/bramka/settings_ais_service_app_reset_1.jpeg)


Oczywiście rozumiemy, że nie każdemu ta procedura może się udać, bo TV/monitor nie działa, bo Internetu nie ma, bo zabrakło prądu... bo niech to Jolka zrobi! ;)

Dobra wiadomość jest taka, że **Jolka lubi programować urządzenia i chętnie to zrobi :) !**  

:::caution Macie pełne wsparcie!
Gdyby coś się komuś nie udało, to nie martwcie się, już nie trzeba pisać na forum "nie działa mi" i czekać aż ktoś, krok po kroku będzie tłumaczył jak sprawdzić logi i wykonać procedurę opisaną x razy w dokumentacji i na forum ...

Jeżeli mamy problem z aktualizacją, to wystarczy odezwać się do Celiny, która wprowadziła [Usługę programowania urządzeń w AI-Speaker](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368), koszt jest symboliczny (na pakowanie i kawę w żabce dla Jolki).

**Dzięki temu macie urządzenie zaprogramowane (osobiście przez Jolkę) najnowszym oprogramowaniem w AI-Speaker!**

Na forum dostępne są szczegóły: [Usługa programowania urządzeń w AI-Speaker](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368)
:::


### Automatyzacje uruchamiane głosowo

Z tematu na forum [Co powiedziała Jolka](https://ai-speaker.discourse.group/t/co-powiedziala-jolka/1544/14) zrodził się pomysł na ciekawą funkcjonalność.
Oto najprostszy sposób na dodanie własnej komendy głosowej - poprzedzenie nazwy automatyzacji zwrotem "Jolka: [własna komenda]".

![Działanie komend](/img/en/frontend/jolka-assistant-automation.jpeg)

Szczegóły [Dodawanie komendy](/docs/ais_app_assistent_add_command/)


### Dodawanie mediów

W łatwy sposób możesz dodać nowe radio internetowe - wystarczy wypełnić prosty formularz.
Nowo dodawane media możesz też udostępnić dla innych użytkowników:

![Dodaj radio](/img/en/frontend/ais_add_media_3.png)

Szczegóły [Dodawanie mediów](/docs/ais_app_add_media)

### Selektory 

Nie trzeba wpisywać już identyfikatorów w YAML, żeby wywołać usługę. Wystarczy wypełnić formularz wpisując lub wybierając wartości z list.
To wyeliminuje sporo problemów i przypadkowych błędów :+1:
Ten sam mechanizm będzie nie tylko w narzędziach deweloperskich, ale też w szablonach automatyzacji, skryptach i automatyzacjach.

![](/img/en/blog/202103/selektory.png)



### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.8.1
Nowy Dashboard, sporo poprawek, wsparcie dla nowych urządzeń, wszystkie szczegóły tu [1.18.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.18.1)

![z2m](/img/en/blog/202103/z2m.png)


Gdyby ktoś miał problem ze swoim adapterem Zigbee to tak jak już wspominaliśmy - dodaliśmy usługę programania urządzeń - szczegóły na forum:

 [![](/img/en/blog/202102/ais_devices_suport.png)](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368)



### ![](/img/en/blog/202101/hass.png) Asystent domowy

Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.

![Asystent domowy](/img/en/blog/202103/social.png)

Szczegółowy opis zmian w Home Assistant dostępny na blogu projektu Home Assistant: [2021.3: My Oh My](https://www.home-assistant.io/blog/2021/03/03/release-20213/)




## ![](/img/en/blog/202103/dev3.png) DEV3

Wprowadzamy nową bramkę DEV3 - najnowszą i (jak dotychczas) najszybszą i najprostszą w konfiguracji i obsłudze bramkę AIS.

Bramka miała swoją premierę na forum [DEV3 - nowa bramka AIoT już jest](https://ai-speaker.discourse.group/t/dev3-nowa-bramka-aiot-juz-jest/1496) i zaliczyła "lekki falstart", bo okazało się, że da się wgnieść jej dekielek... co nie wyglądało za dobrze.

![](/img/en/blog/202103/dev3_dekielek.png)

Zdecydowaliśmy się na wstrzymanie sprzedaży i zmianę dekielka na twardszy. Nowe dekielki już do nas jadą:

![](/img/en/blog/202103/dekielek1.png)


Wznowienie sprzedaży i możliwość "wymiany dekielków" zaoferujemy na spokojnie po Świętach. 

Parametry nowej bramki są opisane tu: [Bramka AIoT](/docs/ais_bramka_index), dodaliśmy też nowy konfigurator, który ma ułatwić [Pierwsze uruchomienie](/docs/ais_bramka_first_run_the_gate).
 

-------
 **Z okazji zbliżających się Świąt Wielkanocnych pragniemy złożyć najserdeczniejsze życzenia zdrowych, pogodnych, wypełnionych miłością Świąt. **

 ![AIS](/img/en/blog/202103/eva.png)

 **Spokojnych i Wesołych Świąt.**

##### AI-Speaker 03/2021
