---
title: "Zaawansowana konfiguracja Asystenta domowego"
sidebar_label: configuration.yaml
---

## Plik konfiguracyjny configuration.yaml

Dążymy do tego, żeby wszystkie podstawowe ustawienia i popularne integracje były dostępne z interfejsu użytkownika.

Obecnie jednak nie wszystko jest jeszcze konfigurowalne za pośrednictwem interfejsu użytkownika i aby dodać integrację z niektórymi urządzeniami, wymagana jest ręczna edycja pliku konfiguracyjnego Asystenta domowego. Plik ten znajduje się na urządzeniu w folderze **/data/data//com.termux/files/home/AIS** i ma nazwę **configuration.yaml**.


Konfiguracja ręczna w pliku pozwala też zaawansowanym użytkownikom na dodawanie własnych dowolnych komponentów.


## Przykładowy czujnik

Poniżej opiszemy krok po kroku, w jaki sposób dodać czujnik wyświetlający temperaturę procesora bramki.
Oczywiście w analogiczny sposób można dodać inne elementy systemu, a następnie użyć ich przy tworzeniu automatyzacji.

### Temperatura procesora w systemie Linux

Znajdujemy komendę, która zwraca temperaturę CPU w systemie Linux (google.com) i testujemy ją w konsoli.

```bash
cat /sys/class/thermal/thermal_zone0/temp
```
![](/img/en/bramka/faq_sensor_1.png)


### Edycja pliku configuration.yaml

W konsoli przechodzimy do folderu z konfiguracją Asystenta domowego.

```bash
cd ~/AIS
```

Ulubionym edytorem tekstowym otwieramy plik configuration.yaml

```bash
nano configuration.yaml
```

i dodajemy na końcu następująca konfigurację.


```bash
sensor:
 - platform: command_line
   name: Temperatura CPU
   unit_of_measurement: "°C"
   command: "cat /sys/class/thermal/thermal_zone0/temp"
   value_template: '{{ value | multiply(0.001) | round(1) }}'
```

![](/img/en/bramka/faq_sensor_2.png)


### Sprawdzenie konfiguracji i Restart serwera

Upewnijmy się, że nasza konfiguracja jest poprawna — w tym celu kliknij przycisk **Sprawdź konfigurację** dostępny w opcjach ogólnych systemu. Następnie restartujemy serwer przyciskiem **Uruchom ponownie**

![](/img/en/bramka/faq_sensor_4.png)


### Nowa encja

W informacji o stanie encji systemu możemy już odszukać nasz nowo dodany element systemu (czujnik) i zobaczyć jego status.

![](/img/en/bramka/faq_sensor_5.png)

### Wyświetlanie w aplikacji

Każdy element możemy pokazać w aplikacji, wystarczy, że na wybranym widoku dodamy i skonfigurujemy kartę z naszym nowym komponentem.

![](/img/en/bramka/faq_sensor_7.png)

![](/img/en/bramka/faq_sensor_6.png)
