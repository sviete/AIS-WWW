---
title: "Odtwarzacze"
sidebar_label: Odtwarzacze
---

## Wbudowany Odtwarzacz Mediów

Na urządzeniu dostarczamy wbudowany odtwarzacz oraz biblotekę mediów do odtwarzania.

![AIS Radio](/img/en/frontend/ais_exo_player.png)


## Dodatkowe odtwarzacze AIS

Dodatkowym odtwarzaczem AIS w systemie Asystent domowy mogą być:

1. Inne bramki/głośnik z systemem Asystent domowy 

2. Urządzenia z systemem Android i zainstalowaną naszą darmową aplikacją mobilną AIS dom.

:::info Informacja
Po zainstalowaniu na urządzeniu z systemem Android naszej darmowej aplikacji [AIS-dom](ais_app_android_dom), żeby urządzenie było wykrywane przez bramkę jako odtwarzacz należy:
1. Być podłączonym do tej samej lokalnej sieci, co bramka
1. W ustawiniach aplikacji włączyć usługę odtwarzacza audio tak, jak na rysunku poniżej
:::
![AIS Radio](/img/en/frontend/ais_exo_player_mob.jpg)


### Dodanie odtwarzacza do bramki

W konfiguracji integracji wybieramy integrację **AI Speaker**

![AIS Radio](/img/en/frontend/ais_exo_player_add_new.png)


następnie wypełniamy formatkę konfiguratora i zatwierdzamy

![AIS Radio](/img/en/frontend/ais_exo_player_add_new2.png)

w efekcie otrzymamy nowy odtwarzacz w systemie Asystent domowy

![AIS Radio](/img/en/frontend/ais_exo_player_add_new3.png)

Każdy dodatkowy odtwarzacz możemy dodać do interfejsu - umieścić na karcie w widoku i dostosować jego wyświetlanie.

![AIS Radio](/img/en/frontend/ais_exo_player_add_new4.png)


## Dodatkowe funkcje odtwarzaczy AIS

### Przekierowanie Mediów

Przekierowanie mediów to jednorazowa akcja polegająca na przesłaniu aktualnie odtwarzanych mediów na bramce do innego odtwarzacza. Przekazujemy adres URL do multimediów i jeżeli odtwarzacz jest w stanie odtwarzać wideo (telewizor, chromecast, tv box), to w ten sposób można przesyłać wideo z YT do odtwarzaczy.

![AIS Audio](/img/en/frontend/app_audio_player_1.png)



### Czytanie tekstu na głośniku

Odtwarzacz AIS może też zamieniać tekst na mowę:

![AIS Audio](/img/en/frontend/app_audio_player_tts.png)


### Zdalne sterowanie

Możemy zdalnie sterować odtwarzaczem na bramce z poziomu ekranu powiadomień na "Panelu sterowania", więcej informacji w dokumentacji [Panel sterowania - Odtwarzacz audio](/docs/ais_app_android_dom_tablet#odtwarzacz-audio)

![AIS Radio](/img/en/frontend/ais_exo_mobile.png)

## API

Odtwarzacz, tak jak każda integracja, udostępnia swoje usługi, dzięki czemu można [automatyzować](/docs/ais_bramka_automation) sterowanie odtwarzaczem i np. uruchamiać stację radiową jako budzik, włączać wybraną audycję o wybranej porze dnia, itp.


![AIS Radio](/img/en/frontend/app_audio_player_api.png)
