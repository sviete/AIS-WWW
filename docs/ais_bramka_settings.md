---
title: "Ustawienia systemu"
sidebar_label: Ustawienia systemu
---

## Ustawienia systemu Android

W celu przejścia do ustawień systemu Android wystarczy z menu `Sterowania na monitorze` wybrać pozycję Android:


![Ustawienia Android](/img/en/bramka/settings_1.png)



![Ustawienia](/img/en/bramka/settings_2.png)


## Konsola aplikacji "Asystent domowy"

W celu przejścia do ustawień systemu Android wystarczy z menu `Sterowania na monitorze` wybrać pozycję Konsola:
W konsoli dostępne jest środowisko Linux, zawierające minimalny system podstawowy wraz z interpreterem języka Python, Node.js oraz Clang

![Ustawienia](/img/en/bramka/settings_6.png)



Dodatkowe pakiety dostępne za pomocą menedżera pakietów APT z naszego repozytorium pakietów Ais Linux.

![Ustawienia](/img/en/bramka/settings_3.png)


Procesami na bramce steruje menedżer procesów PM2.
PM2 odpowiedzialny jest za zarządzanie stanem serwisów w systemie "Asystent domowy", to PM2 uruchamia procesy po starcie systemu a następnie czuwa nad ich ciągłym działaniem.

Żeby sprawdzić logi usług systemu "Asystent domowy", w konsoli bramki wykonaj komendę:

```bash
$ pm2 logs
```

Użytkownik domyślny ma uprawnienia tylko do folderu /data/data/com.termux/files, w którym to folderze znajdują się pakiety systemu Linux, oraz do podfolderu data/data/com.termux/files/home/AIS, gdzie znajduje się konfiguracja systemu "Asystent domowy".

:::caution Uwaga
W wersjach developerskich bramek dostępny jest też użytkownik **root** który ma dostęp do całego systemu.
:::
