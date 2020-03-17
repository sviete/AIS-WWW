---
title: "SUPLA"
sidebar_label: SUPLA
---


## Wprowadzenie

[SUPLA](https://www.supla.org/pl/) to popularny w Polsce system automatyki domowej. SUPLA ma własny zestaw protokołów, własne oprogramowanie dla urządzeń opartych na ESP8266 i urządzenia wyprodukowane głównie przez firmę [Zamel](https://zamel.com/pl-PL/). Oprogramowanie [SUPLA jest Open Source](https://github.com/SUPLA).


## Integracja

Oferujemy w systemie Asystent domowy integrację z SUPLA OpenAPI. Jest to pierwsza, jeszcze niekompletna wersja (obecnie obsługiwane są tylko żaluzje i przełączniki). Bazujemy na pakiecie [PySupla](https://github.com/mwegrzynek/pysupla) i na integracji z Home Assistant autorstwa Michała Węgrzynka [mwegrzynek](https://github.com/mwegrzynek).

Ta integracja skierowana jest do osób, które chcą sterować swoimi urządzeniami SUPLA także głosowo z Asystenta domowego.

W tej chwili nie można dodawać pojedynczych urządzeń - wszystkie urządzenia są wykrywane jednocześnie z serwerów Supla Cloud lub lokalnego serwera Supla.

## Dodanie integracji

Integracja wymaga podania dwóch parametrów:

- Serwer
- Token

![Integracja SUPLA](/img/en/frontend/integration_supla_1.png)


### Parametr serwer

To adres Twojego serwera Supla Cloud (nazwa IP lub nazwa DNS)

![Integracja SUPLA](/img/en/frontend/integration_supla_2.png)


### Parametr Token

Token dostępu do konfiguracji interfejsu API REST. Można go uzyskać na stronie http[s]://twoj.server.org/integrations/tokens
Podczas generowania tokena należy dodać przynajmniej uprawnienia do odczytu kanału i wykonywania akcji.

![Integracja SUPLA](/img/en/frontend/integration_supla_3.png)

## Prezentacja integracji z SUPLA

Po dodaniu integracji można sterować głosowo urządzeniami SUPLA oraz używać ich w automatyzacjach tak samo, jak wszystkie inne urządzenia.
W systemie Asystent domowy, wszystkie typy urządzeń (żarówka, przełącznik, odkurzacz) mają to samo API niezależnie od producenta danego urządzenia.
<div>
  <video width="100%" height="100%" playsinline autoplay muted loop>
    <source src="/video/supla.webm" type="video/webm"/>
  </video>
</div>
