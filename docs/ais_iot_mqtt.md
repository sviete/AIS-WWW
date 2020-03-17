---
title: Komunikacja za pomocą protokołu MQTT
sidebar_label: Komunikacja za pomocą protokołu MQTT
---

## Wprowadzenie

:::tip
Jeśli jesteś posiadaczem **bramki IoT AIS dom** i chcesz podłączyć do niej **urządzenie AIS dom**, to możesz pominąć ten opis i przejść do **[`Obsługa urządzenia z bramki AIS dom`](/docs/en/next/ais_iot_gate.html) gdzie opisaliśmy jak dodać urządzenie za pomocą prostego kreatora.** Na bramce IoT AIS dom dostępny jest działający i skonfigurowany broker MQTT, urządzenia AIS dom są automatycznie rozpoznawane przez bramkę AIS dom, dzięki czemu proces konfiguracji jest bardzo prosty i nie wymaga wpisywania żadnych parametrów.
:::


MQTT to zalecany protokół do sterowania urządzeniami AIS dom. Jeśli nie masz wiedzy na temat protokołu MQTT, możesz dowiedzieć się więcej z darmowego kursu i serii artykułów o [MQTT dla początkujących](https://www.hivemq.com/mqtt-essentials/). Gdy już masz podstawową wiedzę oraz posiadasz działający broker MQTT możesz przejść dalej i skonfigurować urządzenia do działania z Twoim brokerem.


## Skonfiguruj MQTT za pomocą interfejsu w aplikacji na urządzeniu

Gdy już podłączyłeś urządzenie do swojej sieci WiFi i znasz jego adres IP (kroki opisane w [Obsługa urządzenia z przeglądarki](/docs/en/next/ais_iot_browser.html)), to w dowolnej przeglądarce możesz przejść do aplikacji na urządzeniu, dzięki której w łatwy sposób możesz wykonać konfigurację urządzenia AIS dom ze swoim brokerem MQTT.

![MQTT aktywacja](/img/en/iot/iot_web_app.png)


Przejdź do **Konfiguracja** -> **Konfiguruj inne** i upewnij się, że pole **„Włącz MQTT”** jest zaznaczone.
(Możesz też od razu zmienić przyjazną nazwę na coś bardziej opisowego np. "Światło w kuchni" czy "Podlewanie trawnika")

![MQTT aktywacja](/img/en/iot/mqtt_active.png)


Po włączeniu MQTT należy skonfigurować połączenie z brokerem MQTT za pomocą opcji **Konfiguracja** -> **Skonfiguruj MQTT**


![MQTT konfiguracja](/img/en/iot/iot_mqtt_config.png)

W przypadku podstawowej konfiguracji wystarczy ustawić hosta (ip twojego brokera MQTT), użytkownika i hasło, zaleca się też sprawdzenie i jeśli to konieczne, zmianę tematu. **Każde urządzenie powinno mieć unikalny Temat.**
