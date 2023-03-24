---
title: "Terminal web"
sidebar_label: Terminal web
---

## Wprowadzenie


Na bramce dostarczamy narzędzie wiersza poleceń w formie aplikacji webowej. Umożliwia to łatwy dostęp do terminala bramki bez potrzeby łączenia się z bramką po SSH.



![WEB console](/img/en/bramka/web_console.png)



-----------------------------------------------------
## Informacje techniczne

### Proces webssh

Procesami na bramce steruje [Menedżer procesów PM2](http://pm2.keymetrics.io/).
PM2 odpowiedzialny jest też za uruchomienie udostępniania terminala bramki w aplikacji webowej (uruchomienie procesu webssh) po starcie systemu, a następnie czuwa nad jego ciągłym działaniem.

Żeby zobaczyć status procesu webssh w konsoli wpisujemy:

```
pm2 show webssh
```

![webssh](/img/en/bramka/pm2_webssh.png)


### Kody programu

Funkcjonalność konsoli webowej którą dostarczamy na bramce realizowana jest przez [ttyd](https://github.com/tsl0922/ttyd).


### Dostęp tylko lokalny

Terminal umożliwia dostęp do konta **root** i pozwala na zrobinie wszystkiego w systmie. Dlatego dostęp do tej aplikacji jest możliwy tylko w sieci lokalnej:

![MQTT broker](/img/en/bramka/terminal_local_only.png)
