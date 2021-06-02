---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
author_title: Asystentka
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu Hugo
tags: ["ais dom", "home assistant", "zigbee2mqtt", "ais-tasmota"]
---

<div class="IntroAisBlogMenu" >
<div>

![AIS](/img/en/blog/202106/hugo.png)

</div>

<h2>Hugo</h2>

</div>

:::caution Uwaga - BETA.

 **To jest informacja o wydaniu wersji beta systemu AIS
 (a zatem prace nad ostateczną wersją i nad tym postem są jeszcze w toku).**

Wydanie na kanale stabilnym  ![AIS Tasmota](/img/en/blog/202105/construction_3.png) planowane jest na 30 czerwca 2021.

:::
<!--truncate-->


## ABC bezproblemowej aktualizacji

:::tip Kopia zapasowa.
### ![A](/img/en/blog/202009/alpha-a-circle.png) Kopia zapasowa.

UWAGA Przed aktualizacją zalecamy wykonać [kopię zapasową konfiguracji](/docs/ais_bramka_configuration_software#kopia-zapasowa-konfiguracji). W ten sposób sprawdzisz poprawność swojej konfiguracji przed rozpoczęciem aktualizacji i zwiększysz prawdopodobieństwo bezproblemowej aktualizacji.
:::

:::important Konsola i logi na bramce.
### ![B](/img/en/blog/202009/alpha-b-circle.png) Konsola i logi na bramce.

W razie problemów z aktualizacją, sprawdź procedurę [Aktualizacja ręczna](/docs/ais_bramka_update_manual) lub [Wykonanie pełnego resetu aplikacji](/docs/ais_bramka_reset_ais_step_by_step).
To może dotyczyć szczególnie osób, które instalują na bramce dodatkowe niestandardowe komponenty.
:::

:::caution Poczekaj cierpliwie.
### ![C](/img/en/blog/202009/alpha-c-circle.png) Cierpliwość. Aktualizacja i pierwsze uruchomienie po aktualizacji trwa dłużej - poczekaj cierpliwie.

 **Po aktualizacji pierwsze uruchomienie może trwać długo.**
 W tym czasie aktualizowane są biblioteki do integracji dodanych na bramce.
 **Poczekaj cierpliwie na zakończenie aktualizacji.
 Możesz sprawdzić status uruchamiania (dowiedzieć się co robi system) w konsoli komendą ``htop`` i/lub ``pm2 logs``**
:::



## ![](/img/en/blog/202106/hugo.png) Hugo



> Poczekajcie cierpliwie, zawsze można sprawdzić co robi bramka podczas aktualizacji w konsoli poleceniem ``htop``
lub sprawdzać na bieżąco logi poleceniem ``pm2 logs``



### ![](/img/en/blog/202102/honeybee.png) Zigbee2Mqtt


Aktualizacja Zigbee2Mqtt do najnowszej wersji 1.9.0 Ponad **1490** wspieranych urządzeń i interfejs w języku Polskim:


![z2m](/img/en/blog/202106/zigbee2mqtt_pl.png)

Wszystkie szczegóły tu [1.19.0](https://github.com/Koenkk/zigbee2mqtt/releases/tag/1.19.0)


### ![](/img/en/blog/202101/hass.png) Asystent domowy

Najnowsza wersja Asystenta domowego, czyli naszego pakietu ``ais-dom`` bazującego na najnowszym Home Assistant Core.
W tej wersji jest sporo poprawek i aktualizacji bibliotek. W tym **UWAGA** aktualizacja frontend (aplikacji webowej), aby korzystał z Lit 2.0 (komponenty webowe w aplikacji):

https://lit.dev/


Czyli oczywiście jak zwykle będzie mnóstwo świetnych ulepszeń, ale także kilka przełomowych zmian.

:::caution Lit 2.0. - Duża aktualizacja bibliotek w aplikacji webowej
###  Wszystkie nasze elementy w aplikacji webowej zostały przetestowane i działaję bez problemów z Lit 2.0

Jeżeli używasz niestandardowych kart czy innych elementów interfejsu to ich autor musi zapewnić zgodności karty z Lit 2.0... inaczej może być problem z wyświetlaniem tej karty w aplikacji webowej.
:::



Szczegółowy opis zmian w Home Assistant dostępny na blogu projektu Home Assistant: 


## ![](/img/en/blog/202105/placard.png) AIS DEV3

Wprowadziliśmy już na stałe do oferty nową bramkę **AIS DEV3** - jest to jak do tej pory najszybsza, najprostsza w konfiguracji i obsłudze bramka AIS.

AIS DEV3 to bramka, którą możesz sterować urządzeniami głosowo kilka minut po jej wyjęciu z pudełka.
Dodatkowo masz wbudowaną obsługę audio, zdalny dostęp i konfiguracje za pośrednictwem interfejsu użytkownika. Dzięki AIS DEV3 nie trzeba już nagrywać systemu na kartę SD, majstrować przy ustawieniach routera, wiedzieć co to dynamiczny DNS lub YAML. Oczywiście bez żadnych opłat miesięcznych i reklam w aplikacji.

![AIS dom DEV3](/img/en/bramka/ais_dev3_in_box.jpg)


Zobaczcie co mówi o bramce AIS DEV3 Hugo:
:::tip Hugo

"Bardzo dobrze działa mi się na AIS DEV3! To naprawdę świetny sprzęt o ogromnych możliwościach! Szczerze polecam."

:::

![Greta](/img/en/blog/202106/hugo.png)


Parametry nowej bramki są opisane tu: [Bramka AIoT](/docs/ais_bramka_index), dodaliśmy też nowy konfigurator, który ma ułatwić [Pierwsze uruchomienie](/docs/ais_bramka_first_run_the_gate).

-------

##### AI-Speaker 06/2021
