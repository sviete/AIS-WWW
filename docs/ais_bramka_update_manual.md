---
title: "Aktualizacja ręczna krok po kroku"
sidebar_label: Aktualizacja ręczna
---

System jest otwarty i obsługuje ponad 1000 komponentów. Wiele z tych komponentów jest automatycznie rozpoznawanych i automatycznie instaluje dodatkowe zależne pakiety.

Może się też zdarzyć tak, że w trakcie instalacji wystąpi problem z Internetem czy zasilaniem. W razie niepowodzenia procedury instalacji, automatycznie przywracamy poprzednią działającą wersję systemu, niemniej jednak w skrajnych przypadkach poniższa procedura ręczna “krok po kroku” może okazać się przydatna.

Aktualizacja “krok po kroku” nie jest trudna i sprowadza się oczywiście do tych samych 3 kroków, co w przypadku aktualizacji automatycznej:

## Aktualizacja środowiska Linux-a
w konsoli (na urządzeniu lub po ssh) wpisujemy komendę:

```bash
apt update
```

a następnie komendę:

```bash
apt upgrade
```


## Aktualizacja platformy automatyzacji
w konsoli (na urządzeniu lub po ssh) wpisujemy komendę:

```bash
pip install ais-dom -U
```

## Aktualizacja aplikacji

żeby pobrać najnowszą wersję aplikacji w konsoli (na urządzeniu lub po ssh) wpisujemy komendę:

```bash
curl -o "/data/data/pl.sviete.dom/files/usr/tmp/AisPanelApp.apk" -L https://powiedz.co/ota/android/AisPanelApp.apk
```

a następnie, żeby ją zainstalować, wykonujemy komendę

```bash
su -c "pm install -r /data/data/pl.sviete.dom/files/usr/tmp/AisPanelApp.apk"
```

## Czy nie można prościej?

Oczywiście można - wystarczy uruchomić wszystkie komendy jednym skryptem - patrz [Wymuszenie aktualizacji](ais_bramka_update_force) 
