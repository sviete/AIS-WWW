---
title: "Konfiguracja bramki - Logi i baza danych"
sidebar_label: Logi i baza danych
---


W tej sekcji możesz skonfigurować zapis logów do pliku na wymiennym dysku oraz skonfigurować zapis zdarzeń do bazy danych.


## Zapis zdarzeń do bazy danych

W tej sekcji możemy wybrać silnik bazodanowy do rejestracji zdarzeń.

Najprostszy wybór to baza SQLite, która nie wymaga konfiguracji i może rejestrować dane w pamięci - taka baza jest automatycznie używana, gdy włączysz **Historię** lub **Dziennik**.


:::caution Uwaga
Gdy Twój system generuje więcej zdarzeń lub gdy chcesz mieć dostęp do historii po restarcie urządzenia, to zalecamy zapisywać zdarzenia na zewnętrznym dysku lub w zdalnej bazie danych.
:::


![Konfiguracja zapisu zdarzeń](/img/en/bramka/bramka_ais_dom_config_db.png)

### Konfiguracja połączeń z bazami zdalnymi


Połączenia z bazami danych wymagają doinstalowania sterowników, nie instalujemy ich domyślnie wszystkich, żeby nie zajmować miejsca na urządzeniu.
Poniżej pokazujemy jak je łatwo doinstalować w narzędziach developerskich. Sprowadza się to do 3 kroków:
1. Przejście w menu do "Narzędzia developerskie"
2. Wybranie zakładki "KONSOLA"
3. Wpisanie w konsoli polecenia/poleceń (poniżej), które spowodują instalację sterowników.

![Konfiguracja zapisu zdarzeń](/img/en/bramka/bramka_ais_dom_config_db_mariadb.png)

1. MariaDB

Tu potrzebne jest doinstalowanie pakietu Pythona, robimy to za pomocą komendy:

``` bash
pip install pymysql
```


2. MySQL

Instalujemy najpierw binarkę a następnie pakiet Pythona:

``` bash
apt install mariadb
pip install mysqlclient
```

3. PostgreSQL

Instalujemy najpierw binarkę a następnie pakiet Pythona:

``` bash
apt install postgresql
pip install psycopg2
```

### Automatyczne czyszczenie historii

Żeby utrzymać system w dobrej kondycji, codziennie dokładnie o godzinie 5:15 rano Asystent usuwa z bazy zdarzenia i stany starsze niż określona liczba dni (2 dni dla bazy w pamięci urządzenia i domyślnie 10 dla innych lokalizacji).  W tym miejscu możesz określić liczbę dni, których historia ma być przechowywana w zdalnej bazie danych.

![Konfiguracja usuwania zdarzeń z bazy](/img/en/bramka/bramka_ais_dom_config_db2.png)


## Zapis logów systemu do pliku

Żeby włączyć logowanie w systemie Asystent domowy, wystarczy wybrać lokalizację na dysku wymiennym, w której będzie zapisywany plik z rejestrem działań w systemie. Dodatkowo można też określić poziom szczegółowości logowania.


![Konfiguracja zapisu logów](/img/en/bramka/bramka_ais_dom_config_logs.png)