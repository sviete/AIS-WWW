---
title: "Zwave"
sidebar_label: Zwave
---

## Wprowadzenie


Integracja Zwavejs w Asystencie domowym daje możliwość korzystania z urządzeń Zwave bez potrzeby stosowania bramek producentów. Rozwiązanie oparte jest na projekcie [ZwaveJs2Mqtt](https://github.com/zwave-js/zwavejs2mqtt). Dzięki czemu możesz dodać swoje urządzenia Zwave do całej infrastruktury inteligentnego domu działającej na systemie Asystent domowy.


### <span class="mdi mdi-professional-hexagon"></span> Bramka PRO 

Na bramce AIS PRO <span class="mdi mdi-professional-hexagon"></span> integracja Zwavejs jest zainstalowana i skonfigurowana domyślnie.

![Zwave](/img/en/frontend/zwave_control_panel_dark.png)


### <span class="mdi mdi-dev-to"></span> Bramka DEV

W przypadku bramek DEV integracja Zwave wymaga instalacji ręcznej.
Cała procedura opisana jest na forum AI-Speaker: [ZWave na bramce AIS - Zwavejs2Mqtt](https://ai-speaker.discourse.group/t/zwave-na-bramce-ais-zwavejs2mqtt/1769)

![Zwave](/img/en/frontend/zwave_dev_integration.png)



## Integracja Zwave

Integracja testowana jest z popularnym na rynku adapterem Aeotec Z-Stick, który komunikuje się za pomocą USB CDC (Communication Device Class).

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
PM2 odpowiedzialny jest też za uruchomienie procesu zwave po wykryciu urządzenia (adaptera Zwave Aeotec Z-Stick), a następnie czuwa nad jego ciągłym działaniem.

Żeby zobaczyć status procesu zigbee w konsoli wpisujemy:

```
pm2 show zwave
```

![zwave](/img/en/frontend/pm2_zwave.png)


### Dostęp do aplikacji w sieci lokalnej

Aplikacja Zwavejs2MQTT działa na porcie **8091** w lokalnej sieci, można połączyć się z nią bezpośrednio wpisując w przeglądarce ``http://<ip-bramki>:8091``

![Zwavejs2MQTT](/img/en/frontend/app_zwavejs2mqtt.png)


### Dostęp do konfiguracji

Cała konfiguracja ZwaveJs2Mqtt możliwa jest z aplikacji webowej.
Obecnie nie wspieramy jeszcze przesyłania plików konfiguracji Zwave do serwisu AIS i jej kopiowania pomiędzy bramkami.
Kopię plików konfiguracji (zawartość folderu ``~/zwavejs2mqtt/store``) można wykonać z konsoli lub z aplikacji ZwaveJs2Mqtt. 

![Zwavejs2MQTT](/img/en/frontend/zwave_configuration.png)
