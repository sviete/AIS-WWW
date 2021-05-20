---
title: "ZwaveJs2Mqtt"
sidebar_label: ZwaveJs2Mqtt
---

## Wprowadzenie


Integracja Zwavejs w Asystencie domowym daje możliwość korzystania z urządzeń Zwave bez potrzeby stosowania bramek producentów. Rozwiązanie oparte jest na projekcie [ZwaveJs2Mqtt](https://github.com/zwave-js/zwavejs2mqtt). Dzięki czemu możesz dodać swoje urządzenia Zwave do całej infrastruktury inteligentnego domu działającej na systemie Asystent domowy.

![Zwave](/img/en/frontend/zwave_control_panel_dark.png)

## Integracja Zwave

:::caution Uwaga
**Integracja jest w trakcie rozwoju i testowania**

W obecnej wersji integracja wymaga instalacji ręcznej kodów projektu ZwaveJs2Mqtt.
Cała procedura opisana jest na forum AI-Speaker: [ZWave na bramce AIS - Zwavejs2Mqtt](https://ai-speaker.discourse.group/t/zwave-na-bramce-ais-zwavejs2mqtt/1769)

:::

Integracja testowana jest z popularnym na rynku adapterem Aeotec Z-Stick który komunikuje się za pomocą USB CDC (Communication Device Class).

![Zwave](/img/en/frontend/zwave_adapter.jpeg)


Integracja może też działać z adapterami, które nie obsługują USB CDC, za pomocą zdalnego połączenia tcp socket, obsługiwanego przez ZwaveJs2Mqtt:
```
 tcp://dongle.lan:5000
```


## Obsługiwane urządzenia

Obsługujemy to, co obsługuje Zwavejs2Mqtt, więcej informacji na [stronie projektu ZwaveJs2Mqtt](https://zwave-js.github.io/zwavejs2mqtt/#/). 


### Mapa sieci

Możemy odświeżyć stronę z mapą sieci Zwave, by zobaczyć urządzenia podłączone do bramki

![Zigbee integracja](/img/en/frontend/zwave_mesh_diagram.png)



-----------------------------------------------------
## Informacje techniczne

### Proces zwave

Procesami na bramce steruje [Menedżer procesów PM2](http://pm2.keymetrics.io/).
PM2 odpowiedzialny jest też za uruchomienie procesu zwave po wykryciu urządzenia adapter Zwave Aeotec Z-Stick, a następnie czuwa nad jego ciągłym działaniem.

Żeby zobaczyć status procesu zigbee w konsoli wpisujemy:

```
pm2 show zwave
```

![zwave](/img/en/frontend/pm2_zwave.png)


### Dostęp do aplikacji w sieci lokalnej

Aplikacja Zwavejs2MQTT działa na porcie **8091** w lokalnej sieciu można połączyć się z ją bezpośrednio, wpisując w przeglądarce ``http://<ip-bramki>:8091``

![Zwavejs2MQTT](/img/en/frontend/app_zwavejs2mqtt.png)


### Dostęp do konfiguracja

Cała konfiguracja ZwaveJs2Mqtt możliwa jest z aplikacji webowej.
Obecnie nie wspieramy jeszcze przesyłania plików konfiguracji Zwave do serwisu AIS i jej kopiowania pomiędzy bramkami.
Kopię plików konfiguracji (zawartość folderu ``~/zwavejs2mqtt/store``) można wykonać z konsoli lub z aplikacji ZwaveJs2Mqtt. 

![Zwavejs2MQTT](/img/en/frontend/zwave_configuration.png)