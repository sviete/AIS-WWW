---
title: "AIS dom"
sidebar_label: AIS dom
---


## Wprowadzenie

To nasza główna aplikacja, która działa zarówno na bramce jak i na innych urządzeniach, w tym: tablety, telefony oraz Android TV.

![AIS Dom](/img/en/frontend/ais_dom_tablet_apk.png)

Aplikacja jest czymś w rodzaju ramki/przeglądarki do [aplikacji internetowej](/docs/en/ais_app_index.html) działającej na bramce. Dostarcza też nam interfejs do API systemu Android oraz konsolę środowiska Linux (zawierającego minimalny system podstawowy wraz z interpreterem języka Python, Node.js oraz Clang).

![AIS Dom](/img/en/frontend/ais_dom_apk_screen_mob.png)



## Instalacja

Aplikacja dostępna jest za darmo (bez reklam, mikropłatności itp) w sklepie [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom) pod nazwą AIS dom. Możesz zeskanować telefonem poniższy kod, by przejść do instalacji aplikacji w Google Play:

![Google Play](/img/en/frontend/barcode_go_to_apk_in_google_play.png)


Kod źródłowy aplikacji dostępny jest w naszym [publicznie dostępnym repozytorium](https://github.com/sviete/AIS-dom)
Podpisane wersje publikujemy też na naszym [serwisie ze składowymi systemu](https://powiedz.co/ota/)



## Konfiguracja za pomocą kreatora

Po pierwszym uruchomieniu aplikacji pojawi się kreator, który przeprowadzi nas krok po kroku przez prosty proces konfiguracji


<img src="/img/en/frontend/ais_dom_wizard_0_mob_apk.png" alt="AIS Dom" width="40%"/>


### Dostęp do mikrofonu

W pierwszym kroku kreatora możemy włączyć dostęp do mikrofonu.

<img src="/img/en/frontend/ais_dom_wizard_mob_apk.png" alt="AIS Dom" width="40%"/>

### Dostęp do dysku

W kolejnym kroku kreatora możemy włączyć dostęp do plików na urządzeniu mobilnym.

<img src="/img/en/frontend/ais_dom_wizard_1_mob_apk.png" alt="AIS Dom" width="40%"/>


### Dostęp do kamery

W kolejnym kroku kreatora możemy włączyć dostęp do kamery.

<img src="/img/en/frontend/ais_dom_wizard_2_mob_apk.png" alt="AIS Dom" width="40%"/>


### Skanowanie identyfikatora bramki

Na koniec możemy zeskanować identyfikator naszej bramki

<img src="/img/en/frontend/ais_dom_wizard_3_mob_apk.png" alt="AIS Dom" width="40%"/>


Każda bramka posiada swój unikalny identyfikator, jest on losowo wygenerowany przy pierwszym uruchomieniu i pozostanie stały przez cały okres użytkowania urządzenia.
Identyfikator bramki znajdziemy klikając w pozycję "Przydatne linki", w menu po lewej stronie w aplikacji webowej Asystent domowy:

![Gate ID](/img/en/frontend/gate_id_in_web_app.png)


## Konfiguracja ustawień apliacji

W każdej chwili możemy przejść do ustawień aplikacji nasiskając przycisk z trzema kropkami po lewej stronie na dolnej belce w aplikacji


<img src="/img/en/frontend/apk_go_to_settings.png" alt="AIS Dom" width="40%"/>


W ustawieniach możemy ręcznie wybrać parametry aplikacji lub uruchomić ponownie kreator ustawień
<img src="/img/en/frontend/apk_settings.png" alt="AIS Dom" width="40%"/>

Najważniejszy parametr to adres URL lub identyfikator bramki, **należy poprawnie ustawić adres lub identyfikator bramki, by komunikacja z bramką była możliwa.** Jeżeli chcemy łączyć się z naszą bramką będąc poza siecią domową to należy pamiętać o włączeniu [dostępu z Internetu](ais_bramka_remote_www_index).


## Sterowanie odtwarzaczem na bramce

> TODO


## Sterowanie gestami


![Pilot do asystenta](/img/en/remote/remote_gesture_mode.png)


### Definiowanie gestów

Klikamy na ikonkę po lewej stonie na dole aplikacji żeby przejść do ustawień aplikacji.

![Ustawienia aplikacji](/img/en/remote/remote_gesture_mode_1.png)


Z menu dostępnego w ustawieniach wybieramy opcję "Definiowanie gestów"

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_2.png)


Klikamy przysisk dodaj by przejść do definiowana nowego gestu

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_3.png)


Rysujemy na ekranie gest i zapisujemy go wraz z komendą

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_4.png)


### Przełączenie w tryb sterowania gestami

Ikona na dolnym pasku aplikacj, umieszczona pomiędzy przejściem do ustawień a mikrofonem obrazuje tryb sterowania w aplikacji, by przełączyć w tryb sterowania gestami możemy kliknąć w tą ikonę w aplikacji mobilnej lub zmienić tryb pilotem radiowym [Zmiana trybu sterowania](/docs/en/ais_remote_modes.html).

![Przełączenie w tryb sterowania gestami](/img/en/remote/remote_gesture_mode_5.png)


### Wydawanie komendy za pomocą gestu

Teraz możemy wykonać zdefinowany gest, co spowoduje wysłanie do asystenta zdefiniowanej komedny w celu jej wykonania

![Wykonanie gestu](/img/en/remote/remote_gesture_mode_6.png)


## Działanie aplikacji

Podstawowa funkcjonalność to wyświetlanie internetowej aplikacji **Asystent domowy** działającej na bramce, tej samej aplikacji, którą możemy uruchamiać i konfigurować w przeglądarce internetowej [Aplikacja internetowa](ais_app_index).

Dodatkowo na dolnej belce w aplikacji mamy następujące przyciski:

* przejście do ustawień aplikacji

* sygnalizacja działania w trybie połączenia lokalnego

* sygnalizacja działania w trybie połączenia przez tunel

* mikrofon do komunikacji z asystentem głosowym

* uruchomienie trybu gestów



![AIS Dom](/img/en/frontend/ais_dom_mob_local_apk.webp)


### Połączenie z bramką

Możesz ręcznie wpisać adres URL do aplikacji webowej działającej na bramce, np:
* http://192.168.1.2:8123
* https://dom-12312312313321321.paczka.pro

w takim przypadku aplikacja AIS dom będzię łączyła się tylko z podanym przez Ciebie adresem URL.



Możesz zeskanować QR kod z unikalnym identyfikatorem swojej bramki, kod ten dostępny jest w aplikacji webowej Asystent domowy jako pierwsza pozycja w menu "Przydatne linki":

![Gate ID](/img/en/frontend/gate_id_in_web_app.png)


### Diagram połączenia

Jeśli podasz identyfikator, to aplikacja sama będzie próbowała ustalić, czy połączenie z bramką ma być lokalne, czy przez szyfrowany tunel.
Ustalenie połączenia z bramką działa wg następującego schematu:

![AIS Dom](/img/en/frontend/apk_connection_diagram.png)

Priorytet ma połączenie lokalne, jeśli jest dostępne.
