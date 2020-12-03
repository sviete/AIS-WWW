---
title: "Broker MQTT"
sidebar_label: Broker MQTT
---

## Wprowadzenie


Na bramce dostarczamy wbudowany broker MQTT oraz usługę zapewniającą jego działanie "z pudełka" po starcie bramki.

MQTT (MQ Telemetry Transport), to protokół łączności maszyna-maszyna lub „Internet rzeczy” będący uzupełnieniem protokołu TCP/IP. Pozwala na niezwykle lekki transport komunikatów publikowania/subskrypcji.
Urządzenia z naszym oprograwmowaniem komunikują się z bramką w sieci lokalnej za pomocą MQTT. Dzięki czemu są automatycznie wykrywane przez bramkę bez potrzeby konfiguracyji po stronie użytkownika.


![WEB console](/img/en/bramka/mqtt_broker.png)


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

Broker, który dostarczamy na bramce to [mosquitto](https://mosquitto.org/), jego konfiguracja znajduje się w standardowym pliku **mosquitto.conf** w lokalizacji
``/data/data/pl.sviete.dom/files/usr/etc/mosquitto/mosquitto.conf``

![MQTT broker](/img/en/bramka/mqtt_config.png)


### Binarka

Naszą kompilację mosquitto udostępniamy w naszym repozytorium pakietów binarnych [libmosquitto](https://bintray.com/sviete/ais/libmosquitto)

![MQTT broker](/img/en/bramka/libmosquitto_binary.png)


### Dostęp tylko lokalny

Broker MQTT pozowala na dostęp bez uwierzytelniania. Dlatego dostęp do brokera MQTT na bramce możliwy jest tylko z sieci lokalnej.
