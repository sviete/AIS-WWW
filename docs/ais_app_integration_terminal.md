---
title: "Konsola web"
sidebar_label: Konsola web
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


### Binarka

Funkcjonalność konsoli webowej którą dostarczamy na bramce realizowana jest przez [ttyd](https://github.com/tsl0922/ttyd).
Naszą kompilację ttyd udostępniamy w naszym repozytorium pakietów binarnych [bintray](https://bintray.com/sviete/ais/ttyd)

![MQTT broker](/img/en/bramka/ttyd_binary.png)

### Dostęp tylko lokalny

Konsola umożliwia dostęp do konta **root** i pozwala na zrobinie wszystkiego w systmie. Dlatego dostęp do niej jest tylko z sieci lokalnej:

![MQTT broker](/img/en/bramka/ttyd_local_only.png)
