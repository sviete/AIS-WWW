---
title: "Broker MQTT działający na bramce"
sidebar_label: MQTT
---

Asystent domowy ma wbudowany broker MQTT.
Używamy najbardziej popularny obecnie broker [Mosquitto](https://mosquitto.org/), który na bramce działa jako proces nadzorowany przez menedżera procesów [PM2](http://pm2.keymetrics.io/).
Mosquitto obsługuje wszystkie wersje protokołu MQTT (unormowane przez OASIS i ratyfikowane przez ISO) w tym najnowszą wersję. [Protokół MQTT](https://pl.wikipedia.org/wiki/MQTT) idealnie sprawdza się przy połączeniach maszyna-maszyna, w internecie rzeczy (IoT), w urządzeniach mobilnych, oraz tam, gdzie wymagana jest oszczędność przepustowości, oraz energii dlatego zostało on wybrany jako podstawowy protokół do komunikacji urządzeń z naszą bramką IoT.


## Adres brokera MQTT

Broker MQTT działa na standardowym porcie 1883 (zarezerwowany w [IANA](https://www.iana.org/)). Ponieważ działamy w lokalnej sieci nie wymagamy autentykacji urządzeń.


## Wykrywanie urządzenia MQTT w systemie Asystent domowy

Bramka po uruchomieniu publikuje do urządzeń (zapisanych w brokerze MQTT do grupy **dom**) komendę dom/cmnd/**SetOption19** 1 która oznacza, że chcemy by urządzenie było automatycznie wykrywane przez Asystenta domowego.

Następnie dochodzi do dodania urządzenia do systemu wg następujących trzech kroków.

![komunikacja MQTT](/img/en/bramka/gate_mqtt_1.png)


### Wysłanie komunikatu konfiguracja

Urządzenie publikuje wiadomość o temacie **homeassistant/#** do brokera MQTT, treścią wiadomości jest komunikat z opisaniem konfiguracji urządzenia

```json
{  
   "name":"Gniazdo",
   "command_topic":"cmnd/dom_4BA155/POWER",
   "state_topic":"stat/dom_4BA155/RESULT",
   "payload_off":"OFF",
   "payload_on":"ON"
}
```


![komunikacja MQTT](/img/en/bramka/gate_mqtt_2.png)



### Odebranie komunikatu konfiguracja

System Asystent domowy subskrybuje temat **homeassistant/#** i otrzymuje z brokera MQTT wiadomość przesłaną przez urządzenie

![komunikacja MQTT](/img/en/bramka/gate_mqtt_3.png)


### Dodanie urządzenia do systemu Asystent domowy

System Asystent domowy dodaje urządzenia do panelu aplikacji po otrzymaniu wiadomości konfiguracyjnej

![komunikacja MQTT](/img/en/bramka/gate_mqtt_4.png)


## Komunikacja bramki z urządzeniem

Komunikacja bramki z urządzeniem polega na wysyłaniu odpowiednich wiadomości na odpowiednie kanały subskrybowane przez urządzenie i bramkę.

![komunikacja MQTT](/img/en/bramka/gate_mqtt_5.png)


### Subskrybcja tematów przez urządzenie

Urządzenie subskrybuje 3 tematy:

```yaml
  cmnd/dom_%06X/#
  cmnd/DOM_%06X/#
  cmnd/dom/#
```

![komunikacja MQTT](/img/en/bramka/gate_mqtt_7.png)

### Subskrybcja tematów przez Asystenta domowego

System Asystent domowy subskrybuje temat **stat/dom_%06X/+**

![komunikacja MQTT](/img/en/bramka/gate_mqtt_8.png)


## Komunikacja Asystenta z urządzeniem

Komunikacja z urządzeniem przebiega wg następującego schematu:

![komunikacja MQTT](/img/en/bramka/gate_mqtt_9.png)

### Publikacja komendy z bramki do urządzenia

![komunikacja MQTT](/img/en/bramka/gate_mqtt_10.png)

### Otrzymanie komendy ma urządzeniu

![komunikacja MQTT](/img/en/bramka/gate_mqtt_11.png)

### Potwierdzenie wykonania

Urządzenie po wykonaniu komendy publikuje wiadomość o swoim statusie.

![komunikacja MQTT](/img/en/bramka/gate_mqtt_12.png)

### Zmiana stanu urządzenia w systemie Asystent domowy

System otrzymuje wiadomość o statusie z urządzenia i zmienia jego stan co natychmiast ma odzwierciedlenie w aplikacji:

![komunikacja MQTT](/img/en/bramka/gate_mqtt_13.png)
