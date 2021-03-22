---
title: "AIS SUPLA MQTT"
sidebar_label: AIS SUPLA
---

## Wprowadzenie

[SUPLA](https://www.supla.org/pl/) to popularny w Polsce system automatyki domowej. SUPLA ma własny zestaw protokołów, własne oprogramowanie dla urządzeń opartych na ESP8266 i urządzenia wyprodukowane głównie przez firmę [Zamel](https://zamel.com/pl-PL/). Oprogramowanie [SUPLA jest Open Source](https://github.com/SUPLA).

:::tip Informacja
Jest to oficjalna integracja. AI-Speaker i SUPLA wspólnie działają w celu zapewnienia, że tak integracja będzie przez nas rozwijana i utrzymywana na najlepszym poziomie. Jest to długoterminowa współpraca, którą zamierzamy rozwijać.
:::

## Integracja

Oferujemy w systemie Asystent domowy oficjalną integrację z SUPLA MQTT.
Ta integracja skierowana jest do osób, które chcą sterować swoimi urządzeniami SUPLA także głosowo z Asystenta domowego.

## Dodanie integracji

Integracja wymaga zalogowania w SUPLA Cloud.

W tym celu należy uruchomić konfigurator integracji

![Integracja SUPLA](/img/en/frontend/integration_supla_1.png)


który poprowadzi przez proces krok po kroku


![Integracja SUPLA](/img/en/frontend/integration_supla_2.png)


## Informacja o połączeniu z SUPLA

Po pomyślnym dodaniu integracji możemy dodać do interfejsu aplikacji sensor z informacją o połączeniu z SUPLA:

![Integracja SUPLA](/img/en/frontend/integration_supla_3.png)

Dzięki temu możemy łatwo monitorować status połączenia oraz ilość wiadomości wysyłanych i odbieranych z SUPLA:

![Integracja SUPLA](/img/en/frontend/integration_supla_4.png)


## Prezentacja integracji z SUPLA

Po dodaniu integracji można sterować głosowo urządzeniami SUPLA oraz używać ich w automatyzacjach tak samo, jak wszystkie inne urządzenia.
W systemie Asystent domowy wszystkie typy urządzeń (żarówka, przełącznik, odkurzacz) mają to samo API, niezależnie od producenta danego urządzenia.

![Integracja SUPLA](/img/en/frontend/integration_supla_4.png)


## Informacje techniczne - ograniczenia

:::caution Uwaga
**Integracja jest w trakcie rozwoju.**
Integracja działa z urządzeniami, które udostępnia SUPLA w swoim brokerze MQTT.
:::

W obecnej wersji integracja pozwala na połączenie z jednym serwerem SUPLA Cloud. Jeżeli ktoś posiada urządzenia w wielu różnych serwerach SUPLA Cloud, to może zdefiniować ręcznie połączenie mostkowe pomiędzy brokerem MQTT działającym na bramce AIS dom oraz brokerami SUPLA. Dostęp do konfiguracji brokera MQTT działającego na bramce AIS możliwy jest z aplikacji, opis znajduje się w: [Konfiguracja brokera mqtt](/docs/ais_app_integration_mqtt#konfiguracja-brokera-mqtt)
