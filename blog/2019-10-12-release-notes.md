---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.99 Automatyczne Aktualizacje, SUPLA, TAURON eLicznik
---

## Wersja systemu 0.99 z dnia 12 października 2019 roku,

## Automatyczne Aktualizacje

W ustawieniach bramki dodaliśmy możliwość włączenia automatycznych aktualizacji. Jeśli je włączysz, to codziennie sprawdzimy i automatycznie zainstalujemy dostępne aktualizacje składowych systemu Asystent domowy.

<div>
  <video width="100%" height="100%" playsInline autoPlay muted loop>
    <source src="/video/autoupdate.webm" type="video/webm"/>
  </video>
</div>

<!--truncate-->


> Cześć aktualizacji będzie wymagała restartu urządzenia, który też zostanie automatycznie wykonany.

Oczywiście, jeśli wolisz sam decydować, kiedy aktualizować system, to nie włączaj auto aktualizacji i tak jak dotychczas uruchamiaj aktualizację Asystenta domowego samodzielnie w dogodnym dla Ciebie czasie.
Aktualizacje dostarczają najnowsze funkcjonalności oraz poprawki zapewniające bezpieczeństwo i stabilność działania systemu dlatego zachęcamy do ich wykonywania.



## Integracja z SUPLA

Dodaliśmy pierwszą wersę (jeszcze nie kompletną - obecnie obsługiwane są tylko żaluzje i przełączniki) integracji z SUPLA OpenAPI.
Bazujemy na pakiecie [PySupla](https://github.com/mwegrzynek/pysupla) i na integracji z Home Assistant autorstwa Michała Węgrzynka [mwegrzynek](https://github.com/mwegrzynek).

[Opis konfiguracji](/docs/ais_app_supla)

<div>
  <video width="100%" height="100%" playsInline autoPlay muted loop>
    <source src="/video/supla.webm" type="video/webm" />
  </video>
</div>

Ta integracja skierowana jest do osób, które chcą sterować swoimi urządzeniami SUPLA także głosowo z Asystenta domowego. Nie jesteśmy w żaden sposób związani z projektem SUPLA ani z firmą Zamel - wiemy tylko, że robią fajne urządzenia :)



## Pozostałe istotne zmiany

- Dodaliśmy [małą poprawkę do projektu Hacs](https://github.com/custom-components/hacs/pull/636) dzięki której Hacs może być używany na większej ilości platform także w Asystencie domowym
- Najnowsze wersje ponad 600 pakietów Linux, dostępne w naszym repozytorium apt, w tym najnowsze wersje:
```bash
apt 1.4.9-16 arm [upgradable from: 1.4.9-15]
bash 5.0.11 arm [upgradable from: 5.0.9]
busybox 1.30.1-9 arm [upgradable from: 1.30.1-8]
ca-certificates 20190828 all [upgradable from: 20190515]
curl 7.66.0-1 arm [upgradable from: 7.65.3-6]
libcrypt 0.2-2 arm [upgradable from: 0.2-2]
libcurl 7.66.0-1 arm [upgradable from: 7.65.3-6]
libgcrypt 1.8.5 arm [upgradable from: 1.8.4-1]
libmosquitto 1.6.7 arm [upgradable from: 1.6.4]
libwebsockets 3.2.99.1 arm [upgradable from: 3.1.0]
mosquitto 1.6.7 arm [upgradable from: 1.6.4]
nodejs 12.11.1 arm [upgradable from: 12.4.0-2]
openssh 8.0p1-6 arm [upgradable from: 8.0p1-3]
openssl 1.1.1d-1 arm [upgradable from: 1.1.1c-2]
python 3.7.4-1 arm [upgradable from: 3.7.3-1]
rclone 1.49.5 arm [upgradable from: 1.48.0-1]
ttyd 1.5.2-1 arm [upgradable from: 1.5.2]
```
- Dodanie obsługi jezyka c/c++, pakiet [clang 8.0.1-4](https://clang.llvm.org/)
- Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/09/18/release-99/" target="_blank">0.99</a> z jak zwykle mnóstwem nowości i ulepszeń.


----
Zapraszamy do aktualizowania.

2019.10 Zespół Asystent domowy.
