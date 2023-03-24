---
title: "AIS dom Panel"
sidebar_label: AIS dom Panel
---


## Dotykowy panel sterowania


Aplikacja dostarcza funkcjonalność "Dotykowego panelu / Smart panel" do sterowania automatyką domową i multimediami.

![Smart glass ustawienia](/img/en/frontend/app_smart_glass_go_to_settings.png)



## Instalacja

:::info Informacja
Na bramkach AIS dom aplikacja jest już zainstalowana, skonfigurowana i automatycznie aktualizowana. 
:::


Dodatkowo, aplikację AIS dom można zainstalować na telefonie lub tablecie. Jest ona dostępna za darmo (bez reklam, mikropłatności itp) w sklepie [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom) pod nazwą AIS dom. Możesz zeskanować telefonem poniższy kod, by przejść do instalacji aplikacji w Google Play:

<center>

![Google Play](/img/en/frontend/barcode_go_to_apk_in_google_play.png)

![Google Play](/img/main/google-play-badge.png)

</center>

Kod źródłowy aplikacji dostępny jest w naszym [publicznie dostępnym repozytorium](https://github.com/sviete/AIS-dom)
Podpisane wersje publikujemy też na naszym [serwisie ze składowymi systemu](https://powiedz.co/ota/)


## Konfiguracja za pomocą kreatora

Po pierwszym uruchomieniu aplikacji pojawi się kreator, który przeprowadzi nas krok po kroku przez prosty proces konfiguracji


![Mob](/img/en/frontend/ais_dom_new_wizard_0_mob_apk.png)


Funkcje panelu sterowania można włączyć w ustawieniach aplikacji:

![Mob](/img/en/frontend/panel_special_functions.png)


## Wideodomofon

Aplikacja posiada wbudowanego klienta SIP (VOIP), dzięki czemu może współpracować z wideodomofonami, które obsługują protokół SIP.


![Mob](/img/en/frontend/video_doorbell.png)

Z ekranu w aplikacji (aktywności) z obrazem z kamery wideodomofonu możemy przejść do ustawień połączenia SIP oraz obrazu kamery.

### Ustawienia połączenia SIP

W ustawieniach SIP można ustawić parametry połączenia, dostosować obraz wideo oraz parametry mikrofonu i głośnika.

![Mob](/img/en/frontend/video_doorbell_settings.png)


## Skanowanie tagów NFC

Jeżeli nasz tablet ma wbudowany czytnik kodów NFC, to możemy przesyłać do bramki komendy zapisane w kodach NFC lub identyfikatory zeskanowanych tagów NFC.

### Komenda w tagu NFC

Zamiast mówić komendę lub wpisywać ją w okienko czatu z Asystentem domowym możemy przyłożyć tag NFC do tabletu i przesłać do bramki komendę zapisaną tekstowo w tagu NFC.

Do zapisu tekstu do tagów NFC polecamy darmową aplikację [NFC Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=pl).
Aplikacja ta jest bardzo intuicyjna. Po jej uruchomieniu w pierwszej zakładce możemy odczytać tag NFC i sprawdzić, czy jest odblokowany do zapisu. Jeżeli tag jest zapisywalny, to przechodzimy do zakładki **ZAPIS** i wybieramy opcję **Dodaj pozycję**. Następnie wybieramy pozycję typu **Tekst** i wprowadzamy tekst polecenia/komendy, która ma być wykonana na bramce, np. ``Włącz radio Eska Rock`` i zatwierdzamy **OK**.

![AIS Dom](/img/en/frontend/nfc_tools_1.png)

Po zapisie tekstu komendy do naszego taga NFC wychodzimy z aplikacji NFC Tools.

Teraz zeskanowanie tego taga NFC spowoduje przesłanie zapisanej w nim komedy bezpośrednio do naszej bramki.

![AIS Dom](/img/en/frontend/nfc_ais_1.png)

Co spowoduje uruchomienie akcji powiązanej z komendą

![AIS Dom](/img/en/frontend/nfc_ais_2.png)

W ten sposób możemy wykonywać dowolne rzeczy na bramce - uruchamiać automatyzację, sceny, sterować urządzeniami, pytać o status czujników, odtwarzać audio itd..


### Skan identyfikatora NFC

Jeżeli w zeskanowanym tagu NFC nie ma rekordu typu text, to wysyłamy do bramki sam identyfikator zeskanowanego taga NFC.
W ten sposób wyzwalamy na bramce zdarzenie (event) typu **tag_scanned** a w danych tego zdarzenia (w **event_data**) przekazujemy identyfikator taga **tag_id**.
Ta funkcjonalność pozwala na wykorzystanie tagów NFC, które mamy w domu, do wykonywania automatyzacji na bramce.

Przykład, w jaki sposób można skorzystać z tej funkcjonalności, opisany jest szczegółowo w [Automatyzacja wyzwalana tagiem NFC](ais_bramka_tag_automation).


## Odtwarzacz audio

### Sterowanie odtwarzaczem na bramce

Można zdalnie sterować odtwarzaczem na bramce z powiadomienia w aplikacji:
![Mob](/img/en/frontend/panel_remote_controll_audio.png)


### Przekierowanie mediów z bramki

W aplikacji AIS dom wbudowany jest odtwarzacz multimediów który można [zintegrować z bramką](ais_app_player#dodatkowe-odtwarzacze-ais),
Dzięki czemu można przesyłać treści multimedialne z bramki do zdalnego klienta (Panelu sterowania):

![Smart glass ustawienia](/img/en/frontend/redirect_media_to_client_gate.png)



## Sterowanie gestami

Ikona z prawej strony na dolnym pasku aplikacji, pozwala na przełączanie aplikacji w tryb sterowania gestami - by przełączyć w tryb sterowania gestami należy nacisnąć i przytrzymać tę ikonę.

![Sterowanie gestami](/img/en/frontend/remote_gesture_mode.png)


### Definiowanie gestów

Gesty możemy definiować w ustawieniach aplikacji.

Z menu dostępnego w ustawieniach wybieramy opcję "Definiowanie gestów"

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_2.png)


Klikamy przysisk "Dodaj" by przejść do definiowania nowego gestu

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_3.png)


Rysujemy na ekranie gest i zapisujemy go wraz z komendą

![Definiowanie gestów](/img/en/remote/remote_gesture_mode_4.png)


## Zmiana głosu asystenta

W aplikacji korzystamy z wbudowanego w Android mechanizmu zamiany tekstu na mowę (TTS - Text To Speech). Zmiana głosu asystenta w aplikacji kliencie (w aplikacji dla panelu sterowania) możliwa jest w ustawieniach systemu Android.

![Sterowanie gestami](/img/en/frontend/tts3.png)


Żeby zmienić głos, należy wybrać systemowe **Ustawienia** > **Język i wprowadzanie** > **Zamiana tekstu na mowę**, a następnie ikonkę "koła zębatego" w celu dostosowania mechanizmu zamiany tekstu na mowę:

![Sterowanie gestami](/img/en/frontend/tts1.png)


następnie wybieramy opcję **Zainstaluj dane głosowe**. Wybieramy język i głos z dostępnych opcji:


![Sterowanie gestami](/img/en/frontend/tts2.png)


## Nasłuchiwanie wyrażenia aktywującego

![Smart glass ustawienia](/img/en/frontend/app_smart_glass_go_to_settings_5.png)

:::caution Uwaga.
Ta opcja jest w fazie eksperymentalnej i może nie działać poprawnie - np. nie wykrywać poprawnie każdego wypowiedzianego słowa kluczowego lub mylić się i wykrywać podobne słowa jako słowa kluczowe.
:::


Jeśli włączysz tę opcję, to uruchomisz w "Panelu sterowania" usługę mikrofonu nasłuchującego wybranego wyrażenia. Jest to tak zwane wyrażenie aktywujące rejestrowanie i przetwarzanie komendy, zwane też "key word" lub "trigger word". Możesz też dostosować czułość nasłuchiwania wyrażenia aktywującego. Do wykrywania wyrażeń aktywujących używamy bardzo dokładnego i lekkiego silnika Porcupine.

>  **Uwaga:** Parametr czułości nasłuchiwania. Wyższa wartość czułości obniża wskaźnik pominięć **ale kosztem wzrostu częstości fałszywych alarmów**. Aby uzyskać więcej informacji dotyczących tego jak to działa warto odwiedzić stronę firmy, która dostarcza to rozwiązanie: https://picovoice.ai/

Zmodyfikowaliśmy zasadę działania Asystenta domowego- w przypadku, gdy komenda pochodzi z urządzenia z włączonym nasłuchiwaniem słowa aktywującego, to staramy się być bardziej dosłownym a "mniej się domyślać" o co chodziło użytkownikowi. Ma to na celu zminimalizowanie wykonywania niepotrzebnych komend w przypadku omyłkowego włączenia nasłuchiwania komendy. Jednak rozwiązanie jest jeszcze na bardzo wczesnym etapie, dlatego zalecamy stosować tę usługę pod kontrolą (i np. wyłączać ją na noc), żeby uniknąć niepotrzebnych wykonań komend i niespodziewanego uruchomienia odtwarzacza audio czy innych domowych urządzeń.


