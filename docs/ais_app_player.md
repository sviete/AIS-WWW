---
title: "Odtwarzacze"
sidebar_label: Odtwarzacze
---

## Wbudowany Odtwarzacz Mediów

Na urządzeniu dostarczamy wbudowany odtwarzacz oraz biblotekę mediów do odtwarzania.

![AIS Radio](/img/en/frontend/ais_exo_player.png)

Media moga być odtwarzane na podłączonym do bramki głosniku i/lub na podłączonym do bramki po HDMI telewizorze lub monitorze.
Możemy zdalnie (z przeglądarki internetowej lub aplikacji mobilnej) sterować aktywnościami (ekranami) na bramce podłączonej do TV. W ten sposób możemy odtwarzać treści wideo z serwisów lub kamer.

![AIS Video](/img/en/frontend/video_doorbell2.png)


## Dodatkowe odtwarzacze AIS

Dodatkowym odtwarzaczem AIS w systemie Asystent domowy mogą być:

1. Inne bramki/głośnik z systemem Asystent domowy

2. Urządzenia z systemem Android i zainstalowaną naszą darmową aplikacją mobilną AIS dom.

:::info Informacja
Po zainstalowaniu na urządzeniu z systemem Android naszej darmowej aplikacji AIS-dom, żeby urządzenie mogło być dodane jako dodatkowy odtwarzacz do bramki AIS, należy:
1. Być podłączonym do tej samej lokalnej sieci, co bramka
1. W ustawiniach aplikacji włączyć specjalne funkcjonalności dotyczące panelu sterowania, tak jak to pokazano na rysunku poniżej
:::
![AIS Radio](/img/en/frontend/panel_special_functions.png)


### Dodanie odtwarzacza do bramki

W konfiguracji integracji wybieramy integrację **AI Speaker**

![AIS Radio](/img/en/frontend/ais_exo_player_add_new.png)


następnie wypełniamy formatkę konfiguratora i zatwierdzamy

:::info informacja
Adres IP odtwarzacza w lokalnej sieci łatwo znajdziemy w ustawieniach aplikacji AIS dom:
:::

![AIS Radio](/img/en/frontend/device_ip_in_local_network.png)

![AIS Radio](/img/en/frontend/ais_exo_player_add_new2.png)

w efekcie otrzymamy nowy odtwarzacz w systemie Asystent domowy

![AIS Radio](/img/en/frontend/ais_exo_player_add_new3.png)

Każdy dodatkowy odtwarzacz możemy dodać do interfejsu - umieścić na karcie w widoku i dostosować jego wyświetlanie.

![AIS Radio](/img/en/frontend/ais_exo_player_add_new4.png)


## Dodatkowe funkcje odtwarzaczy AIS


### Czytanie tekstu na głośniku

Odtwarzacz AIS może też zamieniać tekst na mowę:

![AIS Audio](/img/en/frontend/app_audio_player_tts.png)


### Zdalne sterowanie

Możemy zdalnie sterować odtwarzaczem na bramce z poziomu ekranu powiadomień na "Panelu sterowania", więcej informacji w dokumentacji Panel sterowania - Odtwarzacz audio.

![AIS Radio](/img/en/frontend/ais_exo_mobile.png)

## API

Odtwarzacz, tak jak każda integracja, udostępnia swoje usługi, dzięki czemu można [automatyzować](/docs/ais_bramka_automation) sterowanie odtwarzaczem i np. uruchamiać stację radiową jako budzik, włączać wybraną audycję o wybranej porze dnia, itp.


![AIS Radio](/img/en/frontend/app_audio_player_api.png)
