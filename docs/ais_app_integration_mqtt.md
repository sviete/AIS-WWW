---
title: "Broker MQTT"
sidebar_label: Broker MQTT
---

## Wprowadzenie

Na bramce dostarczamy wbudowany broker MQTT oraz usługę zapewniającą jego działanie "z pudełka" po starcie bramki.

MQTT (MQ Telemetry Transport), to protokół łączności maszyna-maszyna lub „Internet rzeczy” będący uzupełnieniem protokołu TCP/IP. Pozwala na niezwykle lekki transport komunikatów publikowania/subskrypcji.
Urządzenia z naszym oprograwmowaniem komunikują się z bramką w sieci lokalnej za pomocą MQTT. Dzięki czemu są automatycznie wykrywane przez bramkę bez potrzeby konfiguracji po stronie użytkownika.

![WEB console](/img/en/bramka/mqtt_broker.png)

## Połączenie z brokerem MQTT z systemu Asystent domowy

Aplikacja Asystent domowy (serwer) działająca na bramce łączy się domyślnie z brokerem MQTT działającym również na bramce.
Integracja z brokerem MQTT polega na podaniu lokalnego adresu IP brokera/bramki w konfiguratorze:

![Dodanie usług](/img/en/bramka/mqtt_integration_1.png)


![Dodanie usług](/img/en/bramka/mqtt_integration_2.png)

Zaawansowani użytkownicy mogą w razie potrzeby połączyć aplikację Asystent domowy z dowolnym innym brokerem MQTT.

-----------------------------------------------------
## Informacje techniczne

### Proces mqtt

Procesami na bramce steruje [Menedżer procesów PM2](http://pm2.keymetrics.io/).
PM2 odpowiedzialny jest też za uruchomienie brokera MQTT po starcie systemu, a następnie czuwa nad jego ciągłym działaniem.

Żeby zobaczyć status procesu mqtt w konsoli wpisujemy:

```
pm2 show mqtt
```

![MQTT broker](/img/en/bramka/pm2_mqtt.png)

### Konfiguracja brokera mqtt

:::caution Uwaga
**Uwaga!** W przypadku podstawowej konfiguracji ustawienia domyślne są dobre i nie trzeba nic zmieniać.
Potrzeba zmiany konfiguracji brokera MQTT może dotyczyć tylko programistów i technicznie zaawansowanych użytkowników, którzy np. chcą dodać połączenie mostkowe, autentykację itp.
W przypadku wystąpienia problemów po zmianie konfiguracji brokeram Mqtt zalecamy [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step)
:::


Broker, który dostarczamy na bramce, to [mosquitto](https://mosquitto.org/). Jego konfiguracja znajduje się w standardowym pliku **mosquitto.conf** w lokalizacji
``/data/data/com.termux/files/usr/etc/mosquitto/mosquitto.conf``

![MQTT](/img/en/integrations/mqtt_edit_mosquito_config.png)

Edycja pliku konfiguracji brokera MQTT możliwa jest z aplikacji.  W tym celu wystarczy w konfiguracji integracji MQTT w prawym górnym rogu wybrać opcję **Edit mosquitto.conf**

![Integracja SUPLA](/img/en/frontend/integration_supla_6.png)

W ten sposób możemy łatwo dodawać np. mostkowe połączenia z innymi brokerami MQTT.

### Standardowe ustawienia

Fabrycznie mamy takie ustawiania brokera MQTT działającego na bramce:

``` text
# AIS Config file for mosquitto on gate
listener 1883 0.0.0.0
allow_anonymous true

```

Po dodaniu integracji SUPLA MQTT ustawienia są automatycznie zmieniane na takie:

``` text
# AIS Config file for mosquitto on gate
listener 1883 0.0.0.0
allow_anonymous true

# SUPLA MQTT bridge connection
connection bridge-dom-unikalny-identyfilator-bramki*
address host-i-port-od-supla*
topic supla/# in
topic homeassistant/# in
topic supla/+/devices/+/channels/+/execute_action out
topic supla/+/devices/+/channels/+/set/+ out
remote_username nazwa-użytkownika-z-supla*
remote_password hasło-z-supla*
bridge_cafile /data/data/pl.sviete.dom/files/usr/etc/tls/cert.pem

```


### Dostęp tylko lokalny

Broker MQTT pozwala na dostęp bez uwierzytelniania. Dlatego dostęp do brokera MQTT na bramce możliwy jest tylko z sieci lokalnej.
