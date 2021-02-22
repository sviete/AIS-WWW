---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Darek
tags: [ais dom, home assistant, zigbee2mqtt]
---

<div class="IntroAisBlogMenu" >
<div>

![AIS](/img/en/blog/202102/darek.png)

</div>

<h2>Darek LTS!</h2>

</div>

![AIS DEV KIT](/img/en/blog/202102/speaker.png) DEV KIT  ![AIS Supla MQTT](/img/en/blog/202102/bridge.png) SUPLA MQTT ![AIS Python](/img/en/blog/202102/snake.png) Python3.9.1 ![AIS Zigbee2Mqtt](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt

<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png)Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja ręczna](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać nawet 20 minut.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce i baza danych jest migrowana do nowego formatu.
 **Poczekaj cierpliwie na zakończenie aktualizacji.**
:::

## ![](/img/en/blog/202102/darek.png) Darek LTS!

> TODO

![](/img/en/blog/202102/python.png) 

## ![](/img/en/blog/202102/speaker.png) AIS DEV KIT

Tak jak zapowiadaliśmy, publikujemy szczegółową instrukcję tak, żeby każdy mógł sam kupić potrzebne elementy w celu przerobienia bramki w głośnik.

> TODO

![](/img/en/blog/202101/dev-kit.jpeg)



## [](/img/en/blog/202102/bridge.png) SUPLA MQTT bridge

Tak jak zapowiedzialiśmy na forum [Budujemy mosty](https://ai-speaker.discourse.group/t/kolejna-celina-beta-wydana/1277)

![MQTT Bridge](/img/en/blog/202101/mqtt_bridge.jpeg)

Pozwoli to na łatwą integrację z SUPLA Cloud, porozumieliśmy się w tej sprawie z zespołem SUPLA i otrzymaliśmy dostęp do wykonania takiej integracji.
W kolejnej wersji skupimy się na tym temacie tak, żeby cała integracja sprowadziła się do kilku kliknięć w aplikacji.


Gdyby ktoś chciał już testować integrację z MQTT Supla to w konfiguracji MQTT dodaliśmy możliwość zmiany konfiguracji brokera MQTT z poziomu aplikacji

 ![MQTT](/img/en/integrations/mqtt_edit_mosquito_config.png)


 Więcej informacji w dokumentacji: [Konfiguracja brokera mqtt](/docs/ais_app_integration_mqtt#konfiguracja-brokera-mqtt)






## ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.7.1
Sporo poprawek, wsprawcie dla nowych urządzeń i nowe oprogramowanie do adapterów zigbee, wszystkie szczegóły tu [1.17.1](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.17.1)


Dodaliśmy usługę programania urządzeń - szczegóły:

> TODO



## ![](/img/en/blog/202101/hass.png) Asystent domowy

Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym stabilnym Home Assistant Core.

![Asystent domowy](/img/en/blog/202102/hasocial.png)

Szczegółowy opis zmian w Home Assistant dostępny na blogu projektu Home Assistant: [2021.2: Z-Wave... JS!](https://www.home-assistant.io/blog/2021/02/03/release-20212/)



-------

##### AI-Speaker 02/2021
