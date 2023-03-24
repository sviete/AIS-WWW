---
title: "Jak dodać własny serwis Pogodowy?"
sidebar_label: Własny serwis Pogodowy
---

Obecnie w systemie Asystent domowy w podstawowej konfiguracji (z pudełka) dostarczamy dane pogodowe z dwóch źródeł:
- [Serwisu pogodowego Dark Sky](https://darksky.net/dev) - ten serwis jest źródłem opisowej prognozy pogody dla Twojej lokalizacji. Gdy pytamy asystenta o pogodę, to zwracana opisowa informacja pogodowa pochodzi z tego serwisu
- [Serwisu pogodowego Open Weather Map](https://openweathermap.org/) - ten serwis jest źródłem aktualnych danych meteorologicznych dla Twojej lokalizacji, wyświetlanych w aplikacji w widoku pogoda


## Lokalizacja

Domyślnie pogoda pobierana jest dla lokacji zdefiniowanej na bramce. W celu uzyskania lepszych danych pogodowych należy podać w systemie swoją lokalizację. Lokalizacja definiowana jest w konfiguracji:

![Lokalizacja](/img/en/frontend/gps_settings.png)

## Definicja innego serwisu do danych pogodowych


Istnieje możliwość zmiany serwisu dostarczającego dane pogodowe, w tym celu wystarczy wybrać i skonfigurować jeden z kilkudziesięciu gotowych komponentów pogodowych dostarczanych przez [Home Assistant Weather](https://www.home-assistant.io/components/#weather)
(oczywiście można też zaimplementować własny komponent do danych pogodowych, ale jest to opcja bardziej zaawansowana i wymagająca znajomości języka programowania Python).

Poniżej pokażemy przykład krok po kroku, jak dodać dane pogodowe z serwisu pogodowego Dark Sky, w analogiczny sposób można dodawać dane z innych serwisów.


### Dark Sky - Klucz API

Będzie nam potrzebny klucz API, który jest bezpłatny, ale wymaga rejestracji. Bezpłatnie można wykonać maksymalnie 1000 zapytań dziennie.

> **UWAGA** Dark Sky obciąży Cię 0,0001 USD za każde połączenie z interfejsem API, jeśli podasz dane swojej karty kredytowej i utworzysz ponad 1000 zapytań dziennie.

Rejestracja dostępna jest tu: [Dark Sky API](https://darksky.net/dev)


### Dark Sky - Konfiguracja

Aby dodać Dark Sky do swojej instalacji, dodaj następujące elementy do pliku configuration.yaml:


`configuration.yaml`:

```yaml
# Przykład z configuration.yaml
weather:
  - platform: darksky
    api_key: TWOJ_KLUCZ_API
```

Szczegółowa konfiguracja dostępna jest tutaj: [Home Assistant, Dark Sky](https://www.home-assistant.io/components/weather.darksky/)


### Dark Sky - dodanie do widoku

Aby dane o pogodzie z naszego nowo dodanego serwisu wyświetlały się w widoku pogody w aplikacji należy nadpisać domyślną definicję grupy pogody.

Nadpisywanie group/widoków możliwe jest w pliku groups.yaml, znajdującego się na bramce w tym samym folderze z konfiguracją, co główny plik konfiguracyjny configuration.yaml.


Domyślna definicja widoku pogody, którą dostarczamy w podstawowej konfiguracji systemu wygląda tak:

```yaml
# Domyślna definicja widoku pogody w aplikacji
pogoda:
  name: Pogoda
  view: yes
  icon: mdi:weather-partlycloudy
  entities:
    - weather.openweathermap
    - sensor.dark_sky_hourly_summary
    - sensor.dark_sky_daily_summary
```


żeby nadpisać domyślną definicję własną konfiguracją, wystarczy dodać odpowiednie wpisy do pliku groups.yaml.
Poniżej przykład zawierający całą podstawową konfigurację oraz nasz nowo dodany komponent pogodowy Dark Sky (patrz ostatnia linijka):

`groups.yaml`:

```yaml
# Zmodyfikowana definicja widoku pogoda w aplikacji
pogoda:
  name: Pogoda
  view: yes
  icon: mdi:weather-partlycloudy
  entities:
    - weather.openweathermap
    - sensor.dark_sky_hourly_summary
    - sensor.dark_sky_daily_summary
    - weather.dark_sky
```

w efekcie, po restarcie aplikacji, w widoku pogody będziemy mieli dane z dwóch serwisów pogodowych:


![Aplikacja asystent domowy widok pogody](/img/en/frontend/frontend-weather.png)
