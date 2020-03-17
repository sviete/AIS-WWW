---
title: "Usługi działające na bramce"
sidebar_label: Usługi bramki
---


## Usługi działające na bramce

Na bramce standardowo działają następujące usługi:

Nazwa      | Protokół | Porty | Komenda/URL                                               | Opis
----       | ----     | ------- | -------                                                | -----------
 Aplikacja | http     | **80** / `8180`  | [http://ais-dom.local](http://ais-dom.local) | serwer http
 FTP       | ftp      | **21** / `1024`  | [ftp://ais-dom.local](ftp://ais-dom.local)   | serwer ftp
 SSH       | ssh      | **22** / `8022`  | ```ssh ais-dom```         | serwer ssh
 MQTT      | mqtt     | **1883**  | ```mosquitto_sub -h ais-dom.local -t '#'```     | serwer mqtt

## Przydatne linki

Linki do usług działających na bramce oraz inne przydatne linki dostępne są z aplikacji, wystarczy w menu wybrać opcję **Przydatne linki**

![Przydatne Linki](/img/en/bramka/ais_gate_links.png)
