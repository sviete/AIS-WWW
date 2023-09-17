---
title: Wbudowane komendy
sidebar_label: Wbudowane komendy
---


Asystent domowy posiada wbudowany komponent konwersacji, który obsługuje polecenia głosowe.
Dzieje się to za pomocą konwertowania zarejestrowanych sentencji/zdań na intencje. W zdaniach mogą występować zmienne "umieszczone w cudzysłowiu" oraz opcjonalne słowa [umieszczone w nawiasach kwadratowych]. Takie zdania przetwarzane są przez system z uwzględnieniem kontekstu wcześniejszych działań, w celu jak najlepszego określenia intencji użytkownika i wykonania powiązanej z nią czynności.

Domyślnie asystent obsługuje:

## Sterowanie urządzeniami

* **Włączanie i wyłączanie urządzeń**:

Możesz powiedzieć "włącz oświetlenie w kuchni", "wyłącz światło w salonie", "włącz lampy zewnętrzne", "wyłącz podlewanie trawnika" lub "włącz wentylator poziom dwa". W ten sposób możesz sterować oświetleniem i przełącznikami.

```text
'Włącz "szukana-fraza"'; 'Zapal światło w "szukana-fraza"'
'Wyłącz "szukana-fraza"'; 'Zgaś Światło w "szukana-fraza"'
```

* **Przełączanie urządzeń**:

Możesz powiedzieć "przełącz wentylator" itd. żeby przełączyć urządzenie z włączone na wyłączone lub odwrotnie. Jest to szczególnie przydatne, gdy sterujesz urządzeniem za pomocą komendy w tagu NFC - w ten sposób możesz jedną komendą "przełącz" zapisaną w tagu wykonywać dwie akcje "włącz" i "wyłącz".

```text
'Przełącz "szukana-fraza"'
```

* **Otwieranie i zamykanie**

Możesz powiedzieć "otwórz bramę w garażu", "odsłoń rolety w salonie" lub "zasłoń wszystkie rolety". W ten sposób możesz sterować roletami i bramami.

```text
'Otwórz "szukana-fraza"'; 'Odsłoń "szukana-fraza"'
'Zamknij "szukana-fraza"'; 'Zasłoń "szukana-fraza"'
```

## Odtwarzanie audio

* **Włączanie stacji radiowych**

Wystarczy, że powiesz "Włącz RMF", "Graj radio Zet" lub po prostu "Radio trójka"

```text
'Włącz [radio] "szukana-fraza"'; 'Graj "szukana-fraza" radio'
```

* **Słuchanie podcastów**

Żeby pobrać najnowsze odcinki podcasta i włączyć ostatni z nich, wystarczy powiedzieć "Podcast Niebezpiecznik" lub "Włącz podcast jak oszczędzać pieniądze"

```text
'Podcast "szukana-fraza"'; 'Włącz [podcast] "szukana-fraza"'
```

* **Słuchanie muzyki z YouTube**

Żeby wyszukać na YouTube interesującą Cię muzykę i ją odtwarzać, wystarczy powiedzieć "Muzyka Maria Peszek" lub "YouTube Brodka"

```text
Włącz [z] [na] YouTube "szukana-fraza"'; 'YouTube "szukana-fraza"'
```

## Sterowanie odtwarzaczem

* **Pauza**

Komendy: "Stop", "Zatrzymaj", "Koniec", "Pauza", "Zaniechaj", "Stój"

```text
Stop
```

* **Wznowienie odtwarzania**
Komendy: "Start", "Graj", "Odtwarzaj"

```text
Graj
```

* **Następny**
Komendy: "[włącz] następny", "[włącz] kolejny", "[graj] następny", "[graj] kolejny"

```text
Następny
```

* **Poprzedni**
Komendy: "[włącz] poprzedni", "[włącz] wcześniejszy", "[graj] poprzedni", "[graj] wcześniejszy"

```text
Poprzedni
```

## Status czujników

Możesz też zapytać Asystenta o status każdego elementu systemu

* **Sprawdzanie wartości czujników**

Wystarczy, że zapytasz "Jaka jest temperatura w salonie" lub "Jaka jest wilgotność w łazience", możesz też pytać o czujniki zewnętrzne raportujące dane z serwisów, np. "jaki jest poziom UV" czy "jaka jest pozycja słońca"

```text
'[Jaki] [ma] status "szukana-fraza"'
```

* **Sprawdzanie wartości innych dowolnych elementów systemu**

