---
title: Oprogramowanie dla urządzeń automatyki domowej
sidebar_label: Wprowadzenie
---

## Oprogramowanie

<img src="/img/en/iot/iot_esp_8266-finger.jpg" width="400" align="left"/>

Decydując się na oprogramowanie do naszych urządzeń  opartych na ESP8266 wybraliśmy rozwiązanie umożliwiające:

- szybkie i stabilne działanie
- sterowanie lokalne w ramach wielu protokołów (Serial, HTTP, MQTT i KNX)
- możliwość konfiguracji i kontroli z przeglądarki oraz za pomocą aplikacji i systemów do automatyki domowej
- aktualizację zdalną (z bramki, przeglądarki czy aplikacji mobilnej)
- obsługę dołączania dodatkowych czujników do urządzeń
- obsługę harmonogramów i reguł na urządzeniu


Oprogramowanie to rozwijane jest od kilku lat w ramach projektu [Tasmota](https://github.com/arendst/Tasmota) i jest alternatywnym oprogramowaniem dla [ponad 150 urządzeń różnych producentów](https://blakadder.github.io/templates/eu.html) oraz dla [kilkudziesięciu czujników](https://github.com/arendst/Tasmota/wiki/supported-sensors) i [wyświetlaczy](https://github.com/arendst/Tasmota/wiki/displays), które można dodatkowo dołączyć do tych urządzeń.


## Motywacja

**Koncentrujemy się na pełnej lokalnej kontroli (bez chmury). Robimy to, by nasz system/asystent był szybki, niezawodny oraz w celu poszanowania prywatności użytkowników.**

Żeby osiągnąć pełną lokalną kontrolę musimy mieć urządzenia końcowe, które działają lokalnie, bez potrzeby połączenia z Internetem i bez wysyłania danych do zewnętrznych serwisów.

W naszym rozwiązaniu dane np. o tym, kiedy było włączone światło czy inne urządzenie w Twoim domu składowane są lokalnie na dysku Twojej bramki i nigdy nie opuszczają tej lokalizacji. Takie działanie odbiega od ogólnego trendu, który zaczyna panować na rynku*, i jest ono z naszej strony zamierzone.

\* "Dane to nowa ropa naftowa" to popularne wyrażenie w Internecie, które obrazuje między innymi to, że dane, a w szczególności dane osobowe, mają ogromną wartość. Wielkie korporacje zdają sobie z tego sprawę i podejmą skrajne starania, aby uzyskać dostęp do danych osobowych, ponieważ zawierają wgląd w twoje zachowanie. Statystyki wygenerowane z tych danych pozwalają im lepiej ukierunkować marketing, dając potężne narzędzie do przewidywania zachowań konsumentów.



## Źródła oprogramowania

Źródła oprogramowania do urządzeń końcowych, dostępne są pod tym adresem:
[AIS-Tasmota](https://github.com/sviete/AIS-Tasmota)

Aby pobrać skompilowaną wersję i zainstalować na urządzeniu przejdź do kolejnej strony [Aktualizacja oprogramowania urządzeń automatyki domowej](/docs/ais_iot_firmware_upgrade)
