---
title: "AIS dom"
sidebar_label: AIS dom
---


## Wprowadzenie

To nasza główna aplikacja, która działa zarówno na bramce jak i na innych urządzeniach, w tym: tablety, telefony oraz Android TV.


1. Podstawowa funkcjonalność aplikacji mobilnej to wyświetlanie internetowej aplikacji **Asystent domowy** działającej na bramce, tej samej aplikacji, którą możemy uruchamiać i konfigurować w przeglądarce internetowej [Aplikacja internetowa](/docs/ais_app_index).
![AIS Dom](/img/en/frontend/ais_dom_mob_tech_apk.png)

2. Przejście do ustawień aplikacji.
3. Sygnalizacja trybu połączenia z bramką (lokalnie / tunel).
4. Mikrofon do komunikacji z asystentem głosowym.
5. Wskaźnik poziomu dźwięku w mikrofonie - obrazuje to jak asystent nas słyszy.
6. uruchomienie trybu gestów.


Aplikacja jest czymś w rodzaju ramki/przeglądarki do [aplikacji internetowej](/docs/ais_app_index) działającej na bramce. Dostarcza też nam interfejs do API systemu Android oraz konsolę środowiska Linux (zawierającego minimalny system podstawowy wraz z interpreterem języka Python, Node.js oraz Clang).

![AIS Dom](/img/en/frontend/ais_dom_apk_screen_mob.png)



## Instalacja

Aplikacja dostępna jest za darmo (bez reklam, mikropłatności itp) w sklepie [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom) pod nazwą AIS dom. Możesz zeskanować telefonem poniższy kod, by przejść do instalacji aplikacji w Google Play:

![Google Play](/img/en/frontend/barcode_go_to_apk_in_google_play.png)


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


## Funkcjonalność aplikacji

### Aplikacja Asystent domowy

Podstawowa funkcjonalność aplikacji mobilnej to wyświetlanie internetowej aplikacji **Asystent domowy** działającej na bramce, tej samej aplikacji, którą możemy uruchamiać i konfigurować w przeglądarce internetowej [Aplikacja internetowa](/docs/ais_app_index).

![AIS Dom](/img/en/frontend/ais_dom_mob_local_apk.png)



### Wysyłanie komend głosowych do bramki

Po naciśnięciu przycisku mikrofonu możemy powiedzieć komendę i przesłać ją do wykonania do bramki.
![AIS Dom](/img/en/frontend/ais_dom_mob_apk_command.png)


### Skanowanie tagów NFC

Jeżeli nasz telefon ma wbudowany czytnik kodów NFC, to możemy przesyłać do bramki komendy zapisane w kodach NFC lub identyfikatory zeskanowanych tagów NFC.

#### Komenda w tagu NFC

Zamiast mówić komendę lub wpisywać ją w okienko czatu z Asystentem domowym możemy przyłożyć odblokowany telefon do taga NFC i przesłać do bramki komendę zapisaną tekstowo w tagu NFC.

Do zapisu testku do tagów NFC polecamy darmową aplikację [NFC Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=pl).
Aplikacja ta jest bardzo intuicyjna. Po jej uruchomieniu w pierwszej zakładce możemy odczytać tag NFC i sprawdzić, czy jest odblokowany do zapisu. Jeżeli tag jest zapisywalny, to przechodzimy do zakładki **ZAPIS** i wybieramy opcję **Dodaj pozycję**. Następnie wybieramy pozycję typu **Tekst** i wprowadzamy tekst polecenia/komendy, którą ma być wykonana na bramce, np. ``Włącz radio Eska Rock`` i zatwierdzamy **OK**.

![AIS Dom](/img/en/frontend/nfc_tools_1.png)
Po zapisie tekstu komendy do naszego taga NFC wychodzimy z aplikacji NFC Tools.

Teraz zeskanowanie tego taga NFC spowoduje przesłanie zapisanej w nim komedy bezpośrednio do naszej bramki.
![AIS Dom](/img/en/frontend/nfc_ais_1.png)