Zapytaj "jaki jest adres IP" by otrzymać informację o IP urządzenia, lub "jaki jest status światła w kuchni" by dowiedzieć się, czy światło jest włączone, lub "jaki jest głos" by otrzymać informację o ustawionym głosie asystenta

```text
'Jaki jest "szukana-fraza"'; 'Jaka jest "szukana-fraza"''
```


## Wyszukiwanie informacji

Zapytaj "Co to jest ONZ" lub "Kto to jest Andrzej Wajda", by otrzymać zwięzłą informację z bazy wiedzy

```text
'Wyszukaj "szukana-fraza"'; 'Znajdź informację o "szukana-fraza"'
```

Powiedz "Wikipedia Wielkanoc" lub "Wikipedia Polska" by otrzymać pełny artykuł z Wikipedii

```text
'Wikipedia "szukana-fraza"'
```

## Godzina i data

Tu oczywiście działają komendy typu "Która godzina" i "Jaki jest dzisiaj dzień"

```text
'Godzina'; '[jaka] [jest] data'
```

## Aktywowanie sceny

Zdefiniowaną scenę można aktywować komendą "Scena romantyczna" lub "Aktywuj scenę oglądanie filmu"

```text
'Scena "szukana-fraza"'; 'Aktywuj [scenę] "szukana-fraza"'
```

## Sterowanie ogrzewaniem

* **Ustawianie temperatury ogrzewania**

Powiedz "Ogrzewanie kuchnia 21 stopni[e]"

```text
'Ogrzewanie [w] "pomieszczenie" "stopni" stopni[e]'
```

* **Zmiana trybu ogrzewania**

Powiedz "Ogrzewanie tryb poza domem" lub Powiedz "Ogrzewanie tryb w domu"

```text
'Ogrzewanie tryb "nazwa trybu"'
```

Inne możliwe tryby (pod warunkiem, że obsługuje je Twoja konfiguracja ogrzewania) to:
- "eco" - eko, oszczędzanie, oszczędny
- "boost" - podgrzanie, podgrzewanie
- "comfort" - komfort, wygoda
- "sleep" - spanie, noc
- "activity" - aktywność, ruch

* **Wyłączenie ogrzewania**

```text
Wyłącz całe ogrzewnie
```

* **Włączenie ogrzewania**

```text
Włącz całe ogrzewnie
```

## Rozgłaszanie tekstu

Żeby asystentka powiedziała przez głośnik np. "Obiad gotowy", wystarczy jej powiedzieć "Powiedz obiad gotowy"
(docelowo będziemy jeszcze wskazywali na jaki odtwarzacz/głośnik ma być przesyłany tekst)

```text
Powiedz "szukana-fraza"'; 'Mów "szukana-fraza"'; 'Echo "szukana-fraza"
```


## Spotify

Żeby asystentka wyszukała na Spotify i odtworzyła utwory Dawida Podsiadło, wystarczy powiedzieć: "Spotify Dawid Podsiadło"
W podobny sposób możemy szukać albumu lub listy utworów.
```text
Spotify "wykonawca/album/playlista"
```

## Literowanie

Możemy kazać przeliterować asystentce status dowolnego elementu systemu. Wystarczy powiedzieć "Przeliteruj " i dodać nazwę elementu:

```text
Przeliteruj "nazwa elementu"
```

## Uruchamianie automatyzacji


Możemy uruchomić dowolną zdefiniowaną w systemie automatyzację za pomocą komendy:

```text
Jolka "nazwa automatyzacji"
```

lub

```text
Uruchom "nazwa automatyzacji"
```

lub

```text
Automatyzacja "nazwa automatyzacji"
```

Możemy też dodać do nazwy automatyzacji prefiks "Jolka: ", dzięki temu Asystent zrozumie, że nazwa po prefiksie to komenda i po jej wypowiedzeniu uruchomi automatyzację.
Czyli jeżeli nazwiemy automatyzację "Jolka: podlej trawnik", to wystarczy, że uruchomimy w systemie komendę "Podlej trawnik" żeby wykonać automatyzację o nzawie **"Jolka: podlej trawnik"**.
Więcej informacji na stronie [Komenda w automatyzacji](/docs/ais_app_assistent_add_command/#komenda-w-automatyzacji).

## Google  Home


Możemy dodać [integrację z Google Home](/docs/ais_app_ai_integration_google_home) i przesyłać komendy głosowe do Google:

```text
Google "komenda/polecenie"
```

## Sprawdzenie lokalizacji osoby

Możemy sprawdzić lokalizację osoby za pomocą komendy:

```text
Gdzie jest "osoba"
```
lub

```text
Lokalizacja "osoba"
```
