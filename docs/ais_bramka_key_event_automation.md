---
title: "Automatyzacja wyzwalana przyciskiem"
sidebar_label: Automatyzacja wyzwalana przyciskiem
---

## Wprowadzenie

Podczas sterowania w [trybie bez monitora](ais_bramka_first_run#sterowanie-bez-monitora) naciśnięcia przycisku na pilocie, klawiaturze czy innym kontrolerze podłączonym do bramki przesyłane są do Asystenta domowego jako zdarzenia.
Takie zdarzenia mogą wyzwalać automatyzację opiszemy to na przykładzie pniżej.

![AIS button](/img/en/bramka/ais_remote_key_events.jpg)

### Rozpoznawania zdarzeń typu naciśnięcie przycisku

Po podłączeniu do usb kontrolera i jego poprawnym rozpoznaniu przez system asystent powie "Dodano urządzenie ....". 
Gdy jesteś w [trybie sterowania bez monitora](ais_bramka_first_run#sterowanie-bez-monitora) to przyciski wysyłane są do Asystenta domowego jako zdarzenia typu **ais_key_event**

Żeby dowiedzieć się jaki kod ma przycisk który naciskamy, wystarczy sprawdzić stan encji: **binary_sensor.ais_remote_button**, to jest kod ostatnio odebranego przycisku.

![AIS button](/img/en/bramka/ais_remote_key_events_1.png)

Oczywiście dla wygody można dodać tą encję jako kartę w aplikacji:
![AIS button](/img/en/bramka/ais_remote_key_events_2.png)

Gdy już wiemy jaki kod ma przycisk którym chcemy wyzwalać automatyzacje to przechodzimy do jej definiowania.


### Dodnie automatyzacji

1. Nazwa automatyzacji, np. włączenie radia po naciśnięciu przycisku na kontrolerze

![AIS button](/img/en/bramka/ais_remote_key_events_3.png)



2. Wyzwalacz automatyzacji - ais_key_event 

![AIS button](/img/en/bramka/ais_remote_key_events_4.png)


3. Akcja do wyonania

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

Możemy w automatyzacji zmienic tryb edycji na YAML i łatwo przekleić kod do swojej automatyzacji

![AIS button](/img/en/bramka/ais_remote_key_events_6.png)




