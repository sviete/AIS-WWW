---
author: Andrzej Raczkowski
authorURL: https://github.com/sviete
authorFBID: 1546384510
title: Wersja systemu 0.83.7  
---

## Wersja systemu 0.83.7  z dnia 10 grudnia 2018 roku,

w tej wersji dodano:
- komenda graj/odtwarzaj [Komendy](/docs/ais_app_assistent_commands)
- najnowszy Home Assistant <a href="https://www.home-assistant.io/blog/2018/11/29/release-83/" target="_blank">0.83</a> w którym dodano między innymi integrację z centralką Fibaro <a href="https://www.home-assistant.io/components/fibaro/" target="_blank">Fibaro hub</a>, komponenty:
  * Fibaro Binary Sensor https://www.home-assistant.io/components/binary_sensor.fibaro/
  * Fibaro covers https://www.home-assistant.io/components/cover.fibaro/
  * Fibaro Lights https://www.home-assistant.io/components/light.fibaro/
  * Fibaro sensors https://www.home-assistant.io/components/sensor.fibaro/
  * Fibaro switches https://www.home-assistant.io/components/switch.fibaro/


> **Uwaga w tej wersji wyłączono serwis Node-RED**, jest to spowodowane zmianami <a href="https://developers.home-assistant.io/docs/auth_api.html#long-lived-access-token" target="_blank"> w dostępie do API Home Assistant</a> , konieczność podpisywania wywołań API tokenem.


 Żeby ponownie włączyć Node-RED jako proces wystarczy w konsoli wpisać:


```bash
$ pm2 start node-red --name nred --node-args="--max-old-space-size=128"
```
i jeśli chcemy żeby Node-RED był uruchamiany autmatycznie po starcie bramki:

```bash
$ pm2 save
```
