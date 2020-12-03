---
title: "Serwer FTP"
sidebar_label: Serwer FTP
---

## Wprowadzenie


Na bramce dostarczamy serwer FTP umożliwiający łatwą wymianę  plików pomiędzy bramką a innymi komputerami w sieci lokalnej, za pomocą protokołu komunikacyjnego FTP.


![FTP server](/img/en/bramka/ftp_server.png)


-----------------------------------------------------
## Informacje techniczne

### Proces ftp

Procesami na bramce steruje [Menedżer procesów PM2](http://pm2.keymetrics.io/).
PM2 odpowiedzialny jest też za uruchomienie serwera ftp po starcie systemu, a następnie czuwa nad jego ciągłym działaniem.

Żeby zobaczyć status procesu ftp w konsoli wpisujemy:

```
pm2 show ftp
```

![webssh](/img/en/bramka/pm2_ftp.png)


### Binarka

Serwer FTP oparty jest na [busybox](https://busybox.net/)

Naszą kompilację busybox udostępniamy w naszym repozytorium pakietów binarnych [bintray](https://bintray.com/sviete/ais/ttyd)

![MQTT broker](/img/en/bramka/busybox_binary.png)

### Dostęp tylko lokalny

Serwer FTP obsługuje tylko anonimowe logowanie - nie ma żadnego uwierzytelniania. Dlatego dostęp do bramki po FTP możliwy jest tylko z sieci lokalnej.
