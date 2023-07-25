---
title: "Logi dostępne na bramce"
sidebar_label: Logi dostępne na bramce
---

## Wprowadzenie

W przypadku problemów z działaniem urządzenia, problemów z aktualizacją czy też problemów z własnymi integracjami/komponentami, zalecamy sprawdzenie logów w celu diagnozy problemu.
Logi dostępne są z konsoli, [do konsoli łączymy się po SSH](/docs/ais_bramka_remote_ssh). Poniżej opiszemy jak sprawdzić logi poszczególnych komponentów systemu.

## Logi procesów Asystenta domowego.

Procesami na bramce steruje <a href="http://pm2.keymetrics.io/" target="_blank">Menedżer procesów PM2</a>. PM2 odpowiedzialny jest za zarządzanie stanami głównych aplikacji, to PM2 uruchamia procesy po starcie systemu, a następnie czuwa nad ich ciągłym działaniem.

Żeby zobaczyć status procesów w konsoli wpisujemy:
```bash
pm2 status
```

![PM2](/img/en/bramka/pm2_console.png)

### Wyświetlanie logów na bieżąco

W celu wyświetlenia na bieżąco 15 ostatnich lini logów wszystkich procesów, wystarczy wpisać w konsoli:
```bash
pm2 logs
```

![PM2](/img/en/bramka/pm2_console_logs.png)


W celu wyświetlenia na bieżąco 20 ostatnich lini logów serwera MQTT, wystarczy wpisać w konsoli:
```bash
pm2 logs mqtt --lines 20
```

### Pliki z logami

Pliki logów procesów znajdziemy w lokalizacji **/data/data/com.termux/files/home/.pm2/logs/**

![PM2](/img/en/bramka/pm2_console_logs_files.png)

Interesujący nas plik możemy skopiować do lokalizacji **/sdcard** a następnie pobrać klientem FTP:

Kopiowanie plików w konsoli:
```bash
mkdir /sdcard/logs
cp /data/data/com.termux/files/home/.pm2/logs/* /sdcard/logs
```
Połączenie FTP do bramki:
[do konsoli łączymy się po FTP](/docs/ais_bramka_remote_ftp)


## Logi aktualizacji systemu

Logi aktualizacji [dostępne są w aplikacji webowej](/docs/ais_bramka_update_logs)

Możliwy jest też dostęp do nich z konsoli, znajdują się w lokalizacji **/data/data/com.termux/files/home/AIS/www**
w pliku **upgrade_log.txt**.
Zawartość tego pliku możemy wyświetlić standardowymi metodami dostępnymi w systemie Linux, np. za pomocą komendy **cat**:

```bash
cat /data/data/com.termux/files/home/AIS/www/upgrade_log.txt
```

Możemy też na bieżąco kontrolować postęp aktualizacji komendą **tail -f**:

```bash
tail -f /data/data/com.termux/files/home/AIS/www/upgrade_log.txt
```

## Logi systemu Android

Za pomocą polecenia **logcat** możemy na bieżąco wyświetlać logi systemu Android

```bash
logcat
```

![Logcat](/img/en/bramka/console_logcat.png)

## Logi jądra Linux

Komendą **dmesg** możemy wyświetlać logi jądra Linux

```bash
dmesg
```
![dmesg](/img/en/bramka/console_dmesg.png)

## Procesy systemu Linux

Procesy systemu Linux możemy wyświetlać komendą **htop**

```bash
htop
```
![dmesg](/img/en/bramka/console_htop.png)
