---
title: "Dlaczego po aktualizacji interfejs aplikacji ma domyślną konfigurację"
sidebar_label: Dlaczego po aktualizacji interfejs aplikacji ma domyślną konfigurację
---

> Od wersji 0.98 nie nadpisujemy już interfejsu. Poniższy opis/wyjaśnienie dotyczy wcześniejszych wersji systemu. 

Aktualnie intensywnie rozwijamy system, konfiguracja domyślna będzie się jeszcze zmieniać i aktualizacje platformy będą ją nadpisywać. Jeżeli wykonasz własną konfigurację, to przed aktualizacją do nowej wersji zrób jej kopię, tak żebyś mógł ją przywrócić po aktualizacji.

Docelowo, do wersji 1.0 rozwiążemy ten problem, myślimy nad zastosowaniem jednego z poniższych rozwiązań:

1. od wersji 1.0 nie będziemy już zmieniać interfejsu automatycznie (ewentualnie poinformujemy o możliwości instalacji nowego interfejsu),
2. automatycznie połączymy zmiany, które dodał użytkownik, z naszymi zmianami,
3. stworzymy profile interfejsu- do wyboru.

Rozwiązanie numer 3. jest najbardziej obiecujące i docelowo właśnie to chcemy zastosować.
Dzięki takiemu rozwiązaniu będziemy mogli dodać domyślny interfejs i ten interfejs aktualizować automatycznie przy instalacji nie nadpisując interfejsu, który dodał użytkownik. Dodatkowo użytkownik będzie miał możliwość dodania kilku interfejsów dopasowanych do różnych urządzeń, na których używa Asystenta domowego.


## Jak zabezpieczyć swój zdefiniowany wygląd ekranów przed aktualizacją?

Proszę zapoznać się z opisem w dokumentacji [Kopia konfiguracji interfejsu użytkownika](/docs/ais_app_ui_config.html)

![Konfiguracja interfejsu użytkownika kopia](/img/en/frontend/lovelace-ui-conf-raw.png)

## Gdzie (w jakim katalogu) przechowywane są informacje na temat wyglądu interfejsu?

W ukrytym katalogu ~/AIS/**.storage**
w pliku lovelace

```bash
cd ~/AIS/.storage/
nano lovelace
```

![Edycja lovelace w nano](/img/en/frontend/edit_lovelace_in_nano.png)
