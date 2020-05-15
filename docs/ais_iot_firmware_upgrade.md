---
title: Aktualizacja oprogramowania urządzeń automatyki domowej
sidebar_label: Aktualizacja oprogramowania
---

:::tip Wskazówka
Obecnie aktualizacja wymaga wgrania nowego oprogramowania do urządzenia z przeglądarki internetowej.
:::

![OTA AIS dom](/img/en/iot/iot_device_menu_1.png)

## Aktualizacja krok po kroku

### Pobranie plików

Pliki ze skompilowaną nową wersją oprogramowania dla urządzeń dostępne są w naszym serwisie pod adresem [OTA](https://www.ai-speaker.com/ota/)
Pobierz najnowsze wersje 2 plików:

- [Minimal](https://powiedz.co/ota)
- [Gniazdo](https://powiedz.co/ota)

![OTA AIS dom](/img/en/iot/iot_ais_dom_device_rf433_firmware.png)


### Ustalenie adresu IP urządzenia

W systemie Asystent domowy przejdź do grupy "Menu" -> "Ustawienia" -> "Integracje", domyślny adres:

http://ais-dom.local:8180/config/integrations/dashboard

a następnie przejdź do konfiguracji urządzeń "MQTT" by sprawdzić status urządzenia w tym jego adres IP


![Urządzenia w Twojej sieci](/img/en/iot/iot_device_discovery.png)



### Menu urządzenia

Znając IP urządzenia, wpisz go w przeglądarce internetowej, by przejść do strony urządzenia. W głównym menu urządzenia wybierz opcję "Aktualizacja oprogramowania"

![Główne menu urządzenia](/img/en/iot/iot_device_menu.png)



### Pierwszy plik

Wybierz plik **s26_minimal_v6.5.2.bin** i naciśnij "Start aktualizacji"

![Pierwszy plik](/img/en/iot/iot_device_menu_upgrade_1.png)


Odczekaj, aż pojawi się informacja o powodzeniu aktualizacji

![Pierwszy plik](/img/en/iot/iot_device_menu_upgrade_2.png)


Odśwież menu urządzenia i przejdź do wgrywania kolejnego pliku

### Drugi plik

Wybierz plik **s26_firmware_v6.5.2.bin** i naciśnij "Start upgrade"

![Drugi plik](/img/en/iot/iot_device_menu_upgrade_3.png)


Odczekaj, aż pojawi się informacja o powodzeniu aktualizacji.
Następnie urządzenie się zrestartuje i powróci do głównego menu, z głównego menu przejdź do konsoli urządzenia


![Przejście do konsoli](/img/en/iot/iot_device_menu_upgrade_5.png)



### Konsola
:::tip Wskazówka
Żeby zacząć pracę z całkowicie nowymi ustawieniami w konsoli urządzenia, wykonaj polecenie **Reset 5** dzięki temu będziemy mieli pewność, że urządzenie będzie korzystało tylko z nowych ustawień.
:::

:::important informacja
Uwaga to polecenie wykasuje wszystkie poprzednie ustawienia (poza konfiguracją WiFi), jeśli urządzenie komunikowało się z systemem automatyki domowej, to może być konieczne nowe parowanie/konfiguracja.
:::

![Reset 5](/img/en/iot/iot_device_menu_upgrade_6.png)
