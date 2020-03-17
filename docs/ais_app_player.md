---
title: "Odtwarzacze"
sidebar_label: Odtwarzacze
---

## Wbudowany Odtwarzacz Mediów

Na urządzeniu dostarczamy odtwarzacz wraz ze skonfigurowanymi serwisami dostarczającymi media do odtwarzania.

![AIS Radio](/img/en/frontend/ais_exo_player.png)

## Przekierowanie Mediów

Przekierowanie mediów to jednorazowa akcja polegająca na przesłaniu aktualnie odtwarzanych mediów na bramce do innego odtwarzacza. Przekazujemy adres URL do multimediów i jeżeli odtwarzacz jest w stanie odtwarzać wideo (telewizor, chromecast, tv box), to w ten sposób można przesyłać wideo z YT do odtwarzaczy.

![AIS Audio](/img/en/frontend/app_audio_player_1.png)



## Grupowanie Odtwarzaczy

Odtwarzacze zintegrowane z bramką można grupować a następnie sterować nimi jak jednym. Odtwarzacze w grupie będą dostawały wszystkie utwory z aktualnej listy odtwarzania - ta opcja to coś więcej niż jednarazowe przekierownie mediów.

![AIS Audio](/img/en/frontend/app_audio_player_2.png)


## Wysyłanie mediów do grupy Odtwarzaczy

Jeśli posidamy link URL do np. radia internetowego czy innej treści do odtwarzania to możemy go wysłać do odtwarzania.

> Ta funkcja jest w przygotowaniu i w przyszłości będzie używana do dodawania własnych stacji radiowych.


## Wysyłanie tekstu do Odtwarzaczy

Możemy przesłać tekst do przeczytania na odtwarzaczu, jest to tak zwana usługa "broadcast". Na tą chwilę działa to tylko z naszym odtwarzaczem audio - więcej info w [Panel sterowania](ais_app_android_dom_tablet#instalacja)

![AIS Audio](/img/en/frontend/app_audio_player_2.png)


## Zdalne sterowanie

Możemy zdalnie sterować odtwarzaczem na bramce z poziomu ekranu powiadomień na "Panelu sterowania", więcej informacji w dokumentacji [Panel sterowania - Odtwarzacz audio](ais_app_android_dom_tablet#odtwarzacz-audio)

![AIS Radio](/img/en/frontend/ais_exo_mobile.png)

## API

Odtwarzacz, tak jak każda integracja, udostępnia swoje usługi, dzięki czemu można [automatyzować](ais_bramka_automation) sterowanie odtwarzaczem i np. uruchamiać stację radiową jako budzik, włączać wybraną audycję o wybranej porze dnia, itp.


> Szczegółowy opis w przygotowaniu
