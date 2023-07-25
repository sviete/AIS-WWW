---
title: "Kompatybilność z Tasmota"
sidebar_label: Kompatybilność z Tasmota
---

**Tasmota++**
Nasze oprogramowanie dla urządzeń automatyki domowej działa na bazie bardzo popularnego projektu [Tasmota](https://github.com/arendst/Tasmota).

Jak powstaje nasze oprogramowanie do urządzeń domowych:
- regularnie pobieramy najnowszą stabilną wersję Tasmota,
- dodajemy ustawienia umożliwiające automatyczne wykrywania i **ułatwiające** działanie z Asystentem domowym,
- kompilujemy wersję z naszymi kodami i ustawieniami,
- testujemy na kilkudziesięciu urządzeniach,
- udostępniamy nasze kody oraz skompilowaną wersję do pobrania,
- instalujemy na naszych urządzeniach, które sprzedajemy.

Wszystkie nasze poprawki udostępniamy też społeczności Tasmota, dodatkowo rozwijamy aplikację na system Android, którą zaoferowaliśmy jako oficjalną aplikację ułatwiającą Konfigurację początkową dla urządzeń z oprogramowaniem Tasmota.


## Jakie ułatwienia dostarczamy

### Tryb parowania

Umożliwiamy łatwe wprowadzenie w tryb parowania **poprzez naciśnięcie i przytrzymanie przycisku na urządzeniu przez 4 sekundy** lub przez szybkie naciśnięcie przycisku na urządzeniu 6 razy (lub więcej).

Motywacją do tej zmiany było umożliwienie łatwego dodawania urządzeń do naszego systemu przez osoby starsze oraz mające problem ze wzrokiem (dla części osób szybkie wciśnięcie dokładnie cztery razy w krótkich odstępach czasu tak, żeby dioda odpowiednio migała... było "troszkę" problematyczne).

### Wyszukiwanie bramki

Urządzenia do sterowania nie potrzebują Internetu (serwisu w chmurze producenta). To bardzo ułatwia dostępność i przyśpiesza działanie sterowania, ale niesie ze sobą też kilka wyzwań technologicznych.

Główny problem to jak znaleźć bramkę w lokalnej sieci. Dla osób zaznajomionych z technologią ustawienie stałego IP dla bramki nie jest problemem, ale są też osoby, które nie wiedzą (i nie chcą wiedzieć) co to jest IP.

My ten problem rozwiązujemy i umożliwiamy urządzeniu wyszukanie bramki, czyli mając nasze oprogramowanie i bramkę możesz ją przełączać z Ethernet na WiFi, zmieniać jej adres IP a urządzenia i tak ją znajdą i się z nią połączą.

Tu ważne jest, żeby nazwa unikalnego klienta MQTT (którą ma każde urządzenie) zaczynała się od identyfikatora bramki. Przy takiej konfiguracji urządzenie samo będzie "szukało bramki" w sieci lokalnej. To oczywiście wysyłamy z bramki do urządzenia podczas "parowania urządzenia z bramką".

![MQTT klient](/img/en/faq/mqtt_client_dom.png)


### Współpraca z Asystentem domowym

W naszej kompilacji oprogramowania Tasmota automatycznie ustawiamy na urządzeniu, żeby przedstawiało się bramce (mqtt discovery). Wszystkie urządzenia dodane są też do grupy **dom**. Bramka po uruchomieniu publikuje na tę grupę prośbę o przedstawienie się do urządzeń i ustala komunikację z nowymi urządzeniami. Szczegółowo opisane jest to w dokumentacji w sekcji [MQTT](/docs/ais_bramka_mqtt)

### Ustawienia lokalne

W naszej kompilacji oprogramowania Tasmota ma lokalne polskie ustawienia:
- polskie menu,
- regionalne serwery czasu NTP (pl.pool.ntp.org, 0.pl.pool.ntp.org),
- strefę czasową dla Polski,
- lokalizacja to środek polski (52.069528, 19.480300) do wykorzystania podczas ustawiania charmonogramu opartego na wschodzie i zachodzie słońca.



## Czy urządzenia z inną kompilacją Tasmota działają z bramką?

**Tak**. Na bramce jest broker MQTT dlatego każde urządzenie, które rozumie MQTT będzie działało z bramką.

Może to jednak nie być tak proste, jak w przypadku naszych urządzeń, ponieważ nie wiemy, czy kompilacja, (którą masz wgraną na urządzeniu) ma włączoną współpracę z Asystentem domowym, mDNS i czy... została prawidłowo przygotowana i wgrana.

Są trzy wyjścia, żeby działało:

1. Zrozumieć jak działa MQTT i komunikacja z bramką - co [dokładnie opisujemy](/docs/ais_bramka_mqtt) i do czego zachęcamy.
2. Wgrać nasze darmowe oprogramowanie do urządzenia.
3. Kupić nasze gotowe urządzenie i cieszyć się z tego, że wsparło się nasz projekt i wszystko magicznie i fajnie działa - do czego też bardzo zachęcamy :)


## Co wysyłamy do urządzenia podczas parowania z bramką?

Podczas parowania z bramką do urządzenia wysyłamy:
- FriendlyName1 - przyjazną nazwę urządzenia podaną w konfiguratorze
- SSId1 - nazwę sieci WiFi
- Password1 - hasło do WiFI
- MqttClient - unikalną nazwę klienta MQTT (identyfikator bramki + 6 ostatnich znaków z adresu MAC urządzenia)
- Topic - unikalny temat MQTT
- GroupTopic -temat grupowy dla wszystkich urządzeń **dom**
- MqttHost - adres IP bramki
- SetOption3 - włączamy MQTT na urządzeniu
- SetOption30 - przypisanie do grupy światła (jeśli tak zostało wybrane w konfiguratorze)
