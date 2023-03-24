---
title: "Biblioteka Spotify"
sidebar_label: Biblioteka Spotify
---
## Integracja AIS Spotify

Integracja z biblioteką Spotify pozwala systemowi Asystent domowy na przeglądanie biblioteki i wyszukiwanie treści audio w serwisie Spotify. Wybranie pozycji z biblioteki powoduje jej automatyczne przesłanie do odtwarzacza Spotify zainstalowanego na bramce.

![Spotify Lib](/img/en/frontend/spotify_lib_2.png)


## Spotify Free lub Spotify Premium

Integracja działa zarówno użytkownikom kont Spotify Free jak i Spotify Premium.


## Sterowanie odtwarzaczem Spotify na bramce

Integracja **AIS Spotify** pozwala na uwierzytelnianie w serwisie Spotify oraz na przeglądanie biblioteki Spotify. Następnie możemy wybrany utwór, wykonawcę, album lub listę odtwarzania wysłać do odtwarzacza Spotify.
Domyślnie po wybraniu (kliknięciu pozycji) jest ona wysyłana do wbudowanego odtwarzacza na bramce.

Odtwarzaczem Spotify zainstalowanym na bramce AIS dom możemy sterować pilotem lub z aplikacji Asystent domowy za pomocą integracji [AIS Android](/docs/ais_app_android)


## Sterowanie pilotem

Wyszukiwanie na Spotify można też uruchamiać za pomocą naszego dedykowanego [Pilota radiowego](/docs/ais_remote_index). Pilotem można wykonać wyszukanie głosowo mówiąc [odpowiednią komendę](/docs/ais_app_assistent_commands) lub za pomocą wirtualnej klawiatury oraz zwrotnego czytania wpisywanych liter.


## Konfiguracja krok po kroku

### 1. Wymagania wstępne

* Posiadanie konta w Spotify, konto można założyć za darmo (bez konieczności podawania karty kredytowej) pod tym adresem: https://www.spotify.com/pl/

* Urządzenie z systemem Asystent domowy

### 2. Logowanie do aplikacji Spotify

:::caution Uwaga
Żeby można było wysyłać wybrane pozycje do odtwarzania w aplikacji Spotify zainstalowanej na bramce, trzeba zalogować się w aplikacji Spotify.
:::


* Podłącz urządzenie do telewizora lub monitora po HDMI

* Włącz pilotem tryb "Sterowanie na monitorze" [Tryby działania pilota](/docs/ais_remote_modes)

* Wybierz przycisk z ikonką  -> "Spotify"

![Przejście do Spotify](/img/en/frontend/spotify_settings.jpeg)

* Zaloguj się do serwisu Spotify


### 3. Autoryzacja Asystenta domowego w Spotify

Wykonaj te kroki w przeglądarce internetowej.

* Przejdź do aplikacji "Asystent domowy" z przeglądarki internetowej w Twojej lokalnej sieci [Dostęp do bramki po HTTP](/docs/ais_bramka_remote_http)

* Otwórz ***Konfiguracja*** -> ***Integracje***


![Konfiguracja Spotify](/img/en/bramka/go_to_integrations.png)


* Uruchom konfigurator integracji ***AIS Serwis Spotify***

![Konfiguracja Spotify](/img/en/frontend/configure_spotify_s2.png)


* Kliknij "ZATWIERDŹ"

![Konfiguracja Spotify](/img/en/frontend/configure_spotify_s2.1.png)


* Zaloguj się do Spotify na swoje konto (to samo, na które logowaleś się w punkcie 2.)


* Zezwól aplikacji AI-Speaker na dostęp do Spotify

![Konfiguracja Spotify](/img/en/frontend/configure_spotify_s3.png)


### 4. Integracja AIS Android

Do sterowania odtwarzaczem na bramce potrzebujemy dodatkowej integracji -> [AIS Android](/docs/ais_app_android)


## Przeglądanie biblioteki Spotify

Możesz przeglądać swoją bibliotekę, sprawdzać adresy utworów oraz zdjęć

![Spotify Lib](/img/en/frontend/spotify_lib_2.png)


## Sterowanie odtwarzaczem Spotify

Żeby sterować odtwarzaczem Spotify (aplikacją Spotify), należy dodać integrację [AIS Android](/docs/ais_app_android)

 ![Przejście do Spotify](/img/en/frontend/spotify_adb.png)
