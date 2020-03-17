---
title: "Bramka IoT"
sidebar_label: Karta produktu
---

## Bramka z inteligentnym asystentem głosowym

### Opis produktu

Bramka do domowego Internetu Rzeczy z inteligentnym asystentem głosowym to urządzenie, którego celem jest komunikacja i zarządzanie inteligentnymi urządzeniami w Twoim domu. **Bramka "tłumaczy" polecenia głosowe na komendy, które są zrozumiałe przez urządzenia** oraz automatycznie wykonuje czynności (np. włączenie urządzeń) w określonych okolicznościach.

### Zdjęcie produktu

<img
  src='/img/en/bramka/bramka_full.jpg'
  alt='Bramka AIS dom'
/>

### Specyfikacja techniczna

Sprzętowo nasza konstrukcja oparta jest na wydajnym procesorze Amlogic, posiada wbudowane WiFi oraz dysk, a także porty LAN/Ethernet, 4 x USB, SPDIF, Aux, HDMI.

|                       | dev1                                                    |
|-----------------------|---------------------------------------------------------|
| oprogramowanie        | Asystent domowy, środowisko Linux, Android 7.1.2(root)  |
| procesor              | Amlogic S905w ARM Cortex-A53 (cztero-rdzeniowy)         |
| pamięć                | 1 GB                                                    |
| wbudowany dysk        | 8 GB                                                    |
| Gniazdo karty pamięci | SD/MMC                                                  |
| USB                   | 4 (1x OTG, 3x USB 2.0)                                  |
| HDMI                  | 2.0A                                                    |
| AV                    | 3,5mm jack                                              |
| SPDIF                 | 3,5mm jack                                              |
| Ethernet RJ45         | 10/100M                                                 |
| WiFI                  | 2.4 GHz                                                 |
| Dodatkowo w zestawie  | kabel HDMI, zasilacz 5V 2A                              |
| Do kupienia osobno    | pilot radiowy, inteligentne urządzenia                  |


### Oprogramowanie

Oprogramowanie obsługuje najbardziej popularne urządzenia inteligentnego domu i **działa lokalnie w Twoim domu - nie gromadzi danych w chmurze**.

W naszym rozwiązaniu bramka jest odpowiedzialna za kontrolę nad urządzeniami oraz dostarczanie treści.
Bramka umożliwia zarządzanie urządzeniami i sensorami oraz pełni rolę mostu między Internetem Rzeczy a Twoją siecią domową. Urządzenie jest „tłumaczem” protokołów IoT i przekazuje komunikację sieciową do aplikacji w celu prezentacji stanu urządzeń oraz dostarczeniu kontroli dla użytkownika.

Główne zadania, które realizuje oprogramowanie zainstalowane na bramce to:

 * tłumaczenie poleceń głosowych na komendy, które są zrozumiałe przez urządzenia,
 * zbieranie informacji i kontrolowanie urządzeń,
 * wyzwalanie poleceń na podstawie konfiguracji użytkownika (automatyzacja),
 * dostarczanie i prezentowanie treści (wiadomości, pogoda, audio) na żądanie użytkownika.

Technicznie nasza platforma zawiera 4 główne komponenty systemowe, pierwsze trzy z nich są zainstalowane na bramce:

 * **System Android ze środowiskiem Linux**: minimalny system podstawowy oraz dodatkowe pakiety dostępne za pomocą menedżera pakietów APT z naszego repozytorium pakietów [Ais Linux](https://github.com/sviete/AIS-LINUX-PACKAGES).
 * **Platforma automatyki**: zmodyfikowana i uzupełniona (o dodatkowe usługi, automatyczne wykrywanie urządzeń i inne ulepszenia) platfroma [Home Assistant](https://github.com/sviete/AIS-home-assistant)
 * **Aplikacje dodatkowe**: nasze aplikacje dostępne w [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom)
 * **Usługi online**: w serwisie online mamy zdefiniowane stacje radiowe, podcasty, kanały wiadomości oraz dostępy do usług zewnętrznych wymagających autentykacji.


 ### Cena

Aktualna cena urządzeń jest dostępna [na naszej aukcji](https://allegro.pl/uzytkownik/AI-Speaker).
