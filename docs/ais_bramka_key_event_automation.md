---
title: "Automatyzacja wyzwalana przyciskiem"
sidebar_label: Automatyzacja wyzwalana przyciskiem
---

## Wprowadzenie

Bramka obsługuje urządzenia USB klasy HID (Human Interface Device), które służą głównie do interakcji z użytkownikiem.
Naciśnięcie przycisku na klawiaturze czy innym kontrolerze USB HID podłączonym do bramki, przesyłane jest do Asystenta domowego jako zdarzenie.
Takie zdarzenia mogą wyzwalać automatyzacje. Opiszemy to na przykładzie poniżej.

![AIS button](/img/en/bramka/ais_remote_key_events.jpg)

### Rozpoznawanie zdarzeń typu 'naciśnięcie przycisku'

Po podłączeniu do USB kontrolera i jego poprawnym rozpoznaniu przez system, asystent powie "Dodano urządzenie ....".

W [trybie sterowania bez monitora](ais_bramka_first_run#sterowanie-bez-monitora), kody przycisków z kontrolerów wysyłane są tylko do Asystenta domowego jako zdarzenia typu **ais_key_event** i nie są obsługiwane przez system.
W [trybie sterowania na monitorze](ais_bramka_first_run#sterowanie-na-monitorze), kody przycisków z kontrolerów wysyłane są do Asystenta domowego jako zdarzenia typu **ais_key_event** oraz są obsługiwane przez system.

Żeby dowiedzieć się, jaki kod ma przycisk, który naciskamy, wystarczy sprawdzić stan encji: **binary_sensor.ais_remote_button** - to jest kod ostatnio naciśniętego przycisku.

![AIS button](/img/en/bramka/ais_remote_key_events_1.png)

Oczywiście dla wygody można dodać tę encję jako kartę w aplikacji:

![AIS button](/img/en/bramka/ais_remote_key_events_2.png)

Kod tej karty:

``` yaml
type: button
tap_action:
  action: none
entity: binary_sensor.ais_remote_button
show_state: true
hold_action:
  action: none
show_name: true
icon: 'hass:keyboard-settings'
name: Kod przycisku kontrolera HID

```
Dzięki tej karcie możemy zobaczyć w aplikacji, jakie kody kryją się pod przyciskami w naszych kontrolerach HID.

![AIS button](/img/en/bramka/ais_remote_key_events_0.png)

Gdy już wiemy, jaki kod ma przycisk, którym chcemy wyzwalać automatyzacje, to przechodzimy do jej definiowania.


### Dodnie automatyzacji

1. Nazwa automatyzacji, np. włączenie radia po naciśnięciu przycisku na kontrolerze

![AIS button](/img/en/bramka/ais_remote_key_events_3.png)



2. Wyzwalacz automatyzacji - ais_key_event

![AIS button](/img/en/bramka/ais_remote_key_events_4.png)


3. Akcja do wykonania

![AIS button](/img/en/bramka/ais_remote_key_events_5.png)


### Kod automatyzacji

Kod automatyzacji w formacie YAML:

``` yaml
alias: Włączenie radia Zet po naciśnięciu przycisku  z kodem 15 na kontrolerze
description: ''
trigger:
  - platform: event
    event_type: ais_key_event
    event_data:
      code: '15'
condition: []
action:
  - service: ais_ai_service.process
    data:
      text: Włącz radio ZET
  - device_id: ''
    domain: ''
    entity_id: ''
mode: single
```

Możemy w automatyzacji zmienić tryb edycji na YAML i łatwo przekleić kod do swojej automatyzacji

![AIS button](/img/en/bramka/ais_remote_key_events_6.png)




## Schemat automatyzacji

Automatyzację wyzwalaną przez zdarzenie naciśnięcia przycisku możemy w łatwy sposób utworzyć na podstawie gotowego [schematu automatyzacji](ais_bramka_automation_blueprint).

Wystarczy, że:
1. Wybierzemy predefiniowany schemat **Wykonanie komendy po naciśnięciu przycisku**

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_button_0.png)

2. Uzupełnimy i zapiszemy zdefiniowany szablon:

![Dodanie nowej automatyzacji](/img/en/bramka/blueprint_button.png)
