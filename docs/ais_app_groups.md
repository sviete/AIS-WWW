---
title: "Grupy"
sidebar_label: Grupy
---

Widoki zawierają pogrupowane element systemu, które nazywamy grupami.


## Karty
Grupy w aplikacji mogą być wyświetlane jako karty, na przykład grupa pogoda:

![Aplikacja asystent domowy](/img/en/frontend/frontend-group.png)


## Specjalne grupy

Nasze komponenty automatycznie tworzą specjalne grupy, zawierające elementy składowe. W naszym systemie takie grupy to na przykład:

### Wszystkie przełączniki

![Aplikacja asystent domowy](/img/en/frontend/frontend-group-all-switches.png)


### Wszystkie światła

![Aplikacja asystent domowy](/img/en/frontend/frontend-group-all-lights.png)


### Wszystkie czujniki

![Aplikacja asystent domowy](/img/en/frontend/frontend-group-all-sensors.png)


## Tworzenie własnych grup

>**Jeśli chcesz możesz sam tworzyć własne grupy** w celu dopasowania interfejsu systemu do własnych potrzeb.



Grupy definiuje się w pliku konfiguracyjnym systemu.

Więcej technicznych informacji dostępnych jest na stronie projektu platformy Home Assistant, w zakładce [Komponenty -> Grupy: ](https://www.home-assistant.io/components/group/) https://www.home-assistant.io/components/group/


Przykład konfiguracji grupy "Radia Internetowe" w systemie Asystent domowy:

`ais_radio_player.yaml`:

```yaml
group:
  Radio Player:
    control: hidden
    name: Radia Internetowe
    entities:
      - input_select.radio_type
      - input_select.radio_station_name
      - input_select.radio_player
```


![Aplikacja asystent domowy](/img/en/frontend/frontend-group-radio.png)
