---
title: Konfiguracja komunikacji MQTT
sidebar_label: Konfiguracja komunikacji MQTT
---

## Wprowadzenie


MQTT to zalecany protokół do sterowania urządzeniami AIS dom. Jeśli nie masz wiedzy na temat protokołu MQTT, możesz dowiedzieć się więcej z darmowego kursu i serii artykułów o [MQTT dla początkujących](https://www.hivemq.com/mqtt-essentials/). Gdy już masz podstawową wiedzę oraz posiadasz działający broker MQTT możesz przejść dalej i skonfigurować urządzenia do działania z Twoim brokerem.


## Skonfiguruj MQTT za pomocą interfejsu w aplikacji na urządzeniu

Gdy już podłączyłeś urządzenie do swojej sieci WiFi i znasz jego adres IP (kroki opisane w [Obsługa urządzenia z przeglądarki](/docs/ais_iot_browser)), to w dowolnej przeglądarce możesz przejść do aplikacji na urządzeniu, dzięki której w łatwy sposób możesz wykonać konfigurację urządzenia AIS dom ze swoim brokerem MQTT.

![MQTT aktywacja](/img/en/iot/iot_web_app.png)


Przejdź do **Konfiguracja** -> **Konfiguruj inne** i upewnij się, że pole **„Włącz MQTT”** jest zaznaczone.
(Możesz też od razu zmienić przyjazną nazwę na coś bardziej opisowego np. "Światło w kuchni" czy "Podlewanie trawnika")

![MQTT aktywacja](/img/en/iot/mqtt_active.png)


Po włączeniu MQTT należy skonfigurować połączenie z brokerem MQTT za pomocą opcji **Konfiguracja** -> **Skonfiguruj MQTT**


![MQTT konfiguracja](/img/en/iot/iot_mqtt_config.png)

W przypadku podstawowej konfiguracji wystarczy ustawić hosta (ip twojego brokera MQTT), użytkownika i hasło, zaleca się też sprawdzenie i jeśli to konieczne, zmianę tematu. **Każde urządzenie powinno mieć unikalny Temat.**
