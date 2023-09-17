---
title: "OwnTracks"
sidebar_label: OwnTracks
---

## Wprowadzenie

OwnTracks to darmowa i otwarto źródłowa aplikacja dla systemu iOS i Android, która umożliwia śledzenie lokalizacji i wysyłanie jej bezpośrednio do systemu Asystent domowy. Można ją skonfigurować za pomocą integracji dostępnej w konfiguracji systemu - pokażemy poniżej krok po kroku jak to zrobić.

![Konfiguracja wykrywania obecności](/img/en/bramka/presence_detection_0.png)


## Integracja

:::tip Wskazówka
Asystent domowy będzie rejestrował Twoją lokalizację na podstawie komunikatów przychodzących z OwnTracks przez HTTPS. Żeby umożliwić odbieranie takich komunikatów nawet gdy jesteś poza lokalną domową siecią należy [włączyć dostęp  do bramki z Internetu](/docs/ais_bramka_remote_www_index).
:::

Aby skonfigurować OwnTracks, przejdź do konfiguracji a następnie do panelu integracji. Naciśnij pomarańczowy przycisk z ikonką "plus" w prawym dolnym rogu ekranu, żeby otworzyć listę dostępnych integracji. Wybierz z listy integrację **AIS Wykrywanie obecności**

![Konfiguracja wykrywania obecności](/img/en/bramka/presence_detection_1.png)

### Adres URL do raportowania lokalizacji

Po wybraniu tej integracji otrzymasz adres URL do użycia podczas konfiguracji urządzenia mobilnego (możesz go skopiować i przesłać na swój telefon tak jak pokazano poniżej).

![Konfiguracja wykrywania obecności](/img/en/bramka/presence_detection_2.png)


### Konfiguracja w systemie Andorid

 <a href="https://play.google.com/store/apps/details?id=org.owntracks.android" target="_blank">Zainstaluj aplikację OwnTracks dla Android.</a>

W aplikacji OwnTracks otwórz pasek boczny i kliknij preferencje, a następnie połącz. Zmień następujące ustawienia:

- Tryb: **Private HTTP**

![Konfiguracja wykrywania obecności](/img/en/bramka/presence_detection_3.png)

- Host: **Adres URL podany podczas konfigurowania integracji**

![Konfiguracja wykrywania obecności](/img/en/bramka/presence_detection_4.png)

Identyfikacja:
- Nazwa użytkownika: **Twoja nazwa użytkownika**
- Identyfikator urządzenia: **Twoja nazwa urządzenia**


![Konfiguracja wykrywania obecności](/img/en/bramka/presence_detection_5.png)


### Konfiguracja w systemie iOS

 <a href="https://itunes.apple.com/us/app/owntracks/id692424691?mt=8" target="_blank">Zainstaluj aplikację OwnTracks dla iOS.</a>

W aplikacji OwnTracks kliknij (i) w lewym górnym rogu, następnie kliknij ustawienia. Zmień następujące ustawienia:

- Tryb: **HTTP**
- URL: **Adres URL podany podczas konfigurowania integracji**
- Włącz uwierzytelnianie
- ID użytkownika: **Twoje imię**

### Identyfikator urządzenia w systemie

Twoje urządzenie będzie automatycznie dodane w Asystencie domowym jako **device_tracker. Twoja nazwa użytkownika _ Twoja nazwa urządzenia**.

![Konfiguracja wykrywania obecności](/img/en/bramka/presence_detection_6.png)


Na mapie dostępnej w aplikacji będzie wyświetlana Twoja lokalizacja raportowana przez urządzenie mobilne.

![Wyświetlanie obecności na mapie](/img/en/bramka/presence_detection_7.png)