Co spowoduje uruchomienie akcji powiązanej z komendą
![AIS Dom](/img/en/frontend/nfc_ais_2.png)

W ten sposób możemy wykonywać dowolne rzeczy na bramce - uruchamiać automatyzację, sceny, sterować urządzeniami, pytać o status czujników, odtwarzać audio itd..


#### Skan identyfikatora NFC

Jeżeli w zeskanowanym tagu NFC nie ma rekordu typu text, to wysyłamy do bramki sam identyfikator zeskanowanego taga NFC.
W ten sposób wyzwalamy na bramce zdarzenie (event) typu **tag_scanned** a w danych tego zdarzenia (w **event_data**) przekazujemy identyfikator taga **tag_id**.
Ta funkcjonalność pozwala na wykorzystanie tagów NFC, które mamy w domu, do wykonywania automatyzacji na bramce.

Przykład, w jaki sposób można skorzystać z tej funkcjonalności, opisany jest szczegółowo w [Automatyzacja wyzwalana tagiem NFC](ais_bramka_tag_automation).


### Sterowanie gestami

Ikona z prawej strony na dolnym pasku aplikacji, pozwala na przełączanie aplikacji w tryb sterowania gestami - by przełączyć w tryb sterowania gestami należy nacisnąć i przytrzymać tę ikonę.

![Sterowanie gestami](/img/en/frontend/remote_gesture_mode.png)


#### Definiowanie gestów

Gesty możemy definiować w ustawieniach aplikacji.

Z menu dostępnego w ustawieniach wybieramy opcję "Definiowanie gestów"

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_2.png)


Klikamy przysisk "Dodaj" by przejść do definiowania nowego gestu

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_3.png)


Rysujemy na ekranie gest i zapisujemy go wraz z komendą

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_4.png)


#### Definiowanie gestów

Klikamy na ikonkę po lewej stonie na dole aplikacji, żeby przejść do ustawień aplikacji.

![Ustawienia aplikacji](/img/en/remote/remote_gesture_mode_1.png)


Z menu dostępnego w ustawieniach wybieramy opcję "Definiowanie gestów"

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_2.png)


Klikamy przysisk "Dodaj" by przejść do definiowania nowego gestu

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_3.png)


Rysujemy na ekranie gest i zapisujemy go wraz z komendą

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_4.png)


### Synchronizacja z bramką

Opcja raportowania do bramki uruchomi serwis który okresowo będzie przesyłał do bramki lokalizację urządzenia oraz informacje o stanie niektórych czujników w telefonie.
![GPS](/img/en/frontend/apk_report_gps.png)

To ile statusów zostało wysłanych do bramki, możemy zobaczyć w powiadomieniu aplikacji.
![GPS](/img/en/frontend/apk_report_gps2.png)

Takie dane w powiązaniu z osobą w systemie pozwalają odpowiedzieć na pytanie typu: "Gdzie jest Jolka" oraz na uruchamianie automatyzacji w zależności statusu czujników w telefonie czy też od lokalizacji osoby - szczegóły w [Automatyzacje - wykrywanie obecności](/docs/ais_bramka_presence_detection)


### Powiadomienia z bramki

Na bramce dostępna jest usługa ``ais_ai_service.mob_notify``, która umożliwia wysłanie z bramki powiadomienia do aplikacji mobilnej **AIS dom**.
Dzięki temu za pomocą automatyzacji możemy informować o zdarzeniach w naszym domu wybraną aplikację mobilną.

