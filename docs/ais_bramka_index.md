---
title: "Bramka AIoT"
sidebar_label: Opis produktu
---

## Bramka z inteligentnym asystentem głosowym

Celem bramki do Internetu Rzeczy z inteligentnym asystentem głosowym jest komunikacja i zarządzanie inteligentnymi urządzeniami. **Bramka "tłumaczy" polecenia głosowe na komendy, które są zrozumiałe przez urządzenia** oraz automatycznie wykonuje czynności (np. włączenie urządzeń) w określonych okolicznościach.

### Zdjęcie produktu

![AIS dom DEV2](/img/en/bramka/ais_dev3_in_box.jpg)

### Specyfikacja techniczna

Sprzętowo nasza konstrukcja oparta jest na wydajnym układzie Amlogic SoC S905X3, posiada wbudowane WiFi oraz dysk, a także porty LAN/Ethernet, 2 x USB, SPDIF, Aux, HDMI.

| MODEL                 | AIS DEV3                                                |
|-----------------------|---------------------------------------------------------|
| oprogramowanie        | Asystent domowy, środowisko Linux, Android (root)       |
| procesor              | Amlogic S905X3 Quad-Core 4xCortex-A55                   |
| pamięć                | 4G DDR3                                                 |
| wbudowany dysk        | 128 GB eMMC                                             |
| Gniazdo karty pamięci | TF card max. 64GB (karty nie ma w zestawie)             |
| USB                   | 2 (1x OTG, 1x USB 3.0)                                  |
| HDMI                  | 2.0A                                                    |
| AV                    | 3,5mm jack                                              |
| SPDIF                 | Optical SPDIF                                           |
| Ethernet RJ45         | 10/100/1000* Mbps                                                 |
| WiFi                  | 2.4 GHz / 5 GHz 802.11 a/b/g/n                          |
| Bluetooth             | 4.1                                                     |
| Wyświetlacz VFD       | Pokazuje aktualną godzinę                               |
| Zasilanie             | Wejście 100-240V / 50-60Hz, wyjście 2A / 5V             |
| Pilot                 | Pilot radiowy 2.4 GHz z mikrofonem, dongle              |
| Dodatkowo w zestawie  | Kabel HDMI, zasilacz 5V 2A, wbudowany tag NFC           |
| Do kupienia osobno    | Inteligentne urządzenia                                 |
| Uwagi                 | *Ethernet 1000 Mbps dodano wersji DEV3, <br/>dostępnej w sprzedaży po 20 kwietnia 2021 |


### Oprogramowanie

Oprogramowanie obsługuje najbardziej popularne urządzenia smart home i **działa lokalnie w Twoim domu - nie gromadzi danych w chmurze**.

W naszym rozwiązaniu bramka jest odpowiedzialna za kontrolę nad urządzeniami oraz dostarczanie treści.
Bramka umożliwia zarządzanie urządzeniami i sensorami oraz pełni rolę mostu między Internetem Rzeczy a Twoją siecią domową. Urządzenie jest „tłumaczem” protokołów IoT i przekazuje komunikację sieciową do aplikacji w celu prezentacji stanu urządzeń oraz dostarczeniu kontroli dla użytkownika.

Główne zadania realizowane przez zainstalowane na bramce oprogramowanie to:

 * tłumaczenie poleceń głosowych na komendy, które są zrozumiałe przez urządzenia,
 * zbieranie informacji i kontrolowanie urządzeń,
 * wyzwalanie poleceń na podstawie konfiguracji użytkownika (automatyzacja),
 * dostarczanie i prezentowanie treści (wiadomości, pogoda, audio) na żądanie użytkownika.

Technicznie nasza platforma zawiera 4 główne komponenty systemowe, pierwsze trzy z nich są zainstalowane na bramce:

 * **System Android ze środowiskiem Linux**: minimalny system podstawowy oraz dodatkowe pakiety dostępne za pomocą menedżera pakietów APT z naszego repozytorium pakietów [Ais Linux](https://github.com/sviete/AIS-LINUX-PACKAGES).
 * **Platforma automatyki**: platfroma AIS-dom  bazująca na [Home Assistant](https://powiedz.co/apt/)
 * **Aplikacje dodatkowe**: nasze aplikacje dostępne w [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom)
 * **Usługi online**: w serwisie online mamy zdefiniowane stacje radiowe, podcasty, kanały wiadomości oraz dostępy do usług zewnętrznych wymagających uwierzytelnienia.


 ## Dostępność i cena

:::info SPRZEDAŻ INTELIGENTNYCH URZĄDZEŃ
Prowadzimy sprzedaż inteligentnych urządzeń z naszym oprogramowaniem pod linią produktową AIS dom.
Są to urządzenia, które spełniają wszystkie cechy, by były przez nas rekomendowane do zastosowania w Twoim domu.

Aktualna cena urządzeń jest dostępna:

- u naszego oficjalnego dystrybutora [botland.com.pl](https://botland.com.pl/pl/227_prd_ai-speaker)

[<img src="/img/en/icons/botland.png" alt="drawing" width="200"/>](https://botland.com.pl/pl/227_prd_ai-speaker)

- na naszych aukcjach na platformie [allegro.pl](https://allegro.pl/uzytkownik/AI-Speaker)

[<img src="/img/en/icons/allegro.png" alt="drawing" width="200"/>](https://allegro.pl/uzytkownik/AI-Speaker)
:::
