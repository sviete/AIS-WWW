---
title: Usunięcie urządzenia z bramki
sidebar_label: Usunięcie urządzenia z bramki
---


Jeśli chcesz usunąć swoje urządzenie AIS dom z bramki AIS to należy to zrobić w 2 krokach opisanych poniżej.

## 1. Odłączenie urządzenia z sieci

Urządzenia AIS dom są automatycznie wykrywane przez bramkę (za pomocą mechanizmu [MQTT discovery](https://www.home-assistant.io/docs/mqtt/discovery/)) dlatego przed usunięciem urządzenia z aplikacji usuń je fizycznie z sieci WiFi lub wyłącz z prądu. W ten sposób będziesz miał pewność, że urządzenie nie opublikuje swojej aktualizacji do Asystenta domowego i tym samy nie pojawi się ponownie w aplikacji Asystent domowy.


## 2. Usunięcia urządzenia z systemu Asystent domowy

W aplikacji Asystent domowy przejdź do [Konfiguracja Urządzeń AIS dom](ais_iot_gate#dostęp-do-urządzeń-ais-dom-z-aplikacji), następnie w tabeli urządzeń kliknij urządzenie, które chcesz usunąć, aby przejść do widoku [Konfiguracji urządzenia](ais_iot_gate#konfiguracja-urządzenia). Aby usunąć urządzenie, kliknij ikonkę po prawej stronie na górze, a następnie potwierdź operację usuwania.

![Usunięcie urządzenia z bramki](/img/en/frontend/remove_ais_dom_device.png)
