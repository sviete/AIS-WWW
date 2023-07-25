---
title: "AIS SUPLA MQTT"
sidebar_label: AIS SUPLA MQTT
---

## Wprowadzenie

[SUPLA](https://www.supla.org/pl/) to popularny w Polsce system automatyki domowej. SUPLA ma własny zestaw protokołów, własne oprogramowanie dla urządzeń opartych na ESP8266 i urządzenia wyprodukowane głównie przez firmę [Zamel](https://zamel.com/pl-PL/). Oprogramowanie [SUPLA jest Open Source](https://github.com/SUPLA).


## Integracja

Integracja z SUPLA MQTT BRIDGE pozwala na łatwe dodanie mostu pomiędzy brokerem MQTT działającym na bramce AIS dom a brokerem MQTT Supla. Dzięki temu urządzenia SUPLA mogą się automatycznie przedstawiać w Asystencie domowym i być sterowane także głosowo z AIS.


## Dodanie integracji

Integracja wymaga zalogowania w SUPLA Cloud w celu pobrania danych do połączenia z brokerem MQTT SUPLA.

W tym celu należy uruchomić konfigurator integracji

![Integracja SUPLA](/img/en/frontend/integration_supla_1.png)


który poprowadzi przez proces krok po kroku


![Integracja SUPLA](/img/en/frontend/integration_supla_2.png)



## Prezentacja integracji z SUPLA

Po dodaniu integracji można sterować głosowo urządzeniami SUPLA oraz używać ich w automatyzacjach tak samo, jak wszystkie inne urządzenia.
W systemie Asystent domowy wszystkie typy urządzeń (żarówka, przełącznik, odkurzacz) mają to samo API, niezależnie od producenta danego urządzenia.

![Integracja SUPLA](/img/en/frontend/integration_supla_4.png)


## Informacje techniczne - ograniczenia

:::caution Uwaga
**Integracja jest w trakcie rozwoju i testowania**

Integracja działa z urządzeniami, które udostępnia SUPLA w swoim brokerze MQTT.

Podczas dodawania lub usuwania integracji SUPLA MQTT konfiguracja brokera MQTT działającego na bramce jest nadpisywana i usługa MQTT jest automatycznie restartowana w celu zatwierdzenia zmian w konfiguracji połączenia.

W obecnej wersji integracja pozwala na połączenie z jednym serwerem SUPLA Cloud.
:::


:::tip Wskazówka
**Możliwość ręcznej konfiguracji mostu MQTT.**

Jeżeli sam konfigurujesz broker MQTT na bramce AIS dom i masz niestandardową konfigurację MQTT, to możesz ręcznie (bez konfiguratora AIS) zdefiniować połączenie mostkowe pomiędzy brokerem MQTT działającym na bramce AIS dom oraz brokerami SUPLA. 
:::

Dostęp do konfiguracji brokera MQTT działającego na bramce AIS możliwy jest z aplikacji:

![Integracja SUPLA](/img/en/frontend/integration_supla_5.png)

![Integracja SUPLA](/img/en/frontend/integration_supla_6.png)

Po wykonaniu zmian należy zrestarować broker mqtt działający na bramce. Można to zrobić z aplikacji:

![Integracja SUPLA](/img/en/frontend/integration_supla_7.png)

lub z konsoli poleceniem:

```
pm2 restart mqtt
```

![Integracja SUPLA](/img/en/frontend/integration_supla_8.png)


W przypadku problemów z działaniem mostu mqtt, logi można sprawdzić w konsoli poleceniem:

```
pm2 logs mqtt
```



Opis brokera MQTT działającego na bramce i jego ręcznej konfiguracji znajduje się w: [Konfiguracja brokera mqtt](/docs/ais_app_integration_mqtt#konfiguracja-brokera-mqtt)


Parametry, które ustawiamy konfiguratorem SUPLA MQTT:

``` text
# AIS Config file for mosquitto on gate
listener 1883 0.0.0.0
allow_anonymous true

# SUPLA MQTT bridge connection
connection bridge-dom-unikalny-identyfilator-bramki*
address host-i-port-od-supla*
topic supla/# in
topic homeassistant/# in
topic supla/+/devices/+/channels/+/execute_action out
topic supla/+/devices/+/channels/+/set/+ out
remote_username nazwa-użytkownika-z-supla*
remote_password hasło-z-supla*
bridge_cafile /data/data/com.termux/files/usr/etc/tls/cert.pem

```
