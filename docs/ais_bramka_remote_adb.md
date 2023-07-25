---
title: "Dostęp do konsoli bramki po ADB"
sidebar_label: ADB
---

Android Debug Bridge (ADB) to kolejne narzędzie działające w konsoli, które umożliwia komunikację z urządzeniem.

:::tip Wskazówka
Ta metoda komunikacji jest przydatna szczególnie w sytuacji, gdy nie mamy możliwości łączenia się z Asystentem domowym po SSH, bo go np odinstalowaliśmy z bramki.
:::

## Instalacja ADB na komputerze

ADB jest częścią Android SDK, instalacja dla 3 systemów (Windows, Mac, Linux) opisana jest pod tym linkiem:

https://developer.android.com/studio/releases/platform-tools.html


## Włączenie debugowania ADB na bramce

1. Podłącz bramkę do telewizora lub monitora

2. Wyjdź z aplikacji Asystent domowy,
[Wyjście z aplikacji](/docs/ais_bramka_settings#ustawienia-aplikacji-asystent-domowy)

3. Przejdź do ustawień Android
[Ustawienia systemu Android](/docs/ais_bramka_settings#ustawienia-systemu-android)

4. W ustawieniach Android przejdź do **Informacje**

![Ustawienia - Informacje](/img/en/bramka/adb_settings_1.png)

5. Kliknij 5 razy w opcję **Kompilacja** aż pojawi się komunikat, że jesteś już programistą

![Ustawienia - Kompilacja](/img/en/bramka/adb_settings_2.png)

6. Wróć do ustawień (strzałka na pilocie) i wybierz nową opcję **Opcje programistyczne**

![Ustawienia - Opcje programistyczne](/img/en/bramka/adb_settings_3.png)

7. W opcjach programistycznych włącz **Debugowanie USB**

![Ustawienia - Debugowanie USB](/img/en/bramka/adb_settings_4.png)


## Połączenie z bramką w lokalnej sieci

1. Uruchom serwer ADB wpisując w konsoli na swoim komputerze

```bash
$ adb start-server
```

2. Podłącz się do bramki wpisując w konsoli na swoim komputerze

```bash
$ adb connect <ip-bramki-w-lokalnej-sieci>
```

3. Zaakceptuj na bramce połączenie z komputera

![Ustawienia - Kompilacja](/img/en/bramka/adb_settings_5.png)

4. Połącz się z konsolą bramki wpisując w konsoli na swoim komputerze

```bash
$ adb shell
```

> Mając połączenie po ADB możesz instalować aplikacje na bramce, przeglądać logi i wykonywać inne zadania serwisowe


## Przykładowe przydatne operacje serwisowe dostępne z adb

###  Przełączenie na użytkownika root

Połączmy się z bramką po ADB wykonując następujące komendy w naszej konsoli:

```bash
adb connect <ip-bramki-w-lokalnej-sieci>
adb shell
```
to powinno dać następujący efekt:

```bash
p281:/ $
```
**$** oznacza, że jesteśmy zalogowani na konsoli urządzenia jako zwykły użytkownik.
Żeby mieć pełny dostęp przełączmy się na urzytkownika root poleceniem su, efekt powinine być następujący:

```bash
p281:/ $ su
p281:/ #
```

możemy to potwierdzić poleceniem whoami

```bash
p281:/ # whoami
p281:/ root
```

###  Kopia ustawnień aplikacji

Wszystkie ustawienia Asystenta domowego dostępne są w folderze /data/data/pcom.termux/files/home/AIS. Skopiujmy jego zawartość do lokalizacji /sdcard wykonując komendę:

 **cp -r /data/data/com.termux/files/home/AIS /sdcard/AIS**

```bash
p281:/ # cp -r /data/data/com.termux/files/home/AIS /sdcard/AIS
```

###  Pobranie aplikacji android serwera OTA Asystent domowy

Aplikacje dostępne są w naszym serwisie OTA https://www.ai-speaker.com/ota, pobieramy je najpierw na swój kopmuter wklejając w przeglądarce pełny adres aplikacji
https://www.ai-speaker.com/ota/android/AisPanelApp.apk lub przechodząc na stronę https://www.ai-speaker.com/ota/ i wybierając aplikację z tabeli.

Na urządzeniu działa aplikacja serwer i to ją w tym przykładzie pobierzemy i zainstalujemy:

![OTA download](/img/en/bramka/adb_download_apk_from_ota.png)

###  Instalacj aplikacji android z adb

Gdy mamy aplikację pobraną na nasz komputer to możemy ją zainstalować na urządzeniu za pomocą komendy **adb install** a dokładnie w naszym przypadku użyjemy komendy:

```bash
adb install -r -d AisPanelApp.apk
```

Gdzie flaga **-r** oznacza re-instalacje z zachowaniem plików a flaga **-d** to umożliwienie instalacji do starszej wersji (downgrade). Oczywiście AisPanelApp.apk to nazwa pobranej aplikacji i jeżeli wykonujemy komendę z innej lokalizacji niż lokalizacja pobranej aplikacji, to należy podać pełną lokalizację do pliku z aplikacją.


###  Uruchomienie aplikacji android z adb

Żeby uruchomić aplikację na urządzeniu po adb wystarczy wpisać polecenie:

```bash
adb shell am start -n pl.sviete.dom/pl.sviete.dom.WelcomeActivity
```
