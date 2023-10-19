---
title: "Bramka z systemem Linux"
sidebar_label: Bramka z systemem Linux
---


import BrowserWindow from '@site/src/components/BrowserWindow';

W systemie Linux zainstalowany jest Home Assistant Supervised. Ta metoda instalacji zapewnia pełną funkcjonalność Home Assistant w systemie operacyjnym Linux. Oznacza to, że używane są wszystkie komponenty i dodatki Home Assistant. Supervisor to nie tylko aplikacja, to kompletne narzędzie zarządzające całym systemem.

## Supervisor info

<BrowserWindow url="http://homeassistant.local:4357">
<center>
![Supervisor](/img/en/linux/supervisor.png)
</center>
</BrowserWindow>

## Połączenie z kontrolerem po ssh

Z systemem Linux możemy połączyć się po ssh, możemy to zrobić z konsoli maszego systemu, wpisując:

``` bash
ssh root@<IP-BRAMKI>
```

lub z przeglądarki internetowej, wpisując w  terminalu Home Assistant na bramce komendę:

``` bash
ssh root@172.17.0.1
```
<BrowserWindow url="http://homeassistant.local:8123">
<center>
![SSH](/img/en/linux/ssh_web.png)
</center>
</BrowserWindow>

w ten sposób nawiążemy połączenie SSH z kontenera Dockera (Home Assistant) do hosta Dockera (systemu Linux na bramce):

<BrowserWindow url="http://homeassistant.local:8123">
<center>
![SSH](/img/en/linux/ssh_web2.png)
</center>
</BrowserWindow>

## Dodatki

System ma preinstalowane następujące dodatki:

- AIS Cloudflared - zdalny dostęp do systemu Home Assistant
- EMQX - broker MQTT
- File editor - edytor plików
- Terminal & SSH - konsola do systemu

<BrowserWindow url="http://homeassistant.local:8123">
<center>
![SSH](/img/en/linux/ha_addons.png)
</center>
</BrowserWindow>

Pozwala to na łatwe rozpoczęcie pracy gotowymi do pracy przydatnymi narzędziami.

Inne dodatki można instalować ze sklepu z dodatkami:

<BrowserWindow url="http://homeassistant.local:8123">
<center>
![SSH](/img/en/linux/ha_addons_store.png)
</center>
</BrowserWindow>
