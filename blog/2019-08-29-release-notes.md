---
author: Celina AI-Speaker
authorURL: https://github.com/sviete
authorFBID: 1186570423
title: Wersja systemu 0.97.5 Obsługa wywołań zwrotnych HTTP, kolejne uproszczenia w aplikacji
---

## Wersja systemu 0.97.5 z dnia 29 sierpnia 2019 roku,

### Poprawa dostępności aplikacji dla użytkowników niedowidzących

W naszej aplikacji na system Android oznakowaliśmy przyciski etykietami w celu zapewnienia wsparcia dla mechanizmów typu TalkBack.
Podobne wysiłki zostały poczynione w aplikacji webowej, celem tego procesu jest udostępnienie interfejsu użytkownika Asystenta domowego dla wszystkich.

<!--truncate-->

### Uproszczenia w aplikacji

W ramach prac nad wersją 1.0 upraszczamy domyślny interfejs użytkownika aplikacji Asystent domowy.
Od wersji 0.97 Konfiguracja bramki, Przydatne linki i Dokumentacją będą miały swoje osobne strony.

#### Konfiguracja bramki

Konfiguracja bramki jest dostępna z menu z pozycji **Ustawienia bramki AIS dom**. Z tego miejsca można zarządzać swoją bramką IoT i Audio.
Konfiguracja bramki ma 4 sekcje, są one opisane na nowej stronie dokumentacji [Konfiguracja bramki](/docs/ais_bramka_configuration)

![AIS dom ustawienia bramki](/img/en/frontend/ais_dom_gate_settings_voice.png)


#### Przydatne linki

Linki do serwisów działających na bramce umieściliśmy jako nową opcję w menu w aplikacji [Przydatne linki](/docs/ais_bramka_services)

![AIS dom przydatne linki](/img/en/frontend/ais_dom_links.png)


#### Dokumentacja

Kolejna nowa opcja w menu **Dokumentacja** to przejście do serwisu z naszą oficjalną dokumentacja użytkownika.

![AIS dom dokumentacja](/img/en/frontend/ais_dom_docs.png)



### Obsługa wywołań zwrotnych HTTP

Obsługa wywołań zwrotnych HTTP do powiadamiania asystenta o zdarzeniach z zewnątrz.
Wszystko, co jest skonfigurowane do uruchamiania przez wywołanie zwrotne, ma publicznie dostępny unikalny adres URL, aby umożliwić wysyłanie danych do Asystenta domowego z dowolnego miejsca.

Pozwala to na przesyłanie powiadomień do naszej bramki z Internetu.

W ten sposób możemy np. powiadamiać bramkę o naszej lokalizacji z aplikacji mobilnej - opcja opisana szerzej w [Wykrywanie obecności](/docs/ais_bramka_presence_detection)

![AIS dom webhooks](/img/en/frontend/integration_owntracks.png)

Otrzymywać powiadomienia z serwisu dialogflow

![AIS dom webhooks](/img/en/frontend/integration_dialogflow.png)

i/lub z serwisu IFTTT

![AIS dom webhooks](/img/en/frontend/integration_ifttt.png)

Zarządzanie powiadomieniami zwrotnymi dostępne jest w [konfiguracji zdalnego dostępu do bramki](/docs/ais_bramka_configuration#konfiguracja-zdalnego-dostępu-do-bramki)
![AIS dom webhooks](/img/en/frontend/ais_dom_webhooks.png)

### Nowe repozytorium pakietów binarnych

Mamy nowe repozytorium pakietów binarnych na własnym serwerze (nie instalujemy już binarek z serwisu Github). Wszystkie pakiety zostały zaktualizowane do najnowszych wersji i w ramach optymalizacji skompilowane dla minimalnego Android API 24 (wcześniej wspieraliśmy API 21 dostępne na Android 5).

> Nie przełączamy na nowe repozytorium automatycznie i nie dostarczamy tych nowych pakietów binarnych automatycznie podczas zwykłej instalacji. Wymaga to po standardowej aktualizacji wykonania dodatkowo procedury "Pełnego resetu aplikacji". **Zachęcamy do przełączenia się na nowe repozytorium w celu usprawnienia/przyśpieszenia działania procesów na urządzeniu.**

Przełączenie na nowe repozytorium pakietów binarnych:
1. Wykonaj standardową aktualizację automatyczną
2. Wykonaj "Pełny reset aplikacji" - przebieg tej procedury opisany jest w dokumentacji [Pełny reset aplikacji](/docs/ais_bramka_reset_ais_step_by_step), znajduje się tam też wideo prezentujące przebieg procesu pełnego resetu.


### Pozostałe istotne zmiany

- Możliwość włączenia dźwięku mono (połączenie kanałów podczas odtwarzania audio).
Opcja dostępna jest z aplikacji oraz ze zdalnego pilota. Jest to przydatne gdy nasza bramka podłączona jest do jednego głośnika a audio ma więcej kanałów lub gdy słuchamy na słuchawkach i mamy lepszy słuch w jednym uchu niż w drugim.

- Pokazywanie mikrofonu w przeglądarce, tylko gdy przeglądarka wspiera głosowe wprowadzanie (webkitSpeechRecognition) i gdy połączenie jest szyfrowane.

http:

![AIS dom webhooks](/img/en/blog/no_mic_http.png)

https:

![AIS dom webhooks](/img/en/blog/yes_mic_https.png)

- Powiadomienia w aplikacji o nowej wersji.

![AIS dom update notification](/img/en/blog/update_notification.png)

- Możliwość połączenia się z WiFi przy pierwszym uruchomieniu w 2 kroku kreatora (po założeniu konta, przed wykryciem lokalizacji domu).

[Pierwsze uruchomienie -> Lokalizacja Twojego domu -> Konfiguracja WiFi](/docs/ais_bramka_first_run#lokalizacja-twojego-domu)

- Możliwość uwierzytelniania za pomocą hasła przy połączeniu ssh.

[Dostęp w sieci lokalnej -> SSH](/docs/ais_bramka_remote_ssh)

- Poprawione działanie mikrofonu. W przypadku zablokowania mikrofonu dodaliśmy automatyczny reset urządzenia USB, bez fizycznego rozłączania / podłączania.

![AIS dom webhooks](/img/en/blog/repo_update.png)

- Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/08/07/release-97/" target="_blank">0.97</a>
