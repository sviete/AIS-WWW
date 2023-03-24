---
title: "Menedżer plików"
sidebar_label: Menedżer plików
---

## Wprowadzenie


Na bramce dostarczamy menedżer plików w formie aplikacji webowej. Menedżer plików zawiera edytor plików tekstowych oraz podgląd plików (tekst, audio, wideo). Aplikacja umożliwia pracę z plikami i katalogami w przeglądarce internetowej z dowolnego komputera, telefonu komórkowego lub tabletu.



![WEB cmd](/img/en/bramka/web_cmd.png)


:::caution Uwaga
Aplikacja **Menedżer plików** preinstalowana jest na bramkach sprzedawanych z wersją systemu **Leon** i późniejszą. Posiadacze bramek zakupionych z wcześniejszą wersją systemu mogą sami doinstalować aplikację Menedżer plików wg opisu umieszczonego na [Forum AI-Speaker](https://ai-speaker.discourse.group/t/ais-commander/2312). 
:::

-----------------------------------------------------
## Informacje techniczne

### Proces webcmd

Procesami na bramce steruje [Menedżer procesów PM2](http://pm2.keymetrics.io/).
PM2 odpowiedzialny jest też za uruchomienie udostępniania terminala bramki w aplikacji webowej (uruchomienie procesu webssh) po starcie systemu, a następnie czuwa nad jego ciągłym działaniem.

Żeby zobaczyć status procesu webcmd w konsoli wpisujemy:

```
pm2 show webcmd
```

![webssh](/img/en/bramka/web_cmd_pm2.png)


### Kody

Funkcjonalność menedżer plików realizowana jest przez aplikację [AIS-webcmd](https://github.com/sviete/AIS-webcmd).
Aplikację tą publikujemy też w formie pakietu w repozytorium npm 

![MQTT broker](/img/en/bramka/web_cmd_npm.png)


### Dostęp tylko lokalny

Konsola umożliwia dostęp do konta **root** i pozwala na zrobinie wszystkiego w systmie. Dlatego dostęp do niej jest tylko z sieci lokalnej:

![MQTT broker](/img/en/bramka/ttyd_local_only.png)
