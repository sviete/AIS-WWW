---
title: "Lokalny serwer z szyfrowaniem"
sidebar_label: HTTPS na bramce
---

## Uruchomienie usługi lokalnego serwera z szyfrowaniem

Najprostszym sposobem jest włączenie serwera caddy https://caddyserver.com/, który jest już zainstalowany na urządzeniu i posiada domyślną konfigurację https.
Podobnie można zrobić za pomocą serwera nginx czy apache, ale te serwery nie są domyślnie zainstalowane (trzeba je zainstalować za pomocą menadżera pakietów apt).

Poniżej opiszemy instalację krok po kroku na podstawie serwera cadd

1. Przejdź do [konsoli na urządzeniu](/docs/ais_bramka_remote_ssh)
2. Sprawdź konfigurację serwera caddy za pomocą polecenia
```bash
cat $PREFIX/bin/Caddyfile
```
odpowiedź w konsoli powinna być taka jak poniżej

``` bash
$ cat $PREFIX/bin/Caddyfile
:8123 {
    tls /data/data/com.termux/files/home/AIS/servercert.pem /data/data/com.termux/files/home/AIS/privekey.pem
    proxy / localhost:8180 {
        websocket
        transparent
    }
}
```
3. Uruchom serwer poleceniem

``` bash
caddy -conf $PREFIX/bin/Caddyfile
```
odpowiedź w konsoli powinna być taka jak poniżej

``` bash
$ caddy -conf $PREFIX/bin/Caddyfile
Activating privacy features... done.
...
```

4. Sprawdź działanie w przeglądarce wchodząc na adres https://ip-bramki-iot:8123

5. Jeśli chcesz, by serwer był automatycznie uruchamiany, dodaj go do menadżera usług PM2:
- zatrzymaj serwer w konsoli (uruchomiony w punkcie 3) komendą **Ctrl + c**
- by uruchomić serwer jako usługę, wpisz w konsoli polecenie

``` bash
pm2 start caddy --name https -- -conf "$PREFIX/bin/Caddyfile"
```

- zapisz ustawienia menadżera usług komendą **pm2 save** - usługa **https** będzie już domyślnie uruchamiana po restarcie bramki

``` bash
pm2 save
```

![](/img/en/iot/bramka_caddy.png)
