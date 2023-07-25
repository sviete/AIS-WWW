---
title: "Dostęp do bramki po FTP"
sidebar_label: FTP
---

Asystent domowy ma domyślnie uruchomiony serwer FTP, dzięki czemu możesz zdalnie zarządzać plikami na bramce.

Usługa FTP działa na standardowym porcie **21** i na porcie **1024**

[ftp://ais-dom.local](ftp://ais-dom.local)


## logowanie z systemu Windows

System Windows "fabrycznie" nie wspiera mDNS, więc żeby połaczyć się z bramką będziemy musieli znać jej adres IP [sprawdź adres IP bramki](/docs/ais_bramka_remote_index#sprawdzenie-adresu-ip-w-aplikacji)


Zalecamy użycie pełnowartościowego klienta FTP, ponieważ klient FTP wbudowany w menedżer plików Windowsa ma ograniczone możliwości.
Przetestowany przez nas darmowy klient, którego możemy polecić to [WinScp](https://winscp.net/eng/download.php)

Po zainstalowaniu WinScp tworzymy nową sesję i ustawiamy:
- Protokół pliku: FTP
- Nazwa hosta: IP bramki
- Numer portu: 21 lub 1024
- Logowanie anonimowe: zaznaczone

Ustawienia można zapisać lub od razu połączyć się przyciskiem Logowanie:

![Uruchomienie klienta ftp](/img/en/bramka/ftp_windows_1.png)

W celu przejścia do edycji konfiguracji bramki, po połączeniu się z bramką za pomocą WinScp, w prawym oknie pojawi się nowa sesja połączenia z bramką - domyślnie katalog: /storage/emulated/0
Klikamy dwukrotnie obok nazwy ścieżki aby zmienić katalog i wpisujemy:
/data/data/com.termux/files/home/AIS

![Uruchomienie klienta ftp](/img/en/bramka/ftp_windows_2.png)

Teraz można edytować konfigurację w domyślnym edytorze:

![Uruchomienie klienta ftp](/img/en/bramka/ftp_windows_3.png)


## logowanie z systemu Linux i z systemów firmy Apple

bramka powinna się automatycznie pojawić w systemowym menedżerze plików w network:///  


![Uruchomienie klienta ftp](/img/en/bramka/ftp_connection_1.png)

Oczywiście możesz też użyć dowolnego klienta FTP aby połączyć się z serwerem FTP bramki anonimowo po jej adresie IP na porcie **1024**

![Uruchomienie klienta ftp](/img/en/bramka/ftp_connection_2.png)


## przeglądanie plików

w lokalizacji [ftp://ais-dom.local:1024/sdcard/dom](ftp://ais-dom.local:1024/sdcard/dom) możesz dodawać audio, które następnie będzie widoczne do odtwarzania w systemie Asystent domowy w lokalizacji "Dysk wewnętrzny"

![Uruchomienie klienta ftp](/img/en/bramka/ftp_connection_3.png)


## konfiguracja systemu Asystent domowy
w lokalizacji [ftp://ais-dom.local:1024/data/data/com.termux/files/home/AIS](ftp://ais-dom.local:1024/data/data/pcom.termux/files/home/AIS) znajduje się konfiguracja systemu Asystent domowy

![Uruchomienie klienta ftp](/img/en/bramka/ftp_connection_4.png)
