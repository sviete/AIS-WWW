---
title: "Spotify"
sidebar_label: Spotify
---
## Spotify

Integracja ze Spotify pozwala systemowi Asystent domowy na przeglądanie biblioteki, wyszukiwanie i odtwarzanie teści audio z serwisu Spotify.

![Przejście do Spotify](/img/en/frontend/spotify_2_way.png)

## Spotify Free lub Spotify Premium

Integracja działa zarówno dla użytkowników Spotify Free, jak i Spotify Premium.

Nasze rozwiązanie pozwala na uwierzytelnianie i pobieranie metadanych dla aktualnie odtwarzanego utworu i kontekstu, wydawanie poleceń odtwarzania i inicjowanie odtwarzania utworów wykonawców, albumów lub list odtwarzania.

Możemy sterować odtwarzaczem Spotify z aplikacji Asystent domowy. W aplikacji Spotify widzimy też nasze urządzenie z Asystentem domowym (jako głośnik AI-Speaker) i możemy je wybierać jako głośnik, na który ma być przesyłana muzyka z aplikacji Spotify. Asystent domowy po każdej komendzie odtwarzania muzyki ze Spotify automatycznie wybierze głośnik AI-Speaker (głośnik podłączony do bramki) jako urządzenie, na którym muzyka ma być odtwarzana.


## Ubiegamy się o certyfikację w Spotify

> Interfejs do Spotify będziemy rozwijać o kolejne funkcjonalności wraz z dążeniem do celu, jakim jest dostarczenie najlepszego i najbardziej wszechstronnego urządzenia do domowego audio i Internetu Rzeczy z wbudowanym głosowym Asystentem domowym.
***Ubiegamy się o certyfikację w Spotify.*** Integracja ze Spotify jest obecnie wersją beta; ta funkcjonalność może się znacznie zmienić lub przestać działać, bez ostrzeżenia. Dokładamy wszelkich starań, żeby spełnić wymogi Spotify i otrzymać certifikację, jednak dopóki nie podpiszemy umowy to nie możemy gwarantować działania tego serwisu na naszych urządzeniach.


## Sterowanie pilotem

Wyszukiwanie na Spotify można też uruchamiać za pomocą naszego dedykowanego [Pilota radiowego](/docs/ais_remote_index) (nie jest do tego potrzebna aplikacja z ekranem). Pilotem można wykonać wyszukanie głosowo mówiąc [odpowiednią komendę](/docs/ais_app_assistent_commands) lub za pomocą wirtualnej klawiatury oraz zwrotnego czytania wpisywanych liter.


## Konfiguracja w 3 krokach

### 1. Wymagania wstępne

* Posiadanie konta w Spotify, konto można założyć za darmo (bez konieczności podawania karty kredytowej) pod tym adresem: https://www.spotify.com/pl/

* Urządzenie z systemem Asystent domowy

:::caution Uwaga
Żeby można było kontrolować aplikację Spotify (działającą na bramce w tle jako usługa) z Asystenta domowego, trzeba zalogować się w aplikacji Spotify i w aplikacji Asystetn domowy na to samo konto Spotify.
:::

### 2. Logowanie do aplikacji Spotify

* Podłącz urządzenie do telewizora lub monitora po HDMI

* Włącz pilotem tryb "Sterowanie na monitorze" [Tryby działania pilota](/docs/ais_remote_modes)

* Wybierz przycisk z ikonką  -> "Spotify"

![Przejście do Spotify](/img/en/frontend/spotify_settings.jpeg)

* Zaloguj się do serwisu Spotify


### 3. Autoryzacja Asystenta domowego w Spotify

Wykonaj te kroki w przeglądarce internetowej.

* Przejdź do aplikacji "Asystent domowy" z przeglądarki internetowej w Twojej lokalnej sieci [Dostęp do bramki po HTTP](/docs/ais_bramka_remote_http)

* Otwórz ***Ustawienia*** -> ***Integracje*** klikając ikonę "rozwijanego menu" w lewym górnym rogu


![Konfiguracja Spotify](/img/en/bramka/go_to_integrations.png)


* Uruchom konfigurator integracji ***AIS Serwis Spotify***

![Konfiguracja Spotify](/img/en/frontend/configure_spotify_s2.png)


* Kliknij "ZATWIERDŹ"

![Konfiguracja Spotify](/img/en/frontend/configure_spotify_s2.1.png)


* Zaloguj się do Spotify na swoje konto (to samo, na które logowaleś się w punkcie 2.)


* Zezwól aplikacji AI-Speaker na dostęp do Spotify

![Konfiguracja Spotify](/img/en/frontend/configure_spotify_s3.png)



## Odtwarzanie muzyki ze Spotify

### Możesz przeglądać swoją bibliotekę i odtwarzać muzykę ze Spotify.

![Konfiguracja Spotify](/img/en/frontend/spotify_lib.png)



### Możesz też głosowo wyszukiwać i uruchamiać muzykę ze Spotify.

![Konfiguracja Spotify](/img/en/frontend/configure_spotify_s7.png)


## Sterowanie głosowe

### Przypominamy, że z asystentem możesz rozmawiać:
- przez naciśnięcie mikrofonu w aplikacji webowej (tylko w przeglądarkach obsługujących wprowadzanie głosowe)
- przez mikrofon w telefonie z systemem Android i z zainstalowaną naszą darmową aplikacją dostępną w [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom)

- przez wywołanie usługi rozmowy z naszego dedykowanego [pilota radiowego](/docs/ais_remote_index) z wbudowanym mikrofonem.


![Konfiguracja Spotify](/img/en/frontend/configure_spotify_s6.png)


## Informacje techniczne


Integracja oparta jest na [Spotify Android SDK](https://developer.spotify.com/documentation/android/)

![Spotify](/img/en/frontend/spotify_sdk.png)

Spotify SDK umożliwia interakcję aplikacji AIS z aplikacją Spotify działającą w tle jako usługa. Możliwości tego interfejsu API obejmują pobieranie metadanych dla aktualnie odtwarzanej ścieżki i kontekstu, wydawanie podstawowych poleceń odtwarzania i inicjowanie odtwarzania ścieżek.


:::caution Uwaga
Ta integracja jest to jedyny legalny sposób na integracje z odtwarzaczem Spotify. Inne sposoby integracji nie są wspierane przez Spotify.
:::

Jak ostrzega Spotify na swojej stronie, ten sposób integracji jest stosunkowo nowy i obecnie jest w statusie BETA. **Funkcjonalność prawdopodobnie zmienią się znacząco bez ostrzeżenia w przyszłych wersjach.**

![Spotify](/img/en/frontend/spotify_sdk_beta.png)


## Znane problemy

Zdaża się, że ta integracja przestaje działać z powodu błędu zgłoszonego do programisty Spotify -> https://github.com/spotify/android-sdk/issues/252#issuecomment-803311964
Dzieje się to prawdopodobnie po aktualizacji systemu AIS. Nie mamy jeszcze odpowiedzi jak rozwiązać ten problem i jedynym obejściem jakie zamy jest:
1. Wylogowanie z aplikacji Spotify na bramce
2. Ponowne zalogowanie się do aplikacji Spotify na bramce
3. Restart bramki AIS (ponowne uruchomienie)
