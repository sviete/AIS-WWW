---
title: "Zwavejs2MQTT"
sidebar_label: Zwavejs
---

## Wprowadzenie


Integracja Zwavejs w Asystencie domowym daje możliwość łatwego korzystania z urządzeń Zwave bez potrzeby stosowania bramek producentów. Rozwiązanie oparte jest na projekcie [Zwavejs2Mqtt](https://github.com/zwave-js/zwavejs2mqtt). I jest całkowicie zintegrowane z naszym oprogramowaniem, dzięki czemu możesz łatwo dodać swoje urządzenia Zwave do całej infrastruktury inteligentnego domu działającej na systemie Asystent domowy.

![Zwave](/img/en/frontend/zwave_control_panel_dark.png)

## Integracja

Integracja sprowadza się do włożenia do portu USB adaptera Zwave (testowane na Aeotec Z-Stick). Asystent domowy sam rozpozna to urządzenie USB, poinformuje głosowo, że uruchamia serwis zwave i automatycznie w konfiguracji pojawi się możliwość dodawania urządzeń zwave.

## Obsługiwane urządzenia

Obsługujemy to, co obsługuje Zwavejs2Mqtt, wg informacji na [stronie projektu Zwavejs2Mqtt](https://zwave-js.github.io/zwavejs2mqtt/#/). 


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


### Dostęp lokalny

Aplikacja Zwavejs2MQTT działa na porcie **8091** w lokalnej sieciu można połączyć się z ją bezpośrednio, wpisując w przeglądarce ``http://<ip-bramki>:8091``

![Zwavejs2MQTT](/img/en/frontend/app_zwavejs2mqtt.png)

### Dostęp zdalny

Umożliwiamy też na zdalny dostęp do aplikacji webowej Zwavejs2MQTT. Dostęp ten jest możliwy tylko po zalogowaniu do Asystenta domowego i jest realizowany z pomocą naszego dodatku ais_proxy - mechnizmu typu [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)

> TODO
