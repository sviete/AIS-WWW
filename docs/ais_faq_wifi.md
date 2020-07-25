---
title: "Ustawienia połączenia WiFi"
sidebar_label: Ustawienia WiFi
---


## Konfigurowanie WiFi z Aplikacji webowej

Definicja połączenia WiFi dostępna jest z aplikacji webowej podczas początkowej prostej konfiguracji, przy pierwszym uruchomieniu urządzenia.

[Konfiguracja WiFi podczas pierwdzego uruchomienia urządzenia](/docs/ais_bramka_first_run)

Konfigurację WiFi można też dodać w każdej chwili w konfiguracji Asystenta domowego.
W tym celu, po zalogowaniu się w aplikacji należy:

### Przejść do **Konfiguracji**

![Konfiguracja WiFi](/img/en/bramka/go_to_config.png)


### Wybrać **Integracje**

![Konfiguracja WiFi](/img/en/bramka/go_to_integrations.png)


### W integracjach wybrać **AIS konfiguracja połączenia WiFi**

![Konfiguracja WiFi](/img/en/bramka/go_to_integration_wifi.png)


### Kreator połączenia z WiFi

Należy postępować krok po kroku zgodnie z opisem w kreatorze dodawania połączenia WiFi.

![Konfiguracja WiFi](/img/en/bramka/start_wifi_integration_wizard.png)


## Konfigurowanie WiFi za pomocą zdalnego pilota

Połączenie WiFi można też skonfigurować za pomocą pilota zdalnego.
Jest to przydatna opcja w przypadku braku monitora lub telewizora z wyjściem HDMI oraz dla osób, które mają problemy ze wzrokiem.

Opcja konfiguracji połączenia WiFi dostępna jest z pilota po przejściu w menu do **Ustawienia** -> **Ustawienia sieci** -> **Skanowanie dostępnych sieci WiFi**.

## Konfigurowanie WiFi w Android

Istnieje też możliwość konfiguracji połączenia WiFi z poziomu systemu Android. W tym celu należy wyjść z aplikacji **Asystent domowy**, a następnie uruchomić ustawienia systemu Android. Instrukcja krok po kroku znajduje się w dokumentacji [Przejście do ustawień Android](/docs/ais_bramka_settings)


## Ustawienia WiFi w konsoli Linux

Z poziomu konsoli, ustawienia WiFi możemy wyświetlić za pomocą polecenia

```bash
su -c 'cat /data/misc/wifi/wpa_supplicant.conf'
```

![WiFi settings in console](/img/en/bramka/wifi_settings_in_console.png)
