---
title: "AIS Auto Proxy"
sidebar_label: AIS Auto Proxy
---

## Wprowadzenie

AIS Auto Proxy jest to integracja, która umożliwia innym aplikacją działającym w lokalnej sieci na integrację z interfejsem użytkownika Asystenta domowego. Zasadza działania, opiera się na mechanizmie typu [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/), który jest wykorzystywany w kontenerowych aplikacjach.

AIS Auto Proxy wykorzystywane jest do aplikacji Zigbee2Mqtt:

![zigbee](/img/en/bramka/app_zigbee2mqtt_proxy.png)

oraz do urządzeń z oprogramowaniem AIS dom:

![RF 433](/img/en/iot/iot_ais_dom_device_config_0.png)

Dzięki temu aplikacje działające na innych adresach IP, czy działające na bramce, ale na innym porcie, mogą być wbudowywane w aplikację Asystent domowy i możemy mieć do nich zdalny dostęp za pomocą szyfrowanego tunelu.

## Dodanie własnej lokalnej aplikacji do Asystenta domowego

Zakładamy, że masz aplikację, która działa w twojej sieci lokalnej i chcesz mieć do niej dostęp zdalny z Asystenta domowego. Przykładowo taką aplikacją niech będzie aplikacja webowa działająca na urządzeniu z oprogramowaniem AIS dom.

![proxy1](/img/en/integrations/ais_proxy_1.png)


### 1. Sprawdź, czy aplikacja działa w iframe

Dodaj kartę typu Strona WEB i zobacz czy strona aplikacji jest poprawie wyświetlana w aplikacji Asystent domowy, gdy jesteś w sieci lokalnej:
![AIS Proxy](/img/en/integrations/ais_proxy2.png)

W ten sposób upewniasz się, że bramka ma dostęp do tej strony - że bramka i inna aplikacja "widzą się w sieci lokalnej".


### 2. Dodaj długoterminowy token

Długoterminowe tokeny dostępu umożliwiają interakcję z Asystentem domowym za pomocą API. Każdy token będzie ważny przez 10 lat od utworzenia.
Tokeny dodajemy z poziomu profulu użytkownika.

![AIS Proxy](/img/en/integrations/ais_proxy3.png)


### 3. Dodaj dostęp do aplikacji przez ais_proxy

Działa to podobnie jak iframe, ale przez proxy, składnia adresu URL jest następująca:

```
/api/ais_auto_proxy/<token>/<ip-twojej-aplikacji>/<port-twojej-aplikacji>/

```

W sieci lokalnej efekt będzie taki sam jak poprzednio ze zwykłym iframe:

![AIS Proxy](/img/en/integrations/ais_proxy4.png)

To, co się zmieniło to możliwość zdalnego dostępu do aplikacji (podczas połączania [szyfrowanym tunelem](ais_bramka_remote_www_index)):

![AIS Proxy](/img/en/integrations/ais_proxy5.png)

