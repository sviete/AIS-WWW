---
title: "Zigbee2MQTT"
sidebar_label: Zigbee
---

## Wprowadzenie


Integracja Zigbee w Asystencie domowym daje możliwość łatwego korzystania z urządzeń Zigbee bez potrzeby stosowania bramek producentów. Rozwiązanie oparte jest na projekcie [Zigbee2MQTT](https://www.zigbee2mqtt.io/). I jest całkowicie zintegrowane z naszym oprogramowaniem, dzięki czemu możesz łatwo dodać swoje urządzenia Zigbee do całej infrastruktury inteligentnego domu działającej na systemie Asystent domowy.


> Zigbee2MQTT jest zainstalowane "fabrycznie" na bramkach sprzedawanych z systemem od wersji 0.103.8 W tych bramkach wystarczy włożyć urządzenie CC2531 do portu USB i automatycznie pojawi się nowe menu w aplikacji. Jeżeli kupiłeś bramkę z wcześniejszą wersją systemu i chcesz używać Zigbee na bramce to wystarczy, że doinstalujesz tę funkcjonalność wg [opisu poniżej](/docs/en/next/ais_app_integration_zigbee.html#instalacja-zigbee2mqtt).

## Integracja

Integracja sprowadza się do włożenia do portu USB  [odpowiednio zaprogramowanego urządzenia CC2531](https://www.zigbee2mqtt.io/getting_started/flashing_the_cc2531.html). Asystent domowy sam rozpozna to urządzenie USB, poinformuje głosowo, że uruchamia serwis Zigbee i automatycznie pojawi się nowa opcja w aplikacji.

## Obsługiwane urządzenia

Obsługujemy to, co obsługuje Zigbee2MQTT, wg informacji na stronie projektu Zigbee2MQTT -> [obecnie obsługiwanych jest 496 urządzeń od 99 różnych dostawców](https://www.zigbee2mqtt.io/information/supported_devices.html). Jest to stan na dzień 10 stycznia 2020, projekt rozwija się bardzo intensywnie i nowe urządzenia są stale dodawane.

## Dodanie nowego urządzenia Zigbee

### Zezwalanie urządzeniom na dołączenie

Aby zapewnić bezpieczeństwo sieci Zigbee i uniknąć przypadkowego dołączenia innych urządzeń Zigbee, domyślnie w konfiugracji mamy ustawiony parametr **enable_join: false**.

Przed rozpoczęciem parowania nowego urządzenia należy włączyć w aplikacji możliwość czasowego parowania z bramką. W przeciwnym razie nowe urządzenia nie będą mogły dołączyć do sieci!
Możliwość czasowego parowania z bramką włączamy w aplikacji w menu **Zigbee** -> **Zigbee Tryb Parowania** lub pilotem radiowym przechodząc w menu do **Mój dom** -> **Automatyzacje** -> **Zigbee tryb parowania**.
Po włączeniu trybu parowania mamy 2 minuty na dodanie nowego urządzenia.

![Zigbee integracja](/img/en/bramka/zigbee_integration_enable_join.png)

### Parowanie

Najpierw sprawdź na stronie Zigbee2MQTT w obsługiwanych urządzeniach [instrukcję dotyczącą parowania urządzenia](https://www.zigbee2mqtt.io/information/supported_devices.html) po wybraniu modelu urządzenia.

![Zigbee integracja](/img/en/bramka/zigbee_integration_pair.png)

![Zigbee integracja](/img/en/bramka/zigbee_integration_pair2.png)

Jeśli nie są dostępne żadne instrukcje, urządzenie można prawdopodobnie sparować przywracając ustawienia fabryczne

### Mapa siseci

Po sparowaniu urządzenia możemy odświeżyć kartę z mapą sieci Zigbee, by zobaczyć nasze nowe urządzenie podłączone do bramki

![Zigbee integracja](/img/en/bramka/zigbee_integration_pair_device_map.png)


### Zmiana nazwy urządzenia na mapie

![Zigbee integracja](/img/en/bramka/zigbee_integration_change_name.png)


### Urządzenia

Nasze nowe urządzenie autmatycznie dostępne jest w urządzeniach

![Zigbee integracja](/img/en/bramka/zigbee_integration_new_device.png)

Po wybraniu urządzenia możemy zobaczyć jego szczegóły i przejść do dodania automatyzacji

![Zigbee integracja](/img/en/bramka/zigbee_integration_new_device_info.png)


Oczywiście nowe encje możemy umieszczać na karcie i wykorzystywać w automatyzacjach, przykłady gotowych rozwiązań zostaną dodane [na forum](https://ai-speaker.discourse.group/).


## Instalacja Zigbee2MQTT


> **Ten opis dotyczy tylko bramek zakupionych z wersją systemu wcześniejszą niż 0.103**
> Od wersji 0.103.8 Zigbee2MQTT jest zainstalowane "fabrycznie" na bramkach i nie trzeba nic doinstalowywać.

Są dwie opcje, żeby samemu dodać Zigbee2MQTT do bramki:

### Instalacja przez wykonanie pełnego resetu aplikacji

Przed wykonaniem pełnego resetu, jeżeli zależy nam na naszych wcześniejszych ustawieniach, można wykonać [Kopię zapasową konfiguracji](/docs/en/ais_bramka_configuration_software.html#kopia-zapasowa-konfiguracji).

Opis procedury [Pełny reset aplikacji](/docs/en/ais_bramka_reset_ais_step_by_step.html).

Po wykonaniu pełnego resetu gdy asystent się uruchomi i nas powita, to można [przywrócić ustawienia](/docs/en/ais_bramka_configuration_software.html#kopia-zapasowa-konfiguracji).

Zanim zacznie działać rozpoznawanie urządzeń USB należy jeszcze zrestartować urządzenie. Można to zrobić komendą w konsoli:

```bash
su -c "reboot now"
```

lub z menu aplikacji: **Konfiguracja** -> **Konfiguracja bramki AIS dom** -> **Zatrzymanie bramki** -> **URUCHOM PONOWNIE**

lub za pomocą pilota: **Pomoc** -> **System** -> **Restart bramki**

Teraz wystarczy włożyć urządzenie CC2531 do portu USB i automatycznie pojawi się nowe menu w aplikacji, a Asystent domowy poinformuje głosowo, że uruchomił usługę Zigbee.


### Instalacja skryptem

1. zaloguj się do konsoli bramki [SSH](/docs/en/next/ais_bramka_remote_ssh.html#dostęp-do-konsoli-z-klienta-ssh)

```bash
ssh <ip_bramki_w_sieci_lokalnej>
```

2. wykonaj następującą komendę

```bash
curl https://raw.githubusercontent.com/sviete/AIS-utils/master/patches/add_zigbee.sh | bash
```

w wyniku otrzymamy tego typu log:

```bash
Welcome to AI-Speaker!

WWW:            https://ai-speaker.com
Support:        info@sviete.pl
Source:         https://github.com/sviete
[Połaczenie SSH]
$ curl https://raw.githubusercontent.com/sviete/AIS-utils/master/patches/add_zigbee.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1351  100  1351    0     0   2408      0 --:--:-- --:--:-- --:--:--  2412
-----------------------------
2020 Jan 10 11:00
----ADD ZIGBEE START ----
-----------------------------
1. replace bash profile
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1645  100  1645    0     0   2921      0 --:--:-- --:--:-- --:--:--  2916
2. install python2
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following NEW packages will be installed:
  python2
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 4774 kB of archives.
After this operation, 17.7 MB of additional disk space will be used.
Get:1 https://powiedz.co/apt dom/stable arm python2 arm 2.7.16-4 [4774 kB]
Fetched 4774 kB in 2s (2387 kB/s)  
Selecting previously unselected package python2.
(Reading database ... 20653 files and directories currently installed.)
Preparing to unpack .../python2_2.7.16-4_arm.deb ...
Unpacking python2 (2.7.16-4) ...
Setting up python2 (2.7.16-4) ...
Setting up pip2...
Looking in links: /data/data/pl.sviete.dom/files/usr/tmp/tmpy72GDx
Collecting setuptools
Collecting pip
Installing collected packages: setuptools, pip
Successfully installed pip-18.1 setuptools-40.6.2
3. download zigbee.zip
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 49.0M  100 49.0M    0     0   236k      0  0:03:32  0:03:32 --:--:--  236k
4. unzip zigbee2mqtt

7-Zip [32] 16.02 : Copyright (c) 1999-2016 Igor Pavlov : 2016-05-21
p7zip Version 16.02 (locale=utf8,Utf16=on,HugeFiles=off,32 bits,4 CPUs LE)

Scanning the drive for archives:
1 file, 51456623 bytes (50 MiB)               

Extracting archive: /data/data/pl.sviete.dom/files/home/zigbee.zip
--             
Path = /data/data/pl.sviete.dom/files/home/zigbee.zip
Type = zip
Physical Size = 51456623

Everything is Ok                                                               

Folders: 3904
Files: 30125
Size:       178163369
Compressed: 51456623
5. remove zigbee.zip
-----------------------------
2020 Jan 10 11:04
----ALL OK END----
-----------------------------
```

Teraz wystarczy zrestartować urządzenie.

Można to zrobić komendą w konsoli:

```bash
su -c "reboot now"
```

lub z menu aplikacji: **Konfiguracja** -> **Konfiguracja bramki AIS dom** -> **Zatrzymanie bramki** -> **URUCHOM PONOWNIE**

lub za pomocą pilota: **Pomoc** -> **System** -> **Restart bramki**


Po ponownym uruchomieniu, wystarczy włożyć urządzenie CC2531 do portu USB i automatycznie pojawi się nowe menu w aplikacji, a Asystent domowy poinformuje głosowo, że uruchomił usługę Zigbee.
