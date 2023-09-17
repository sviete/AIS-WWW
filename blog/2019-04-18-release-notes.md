---
author: Celina AI-Speaker
authorURL: https://github.com/sviete
authorFBID: 1186570423
title: Wersja systemu 0.91.4  Wikipedia, kamery i łatwe dodawnie urządzeń
---

## Wersja systemu 0.91.4 z dnia 18 kwietnia 2019 roku,

### Informacje z Wikipedii

**Asystent domowy** udzielając odpowiedzi na pytania typu "kto to jest... ", "kim jest... ", "znajdź informację o..." korzysta z zasobów bazy wiedzy "Google Knowledge Graph". Korzystanie z tego typu bazy wiedzy ma na celu selekcję możliwie najistotniejszych treści i udzielenia krótkiej odpowiedzi na pytanie.
Źródłem informacji do Google Knowledge Graph jest głównie Wikipedia. Wraz z bieżącą aktualizacją dodajemy możliwość wyszukania i odsłuchania całego artykułu z Wikipedii.

Nowa komenda w sekcji **Wyszukiwanie informacji**: [Komendy głosowe Wikipedia](/docs/ais_app_assistent_commands#wyszukiwanie-informacji)
Na początek obsługujemy jedną komendę głosową: "Wikipedia + szukana_fraza", szukana_fraza - może być dowolną nazwą.

![Konfiguracja interfejsu użytkownika](/img/en/frontend/wikipedia_1.png)

<!--truncate-->

### Obraz wideo z kamer

Dzięki komponentowi [live stream z Home Assistant](https://www.home-assistant.io/components/generic/#live-stream) mamy możliwość podglądu obrazu wideo z kamer IP.
Otwiera to szereg możliwości takich jak:
- automatyczne przesyłanie obrazu z kamery umieszczonej na drzwiach wejściowych, na telewizor z chromecast, po tym gdy ktoś zadzwoni
- możliwość zainstalowania kamery w pokoju dziecka i użycia swojej bramki jako elektronicznej niani
- wykrywanie ruchu i analiza obiektów na zdjęciach w celu opisania tego co/kto znajduje się na kamerze i wykonania stosownej akcji - np. komunikat głosowy “Dzień dobry panie listonoszu, proszę zostawić list w skrzynce :)”

Tematem tym planujemy zająć się szerzej, niebawem opiszemy krok po kroku zastosowanie kamer w systemie.

![Kamery](/img/en/frontend/stream_cams.jpeg)


### Łatwe dodawanie urządzeń

W celu łatwiejszego dołączania urządzeń do systemu dodaliśmy kreator, który krok po kroku prowadzi przez proces dodawania nowych urządzeń.

![Kreator dodawania urządzeń](/img/en/frontend/add_device.png)
