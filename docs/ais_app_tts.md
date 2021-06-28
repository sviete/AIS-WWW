---
title: "AIS Lokalny TTS"
sidebar_label: AIS Lokalny TTS
---

## AIS Lokalny TTS

System posiada funkcjonalność umożliwiającą zamianę tekstu na mowę. 

W ten sposób ''Jolka'' rozmawia z użytkownikiem - odpowiada na pytania i potwierdza wykonanie komendy.

![TTS](/img/en/frontend/ais_tts_app.png)


## Usługa zamiany tekstu na mowę

Bardziej zaawansowani użytkownicy mogą wykorzystać funkcjonalność zamiany tekstu na mowę we [własnych automatyzacjach oraz definiując własne komendy](/docs/ais_app_ai_integration#automatyzacje-uruchamiane-komendą). 

Zamiana tekstu na mowę realizowana jest przez usługę ``ais_ai_service.say_it``, usługę można wywołać we własnych automatyzacjach z dowolnym tekstem oraz innymi parametrami:

![TTS](/img/en/frontend/ais_tts_service_say_it.png)



## Status mowy 

Dodatkowo w systemie dostępne jest zdarzenie ``ais_speech_status`` informujące o statusie mechanizmu TTS:

![TTS](/img/en/frontend/ais_tts_service_speach_status.png)


Znając status mechanizmu TTS, wiemy kiedy Jolka (Marya, Allison, itd...) zaczeła lub skończyła mówić. 
Możemy to wykorzystać do automatyzacji, która będzie czytała teksty z kilku językach jeden po drugim. Dodając oczekiwanie na wyzwalacz ``ais_speech_status`` ze statusem ``DONE`` pomiędzy akcjami


![AIS TTS](/img/en/frontend/ais_tts_speech_status.png)

Kod przykładowej automatyzacji realizującej taką funkcjonalność:

``` yaml
alias: Komunikat powitalny w 3 językach
description: ''
trigger:
  - platform: event
    event_type: ais_key_event
    event_data:
      code: 1
condition: []
action:
  - service: ais_ai_service.say_it
    data:
      text: Witamy w parku rozrywki (komunikat po polsku)
      language: pl_PL
      voice: Jola
  - wait_for_trigger:
      - platform: event
        event_type: ais_speech_status
        event_data:
          status: DONE
  - service: ais_ai_service.say_it
    data:
      language: en_US
      voice: Allison
      text: Welcome to the amusement park (announcement in English)
  - wait_for_trigger:
      - platform: event
        event_type: ais_speech_status
        event_data:
          status: DONE
  - service: ais_ai_service.say_it
    data:
      language: uk_UA
      voice: Mariya
      text: Ласкаво просимо до парку розваг (анонс українською мовою)
mode: single

```

Tak wygląda przebieg tej automatyzacji - widać, że kolejne komunikaty były zapowiadane dopiero, gdy dostaliśmy informację z systemu o tym, że TTS skończył czytać poprzedni komunikat:

![AIS TTS](/img/en/frontend/ais_tts_speech_trace.png)


Możemy też wykonać automatyzację, która w czasie, gdy asystent mówi, ścisza muzykę, włącza światło lub zapisuje status mechanizmu TTS do encji typu pomocnik, a następnie wykorzystuje ją w interfejsie użytkownika, pokazując stan mowy.

Na forum pokazujemy taki przykład: [AI-Speaker forum](https://ai-speaker.discourse.group/)
