---
title: "AIS dom"
sidebar_label: AIS dom
---


## Wprowadzenie

To nasza główna aplikacja, która działa zarówno na bramce jak i na innych urządzeniach, w tym: tablety, telefony oraz Android TV.


1. Podstawowa funkcjonalność aplikacji to wyświetlanie internetowej aplikacji **Asystent domowy** działającej na bramce, tej samej aplikacji, którą możemy uruchamiać i konfigurować w przeglądarce internetowej [Aplikacja internetowa](/docs/ais_app_index).
![AIS Dom](/img/en/frontend/ais_dom_mob_tech_apk.png)

2. Przejście do ustawień aplikacji.
3. Sygnalizacja trybu połączenia z bramką (lokalnie / tunel).
4. Mikrofon do komunikacji z asystentem głosowym.
5. Wskaźnik poziomu dźwięku w mikrofonie - obrazuje to jak asystent nas słyszy.
6. uruchomienie trybu gestów.


Aplikacja jest czymś w rodzaju ramki/przeglądarki do [aplikacji internetowej](/docs/ais_app_index) działającej na bramce. Dostarcza też nam interfejs do API systemu Android oraz konsolę środowiska Linux (zawierającego minimalny system podstawowy wraz z interpreterem języka Python, Node.js oraz Clang).

![AIS Dom](/img/en/frontend/ais_dom_apk_screen_mob.png)



## Instalacja

:::info Informacja
Na bramkach AIS dom, aplikacja jest już zainstalowana, skonfigurowana i automatycznie aktualizowana. 
:::


Dodatkowo aplikację AIS dom, można zainstalować na telefonie lub tablecie. Jest ona dostępna za darmo (bez reklam, mikropłatności itp) w sklepie [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom) pod nazwą AIS dom. Możesz zeskanować telefonem poniższy kod, by przejść do instalacji aplikacji w Google Play:

<center>

![Google Play](/img/en/frontend/barcode_go_to_apk_in_google_play.png)

![Google Play](/img/main/google-play-badge.png)

</center>

Kod źródłowy aplikacji dostępny jest w naszym [publicznie dostępnym repozytorium](https://github.com/sviete/AIS-dom)
Podpisane wersje publikujemy też na naszym [serwisie ze składowymi systemu](https://powiedz.co/ota/)



## Konfiguracja za pomocą kreatora

Po pierwszym uruchomieniu aplikacji pojawi się kreator, który przeprowadzi nas krok po kroku przez prosty proces konfiguracji


<img src="/img/en/frontend/ais_dom_new_wizard_0_mob_apk.png" alt="AIS Dom"/>


### Dostęp do mikrofonu

W pierwszym kroku kreatora możemy włączyć dostęp do mikrofonu.

<img src="/img/en/frontend/ais_dom_new_wizard_mob_apk.png" alt="AIS Dom"/>

### Dostęp do dysku

W kolejnym kroku kreatora możemy włączyć dostęp do plików na urządzeniu mobilnym.

<img src="/img/en/frontend/ais_dom_new_wizard_1_mob_apk.png" alt="AIS Dom"/>

### Dostęp do lokalizacji

W kolejnym kroku kreatora możemy włączyć dostęp do lokalizacji.

<img src="/img/en/frontend/ais_dom_new_wizard_1_1_mob_apk.png" alt="AIS Dom"/>

### Dostęp do kamery

W kolejnym kroku kreatora możemy włączyć dostęp do kamery.

<img src="/img/en/frontend/ais_dom_new_wizard_2_mob_apk.png" alt="AIS Dom"/>


### Skanowanie identyfikatora bramki

Na koniec możemy zeskanować identyfikator naszej bramki lub połączyć się z bramką demo.

<img src="/img/en/frontend/ais_dom_new_wizard_3_mob_apk.png" alt="AIS Dom"/>


Każda bramka posiada swój unikalny identyfikator, jest on losowo wygenerowany przy pierwszym uruchomieniu i pozostanie stały przez cały okres użytkowania urządzenia.
Identyfikator bramki znajdziemy klikając w pozycję "Przydatne linki", w menu po lewej stronie w aplikacji webowej Asystent domowy:

![Gate ID](/img/en/frontend/gate_id_in_web_app.png)


## Konfiguracja ustawień apliacji

W każdej chwili możemy przejść do ustawień aplikacji naciskając przycisk z trzema kropkami po lewej stronie na dolnej belce w aplikacji

![AIS Dom](/img/en/frontend/apk_go_to_settings.png)


W ustawieniach możemy ręcznie wybrać parametry aplikacji lub uruchomić ponownie kreator ustawień
![AIS Dom](/img/en/frontend/apk_settings.png)


### Adres URL lub identyfikator bramki
Najważniejszy parametr to adres URL lub identyfikator bramki, **należy poprawnie ustawić adres lub identyfikator bramki, by komunikacja z bramką była możliwa.** Jeżeli chcemy łączyć się z naszą bramką będąc poza siecią domową to należy pamiętać o włączeniu [dostępu z Internetu](/docs/ais_bramka_remote_www_index).


## Ogólne funkcjonalności aplikacji

### Aplikacja Asystent domowy

Podstawowa funkcjonalność aplikacji mobilnej to wyświetlanie internetowej aplikacji **Asystent domowy** działającej na bramce, tej samej aplikacji, którą możemy uruchamiać i konfigurować w przeglądarce internetowej [Aplikacja internetowa](/docs/ais_app_index).

![AIS Dom](/img/en/frontend/ais_dom_mob_local_apk.png)



### Wysyłanie komend głosowych do bramki

Po naciśnięciu przycisku mikrofonu możemy powiedzieć komendę i przesłać ją do wykonania do bramki.
![AIS Dom](/img/en/frontend/ais_dom_mob_apk_command.png)



## Funkcje mobilne 

W ustawieniach aplikacji AIS dom, możesz właczyć dodatkowe funkcję dedykowane dla urządzeń mobilnych. 

Funkcje te opisane są tu: [AIS dom mobile](ais_app_android_dom_mob)

## Funkcje panelu sterowania


W ustawieniach aplikacji AIS dom, możesz włączyć dodatkowe funkcje dedykowane dla wykorzystania aplikacji jako panelu sterowania. 


Funkcje te opisane są tu: [AIS dom panel](ais_app_android_dom_tablet)