Powiadomienia są nielimitowane, mogą zawierać zdjęcie oraz tekst do przeczytania.
Przykład, w jaki sposób można skorzystać z tej funkcjonalności, opisany jest w dokumentacji integracji  [Galeria, w sekcji "Wysyłanie zdjęcia w powiadomieniu"](/docs/ais_app_integration_gallery#wysyłanie-zdjęcia-w-powiadomieniu)

![Notify](/img/en/frontend/gallery_notify_1.png)

![Notify](/img/en/frontend/gallery_notify_4.png)


### Komendy wysyłane z bramki do aplikacji mobilnej

Na bramce dostępna jest usługa ``ais_ai_service.mob_request``, która umożliwia wysłanie z bramki komendy (zapytania/żądania) do aplikacji mobilnej **AIS dom**.
Dzięki temu za pomocą automatyzacji możemy zdalnie z bramki włączyć mikrofon na urządzeniu mobilnym lub zapytać o aktualną lokalizację urządzenia. 

![Notify](/img/en/blog/202007/mic_on_service.png)

:::info
Na przykładach na forum pokazujemy jak wykorzystać tę funkcjonalność, poniżej znajduje się opis serwisów jakie są dostępne.
:::

| komenda   |     dane/parametry      |  opis |
|----------|:-------------:|------|
| micOn | |  Zdalne włączenie mikrofonu na urządzeniu w celu odebrania komendy głosowej |
| locationUpdate | | Wysłania żądania aktualizacji lokalizacji, uruchomienie serwisu lokalizacji na 30 sekund |
| locationServiceOn |  | Zdalne włączenie serwisu lokalizacji na telefonie |
| locationServiceOff |  | Zdalne wyłączenie serwisu lokalizacji na telefonie |
| hotWordServiceOn |  | Zdalne włączenie serwisu nasłuchiwania słowa aktywującego komendę głosową na telefonie |
| hotWordServiceOff |  | Zdalne wyłączenie serwisu nasłuchiwania słowa aktywującego komendę głosową na telefonie |
| audioServiceOn |  | Zdalne włączenie serwisu odtwarzacza audio na telefonie |
| audioServiceOff |  | Zdalne wyłączenie serwisu odtwarzacza audio na telefonie |
| sayIt |  { "text": "Cześć co słychać" }| Przesłanie do telefonu tekstu do powiedzenia |
| playAudio |  { "url": "https://an.cdn.eurozet.pl/ant-kat.mp3" }| Przesłanie do telefonu adresu audio do odtwarzania |
| stopAudio |  | Zdalne zatrzymanie odtwarzania audio na telefonie |
| findPhone |  | Zdalne włączenie wyszukiwania telefonu - telefon zwiększa głośność na 100%, mówi "Tu jestem" i dzwoni |

:::warning UWAGA
Można z bramki (do której jesteśmy zalogowani) wysłać komendę do urządzenia mobilnego i zdalnie "zmusić" je do jej wykonania, tylko jeśli włączony jest stosowny dostęp (do mikrofonu i/lub lokalizacji) na urządzeniu mobilnym.

Pokazujemy w powiadomieniu, że taka zdalna komenda jest uruchomiona - żeby było to jasne dla właściciela urządzenia.
:::


## Opis techniczny działania aplikacji

Podstawowa funkcjonalność to wyświetlanie internetowej aplikacji **Asystent domowy** działającej na bramce, tej samej aplikacji, którą możemy uruchamiać i konfigurować w przeglądarce internetowej [Aplikacja internetowa](/docs/ais_app_index). Aplikacja wyświetlana jest w komponencie [WebView](https://developer.android.com/reference/android/webkit/WebView) systemu Andorid, komponent ten umożliwia wyświetlanie treści aplikacji webowej jako aktywności w aplikacji. W Android od wersji 7.1.2 komponent WebView może używać tego samego silnika co przeglądarka Chrome, co umożliwia bardzo responsywne działanie aplikacji.

Dodatkowo na dolnej belce w aplikacji mamy następujące przyciski:

* przejście do ustawień aplikacji

* sygnalizacja trybu połączenia z bramką (lokalnie / tunel)

* mikrofon do komunikacji z asystentem głosowym. Mikrofon używa wbudowanego w system Android mechanizmu [SpeechRecognizer](https://developer.android.com/reference/android/speech/SpeechRecognizer)

* uruchomienie trybu gestów



![AIS Dom](/img/en/frontend/ais_dom_mob_local_apk.png)


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
