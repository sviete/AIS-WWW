---
title: "Konfiguracja bramki - Logi i baza danych"
sidebar_label: Logi i baza danych
---


W tej sekcji możesz skonfigurować zapis logów do pliku na wymiennym dysku oraz skonfigurować zapis zdarzeń do bazy danych.

## Zapis logów systemu do pliku

Żeby włączyć logowanie w systemie Asystent domowy, wystarczy wybrać lokalizację na dysku wymiennym, w której będzie zapisywany plik z rejestrem działań w systemie. Dodatkowo można też określić poziom szczegółowości logowania.


![Konfiguracja zapisu logów](/img/en/bramka/bramka_ais_dom_config_logs.png)

## Zapis zdarzeń do bazy danych

W tej sekcji możemy wybrać silnik bazodanowy, do rejestracji zdarzeń.

Najprostszy wybór to baza SQLite, która nie wymaga konfiguracji i może rejestrować dane w pamięci - taka baza jest automatycznie używana, gdy rejestracja zdarzeń włączana jest przez integrację (np. Historia lub Dziennik).

Gdy system generuje więcej zdarzeń lub gdy chcesz mieć dostęp do historii, to zalecamy zapisywać zdarzenia na zewnętrznym dysku lub w zdalnej bazie danych.

![Konfiguracja zapisu zdarzeń](/img/en/bramka/bramka_ais_dom_config_db.png)


 Żeby utrzymać system w dobrej kondycji, codziennie dokładnie o godzinie 4:12 rano Asystent usuwa z bazy zdarzenia i stany starsze niż określona liczba dni (2 dni dla bazy w pamięci urządzenia i domyślnie 10 dla innych lokalizacji).  W tym miejscu możesz określić liczbę dni, których historia ma być przechowywana w zdalnej bazie danych.

 ![Konfiguracja usuwania zdarzeń z bazy](/img/en/bramka/bramka_ais_dom_config_db2.png)
