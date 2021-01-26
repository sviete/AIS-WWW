---
title: "AIS dom Mobile"
sidebar_label: AIS dom Mobile
---


## Wprowadzenie

Aplikacja AIS dom, poza podstawowymi funckjonalnościami opisanymi w [AIS dom](ais_app_android_dom) posiada też dedykowane funkcjonalności dla urządzeń mobilnych.

![Mob](/img/en/frontend/gallery_notify_4.png)


Funcjonalność urządzeń mobilnych można włączyć w ustawieniach aplikacji:

![Mob](/img/en/frontend/mob_special_functions.png)


### Skanowanie tagów NFC

Jeżeli nasz telefon ma wbudowany czytnik kodów NFC, to możemy przesyłać do bramki komendy zapisane w kodach NFC lub identyfikatory zeskanowanych tagów NFC.

#### Komenda w tagu NFC

Zamiast mówić komendę lub wpisywać ją w okienko czatu z Asystentem domowym możemy przyłożyć odblokowany telefon do taga NFC i przesłać do bramki komendę zapisaną tekstowo w tagu NFC.

Do zapisu tekstu do tagów NFC polecamy darmową aplikację [NFC Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=pl).
Aplikacja ta jest bardzo intuicyjna. Po jej uruchomieniu w pierwszej zakładce możemy odczytać tag NFC i sprawdzić, czy jest odblokowany do zapisu. Jeżeli tag jest zapisywalny, to przechodzimy do zakładki **ZAPIS** i wybieramy opcję **Dodaj pozycję**. Następnie wybieramy pozycję typu **Tekst** i wprowadzamy tekst polecenia/komendy, która ma być wykonana na bramce, np. ``Włącz radio Eska Rock`` i zatwierdzamy **OK**.

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



### Raportowania do bramki 

Przesyłanie danych o lokalizacji i o stanie sensorów z urządzenia mobilnego do bramki realizowane jest przez serwis który okresowo przesyła do bramki aktualną lokalizację urządzenia oraz informacje o stanie niektórych czujników w telefonie.

To ile statusów zostało wysłanych do bramki, możemy zobaczyć w powiadomieniu aplikacji.
![GPS](/img/en/frontend/apk_report_gps2.png)

Takie dane w powiązaniu z osobą w systemie pozwalają odpowiedzieć na pytanie typu: "Gdzie jest Jolka" oraz na uruchamianie automatyzacji w zależności statusu czujników w telefonie czy też od lokalizacji osoby - szczegóły w [Automatyzacje - wykrywanie obecności](/docs/ais_bramka_presence_detection)


### Powiadomienia z bramki

Na bramce dostępna jest usługa ``ais_ai_service.mob_notify``, która umożliwia wysłanie z bramki powiadomienia do aplikacji mobilnej **AIS dom**.
Dzięki temu za pomocą automatyzacji możemy informować o zdarzeniach w naszym domu wybraną aplikację mobilną.

Powiadomienia są nielimitowane, mogą zawierać zdjęcie oraz tekst do przeczytania.
Przykład, w jaki sposób można skorzystać z tej funkcjonalności, opisany jest w dokumentacji integracji  [Galeria, w sekcji "Wysyłanie zdjęcia w powiadomieniu"](/docs/ais_app_integration_gallery#wysyłanie-zdjęcia-w-powiadomieniu)

![Notify](/img/en/frontend/gallery_notify_1.png)


![AIS Dom](/img/en/frontend/ais_dom_mob_local_apk.png)


