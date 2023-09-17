---
title: "Usługi działające na bramce"
sidebar_label: Lokalne Usługi bramki
---

## Usługi działające na bramce

Na bramce standardowo działają następujące usługi:

| Nazwa         | Protokół | Porty           | Komenda/URL                                            | Opis                             | Bramka                                                                                    |
| ------------- | -------- | --------------- | ------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------- |
| Aplikacja AIS | http     | **80** / `8180` | [http://ais-dom.local](http://ais-dom.local)           | serwer http                      |     |
| FTP           | ftp      | **21** / `1024` | [ftp://ais-dom.local](ftp://ais-dom.local)             | serwer ftp                       |     |
| SSH           | ssh      | **22** / `8022` | `ssh ais-dom.local`                                    | serwer ssh                       |     |
| MQTT          | mqtt     | **1883**        | `mosquitto_sub -h ais-dom.local -t '#'`                | serwer mqtt                      |     |
| Terminal      | http     | **8888**        | [http://ais-dom.local:8888](http://ais-dom.local:8888) | powłoka bash w aplikacji webowej |     |
| Zigbee        | http     | **8099**        | [http://ais-dom.local:8099](http://ais-dom.local:8099) | aplikajca zigbee2mqtt            |     |
| Rest API      | http     | **8122**        | [http://ais-dom.local:8122](http://ais-dom.local:8122) | api bramki                       |     |
| ADB           | tcp/ip   | **5555**        | `adb ais-dom.local`                                    | android debug bridge             |     |
| WebCmd           | http  | **8000**  |[http://ais-dom.local:8000](http://ais-dom.local:8000)                                   | menedżer plików            | 
| ScreenStream           | http  | **9966**  |[http://ais-dom.local:9966](http://ais-dom.local:9966)                                   | android device screen             |    |
| Zwave         | http     | **8091**        | [http://ais-dom.local:8091](http://ais-dom.local:8091) | aplikajca zwavejs2mqtt           |   |
| PostgreSQL    | tcp/ip   | **5432**        | `psql ha`                                              | relacyjna baza danych            |  |
| SIP Proxy     | udp      | **5060**        |                                                        | serwer udp sip                   |  |

## Przydatne linki

Linki do usług działających na bramce oraz inne przydatne linki dostępne są z aplikacji, wystarczy w menu wybrać opcję **Przydatne linki**

![Przydatne Linki](/img/en/bramka/ais_gate_links.png)
