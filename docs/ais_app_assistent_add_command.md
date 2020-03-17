---
title: "Dodawanie komendy"
sidebar_label: Dodawanie komendy
---

Możesz skonfigurować własne zdania/sentencje do przetworzenia na akcje w systemie. Działa to poprzez odwzorowywanie zdań na intencje, a następnie skonfigurowanie skryptu w celu obsługi tych intencji.

> Obecnie, żeby dodać nową komendę, należy dodać ją do plików konfiguracji. Dodawanie komend z interfejsu aplikacji będzie rozwijane w przyszłości.
**UWAGA - dodając własne intencje nadpisujesz domyślną konfigurację Asystenta domowego.**
 Nadpisanie konfiguracji ma wpływ na działanie systemu.
W przypadku problemów z działaniem systemu zalecamy usunięcie własnych wpisów z konfiguracji i sprawdzenie działania z domyślną konfiguracją.

## Uproszczony diagram działania komend w Asystencie domowym:
![Działanie komend](/img/en/frontend/frontend-assistant-diagram.png)



## Lokalizacja konfiguracji Asystenta

Katalog z konfiguracją domyślnie znajduje się na urządzeniu (bramce) w folderze **/data/data/pl.sviete.dom/files/home/AIS**

ścieżkę do katalogu możesz sprawdzić w aplikacji pod adresem http://ais-dom.local:8180/dev-info/ -> narzędzia deweloperskie -> informacje:

![Konfiguracja folder](/img/en/frontend/frontend-assistant-config.png)

Katalog z konfiguracją dostępny jest w lokalnej sieci po ssh lub ftp:

![Folder konfiguracji po FTP](/img/en/frontend/frontend-assistant-config-ftp.png)


## Definicja sentencji

Bezpośrednio w katalogu konfiguracji utwórz plik **conversation.yaml**,
w pliku conversation.yaml dodaj sentencje, które mają wywoływać twoje nowe intencje. Przykładowo, jeżeli chcesz, by Twój asystent odpowiadał Ci, ile czasu jeszcze zostało do końca pracy to możesz zdefiniować coś takiego:

```yaml
intents:
  WhenEOD:
    - ile do końca pracy
    - kiedy koniec pracy
    - kiedy do domu
```

## Definicja intencji

Bezpośrednio w katalogu konfiguracji utwórz plik **intents.yaml**,
w pliku intents.yaml dodaj intencje oraz akcje, które mają zostać wywołane po wykryciu intencji. Posługując się naszym przykładem możemy zrobić coś takiego:

```yaml
WhenEOD:
  speech:
    text: Nie wiem, zapytaj szefa :)
  action:
    service: ais_ai_service.say_it
    data_template:
      text: "Jest {{ states.sensor.time.state }}. Nie wiem, zapytaj szefa :)."
```

## Dodaj sentencje i intencje do głównego pliku konfiguracji

W katalogu konfiguracji znajduje się plik configuration.yaml, na końcu tego pliku dodaj lokalizację skryptu z intencjami oraz modułu konwersacja - dopisz te 2 linie na końcu pliku:

```yaml
intent_script: !include intents.yaml
conversation: !include conversation.yaml
```

## Wypróbuj działanie nowej komendy

:::important
Sprawdz konfigurację i uruchom ponownie Asystenta domowego w celu przetesowania nowej komendy
:::

![Restart](/img/en/remote/check_config_and_restart.png)


![Test nowej komendy](/img/en/frontend/frontend-assistant-config-4.png)


## Wyjaśnienie dodatkowe

W przykładzie

```yaml
WhenEOD:
  speech:
    text: Nie wiem, zapytaj szefa :)
  action:
    service: ais_ai_service.say_it
    data_template:
      text: "Jest {{ states.sensor.time.state }}. Nie wiem, zapytaj szefa :)."
```

**speech** to tekst zwracany do obiektu IntentResponse, tekst z tego obiektu wyświetlany jest a aplikacji w okienu konwersacji z asystentem
![Test nowej komendy](/img/en/remote/conversation1.png)

szczegóły w [dokumentacji dla developerów Home Assistant](https://developers.home-assistant.io)

**action** to wykonanie akcji w Asystencie domowym
**service** to usługa zdefiniowana w systemie

**ais_ai_service.say_it**
To usługa zamiany tekstu na mowę - czytanie tekstu przez asystenta.

Usługi można testować/wywoływać z **Narzędzi deweloperskich**

![Test nowej komendy](/img/en/remote/conversation_dev_service.png)


**data_template** to zaawansowana funkcjonalność szablonów, pozwalająca dynamicznie kontrolować informacje przekazywane do usługi
szczegóły w [dokumentacji dla developerów Home Assistant](https://www.home-assistant.io/docs/configuration/templating/)

Szablony możesz tworzyć/sprwawdzać w **Narzędziach deweloperskich**

![Test nowej komendy](/img/en/remote/conversation_dev_template.png)
