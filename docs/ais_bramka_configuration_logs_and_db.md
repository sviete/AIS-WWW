---
title: "Konfiguracja bramki - Logi i baza danych"
sidebar_label: Logi i baza danych
---

W tej sekcji możesz skonfigurować zapis logów do pliku na wymiennym dysku oraz skonfigurować zapis zdarzeń do bazy danych.


## Zapis zdarzeń do bazy danych

W tej sekcji możemy wybrać silnik bazodanowy do rejestracji zdarzeń.

### <span class="mdi mdi-professional-hexagon"></span> Bramka PRO 

Na bramce AIS PRO <span class="mdi mdi-professional-hexagon"></span> domyślnie skonfigurowany jest zapis do lokalnej (zainstalowanej i działającej na bramce PRO) bazy MariaDB/MySQL.

![Konfiguracja zapisu zdarzeń](/img/en/bramka/ais_pro_db.png)


### <span class="mdi mdi-dev-to"></span> Bramka DEV

W przypadku bramek DEV użytkownik sam wybiera bazę, do której chce zapisywać zdarzenia i którą chce administrować.
Najprostszy wybór to baza SQLite, która nie wymaga konfiguracji i może rejestrować dane w pamięci - taka baza jest automatycznie używana na bramkach DEV, gdy włączysz **Historię** lub **Dziennik**.
Bramka DEV nie ma fabrycznie zainstalowanej relacyjnej bazy danych, ale można ją zainstalować samemu- pokazujemy na forum jak to zrobić krok po kroku dla: [MariaDB/MySQL](https://ai-speaker.discourse.group/t/mariadb-mysql/1830) lub  [PostgreSQL](https://ai-speaker.discourse.group/t/relacyjna-baza-danych-postgresql/1014)

![Konfiguracja zapisu zdarzeń](/img/en/bramka/ais_dev_db.png)


### Filtrowanie zapisu zdarzeń

Niektóre integracje potrafią rejestrować z bardzo dużą częstotliwością i generować ogromne ilości danych, dlatego wymagamy zdefiniowania filtra zapisu do bazy.
Filtr pozwala na określenie, co ma być zapisywane w bazie (parametr **include**) oraz czego nie chcemy zapisywać (parametr **exclude**).
Używamy nazewnictwa zgodnego z Home Assistant. W standardowej konfiguracji dostarczamy przykładową konfigurację filtra, w którym są zdefiniowane wszystkie możliwe atrybuty.

Poniżej wyjaśniamy, co one oznaczają:

![Konfiguracja zapisu zdarzeń](/img/en/bramka/ais_db_filter.png)


1. **domains** - lista domen, które chcemy rejestrować w bazie.
2. **entity_globs** - lista obiektów pasujących do podanego wzorca (np. sensor.weather_*), które chcemy rejestrować w bazie.
3. **entities** - lista identyfikatorów encji, które chcemy rejestrować w bazie.
------------
4. **domains** - lista domen, których nie chcemy rejestrować w bazie.
5. **entity_globs** -lista obiektów pasujących do podanego wzorca (np. sensor.weather_*), których nie chcemy rejestrować w bazie.
6. **entities** - lista identyfikatorów encji, których nie chcemy rejestrować w bazie.
7. **event_types** - lista typów zdarzeń, których nie chcemy rejestrować w bazie.




### Zdalne bazy - konfiguracja

:::caution Uwaga
Gdy chcesz zapisywać więcej zdarzeń lub/i mieć dostęp do historii z wielu dni, to zalecamy zapisywać zdarzenia w zdalnej bazie danych.
:::


![Konfiguracja zapisu zdarzeń](/img/en/bramka/bramka_ais_dom_config_db_mariadb.png)

#### Konfiguracja połączeń z bazami zdalnymi


Połączenia z bazami danych wymagają doinstalowania sterowników, nie instalujemy domyślnie wszystkich, żeby nie zajmować miejsca na urządzeniu.
Poniżej pokazujemy jak je łatwo doinstalować w narzędziach developerskich. Sprowadza się to do 3 kroków:
1. Przejście w menu do "Narzędzia developerskie"
2. Wybranie zakładki "KONSOLA"
3. Wpisanie w konsoli polecenia/poleceń (poniżej), które spowodują instalację sterowników.


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
