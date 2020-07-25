---
author: Celina AI-Speaker
authorURL: https://github.com/sviete
authorFBID: 1186570423
title: Wersja systemu 0.95.7  Wykrywanie obecności, mapa, automatyzacje i optymalizacja
---

## Wersja systemu 0.95.7 z dnia 18 lipca 2019 roku,

### Wykrywanie obecności

Wykrywanie obecności ma na celu ustalenie, czy i kto jest w domu (lub innej zdefiniowanej strefie), co jest bardzo cennym źródłem automatyzacji. Wiedza o tym, kto jest w domu lub gdzie jest, pozwala nam na całą gamę opcji automatyzacji, przykładowe użycie:

- Wyślij mi powiadomienie, gdy moje dziecko dotrze do szkoły
- Włącz klimatyzację w domu, kiedy wychodzę z pracy
- Otwórz bramę i włącz na 30 minut oświetlenie zewnętrzne, jeżeli jest noc i moje auto pojawia się w strefie przed bramą wjazdową


![Wykrywanie obecności](/img/en/bramka/presence_detection_14.png)


<!--truncate-->

### Przewodnik podstaw automatyzacji

Asystent domowy oferuje szeroki zakres konfiguracji automatyzacji.
Zanim zaczniesz tworzyć własne przydatne automatyzacje w swoim domu, ważne jest, aby zrozumieć podstawy.
W przewodniku postaramy się poprowadzić Cię "krok po kroku" przez podstawowe możliwości i opcje podczas tworzenia prostej reguły automatyzacji, która włącza oświetlenie, gdy zachodzi słońce.


![Wykrywanie obecności](/img/en/bramka/automation8.png)


### Optymalizacja kodu

Wprowadziliśmy optymalizacje w kodzie, dotyczy to aktywności pokazującej postęp rozpoznawania mowy (RecognitionProgressView). Po tej optymalizacji odnotowaliśmy spory spadek obciążenia procesora na urządzeniu oraz związany z tym spadek temperatury procesora - dokładnie widać to na poniższym wykresie. W nowym dziale FAQ opisaliśmy jak dodać nowy czujnik do systemu właśnie na przykładzie czujnika temperatury CPU.

![Temperatura CPU](/img/en/blog/cpu_temp_after_optimalization.png)


### Ekran podczas sterowania pilotem

Podczas gdy sterujemy pilotem (bez aplikacji), na urządzeniu wyświetlamy ekran pokazujący postępy rozpoznawania komendy głosowej (co zrozumiał asystent) oraz to co asystent zrobił/odpowiedział. Ekran ten jest widoczny gdy podłączysz bramkę do monitora lub TV za pomocą HDMI i sterujesz pilotem. Na tym ekranie pokazujemy aktualny adres aplikacji na bramce oraz typ połączenia jaki aktualnie ma bramka (WiFi lub Ethernet).
Od wersji 0.95.6 na tym ekranie wyświetlamy też aktualną datę i godzinę. Poniżej zdjęcie projektu tego ekranu.

![Ekan w tle](/img/en/bramka/ais_dom_splash_screen.png)

### Literowanie

Chcemy, żeby nasz produkt był łatwy w obsłudze również dla osób mających problemy ze wzrokiem oraz dla osób starszych. Kolejnym udogodnieniem w tym temacie jest funkcjonalność literowania - np. asystentka może przeliterować unikalny identyfikator urządzenia.
Ta opcja dostępna jest z pilota - po wybraniu pozycji identyfikatora urządzenia możemy wcisnąć przycisk "OK" by przeliterować nasz identyfikator.
Możemy też kazać przeliterować asystentce status dowolnego elementu systemu - wystarczy powiedzieć "Przeliteruj " i dodać nazwę elementu, np.:

```text
Przeliteruj unikalny identyfikator bramki
```

W dokumentacji opisane są wszystkie [wbudowane komendy, które rozumie Asystent domowy](/docs/ais_app_assistent_commands)


### Pozostałe istotne zmiany

- Muzyka intro podczas uruchomienia urządzenia i komunikat głosowy informujący o uruchamianiu systemu, optymalizacja w trzech głównych aktywnościach aplikacji.
- Stronicowanie wyników wyszukiwania z YouTube. Informacja o całkowitej liczbie wyników dla zapytania/wyszukiwania na YouTube (ograniczone do 1 000 000 - maksymalny limit na YouTube). Stronicowanie wyników - 10 na stronę, możliwość nawigowania po stronach wyszukania - przechodzenie pilotem i/lub w aplikacji do poprzedniej i kolejnej strony
- Poprawione skanowanie sieci w poszukiwaniu urządzeń. Rozpoznawanie urządzeń po adresie MAC.
- Najnowszy Home Assistant <a href="https://www.home-assistant.io/blog/2019/06/26/release-95/" target="_blank">0.95</a>
