---
title: "IFTTT dowolna akcja"
sidebar_label: IFTTT dowolna akcja
---

## Wprowadzenie

W tym przykładzie wyjaśnimy jak uruchomić dowolną akcję w Asystencie domowy z serwisu IFTTT.


## Dodanie apletu w IFTTT

Dodajmy aplet (w podobny sposób jak zrobiliśmy to na przykładzie z [informacją o godzinie](ais_app_ifttt_time) ), oczywiście tym razem wybieramy serwis, który nas interesuje.

Jako akcję wybieramy Webhook z tego typu komunikatem JSON w body:

``` json
  {
    "action": "call_service",
    "service": "light.turn_on",
    "entity_id": "light.living_room"
  }
```

oczywiście pole **entity_id** może być wypełniane przez serwis uruchamiający nasz aplet (być jak zmienna).

## Dodanie automatyzacji w Asystencie domowym

Zgodnie z instrukcją Home Assistant do [integracji IFTTT](https://www.home-assistant.io/integrations/ifttt/) dodajemy do naszej lokalnej instancji Asystenta domowego następującą automatyzację:

``` yaml
automation:
- id: this_is_the_automation_id
alias: The optional automation alias
trigger:
- event_data:
    action: call_service
  event_type: ifttt_webhook_received
  platform: event
condition: []
action:
- data_template:
    entity_id: '{{ trigger.event.data.entity_id }}'
  service_template: '{{ trigger.event.data.service }}'
```

Jak się domyślamy z powyższej konfiguracji wyzwolenie tej akcji przez IFTTT spowoduje włączenie światła, w podanym przykładzie jest to światło w naszym salonie - encja light.living_room.
