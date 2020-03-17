---
title: Bramka RF 433
sidebar_label: Bramka RF 433
---

## Wprowadzenie

Żeby umożliwić połączenie pilotów (do bram, rolet), przełączników, czujników i itp. urządzeń komunikujących się za pomocą transmisji radiowej 433 MHz z bramką AIS dom, potrzebujemy dodatkowego urządzenia umożliwiającego wysyłanie i odbieranie kodów RF 433. Polecamy do tego celu urządzenie Sonoff RF Bridge 433 z alternatywnym oprogramowaniem umożliwiającym łatwą integrację z bramką AIS dom (MQTT) oraz obsługującym większą ilość protokołów (oryginalny Sonoff obsługuje tylko jeden protokół z 24 bitami).

## Zasada działania

Po dodaniu do Asystenta domowego urządzenia RF 433 można nauczyć asystenta kodów z pilotów RF 433, a następnie wysyłać je z aplikacji lub za pomocą komendy głosowej.
Można też wykonać automatyzację typu otwarcie bramy i włączenie światła po odebraniu sygnału z czujki ruchu itp.

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_map.png)


## Oprogramowanie bramki RF

W celu umożliwienia bramce Sonoff RF Bridge 433 komunikacji za pomocą protokołu MQTT z bramką AIS dom, potrzebujemy zastosować nasze [alternatywne darmowe oprogramowanie dla urządzeń automatyki domowej](/docs/ais_iot_firmware_index). Najnowszą kompilację można pobrać z naszej strony [OTA](https://www.ai-speaker.com/ota/). W przypadku bramki RF poza oprogramowaniem do układu ESP 8266 RF-Bridge_firmware będziemy jeszcze potrzebowali oprogramowania do układu EFM8BB1 (RF-Bridge-EFM8BB1) - dzięki temu nasza bramka RF będzie obsługiwać większą ilość protokołów niż z oryginalnym oprogramowaniem Sonoff. Szczegóły dotyczące oprogramowania EFM8BB1 dostępne są na stronie wiki projektu [Portisch](https://github.com/Portisch/RF-Bridge-EFM8BB1/wiki).

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_firmware.png)

Szczegółowy opis wgrywania oprogramowania do bramki Sonoff RF 433 dostępny jest na stronie projektu [Tasmota](https://github.com/arendst/Tasmota/wiki/Sonoff-RF-Bridge-433).


## Integracja bramki RF z bramką AIS dom

Dodanie bramki RF przebiega w taki sam sposób jak dodanie każdego urządzenia z oprogramowaniem AIS dom. Czyli można to zrobić korzystając z kreatora w aplikacji lub za pomocą pilota radiowego. Na tej stronie prezentujemy [proces dodawania urządzenia krok po kroku](/docs/ais_iot_gate_add_device).


## Uczenie bramki kodów RF

### Konfiguracja Bramki RF 433

W menu aplikacji **Asystent domowy** przechodzimy do **Konfiguracja** -> **Konfiguracja urządzeń AIS dom** i wybieramy **bramkę RF**, której użyjemy do wysyłania kodów RF:

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_select_device.png)


### Nasłuchiwanie kodów RF

Aby nauczyć Asystenta kodów pilota radiowego (lub innego urządzenia wysyłającego kody radiowe o częstotliwości 433), uruchom tryb uczenia kodów RF, naciskając przycisk **START NASŁUCHIWANIA KODÓW** w sekcji **Uczenie kodów RF**.

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_learn_step_1.png)

### Wysyłanie kodów RF

Teraz wyślij kilka kodów (np. naciśnij kilka razy przyciski na pilocie). Rozpoznane kody będą pojawiały się na liście w aplikacji. Po skończeniu wysyłania przejdź w tryb testowania kodów, naciskając przycisk **START TESTOWANIA/DODAWANIA**.

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_learn_step_2.png)


### Testowanie i dodawanie przycisków

Przetestuj odebrane kody a ten, który działa najlepiej, nazwij i dodaj jako przycisk do systemu.


![RF 433](/img/en/iot/iot_ais_dom_device_rf433_learn_step_3.png)

Po dodaniu przycisk z podaną nazwą pojawi się w encjach urządzenia Bramka RF:

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_learn_step_4.png)

oraz w grupie wszystkie przełączniki:

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_learn_step_6.png)


### Wysyłanie kodu RF poleceniem głosowym

Po dodaniu przycisku możemy go umieścić na karcie i uruchamiać wysyłanie kodu RF (zapisanego pod przyciskiem) przez naciśnięcie przycisku w aplikacji lub komendą głosową.

![RF 433](/img/en/iot/iot_ais_dom_device_rf433_learn_step_7.png)


## Prezentacja wideo

<iframe width="560" height="315"  src="https://www.youtube.com/embed/NEFd_T3gqNU" frameborder="0" allowfullscreen></iframe>
