---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Darek
tags: ["ais dom", "home assistant", "zigbee2mqtt"]
---

<div class="IntroAisBlogMenu" >
<div>

![AIS](/img/en/blog/202102/darek.png)

</div>

<h2>Darek LTS!</h2>

</div>

![AIS Supla MQTT](/img/en/blog/202102/bridge.png) SUPLA MQTT ![AIS DEV KIT](/img/en/blog/202102/speaker.png) DEV KIT ![AIS Python](/img/en/blog/202102/snake.png) Python3.9.1 ![AIS Zigbee2Mqtt](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt

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

## ![](/img/en/blog/202102/darek.png) Darek LTS!


Uwaga ta wersja wymaga Python w wersji nowszej niż 3.7, spowodowane jest to przejściem Home Assistant na nowszą wersję Python.

![](/img/en/blog/202102/python_update_ha.png)


Jeżeli podczas pobieraniu informacji o wersji pojawi się taki komunikat **Masz Python w wersji 3.x.x Przejdz na wersję LTS**

![](/img/en/blog/202102/python_update.png)


To należy przed aktualizacją wykonać aktualizację pakietów binarnych na bramce (w tym języka Python). Nie robimy tego automatycznie, można to zrobić ręcznie na 2 sposoby:


1. Sposób - pełen reset aplikacji:

    a) Wykonanie [kopii zapasowej konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji),
 
    b) Uruchomienie [pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step),

    c) Przywrócenie konfiguracji z kopii [podczas pierwszego uruchomenia aplikacji](/docs/ais_bramka_first_run_step_account)

lub

2. Sposób - uruchomienie skryptu i cierpliwe poczekanie na jego zakończenie:

    Cała procedura opisana jest na forum: [AIS LTS long time support / długoterminowe wsparcie](https://ai-speaker.discourse.group/t/ais-lts-long-time-support-dlugoterminowe-wsparcie/1013)


Po aktualizacji dostępna będzie na bramce najnowsza wersja języka Python:


![](/img/en/blog/202102/python.png) 


Kolejne aktualizacje będą wykonywane automatycznie. Testujemy już wersję Python 3.9.2. Tylko przejście na wersję 4 będzie znowu bardziej skomplikowane, ale to za kilka lat :) i pewnie do tego czasu AIS będzie jeszcze prostszy w aktualizacji.



------------------------------
Oczywiście nie ma obowiązku aktualizacji bramki, ale zachęcamy do tego, bo z każdą wersją bramka działa lepiej. Życzymy cierpliwości, wtedy na pewno wszystko będzie dobrze.

Gdyby coś komuś się nie udało to nie martwcie się - Celina wprowadziła “Usługę programowania urządzeń w AI-Speaker”, koszt jest symboliczny i macie urządzenie zaprogramowane w AI-Spekaer :)
Na forum dostępne są szczegóły: [Usługa programowania urządzeń w AI-Speaker](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368)



## ![](/img/en/blog/202102/bridge.png) SUPLA MQTT bridge

Oferujemy w systemie Asystent domowy oficjalną integrację z SUPLA MQTT. Ta integracja skierowana jest do osób, które chcą sterować swoimi urządzeniami SUPLA głosowo z Asystenta domowego oraz automatyzować sterowanie tymi urządzeniami na bramce AIS dom.


![Integracja SUPLA](/img/en/frontend/integration_supla_2.png)

Nawiązaliśmy współpracę z zespołem SUPLA, o której napiszemy niebawem więcej.
Cała integracja sprowadza się do kilku kliknięć w aplikacji zgodnie z opisem [AIS SUPLA MQTT](/docs/ais_app_supla)


## ![](/img/en/blog/202102/speaker.png) AI-Speaker DEV KIT

Tak jak zapowiadaliśmy, publikujemy szczegółową instrukcję tak, żeby każdy mógł sam kupić potrzebne elementy w celu przerobienia bramki w głośnik.


![DEV KIT 1](/img/en/iot/dev_kit_1.jpeg)


Instrukcja dostępna jest w dokumentacji: [AI-Speaker DEV KIT 1](/docs/ais_dev_kit_1_index)
Jutro (25 lutego 2021) uzupełnimy instrukcję o zdjęcia z montażu i wystawimy kilka egzemplarzy na Allegro.


## ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.7.1
Sporo poprawek, wsparcie dla nowych urządzeń i nowe oprogramowanie do adapterów zigbee, wszystkie szczegóły tu [1.17.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.17.1)

![](/img/en/blog/202102/z2m.png)


Gdyby ktoś miał problem ze swoim adapterem Zigbee to tak jak już wspominaliśmy - dodaliśmy usługę programania urządzeń - szczegóły na forum:

 [![](/img/en/blog/202102/ais_devices_suport.png)](https://ai-speaker.discourse.group/t/usluga-programowania-urzadzen-w-ai-speaker/1368)


## ![](/img/en/blog/202101/hass.png) AIS Tasmota

Najnowsze wersje kodów i binarek, jak zwykle dostępne w naszym repoztyrorium: [AIS Tasmota v9.3.1 Kenneth](https://github.com/sviete/AIS-Tasmota/tree/firmware/firmware)

Pełny opis zmian na strone [Tasmota](https://github.com/arendst/Tasmota/releases/tag/v9.3.1): 

[![](/img/en/blog/202102/tasmota.png)](https://github.com/arendst/Tasmota/releases/tag/v9.3.1)



## ![](/img/en/blog/202101/hass.png) Asystent domowy

Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.

![Asystent domowy](/img/en/blog/202102/hasocial.png)

Szczegółowy opis zmian w Home Assistant dostępny na blogu projektu Home Assistant: [2021.2: Z-Wave... JS!](https://www.home-assistant.io/blog/2021/02/03/release-20212/)



-------

##### AI-Speaker 02/2021
